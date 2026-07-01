# Business Units Blueprint v0.2

**Versione:** 0.2  
**Data:** 1 luglio 2026  
**Scopo:** Modello standard per la creazione di una nuova Business Unit  
**Come si usa:** Clona questo documento, sostituisci `[NOME_BU]` con il nome del brand, completa ogni sezione.

**Modifiche dalla v0.1:**
- Introdotti tre stati: ESISTENTE / DA DOCUMENTARE / DA DEFINIRE
- Brand separato dalla sequenza logica — è un patrimonio, non uno step
- Nuova sequenza logica a 9 step
- Aggiunto Customer Journey come step obbligatorio
- `audience.md` rinominato `avatar.md`

---

> **Principio guida**  
> Una Business Unit non si inventa ogni volta. Si clona il Blueprint, si adatta al contesto, si lancia. Tutto ciò che non è nel Blueprint non esiste ancora — va costruito e documentato prima di considerare la BU operativa.

---

## I tre stati di ogni elemento

Prima di compilare qualsiasi documento, assegna a ogni elemento uno di questi tre stati:

| Stato | Significato |
|---|---|
| **ESISTENTE** | Il contenuto esiste ed è già documentato nel Knowledge Core |
| **DA DOCUMENTARE** | Il contenuto esiste (nel brand, nella testa del CEO, in materiali offline) ma non è ancora scritto qui |
| **DA DEFINIRE** | Il contenuto non esiste ancora — va creato e deciso |

**Regola:** non confondere DA DOCUMENTARE con DA DEFINIRE. Un brand già operativo con logo, colori e tono di voce è DA DOCUMENTARE, non DA DEFINIRE. Un errore di classificazione genera lavoro inutile.

---

## 1. Struttura

Ogni BU è una cartella autonoma nel repository GitHub. La struttura è sempre la stessa.

```
business-units/
└── [nome-bu]/
    ├── README.md                  ← panoramica, fase attuale, checklist apertura
    │
    ├── brand.md                   ← PATRIMONIO (censimento, non step della roadmap)
    │
    ├── vision.md                  ← Step 1
    ├── proposta-di-valore.md      ← Step 2
    ├── avatar.md                  ← Step 3
    ├── revenue-model.md           ← Step 4
    ├── customer-journey.md        ← Step 5
    ├── funnel.md                  ← Step 6
    ├── piano-editoriale.md        ← Step 7
    ├── kpi.md                     ← Step 8
    ├── automazioni.md             ← Step 9
    │
    └── agenti-ai.md               ← Supporto operativo (non step sequenziale)
```

**Regola:** nessuna BU viene considerata "aperta" finché tutti questi file non esistono, anche solo con contenuto minimo e stato dichiarato.

---

## 2. Il Brand come Patrimonio

Il brand non è uno step da costruire nella sequenza logica. È un **patrimonio preesistente** — ha un nome, una storia, un'identità visiva — e va **censito e documentato**, non inventato.

`brand.md` viene compilato per primo, in modo indipendente dagli altri step. Contiene:

| Elemento | Cosa documenta |
|---|---|
| Nome | Il nome ufficiale del brand |
| Storia | Da quando esiste, come è nato |
| Colori | Palette HEX + RGB |
| Font | Tipografia principale e secondaria |
| Logo | Dove si trovano i file (SVG, PNG) |
| Tono di voce | 3 aggettivi, esempi di come parla, cosa non dice mai |
| Differenziazione | Come si distingue dalle altre BU dell'ecosistema |

**Stato da assegnare a ogni elemento:** ESISTENTE / DA DOCUMENTARE / DA DEFINIRE

---

## 3. Sequenza logica — i 9 Step

La sequenza non è arbitraria. Ogni step dipende da quello precedente. Non si salta.

```
STEP 1 — Vision
Dove sta andando questa BU nei prossimi anni?
        ↓
STEP 2 — Proposta di Valore
Cosa offre, a chi, perché è diversa dalle alternative?
        ↓
STEP 3 — Avatar
Chi è esattamente il cliente ideale? Come pensa, cosa vuole, cosa teme?
        ↓
STEP 4 — Revenue Model
Come genera reddito? Con quale prodotto o servizio?
        ↓
STEP 5 — Customer Journey
Qual è il percorso completo del cliente, dal primo contatto alla fidelizzazione?
        ↓
STEP 6 — Funnel
Quali strumenti e trigger realizzano ogni stadio del journey?
        ↓
STEP 7 — Piano Editoriale
Quali contenuti, con quale frequenza, su quali canali?
        ↓
STEP 8 — KPI
Con quali numeri si misura il successo di ogni step?
        ↓
STEP 9 — Automazioni
Quali azioni vengono eseguite automaticamente e quando?
```

