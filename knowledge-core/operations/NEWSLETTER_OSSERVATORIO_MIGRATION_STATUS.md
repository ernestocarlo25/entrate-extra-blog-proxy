# Newsletter L'Osservatorio — Stato Migrazione

> **Documento operativo di riferimento.**
> Creato: 2026-07-07
> Ultima verifica: 2026-07-06 (test post-fix confermato)
> Stato: MIGRAZIONE COMPLETATA ✅

---

## 1. Stato finale

| Voce | Stato |
|------|-------|
| Migrazione | ✅ Completata |
| Email ricevuta in Gmail | ✅ Confermata (test 2026-07-06, 23:32 CEST) |
| Workflow v4 attivo | ✅ `published` |
| Codice Sprint 3 online | ✅ Deployato su Vercel |
| Template parser error | ✅ Risolto (`| default:` rimosso) |
| Subject Liquid error | ✅ Risolto (subject senza variabili dinamiche) |

### Cronologia essenziale

- **Sprint 3 completato**: codice `api/subscribe.js` riscritto e deployato
- **Root cause identificata**: GHL usa Handlebars (non Liquid) — `{{var | default: "val"}}` causava `BadRequestException: Parse error on line 16`
- **Fix template**: `Ciao {{contact.first_name | default: "amico"}},` → `Ciao,`
- **Fix subject**: `Sei dentro, {{contact.first_name | default: "amico"}}. Ecco da dove iniziare.` → `Sei dentro. Ecco da dove iniziare.`
- **Test finale**: workflow fired → azione Email → stato `Terminato` → `errors: []` → email ricevuta

---

## 2. Sistema live da proteggere

> **REGOLA PRINCIPALE: NON manomettere ciò che funziona.**

### Workflow live

```
Nome:     Onboarding Newsletter — L'Osservatorio v4
ID:       0ee1f472-b004-41ec-a7cd-faaa2cabfa56
Status:   published
Versione: v4 (interna GHL)
Trigger:  tag "newsletter-osservatorio" aggiunto
allowMultiple: true
```

### Template live

```
Nome:        Welcome — L'Osservatorio
Document ID: 6a4ac5e6a60cffc68876699a
Firebase:    gs://highlevel-backend.appspot.com/
             location/fZRQqIrzkv3Tn6zpZJLl/
             emails/6a4ac5e6a60cffc68876699a/index.html

Tipo: campaign template (linked al workflow action, NON builder standalone)
```

### Contenuto corretto del template

```
Subject:  Sei dentro. Ecco da dove iniziare.
Saluto:   Ciao,
From:     info@entrateextra.com
FromName: Entrate Extra — Business Community
Dominio:  mg.entrateextra.com
```

### Tag trigger

```
Tag: newsletter-osservatorio
```

Il workflow si attiva quando questo tag viene aggiunto a un contatto per la prima volta (o successivamente, poiché `allowMultiple: true`).

---

## 3. Codice live

```
Repository: github.com/ernestocarlo25/entrate-extra-blog-proxy
Commit:     374826cf2519efc30fec0031a0666ce9484f09e7
Hosting:    Vercel
Endpoint:   POST https://entrate-extra-blog-proxy.vercel.app/api/subscribe
```

### Cosa fa `api/subscribe.js` oggi

- Riceve `{ email, firstName, lastName }` dal form blog
- Cerca se il contatto esiste già in GHL
  - Se **non esiste**: crea il contatto con tag `newsletter-osservatorio` → workflow si attiva
  - Se **esiste con tag**: risponde `CONTACT_ALREADY_EXISTS` — nessuna azione
  - Se **esiste senza tag**: (comportamento da verificare) — non modifica contatti reali senza tag esplicito
- **Non invia email** direttamente (delega al workflow GHL)
- **Non invia SMS**
- **Non tocca contatti esistenti** senza consenso esplicito

---

## 4. Regola privacy/consenso

- Il tag `newsletter-osservatorio` rappresenta **iscrizione esplicita** tramite form dedicato
- I contatti già esistenti in GHL senza questo tag **non devono essere aggiornati automaticamente**
- **Nessun mischiamento liste**: la newsletter Osservatorio è separata da altre liste (Oro Reale, Lifestyle Coaching, ecc.)
- Prima di qualsiasi import o modifica massiva di contatti: approvazione CEO L3

---

## 5. Workflow orfani/test

Tutti i workflow seguenti sono in stato `draft` (inattivi). **Non eliminare senza approvazione.**

