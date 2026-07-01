# RUNBOOK — Manuale Operativo dell'Infrastruttura

**Versione:** 0.1  
**Data:** 1 luglio 2026  
**Destinatario:** Nuovo CTO o chiunque prenda in mano il progetto  
**Tempo di lettura stimato:** 45 minuti

---

> **Come usare questo documento**  
> Leggilo dall'inizio alla fine una volta. Poi torna alle sezioni specifiche quando ti serve. Ogni sezione è autonoma — puoi aprire direttamente "Disaster Recovery" senza aver letto tutto il resto.

---

## 1. Architettura generale

L'infrastruttura è composta da quattro livelli che lavorano insieme.

```
[Utente]
    ↓
[FASTER / GoHighLevel]   ← blog, CRM, email
    ↕
[Vercel — API Proxy]     ← intermediario tecnico (proxy)
    ↕
[GitHub]                 ← codice sorgente + contenuti + governance
    +
[catbox.moe]             ← hosting immagini (temporaneo, vedi §8)
```

**Perché questo schema?**

GoHighLevel (il nostro CRM e blog) non accetta richieste esterne da IP non autorizzati. Vercel fa da intermediario sicuro: riceve le richieste dal browser o dagli script, le valida, e le passa a GoHighLevel con le credenziali corrette. Questo protegge le chiavi API e aggira i blocchi CORS di GoHighLevel.

GitHub contiene tutto il codice. Ogni modifica al codice passa per GitHub e viene deployata automaticamente su Vercel.

---

## 2. Servizi utilizzati

| Servizio | Ruolo | Account |
|---|---|---|
| **FASTER (GoHighLevel)** | Blog, CRM, email, contatti | Account white-label |
| **Vercel** | Hosting API proxy, deployment automatico | Account personale |
| **GitHub** | Repository codice + Knowledge Core | `ernestocarlo25/entrate-extra-blog-proxy` |
| **Google AI Studio** | Generazione immagini blog (Imagen 4) | Account Google |
| **catbox.moe** | Hosting immagini blog | Nessun account — upload anonimo |

### Repository GitHub

```
entrate-extra-blog-proxy/
├── api/                      ← funzioni Vercel (endpoints)
│   ├── subscribe.js          ← iscrizione newsletter + welcome email
│   ├── publish.js            ← creazione e aggiornamento articoli blog
│   ├── newsletter.js         ← invio newsletter a lista iscritti
│   ├── post.js               ← lettura singolo post
│   └── posts.js              ← lista post
├── data/
│   ├── newsletter-sources.json   ← archivio fonti per ogni puntata
│   └── posts-content.json        ← contenuti articoli
└── knowledge-core/           ← governance aziendale (questo documento)
```

### Endpoints attivi su Vercel

| Endpoint | Funzione | Protetto da |
|---|---|---|
| `POST /api/subscribe` | Iscrive un contatto + invia welcome email | — |
| `POST /api/publish` | Pubblica o aggiorna un articolo sul blog | `PUBLISH_SECRET` header |
| `POST /api/newsletter` | Invia newsletter alla lista | `PUBLISH_SECRET` header |
| `GET /api/posts` | Legge la lista degli articoli | — |
| `GET /api/post` | Legge un singolo articolo | — |

---

## 3. Variabili d'ambiente

Tutte le chiavi API sono memorizzate come variabili d'ambiente su Vercel. **Non sono mai nel codice.**

Per visualizzarle o modificarle: Vercel Dashboard → progetto `entrate-extra-blog-proxy` → Settings → Environment Variables.