**Perché questa sequenza:**  
Non si può costruire un funnel senza sapere chi è l'avatar. Non si può fare un piano editoriale senza sapere qual è la proposta di valore. Non si possono scegliere i KPI senza avere un revenue model. La sequenza riflette le dipendenze reali tra i documenti.

---

## 4. Documentazione obbligatoria

Prima del lancio, ogni BU deve avere questi documenti compilati. Per ogni documento, indicare lo stato di ogni sezione.

| Documento | Contenuto minimo richiesto | Dipende da |
|---|---|---|
| `README.md` | Nome, fase attuale, link agli altri file, checklist apertura | — |
| `brand.md` | Tutti gli elementi del patrimonio con stato dichiarato | — |
| `vision.md` | Dove vuole arrivare la BU in 3-5 anni | brand.md |
| `proposta-di-valore.md` | A chi, cosa, perché noi e non altri | vision.md |
| `avatar.md` | Profilo dettagliato del cliente ideale | proposta-di-valore.md |
| `revenue-model.md` | Prodotto/servizio, prezzo, struttura | avatar.md |
| `customer-journey.md` | Mappa del percorso del cliente dal primo contatto alla fidelizzazione | revenue-model.md |
| `funnel.md` | Strumenti e trigger per ogni stadio del journey | customer-journey.md |
| `piano-editoriale.md` | Categorie, frequenza, formati, canali | funnel.md |
| `kpi.md` | 7 KPI standard con valore attuale e obiettivo a 90 giorni | piano-editoriale.md |
| `automazioni.md` | Automazioni attive per fase con trigger e azione | kpi.md |
| `agenti-ai.md` | Quale AI fa cosa, con istruzioni operative specifiche per la BU | tutti |

---

## 5. Standard applicabili

Ogni BU eredita automaticamente gli standard dell'Operating System. Non si ridefiniscono per ogni BU — si applicano.

| Standard | Dove si trova | Si può modificare per BU? |
|---|---|---|
| Standard editoriale | `knowledge-core/standards/standard-editoriale.md` | No — vale per tutte le BU |
| Standard SEO | `knowledge-core/standards/standard-seo.md` | No |
| Standard visivo | `knowledge-core/standards/standard-visivo.md` | Sì — ogni BU ha il suo brand |
| Standard newsletter | `knowledge-core/standards/standard-newsletter.md` | Sì — adattabile per formato |
| Standard tecnico | `knowledge-core/standards/standard-tecnico.md` | No |

**Eccezione:** il brand visivo (colori, font, immagini) è specifico per ogni BU. Tutto il resto è condiviso.

---

## 6. Dashboard e KPI

### Dashboard

Ogni BU ha una voce nella dashboard trimestrale dell'azienda. Il formato è sempre lo stesso:

```markdown
## [NOME_BU] — [Trimestre AAAA]

| Metrica | Inizio periodo | Fine periodo | Variazione |
|---|---|---|---|
| Iscritti newsletter | 0 | X | +X% |
| Visite mensili | 0 | X | +X% |
| Articoli pubblicati | 0 | X | — |
| Tasso apertura email | —% | X% | — |
| Revenue (se attiva) | €0 | €X | — |
```

### KPI standard per ogni BU

Questi 7 KPI sono obbligatori per ogni BU. I valori obiettivo cambiano in base alla fase.

| KPI | Cosa misura | Fonte del dato |
|---|---|---|
| **Iscritti newsletter** | Dimensione audience qualificata | CRM (GoHighLevel) |
| **Nuovi iscritti / mese** | Velocità di crescita | CRM |
| **Tasso di apertura email** | Qualità del contenuto e del rapporto con il pubblico | GoHighLevel analytics |
| **Tasso di click** | Efficacia delle CTA | GoHighLevel analytics |
| **Articoli pubblicati / mese** | Velocità di produzione contenuti | Blog |
| **Visite mensili** | Traffico organico generato | Analytics blog |
| **Revenue / mese** | Ritorno economico della BU | Contabilità |

### Fasi e obiettivi