| ID | Nome | Status | Versione | Note |
|----|------|--------|----------|------|
| `53089ba6-e8fa-4140-92cf-13d586bddf9f` | Onboarding Newsletter — L'Osservatorio | draft | v3 | Versione 1 legacy |
| `ab158250-23f2-4330-92b5-aa74c30ef3fa` | Onboarding Newsletter — L'Osservatorio v2 | draft | v2 | Versione 2 |
| `19a1f24e-807c-44ad-b1e7-f7b93cb60189` | Onboarding Newsletter — L'Osservatorio v2 | draft | v2 | Duplicato del v2 |
| `6b298168-024b-4a78-8387-9e81f0a2bc72` | Onboarding Newsletter — L'Osservatorio v3 | draft | v2 | Versione 3 |
| `7bf2b6c1-f413-466b-8a1e-20aba16ef4fd` | New Workflow : 1783275429960 | draft | v1 | Orfano Sprint |
| `0b50ad54-b0ee-44b2-9efd-3e65d69ff11c` | New Workflow : 1783284205904 | draft | v2 | Orfano Sprint |
| `bad788eb-8c3b-4634-a924-df0f015d0a02` | New Workflow : 1783285019758 | draft | v1 | Orfano Sprint |

---

## 6. Contatti test

Creati durante lo Sprint 2026-07-06. **Non eliminare** — servono come storico di test.

| Email | ID GHL | firstName | Data | Tag | Ruolo |
|-------|--------|-----------|------|-----|-------|
| `ernestocarlo25+osservatorio-test-20260706@gmail.com` | `gCOeZ2jDd1Wm8P4gA6lJ` | ernesto | 2026-07-06 | newsletter-osservatorio | 1° test (pre-fix, email con parser error) |
| `ernestocarlo25+osservatorio-test-fix-20260706@gmail.com` | `07G15iqqMqKxcxPCJTf5` | amico | 2026-07-06 | newsletter-osservatorio | 2° test (post-fix, email ricevuta ✅) |

> Nota: `firstName="amico"` sul 2° contatto perché durante la sessione pre-fix la subscribe API passava il valore letterale del default Liquid come stringa.

---

## 7. Cosa NON toccare

| Elemento | Motivo |
|----------|--------|
| Workflow v4 (`0ee1f472...`) | È il sistema live attivo |
| Template Firebase `6a4ac5e6a60cffc68876699a` | Template live corretto |
| "Email Drip Sequence" (published) | Workflow attivo non Osservatorio |
| "Oro Reale Lead Nurturing" (published) | Workflow attivo non Osservatorio |
| "Recipe - Webinar Registration..." (published) | Workflow attivo non Osservatorio |
| Template "ORO REALE - Template" (`6a1f1785...`) | In uso dal workflow Oro Reale |
| Template "Entrate Extra - Business Community" (`6a491900...`) | Verificare prima — potrebbe essere in uso |
| Codice `api/subscribe.js` deployato | Solo nuova revisione CTO autorizza modifica |
| Contatti test (i 2 sopra) | Storico test, non eliminare |
| DNS `mg.entrateextra.com` | Configurazione email live verificata |

---

## 8. Pulizia futura

### Candidati sicuri (draft, mai pubblicati, nessun rischio operativo)

| Elemento | Tipo | Motivo |
|----------|------|--------|
| "New Workflow : 1783275429960" (`7bf2b6c1...`) | Workflow draft | Orfano senza nome, Sprint |
| "New Workflow : 1783284205904" (`0b50ad54...`) | Workflow draft | Orfano senza nome, Sprint |
| "New Workflow : 1783285019758" (`bad788eb...`) | Workflow draft | Orfano senza nome, Sprint |
| "Lifestyle Coaching 5" duplicato (`6a173970...`) | Template builder | Stesso nome dell'originale |
| "ORO REALE - Template-copy" (`6a1f1a57...`) | Template builder | Copia esplicita |

### Da verificare prima di eliminare

| Elemento | Cosa verificare |
|----------|-----------------|
| Workflow Osservatorio draft v1/v2/v3 (4 draft) | Verificare che non condividano asset con il live v4 |
| Template "Entrate Extra - Business Community" (`6a491900...`) | Capire da quale workflow o campagna viene usato |
| "Lifestyle Coaching 5" originale (`6a1732f4...`) | Verificare se in uso attivo |

### Da non toccare in nessun caso

- Tutto ciò che è `published` in GHL
- Tutto ciò che è referenziato dal workflow live v4
- Il template Firebase live
- Il codice deployato

---

## 9. Regole operative future

```
1. Documentare lo stato attuale
2. Proporre la modifica (con motivazione)
3. Ottenere approvazione (L1 / L2 CTO / L3 CEO secondo impatto)
4. Solo dopo: eseguire
```

### Livelli di autorizzazione

| Livello | Chi | Quando |
|---------|-----|--------|
| **L1** | Autonomo | Lettura, inventario, documentazione |
| **L2** | Valutazione CTO | Modifiche non-live, pulizia draft, test |
| **L3** | Approvazione CEO | Qualsiasi modifica al sistema live, deploy, workflow attivi |

### Mai fare senza approvazione L3

- Modificare il workflow v4
- Modificare il template live
- Fare deploy del codice
- Inviare email a contatti reali
- Modificare DNS
- Import/export massivo di contatti

---

*Documento generato da Claude Code — Solo lettura, nessun sistema è stato modificato durante la creazione di questo file.*
