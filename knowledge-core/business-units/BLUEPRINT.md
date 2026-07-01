# Business Units Blueprint v0.1

**Versione:** 0.1  
**Data:** 1 luglio 2026  
**Scopo:** Modello standard per la creazione di una nuova Business Unit  
**Come si usa:** Clona questo documento, sostituisci `[NOME_BU]` con il nome del brand, completa ogni sezione.

---

> **Principio guida**  
> Una Business Unit non si inventa ogni volta. Si clona il Blueprint, si adatta al contesto, si lancia. Tutto ciò che non è nel Blueprint non esiste ancora — va costruito e documentato prima di considerare la BU operativa.

---

## 1. Struttura

Ogni BU è una cartella autonoma nel repository GitHub. La struttura è sempre la stessa.

```
business-units/
└── [nome-bu]/
    ├── README.md                  ← panoramica della BU
    ├── brand.md                   ← identità visiva e tono di voce
    ├── audience.md                ← cliente ideale
    ├── funnel.md                  ← mappa dell'acquisizione
    ├── revenue-model.md           ← come genera reddito
    ├── piano-editoriale.md        ← contenuti e frequenza
    ├── kpi.md                     ← metriche e obiettivi
    ├── automazioni.md             ← automazioni attive
    └── agenti-ai.md               ← AI agents assegnati e istruzioni
```

**Regola:** nessuna BU viene considerata "aperta" finché tutti questi file non esistono, anche solo con contenuto minimo.

---

## 2. Documentazione obbligatoria

Prima del lancio, ogni BU deve avere questi documenti completati:

| Documento | Contenuto minimo richiesto |
|---|---|
| `README.md` | Nome, stato, proposta di valore in 3 righe, link agli altri file |
| `brand.md` | Nome, colori primari, font, tono di voce (3 aggettivi), cosa non si dice mai |
| `audience.md` | Profilo del cliente ideale: chi è, cosa vuole, cosa teme, perché ci sceglie |
| `funnel.md` | I 4 stadi del funnel con strumenti e trigger per ognuno |
| `revenue-model.md` | Come la BU genera reddito: prodotti, prezzi, struttura di commissione |
| `piano-editoriale.md` | Categorie di contenuto, frequenza, formati, canali |
| `kpi.md` | 5-7 KPI con valore di partenza, obiettivo a 90 giorni, fonte del dato |
| `automazioni.md` | Lista automazioni attive con trigger, azione e strumento |
| `agenti-ai.md` | Quale AI fa cosa su questa BU, con istruzioni operative |

---

## 3. Standard applicabili

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

## 4. Dashboard e KPI

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

## 5. Repository

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

## 6. Asset

### Brand Kit (da creare prima del lancio)

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

## 7. Social

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

## 8. Funnel

Il funnel standard di ogni BU è composto da 4 stadi. Gli strumenti cambiano in base alla BU, ma la logica è sempre la stessa.

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

## 9. Automazioni

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

## 10. Agenti AI assegnati

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

## 11. Checklist di apertura

Da completare prima del lancio pubblico della BU. Nessuna scorciatoia.

### Fondamenta

- [ ] Cartella BU creata in `knowledge-core/business-units/[nome-bu]/`
- [ ] Tutti i 9 documenti obbligatori completati (sezione §2)
- [ ] Brand kit completo: logo, colori, font
- [ ] Dominio o sottodominio configurato (se separato da EE)

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

- [ ] Social configurati (almeno i canali scelti in sezione §7)
- [ ] Bio e link aggiornati su ogni social
- [ ] Piano editoriale dei primi 30 giorni definito

---

## 12. Checklist di manutenzione

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

## 13. Checklist di crescita

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
2. Compila tutti i documenti obbligatori (sezione §2)
3. Completa la checklist di apertura (sezione §11)
4. Lancia

**Per valutare una BU esistente:**

1. Confronta la BU con le fasi in sezione §4
2. Esegui la checklist di manutenzione (sezione §12)
3. Esegui la checklist di crescita (sezione §13)
4. Aggiorna i KPI nella dashboard

---

*Business Units Blueprint v0.1 — Entrate Extra Operating System*  
*Prossima revisione: al completamento della Fase 1 di almeno una BU*