| Fase | Iscritti newsletter | Revenue mensile | Contenuti attivi |
|---|---|---|---|
| **Fase 0 — Fondazione** | 0–100 | €0 | 5–10 articoli pillar |
| **Fase 1 — Trazione** | 100–1.000 | €0–500 | 20+ articoli |
| **Fase 2 — Crescita** | 1.000–10.000 | €500–5.000 | 50+ articoli |
| **Fase 3 — Scala** | 10.000+ | €5.000+ | Piano editoriale sistematico |

---

## 7. Repository

### Setup GitHub per una nuova BU

Ogni BU può condividere il repository principale oppure avere un repository separato, in base alla complessità tecnica.

**BU semplice** (blog + newsletter, stesso stack di Entrate Extra):
→ Cartella dedicata nel repo `entrate-extra-blog-proxy`. Nessun nuovo repository.

**BU complessa** (stack diverso, monetizzazione diversa, team separato):
→ Nuovo repository GitHub `[nome-bu]-proxy` con la stessa struttura del principale.

### Struttura minima del repository

```
[nome-bu]-proxy/
├── api/
│   ├── subscribe.js      ← iscrizione + welcome email (clonare da EE)
│   ├── publish.js        ← pubblicazione articoli (clonare da EE)
│   └── newsletter.js     ← invio newsletter (clonare da EE)
├── data/
│   └── newsletter-sources.json
└── knowledge-core/       ← puntatore al KC principale (non duplicare)
```

### Variabili d'ambiente richieste

| Variabile | Obbligatoria al lancio |
|---|---|
| `GHL_API_KEY` | Sì |
| `GHL_LOCATION_ID` | Sì (specifico per BU se su account separato) |
| `PUBLISH_SECRET` | Sì |
| `GOOGLE_AI_KEY` | Solo se genera immagini |
| `GITHUB_TOKEN` | Solo se scrive su GitHub |

---

## 8. Asset

### Brand Kit

Il brand kit non si crea al lancio — si censisce. Se il brand esiste già, i file del brand kit esistono già da qualche parte. Vanno localizzati, organizzati e documentati in `brand.md`.

| Asset | Formato | Dove si conserva |
|---|---|---|
| Logo principale | SVG + PNG 1200px | Google Drive / GitHub `assets/` |
| Logo variante scura | SVG + PNG | Google Drive |
| Logo variante chiara | SVG + PNG | Google Drive |
| Palette colori | File HEX + RGB | `brand.md` |
| Font primario | Nome + link Google Fonts | `brand.md` |
| Template immagine blog | Canva o Figma | Link in `brand.md` |
| Template copertina newsletter | HTML email | `knowledge-core/templates/` |

### Immagini blog

- Dimensione minima: 1200×630px (Open Graph standard)
- Formato: JPG o PNG ottimizzato
- Hosting: Cloudflare R2 (target) o catbox.moe (temporaneo)
- Naming: `[slug-articolo]-hero.jpg`

---

## 9. Social

### Presenza minima al lancio

Una BU non deve essere ovunque. Deve essere dove è il suo cliente ideale.

| Canale | Quando attivare | Frequenza minima |
|---|---|---|
| Blog | Sempre — è il centro | Secondo piano editoriale |
| Newsletter | Sempre — è il canale diretto | Bisettimanale o mensile |
| Instagram | Se audience B2C | 3 post / settimana |
| LinkedIn | Se audience B2B o professionale | 2 post / settimana |
| YouTube | Solo se c'è capacità video | 1 video / settimana |
| TikTok | Se audience under 35 | Non obbligatorio nella Fase 0 |

### Regola sul social

Il blog e la newsletter sono l'asset. Il social è il megafono.

Non si costruisce un business sul social — si costruisce sul proprio canale (email list). Il social porta traffico verso la newsletter, non è il prodotto finale.

---

## 10. Funnel

Il funnel standard di ogni BU è composto da 5 stadi. Gli strumenti cambiano in base alla BU, ma la logica è sempre la stessa.

```
[AWARENESS]
Articoli blog SEO, social, video, passaparola
Il pubblico scopre il brand
        ↓
[ACQUISIZIONE]
Form iscrizione newsletter
Il pubblico diventa contatto (con email)
        ↓
[NURTURING]
Welcome sequence + newsletter periodica
Il contatto conosce il brand, si fida, aspetta il prossimo invio
        ↓
[CONVERSIONE]
Offerta prodotto / community / consulenza
Il contatto diventa cliente o membro
        ↓
[RETENTION]
Newsletter continuativa + community
Il cliente rimane attivo e porta altri
```