| Variabile | Uso |
|---|---|
| `GHL_API_KEY` | Chiave API GoHighLevel per tutte le chiamate al CRM |
| `GHL_LOCATION_ID` | Identificatore della "location" GHL (equivalente all'account business) |
| `PUBLISH_SECRET` | Password per proteggere gli endpoint di pubblicazione |
| `GOOGLE_AI_KEY` | Chiave Google AI Studio per generare immagini con Imagen 4 |
| `GITHUB_TOKEN` | Token GitHub per leggere/scrivere file nel repository via API |

---

## 4. Flussi operativi principali

### Un nuovo iscritto

1. L'utente compila il form sul sito → richiesta `POST /api/subscribe`
2. Vercel crea il contatto in GoHighLevel con tag `newsletter-osservatorio`
3. Vercel invia la welcome email tramite GoHighLevel Conversations API
4. Il contatto è ora nella lista e riceverà le prossime puntate

### Pubblicazione di un articolo

1. L'articolo viene scritto e approvato dal CEO
2. Lo script locale (o il prompt all'AI) chiama `POST /api/publish` con il contenuto
3. Vercel autentica la richiesta (verifica `PUBLISH_SECRET`)
4. Vercel crea o aggiorna il post su GoHighLevel Blog
5. L'articolo è live su entrateextra.com

### Invio newsletter

1. La newsletter viene scritta, le fonti verificate e archiviate in `newsletter-sources.json`
2. Approvazione CEO
3. Prima: invio di test a email personale (flag `testEmail`)
4. Dopo approvazione: invio reale — Vercel recupera tutti i contatti con tag `newsletter-osservatorio` e invia 1-to-1 via GoHighLevel Conversations API
5. Le fonti vengono salvate in `data/newsletter-sources.json` su GitHub

---

## 5. Sicurezza

### Principi in vigore

- Le chiavi API non sono mai nel codice sorgente — sempre in variabili d'ambiente Vercel
- L'endpoint di pubblicazione è protetto da `PUBLISH_SECRET` (header obbligatorio)
- Le chiavi GitHub hanno permessi minimi necessari
- Nessun dato sensibile viene loggato nei file di log Vercel

### Cosa non fare mai

- Non inserire API key, password o token in file `.js`, `.json`, `.md` o in commit GitHub
- Non condividere il `PUBLISH_SECRET` in email o chat non cifrate
- Non usare la chiave GHL vecchia: `pit-67111913-4421-471e-b87d-a9fc6b16e240` — **REVOCATA**

---

## 6. Gestione delle chiavi API

### Dove si trovano

| Chiave | Dove si trova | Come si rinnova |
|---|---|---|
| GHL API Key | Vercel env vars + FASTER Dashboard | FASTER → Settings → API Keys |
| PUBLISH_SECRET | Vercel env vars | Generare una nuova stringa, aggiornare Vercel |
| Google AI Key | Vercel env vars | Google AI Studio → API Keys |
| GitHub Token | Vercel env vars | GitHub → Settings → Developer Settings → PAT |

### Procedura di rotazione (da eseguire se una chiave è compromessa)

1. Generare la nuova chiave sul servizio di origine
2. Aggiornare la variabile d'ambiente su Vercel (Settings → Environment Variables)
3. Cliccare "Redeploy" su Vercel per attivare la nuova chiave
4. Verificare che il sistema funzioni con un test
5. Revocare la vecchia chiave sul servizio di origine
6. Aggiornare la data di ultima rotazione in questo documento

### Frequenza consigliata

- GHL API Key: ogni 6 mesi o subito se condivisa accidentalmente
- PUBLISH_SECRET: ogni 12 mesi
- Google AI Key: ogni 6 mesi (**nota: la chiave attuale non è ancora stata ruotata dalla fondazione**)
- GitHub Token: ogni 12 mesi

---

## 7. Backup

### Cosa è automaticamente al sicuro

| Asset | Dove | Protezione |
|---|---|---|
| Codice sorgente | GitHub | Ogni commit è permanente e versionato |
| Fonti newsletter | `data/newsletter-sources.json` su GitHub | Versionato con git |
| Knowledge Core | GitHub | Versionato con git |

### Cosa NON ha backup automatico

| Asset | Rischio | Azione consigliata |
|---|---|---|
| **Immagini blog** | Catbox.moe non garantisce permanenza | Scaricare copia locale dopo ogni upload |
| **Contenuti GHL** | GoHighLevel non ha export automatico | Export manuale periodico |
| **Contatti CRM** | GoHighLevel non ha backup esterno attivo | Export CSV mensile da FASTER |
| **Email inviate** | Nessun archivio esterno | Le fonti sono in newsletter-sources.json |

### Procedura backup manuale mensile

1. **Contatti**: FASTER → Contacts → Export All → CSV → salvare in Google Drive
2. **Articoli blog**: FASTER → Blog → Export (se disponibile) oppure copiare i contenuti da `data/posts-content.json`
3. **Immagini**: verificare che tutte le URL catbox.moe nei post siano ancora raggiungibili

---

## 8. Rischi noti dell'infrastruttura attuale

| Rischio | Gravità | Probabilità | Piano di mitigazione |
|---|---|---|---|
| **catbox.moe** cessa il servizio | Alta — immagini blog tutte rotte | Media | Migrare a Cloudflare R2 (Roadmap Fase 1) |
| **GHL** non raggiungibile | Alta — blog e email fermi | Bassa | Nessuna alternativa immediata; monitorare uptime |
| **Vercel** down | Media — endpoint fermi, sito blog ancora up | Molto bassa | Il blog GHL rimane accessibile |
| Chiave API compromessa | Alta — accesso non autorizzato al CRM | Bassa | Rotazione immediata (vedi §6) |
| Account GitHub bloccato | Media — deployment bloccato | Molto bassa | Codice già su Vercel, sito rimane up |

---

## 9. Business Continuity

### Scenario: GoHighLevel non è raggiungibile

- **Blog**: rimane accessibile agli utenti (il sito è servito da GHL ma il contenuto è già pubblicato)
- **Nuove iscrizioni**: l'endpoint `/api/subscribe` fallisce → gli utenti non ricevono la welcome email
- **Newsletter**: invio bloccato
- **Azione**: attendere il ripristino GHL. Comunicare il ritardo se l'invio newsletter era programmato.

### Scenario: Vercel non è raggiungibile

- **Blog**: rimane accessibile (non dipende da Vercel per la visualizzazione)
- **Nuove iscrizioni**: il form di iscrizione non funziona
- **Pubblicazione articoli**: bloccata
- **Azione**: attendere il ripristino Vercel (SLA 99.9%). Vercel ha rarissimi downtime.

### Scenario: GitHub non raggiungibile

- **Tutto il sito**: rimane up — GitHub non serve il sito
- **Deployment nuove versioni**: bloccato
- **Azione**: nessuna urgenza. Attendere il ripristino.

### Priorità di intervento

1. GHL down → alta priorità (blocca email e nuove iscrizioni)
2. Vercel down → media priorità (blocca pubblicazione e iscrizioni)
3. Catbox.moe immagini rotte → media priorità (blog degrade visivo)
4. GitHub down → bassa priorità (nessun impatto sull'utente finale)

---

## 10. Disaster Recovery

### Come ripristinare l'intero sistema da zero

Se tutto fosse perso e si dovesse ripartire:

**Tempo stimato di ripristino: 4-8 ore**

**Step 1 — Recuperare il codice** (5 minuti)  
Il repository GitHub `ernestocarlo25/entrate-extra-blog-proxy` contiene tutto. Clonare il repository su un nuovo ambiente.

**Step 2 — Riconfigurare Vercel** (30 minuti)  
1. Creare un nuovo progetto Vercel
2. Collegare il repository GitHub
3. Inserire tutte le variabili d'ambiente (vedi §3)
4. Il deployment parte automaticamente

**Step 3 — Verificare GoHighLevel** (30 minuti)  
Verificare che l'account FASTER sia attivo e che l'API Key sia valida. Testare l'endpoint `/api/subscribe` con una email di test.

**Step 4 — Verificare le immagini** (variabile)  
Controllare che le immagini degli articoli siano ancora raggiungibili. Se catbox.moe non risponde, caricare le immagini su un nuovo host e aggiornare gli articoli.

**Step 5 — Test completo** (30 minuti)  
- Iscriversi come nuovo utente → verificare welcome email
- Pubblicare un articolo di test → verificare che appaia sul blog
- Inviare newsletter di test → verificare ricezione

---

## 11. Manutenzione ordinaria

### Ogni settimana

- [ ] Verificare che gli ultimi invii newsletter siano arrivati correttamente
- [ ] Controllare che il form di iscrizione sul sito funzioni
- [ ] Verificare che le immagini degli ultimi articoli pubblicati siano visibili

### Ogni mese

- [ ] Export CSV dei contatti da FASTER → Google Drive
- [ ] Verificare che le variabili d'ambiente su Vercel siano tutte presenti
- [ ] Controllare i log Vercel per errori ricorrenti (Vercel Dashboard → Functions → Logs)
- [ ] Aggiornare la Dashboard nel Knowledge Core con le metriche del mese

### Ogni 6 mesi

- [ ] Ruotare GHL API Key
- [ ] Ruotare Google AI Key
- [ ] Verificare che il GitHub Token non sia scaduto
- [ ] Revisione dei rischi noti (sezione §8) — nuovi rischi emersi?

### Ogni 12 mesi

- [ ] Ruotare PUBLISH_SECRET
- [ ] Ruotare GitHub Token
- [ ] Revisione completa di questo RUNBOOK

---

## 12. Checklist per un nuovo CTO

Se sei nuovo su questo progetto, completa questi passi in ordine prima di toccare qualsiasi cosa.

**Accessi** (prima di tutto)
- [ ] Accesso a GitHub → repository `entrate-extra-blog-proxy`
- [ ] Accesso a Vercel → progetto `entrate-extra-blog-proxy`
- [ ] Accesso a FASTER/GoHighLevel
- [ ] Accesso a Google AI Studio (per generare immagini)

**Comprensione del sistema** (poi)
- [ ] Leggere questo RUNBOOK dall'inizio alla fine
- [ ] Leggere `knowledge-core/constitution/` — vision, mission, principles, governance
- [ ] Leggere `knowledge-core/operating-blueprint/README.md`

**Verifica che tutto funzioni** (prima di fare qualsiasi modifica)
- [ ] Iscriversi come nuovo utente → verificare welcome email in arrivo
- [ ] Chiamare `/api/posts` → verificare risposta corretta
- [ ] Verificare che le variabili d'ambiente su Vercel siano tutte presenti e aggiornate

**Mai fare** (senza approvazione CEO)
- [ ] Modificare variabili d'ambiente in produzione
- [ ] Inviare newsletter a lista reale
- [ ] Modificare o eliminare contatti nel CRM
- [ ] Fare deploy di codice non testato

---

## 13. Contatti e riferimenti

| Ruolo | Chi | Come contattare |
|---|---|---|
| CEO | Ernesto Carlo | ernestocarlo25@gmail.com |
| Repository GitHub | — | github.com/ernestocarlo25/entrate-extra-blog-proxy |
| Dashboard Vercel | — | vercel.com/dashboard |
| CRM (FASTER) | — | Account GoHighLevel white-label |

---

*RUNBOOK v0.1 — Entrate Extra Operating System*  
*Aggiornamento previsto: ogni 6 mesi o dopo modifiche significative all'architettura*