### Strumenti per ogni stadio

| Stadio | Strumento primario | Strumento secondario |
|---|---|---|
| Awareness | Blog (SEO) | Social media |
| Acquisizione | Form iscrizione su sito | Pop-up o lead magnet |
| Nurturing | Newsletter periodica | Welcome sequence (drip) |
| Conversione | Pagina offerta | Email dedicata |
| Retention | Newsletter continuativa | Community (Fase 2+) |

---

## 11. Automazioni

### Automazioni obbligatorie (Fase 0)

| Automazione | Trigger | Azione | Strumento |
|---|---|---|---|
| Welcome email | Nuova iscrizione newsletter | Invia email di benvenuto con promessa del brand | GHL + Vercel `/api/subscribe` |
| Tag iscritto | Nuova iscrizione | Assegna tag `newsletter-[nome-bu]` al contatto | GHL automatico |

### Automazioni raccomandate (Fase 1)

| Automazione | Trigger | Azione | Strumento |
|---|---|---|---|
| Drip sequence | Nuova iscrizione | Invia le ultime 3 puntate in 7 giorni | GHL workflow |
| Re-engagement | Nessuna apertura per 60 giorni | Email "ci sei ancora?" con opzione disiscrizione | GHL workflow |
| Conferma disiscrizione | Click su "annulla iscrizione" | Rimuove tag, invia conferma, aggiorna CRM | GHL automatico |

### Automazioni avanzate (Fase 2+)

| Automazione | Trigger | Azione |
|---|---|---|
| Lead scoring | Aperture email + click | Punteggio contatto per priorità commerciale |
| Upsell post-conversione | Primo acquisto | Sequenza email prodotti correlati |
| Segmentazione dinamica | Comportamento di lettura | Tag automatici per interessi specifici |

---

## 12. Agenti AI assegnati

Ogni BU opera con tre agenti AI, ognuno con un ruolo preciso. Gli agenti non sono persone diverse — è la stessa AI (Claude) che opera in modo diverso in base al ruolo attivato.

### Agente 1 — CTO

**Attivare quando:** c'è da sviluppare o modificare codice, configurare sistemi, fare deploy, risolvere problemi tecnici.

**Scope:**
- Sviluppo e manutenzione degli endpoint API
- Debug e risoluzione problemi tecnici
- Deploy e configurazione Vercel
- Aggiornamento variabili d'ambiente
- Gestione GitHub (commit, push, branch)

**Limite:** non fa deploy in produzione senza approvazione CEO.

---

### Agente 2 — Editor

**Attivare quando:** c'è da scrivere un articolo, una newsletter, una email, una pagina del sito.

**Scope:**
- Ricerca e pianificazione contenuti
- Scrittura articoli blog con struttura SEO
- Scrittura puntate newsletter con fonti verificate
- Scrittura email (welcome, nurturing, offerta)
- Archiviazione fonti in `newsletter-sources.json`

**Limite:** non pubblica nulla senza approvazione CEO.

**Standard obbligatorio:** ogni link esterno nella newsletter deve essere verificato prima della scrittura. Nessun link a contenuti non esistenti.

---

### Agente 3 — Analista

**Attivare quando:** c'è da fare ricerca di mercato, verificare dati, analizzare metriche, trovare fonti affidabili.

**Scope:**
- Ricerca di mercato su un tema specifico
- Verifica e valutazione fonti esterne
- Analisi delle metriche della BU
- Competitive intelligence
- Reportistica periodica

**Limite:** le analisi sono input per decisioni CEO, non decisioni in sé.

---

## 13. Checklist di apertura

Da completare prima del lancio pubblico della BU. Nessuna scorciatoia.

### Patrimonio

- [ ] `brand.md` compilato con tutti gli elementi e stato dichiarato per ognuno
- [ ] Brand kit fisicamente localizzato (file logo, palette, font)

### Sequenza logica (in ordine)

- [ ] `vision.md` — dove va questa BU
- [ ] `proposta-di-valore.md` — a chi, cosa, perché noi
- [ ] `avatar.md` — profilo cliente ideale completo
- [ ] `revenue-model.md` — prodotto e prezzo definiti
- [ ] `customer-journey.md` — percorso del cliente mappato
- [ ] `funnel.md` — strumenti e trigger per ogni stadio
- [ ] `piano-editoriale.md` — piano dei primi 30 giorni pronto
- [ ] `kpi.md` — 7 KPI con valori di partenza e obiettivi 90gg
- [ ] `automazioni.md` — almeno le automazioni obbligatorie di Fase 0

### Infrastruttura tecnica

- [ ] Endpoint `/api/subscribe` funzionante e testato
- [ ] Endpoint `/api/publish` funzionante e testato
- [ ] Variabili d'ambiente configurate su Vercel
- [ ] Form di iscrizione sul sito collegato all'endpoint
- [ ] Tag CRM `newsletter-[nome-bu]` creato in GHL
- [ ] Welcome email scritta e testata (inviare a email personale)

### Contenuti minimi

- [ ] 5 articoli pillar pubblicati (non si lancia su un blog vuoto)
- [ ] Prima puntata newsletter pronta
- [ ] Pagina "Chi siamo" o "About" sul sito

### Comunicazione

- [ ] Social configurati (almeno i canali scelti in sezione §9)
- [ ] Bio e link aggiornati su ogni social
- [ ] Piano editoriale dei primi 30 giorni approvato dal CEO

---

## 14. Checklist di manutenzione

Da eseguire ogni mese per ogni BU attiva.

### Contenuti

- [ ] Piano editoriale del mese successivo definito e approvato
- [ ] Articoli programmati per il mese in bozza
- [ ] Puntate newsletter del mese pianificate con fonti pre-identificate

### Tecnica

- [ ] Form di iscrizione testato (iscrizione di prova)
- [ ] Endpoint newsletter testato (invio a email di test)
- [ ] Immagini degli ultimi articoli verificate (nessun link rotto)
- [ ] Log Vercel controllati per errori ricorrenti

### Metriche

- [ ] KPI aggiornati nella dashboard trimestrale
- [ ] Confronto con mese precedente: cosa è cresciuto, cosa è calato
- [ ] Almeno un'azione correttiva identificata se una metrica è in calo

### CRM

- [ ] Export contatti mensile salvato in Google Drive
- [ ] Contatti inattivi (nessuna apertura da 90+ giorni) identificati
- [ ] Re-engagement campaign pianificata se necessario

---

## 15. Checklist di crescita

Da valutare ogni trimestre. Si usa per decidere se e come accelerare la crescita di una BU.

### Prerequisiti per passare da Fase 0 a Fase 1

- [ ] Almeno 100 iscritti newsletter
- [ ] Almeno 10 articoli pubblicati
- [ ] Tasso di apertura email > 30%
- [ ] Piano editoriale sistematico attivo (non solo ad hoc)
- [ ] Revenue model definito (anche se non ancora monetizzato)

### Prerequisiti per passare da Fase 1 a Fase 2

- [ ] Almeno 1.000 iscritti newsletter
- [ ] Almeno 30 articoli pubblicati
- [ ] Prima entrata economica generata
- [ ] Automazioni Fase 1 tutte attive (drip, re-engagement)
- [ ] Canali social attivi con crescita organica misurabile

### Domande da porsi ogni trimestre

1. La BU sta crescendo? Se no, perché? Contenuti, funnel o mercato sbagliato?
2. Il pubblico sta diventando più fedele? (tasso apertura in crescita?)
3. C'è una domanda di monetizzazione? (click sulle CTA, risposte alle email?)
4. Il modello è duplicabile su altri mercati o verticali?
5. La BU ha bisogno di più risorse o di più tempo?

---

## Come usare questo Blueprint

**Per creare una nuova BU:**

1. Copia la cartella `knowledge-core/business-units/[nome-bu]/` (struttura vuota)
2. Compila `brand.md` per primo — classifica ogni elemento come ESISTENTE / DA DOCUMENTARE / DA DEFINIRE
3. Segui la sequenza logica degli Step 1→9, in ordine
4. Completa la checklist di apertura (sezione §13)
5. Lancia

**Per valutare una BU esistente:**

1. Confronta la BU con le fasi in sezione §6
2. Esegui la checklist di manutenzione (sezione §14)
3. Esegui la checklist di crescita (sezione §15)
4. Aggiorna i KPI nella dashboard

---

*Business Units Blueprint v0.2 — Entrate Extra Operating System*  
*Prossima revisione: al completamento della Fase 1 di almeno una BU*
