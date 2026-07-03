# KNOWLEDGE CORE MASTER PLAN
## Entrate Extra — Sistema di Conoscenza Permanente

**Versione:** 1.0
**Data:** 2 luglio 2026
**Stato:** APPROVATO
**Autori:** CEO (Ernesto Carlo) + Lead Software Architect / Knowledge Architect (Claude)
**Scope:** Progettazione completa del sistema di conoscenza aziendale di Entrate Extra

---

> **Principio Fondamentale**
>
> La conoscenza vale quanto il codice.
> Il Knowledge Core è il patrimonio permanente di Entrate Extra.
> Senza di esso, tutto il lavoro può essere perso in un giorno.

---

## LIVELLO 1 — Cos'è il Knowledge Core (per chiunque)

Immagina che Entrate Extra sia una fabbrica.
In questa fabbrica ci sono macchinari (software), processi (come si lavora), prodotti (blog, newsletter, corsi) e persone (il team).

Il Knowledge Core è il **manuale di istruzioni completo** di questa fabbrica.

Se domani arriva un nuovo membro del team, il Knowledge Core gli spiega tutto.
Se domani un componente si rompe, il Knowledge Core spiega come ripararlo.
Se tra dieci anni qualcuno vuole ricostruire l'azienda, il Knowledge Core contiene tutto il necessario.

Il Knowledge Core non è un archivio di documenti vecchi.
È una mappa viva, aggiornata, che cresce con l'azienda.

---

## LIVELLO 2 — Come funziona il Knowledge Core (per CEO e collaboratori)

Il Knowledge Core è organizzato in sezioni tematiche. Ognuna ha uno scopo preciso:

| Sezione | Scopo | Quanto spesso cambia |
|---|---|---|
| **constitution/** | Chi siamo, perché esistiamo, i principi immutabili | Raramente |
| **architettura/** | Come è costruita la piattaforma | Quando cambia la tecnologia |
| **decisioni-strategiche/** | Perché abbiamo scelto A invece di B | Ad ogni decisione importante |
| **processi/** | Come si fa ogni operazione, passo dopo passo | Quando i processi evolvono |
| **engine-units/** | Documentazione di ogni vertical di business | Continuamente |
| **standards/** | Le regole di qualità da rispettare sempre | Raramente |
| **postmortem/** | Cosa è andato storto e cosa abbiamo imparato | Ad ogni incidente |
| **lezioni-apprese/** | Conoscenza permanente estratta dagli errori | Ad ogni incidente |
| **qa/** | Come verifichiamo che tutto funzioni | Quando cambiano i processi |
| **roadmap/** | Dove stiamo andando | Ogni trimestre |

Ogni documento segue sempre la stessa struttura a tre livelli:
- **LIVELLO 1** — Spiegazione semplice (per chiunque)
- **LIVELLO 2** — Descrizione operativa (per CEO e collaboratori)
- **LIVELLO 3** — Dettagli tecnici (per sviluppatori)

---

## LIVELLO 3 — Architettura del sistema (per sviluppatori e nuovi CTO)

Il Knowledge Core è un repository Git (GitHub) composto esclusivamente da file Markdown.
Non dipende da nessuna piattaforma proprietaria.
Può essere letto, esportato e ricostruito con qualsiasi editor di testo.

**Stack del KC:** Git + GitHub + Markdown + Convenzioni di naming

---

## PARTE 1 — STRUTTURA COMPLETA DELLE CARTELLE

### Struttura target (versione 2.0 — da implementare per fasi)

```
knowledge-core/
│
├── KNOWLEDGE_CORE_MASTER_PLAN.md    ← questo documento
├── REGISTRY.md                       ← indice globale di tutti i documenti
├── CHANGELOG.md                      ← log cronologico di tutte le modifiche al KC
├── NAMING_POLICY.md                  ← convenzioni di naming (v1.0, in vigore)
├── README.md                         ← punto di ingresso del KC
│
├── constitution/                    ★ CONGELATA — legge fondamentale
│   ├── README.md
│   ├── vision.md                    ← vision dell'ecosistema
│   ├── mission.md                   ← perché esistiamo
│   ├── principles.md                ← i 10 principi dell'OS
│   └── governance.md                ← chi decide cosa
│
├── architettura/                    ★ DA CREARE — mappa tecnica permanente
│   ├── README.md
│   ├── panoramica.md                ← architettura completa a volo d'uccello
│   ├── infrastruttura.md            ← tutti i servizi, le integrazioni, i costi
│   ├── flussi-dati.md               ← come i dati si muovono nel sistema
│   ├── api-interne.md               ← documentazione endpoint Vercel
│   ├── sicurezza.md                 ← policy sicurezza, rotazione chiavi
│   └── dipendenze-esterne.md        ← mappa di tutti i servizi terzi con rischi
│
├── decisioni-strategiche/           ★ ESISTENTE — Architecture Decision Records (ADR)
│   ├── README.md
│   ├── 001-github-single-source-of-truth.md
│   ├── 002-constitution-sostituisce-manifesto.md
│   ├── 003-brand-come-patrimonio.md
│   └── [NNN]-[slug].md              ← nuovo ADR per ogni decisione significativa
│
├── processi/                        ★ ESISTENTE + DA ESPANDERE
│   ├── README.md
│   ├── sop/                         ← DA CREARE — Standard Operating Procedures
│   │   ├── sop-pubblicazione-articolo.md
│   │   ├── sop-invio-newsletter.md
│   │   ├── sop-onboarding-collaboratore.md
│   │   └── sop-rotazione-api-key.md
│   └── workflow/                    ← DA CREARE — flussi operativi visivi
│       ├── workflow-articolo-blog.md
│       ├── workflow-newsletter.md
│       └── workflow-engine-unit-lancio.md
│
├── postmortem/                      ★ DA CREARE — analisi incidenti e bug
│   ├── README.md
│   └── [AAAA-MM-GG]-[slug]-postmortem.md
│
├── lezioni-apprese/                 ★ DA CREARE — lessons learned permanenti
│   ├── README.md
│   └── [AAAA-MM-GG]-[slug]-lezione.md
│
├── qa/                              ★ DA CREARE — quality assurance
│   ├── README.md
│   ├── checklist-pubblicazione-articolo.md
│   ├── checklist-deploy-vercel.md
│   └── checklist-lancio-engine-unit.md
│
├── deployment/                      ★ DA CREARE — procedure di rilascio
│   ├── README.md
│   └── deployment-vercel.md
│
├── riunioni/                        ★ DA CREARE — verbali e note riunioni
│   ├── README.md
│   └── [AAAA-MM-GG]-[slug]-riunione.md
│
├── engine-units/                    ★ ESISTENTE — un vertical di business per cartella
│   ├── README.md
│   ├── BLUEPRINT.md                 ← Blueprint v0.2 (sequenza 9 step)
│   ├── come-guadagnare-viaggiando/  ← Engine Unit CGV (documentazione avanzata)
│   ├── entrate-extra/               ← Engine Unit principale (DA POPOLARE)
│   ├── oro-reale/                   ← Engine Unit Oro (DA POPOLARE)
│   └── orygn/                       ← Engine Unit Orygn (DA POPOLARE)
│
├── standards/                       ★ ESISTENTE — standard di qualità
│   ├── README.md
│   ├── standard-editoriale.md       ← DA CREARE
│   ├── standard-seo.md              ← DA CREARE
│   ├── standard-visivo.md           ← DA CREARE
│   ├── standard-newsletter.md       ← DA CREARE
│   └── standard-tecnico.md          ← DA CREARE
│
├── templates/                       ★ ESISTENTE + DA ESPANDERE
│   ├── README.md
│   ├── engine-unit-template/        ← template Engine Unit (12 file, Blueprint v0.2)
│   ├── engine-unit-scorecard.md     ← scorecard 12 aree
│   ├── adr-template.md              ← DA CREARE
│   ├── sop-template.md              ← DA CREARE
│   ├── postmortem-template.md       ← DA CREARE
│   ├── lezione-template.md          ← DA CREARE
│   ├── riunione-template.md         ← DA CREARE
│   ├── deployment-template.md       ← DA CREARE
│   ├── workflow-template.md         ← DA CREARE
│   └── qa-checklist-template.md     ← DA CREARE
│
├── prompts/                         ★ ESISTENTE — prompt AI riutilizzabili
│   ├── README.md
│   ├── prompt-articolo-blog.md
│   ├── prompt-newsletter-analisi.md
│   ├── prompt-immagine-blog.md
│   └── prompt-session-report.md
│
├── ruoli/                           ★ ESISTENTE — definizioni ruoli
│   └── README.md
│
├── roadmap/                         ★ ESISTENTE — pianificazione
│   └── README.md
│
├── dashboard/                       ★ ESISTENTE — KPI globali
│   └── README.md
│
├── session-report/                  ★ ESISTENTE — log sessioni di lavoro
│   ├── README.md
│   └── [AAAA-MM-GG]-[slug].md
│
├── operating-blueprint/             ★ ESISTENTE — manuale operativo
│   ├── README.md
│   └── RUNBOOK.md                   ← manuale tecnico completo
│
└── assets/                          ★ ESISTENTE — risorse grafiche e statiche
    └── README.md
```

### Struttura attuale (versione 1.0 — in produzione al 2 luglio 2026)

La struttura attuale è la base da cui si parte. Le sezioni marcate ★ DA CREARE nel diagramma sopra non esistono ancora.

**Cartelle esistenti (14):** constitution, dashboard, decisioni-strategiche, engine-units, operating-blueprint, processi, prompts, roadmap, ruoli, session-report, standards, templates, assets

**Cartelle da creare (6):** architettura, postmortem, lezioni-apprese, qa, deployment, riunioni

**File da creare in templates (8):** adr-template, sop-template, postmortem-template, lezione-template, riunione-template, deployment-template, workflow-template, qa-checklist-template

**File da creare in KC root (2):** REGISTRY.md, CHANGELOG.md

---

## PARTE 2 — CONVENZIONI DI NAMING

Riferimento base: [NAMING_POLICY.md](NAMING_POLICY.md) v1.0 — in vigore per tutte le categorie esistenti.

Il Master Plan introduce le seguenti categorie aggiuntive:

### Nuovi formati

| Categoria | Formato | Esempio |
|---|---|---|
| Postmortem | `AAAA-MM-GG-[slug]-postmortem.md` | `2026-07-02-form-newsletter-postmortem.md` |
| Lezione appresa | `AAAA-MM-GG-[slug]-lezione.md` | `2026-07-02-api-http-200-lezione.md` |
| SOP | `sop-[azione-kebab].md` | `sop-pubblicazione-articolo.md` |
| Workflow | `workflow-[processo-kebab].md` | `workflow-newsletter.md` |
| Riunione | `AAAA-MM-GG-[slug]-riunione.md` | `2026-07-15-review-cgv-riunione.md` |
| QA Checklist | `checklist-[oggetto-kebab].md` | `checklist-pubblicazione-articolo.md` |
| Deployment | `deployment-[piattaforma].md` | `deployment-vercel.md` |
| Architettura | `[componente-kebab].md` | `panoramica.md`, `api-interne.md` |

### Regole generali che NON cambiano

- Tutto in `lowercase-kebab-case`
- Tutto in italiano (eccezioni già stabilite in NAMING_POLICY.md)
- I numeri progressivi si usano solo per ADR (formato `NNN`)
- La data nel nome file è sempre `AAAA-MM-GG` (ISO 8601)
- Il numero di versione NON compare mai nel nome del file — è nel frontmatter

---

## PARTE 3 — SISTEMA DI VERSIONAMENTO

### 3.1 — Frontmatter standard di ogni documento

Ogni documento del Knowledge Core apre con questo blocco:

```
**Versione:** X.Y
**Data:** AAAA-MM-GG
**Stato:** DRAFT | REVIEW | APPROVATO | DEPRECATO | ARCHIVIATO
**Autore:** [nome o ruolo]
```

Opzionale quando rilevante:
```
**Sostituisce:** [link al documento precedente]
**Sostituito da:** [link al documento successivo]
**Dipende da:** [link a documenti prerequisiti]
```

### 3.2 — Schema di versioning semantico per documenti

| Tipo di modifica | Effetto sulla versione | Esempio |
|---|---|---|
| Riscrittura completa o cambio fondamentale | Major bump: X.0 → (X+1).0 | 1.0 → 2.0 |
| Aggiunta di sezioni o modifica struttura | Minor bump: X.Y → X.(Y+1) | 1.0 → 1.1 |
| Correzione errori, aggiornamento dati minori | Nessun bump — solo commit Git | — |

Il versionamento Git è sempre la fonte di verità assoluta. I numeri nel frontmatter sono per la leggibilità umana.

### 3.3 — Stati del documento

| Stato | Significato operativo |
|---|---|
| DRAFT | In lavorazione — non ancora valido come riferimento |
| REVIEW | Pronto per revisione e approvazione CEO |
| APPROVATO | Valido, in vigore, può essere seguito |
| DEPRECATO | Superato — mantenuto per riferimento storico |
| ARCHIVIATO | Non più rilevante — spostato fuori dal flusso attivo |

### 3.4 — Versioning del Knowledge Core come sistema

Il KC nel suo insieme ha una versione propria, documentata nel CHANGELOG.md:

| KC Version | Stato | Contenuto |
|---|---|---|
| v1.0 | In produzione (dal 26 giugno 2026) | Foundation Freeze — struttura base + constitution + CGV + RUNBOOK |
| v2.0 | Da implementare | Architettura completa + postmortem + SOP + templates + REGISTRY |
| v3.0 | Futuro | Standards completi + QA + deployment + glossario + MASTER_PROMPT |

---

## PARTE 4 — TEMPLATE STANDARD

Tutti i template si trovano in `knowledge-core/templates/`.
Nessun template va modificato direttamente: va copiato nella cartella appropriata e compilato.

---

### TEMPLATE 1 — ADR (Architecture Decision Record)

**File:** `templates/adr-template.md`
**Scopo:** Documentare ogni decisione tecnica o strategica significativa e irreversibile, catturando il contesto, le alternative considerate e la motivazione della scelta.
**Quando:** Ogni volta che il CEO approva una scelta che cambierà il sistema in modo duraturo. Ogni decisione non documentata è conoscenza persa.
**Naming:** `knowledge-core/decisioni-strategiche/[NNN]-[slug].md`

```markdown
# ADR [NNN] — [Titolo della decisione]

**Versione:** 1.0
**Data:** AAAA-MM-GG
**Stato:** PROPOSTA | APPROVATA | DEPRECATA | SUPERATA DA ADR [NNN]

---

## LIVELLO 1 — In parole semplici

[Spiega in 2-3 righe cosa è stato deciso e perché, come se lo stessi
 raccontando a qualcuno che non conosce il progetto]

## LIVELLO 2 — Contesto e decisione

**Il problema da risolvere:**
[Descrizione del problema o della necessità che ha generato questa decisione]

**Opzioni considerate:**

| Opzione | Pro | Contro |
|---|---|---|
| [A] | [vantaggio] | [svantaggio] |
| [B] | [vantaggio] | [svantaggio] |

**Decisione:** [Opzione scelta]

**Motivazione:** [Perché questa opzione è stata preferita alle altre]

**Chi ha deciso:** [CEO | Team | CTO]

## LIVELLO 3 — Impatto tecnico

**Componenti impattati:** [lista file, sistemi, integrazioni]

**Modifiche richieste:**
- [ ] [Cosa deve cambiare — 1]
- [ ] [Cosa deve cambiare — 2]

**Rischi identificati:**
- [Rischio 1 e mitigazione]

**Criteri di revisione:** [Quando questa decisione va rivalutata]

---

## Vedi anche

- [link a documenti correlati]

---

*ADR [NNN] — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 2 — SOP (Standard Operating Procedure)

**File:** `templates/sop-template.md`
**Scopo:** Documentare ogni operazione ripetuta passo per passo, in modo che chiunque possa eseguirla correttamente anche senza esperienza pregressa.
**Quando:** Per ogni processo che si ripete più di una volta e che, se eseguito male, causa problemi.
**Naming:** `knowledge-core/processi/sop/sop-[azione].md`

```markdown
# SOP — [Nome dell'operazione]

**Versione:** 1.0
**Data:** AAAA-MM-GG
**Stato:** APPROVATO
**Durata stimata:** [X minuti/ore]
**Chi esegue:** CEO | Developer | Collaboratore
**Frequenza:** [ogni quanto si esegue]
**Ultimo utilizzo verificato:** AAAA-MM-GG

---

## LIVELLO 1 — Di cosa si tratta

[Spiega in 2-3 righe cosa si fa in questa procedura e perché è importante.
 Un bambino di 10 anni deve capirlo.]

## LIVELLO 2 — Prerequisiti

Prima di iniziare, assicurati di avere:
- [ ] [Accesso a sistema X]
- [ ] [Credenziale / API key Y]
- [ ] [Condizione Z verificata]

## LIVELLO 3 — Procedura passo per passo

### Passo 1 — [Nome del passo]

[Istruzioni complete e dettagliate]

```
[Comandi o snippet se applicabile]
```

**Risultato atteso:** [Cosa deve succedere se il passo è corretto]

### Passo 2 — [Nome del passo]

[Istruzioni complete e dettagliate]

**Risultato atteso:** [Cosa deve succedere]

### Passo 3 — [Nome del passo]

[Istruzioni complete e dettagliate]

---

## Verifica finale

- [ ] [Controllo 1 — come verificare che tutto sia andato bene]
- [ ] [Controllo 2]

## Cosa fare se qualcosa va storto

| Problema | Sintomo | Soluzione |
|---|---|---|
| [Errore comune 1] | [Come si manifesta] | [Come risolverlo] |
| [Errore comune 2] | [Come si manifesta] | [Come risolverlo] |

**Se il problema non è in questa lista:** [A chi rivolgersi / dove cercare]

---

## Vedi anche

- [link a workflow correlato]
- [link a checklist QA associata]

---

*SOP — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 3 — Postmortem

**File:** `templates/postmortem-template.md`
**Scopo:** Analizzare ogni incidente, bug critico o fallimento operativo. Estrarne le cause, le lezioni apprese, e garantire che non si ripeta.
**Quando:** Entro 48 ore da ogni incidente che ha impattato utenti, dati o operatività. Nessuna eccezione.
**Principio:** No blame. Il postmortem analizza sistemi e processi, mai le persone.
**Naming:** `knowledge-core/postmortem/AAAA-MM-GG-[slug]-postmortem.md`

```markdown
# Postmortem — [Nome incidente]

**Versione:** 1.0
**Data incidente:** AAAA-MM-GG
**Data postmortem:** AAAA-MM-GG
**Severità:** CRITICA | ALTA | MEDIA | BASSA
**Durata impatto:** [X ore/giorni]
**Stato:** APERTO | CHIUSO

---

## LIVELLO 1 — Cosa è successo (in parole semplici)

[Racconta cosa è andato storto come se lo stessi spiegando a un amico.
 Niente tecnico. Solo i fatti e le conseguenze visibili.]

## LIVELLO 2 — Cronologia degli eventi

| Orario | Evento |
|---|---|
| GG/MM HH:MM | [Cosa è successo] |
| GG/MM HH:MM | [Cosa è successo] |
| GG/MM HH:MM | [Incidente rilevato] |
| GG/MM HH:MM | [Incidente risolto] |

**Impatto:**
- Utenti coinvolti: [numero o stima]
- Sistemi impattati: [lista]
- Dati impattati: [sì/no — quali]
- Revenue impattata: [sì/no — stima]

## LIVELLO 3 — Analisi causa radice

**Causa primaria:**
[Il bug o l'errore principale — deve essere specifico e actionable]

**Causa secondaria (se presente):**
[Cosa ha amplificato o permesso il problema]

**Perché il problema non è stato rilevato prima:**
[Mancanza di monitoring, test insufficienti, assenza di checklist, etc.]

**Come è stato risolto:**
[Descrizione tecnica della fix applicata]

---

## Piano d'azione

| # | Azione | Tipo | Responsabile | Scadenza | Stato |
|---|---|---|---|---|---|
| 1 | [Azione] | FIX | CEO/Dev | AAAA-MM-GG | APERTA |
| 2 | [Prevenzione] | PREVENZIONE | CEO/Dev | AAAA-MM-GG | APERTA |
| 3 | [Monitoring] | MONITORING | CEO/Dev | AAAA-MM-GG | APERTA |

---

## Lezioni apprese

1. [Lezione sintetica 1]
2. [Lezione sintetica 2]

**Documenti aggiornati a seguito di questo postmortem:**
- [ ] [SOP aggiornata / creata]
- [ ] [Checklist aggiornata]
- [ ] [ADR creato se necessario]

**→ Lezione formalizzata:** [link a lezioni-apprese/AAAA-MM-GG-[slug]-lezione.md]

---

*Postmortem — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 4 — Architettura componente

**File:** `templates/architettura-template.md`
**Scopo:** Documentare un componente tecnico, un'integrazione o un sistema in modo permanente e indipendente dalla tecnologia specifica utilizzata in quel momento.
**Quando:** Ogni volta che viene costruito o modificato significativamente un componente tecnico.
**Naming:** `knowledge-core/architettura/[componente].md`

```markdown
# Architettura — [Nome componente / sistema]

**Versione:** 1.0
**Data:** AAAA-MM-GG
**Stato:** APPROVATO
**Tecnologie attuali:** [lista — può cambiare nel tempo]

---

## LIVELLO 1 — A cosa serve

[Una frase: cosa fa questo componente e perché esiste.
 Deve essere comprensibile anche senza conoscere la tecnologia.]

**Non fa:** [Cosa NON è responsabilità di questo componente]

## LIVELLO 2 — Come funziona

**Input:** [Cosa riceve]

**Output:** [Cosa produce]

**Interazioni con altri componenti:**

| Componente | Tipo di interazione | Direzione |
|---|---|---|
| [Componente A] | [Legge / Scrive / Notifica] | → / ← / ↔ |

**Dipendenze esterne:** [servizi terzi richiesti]

## LIVELLO 3 — Specifiche tecniche

**URL / Endpoint:** [se applicabile]

**Autenticazione:** [metodo]

**Rate limits:** [se presenti]

**Variabili d'ambiente richieste:**
```
NOME_VARIABILE — descrizione e dove trovarla
```

**Errori noti e soluzioni:**

| Errore / Codice | Causa | Soluzione |
|---|---|---|
| [Errore 1] | [Causa] | [Soluzione] |

**Diagramma del flusso:**
```
[INPUT]
    ↓
[Elaborazione]
    ↓
[OUTPUT]
```

---

## Vedi anche

- [link ad ADR correlate]
- [link a SOP di utilizzo]

---

*Architettura — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 5 — Workflow

**File:** `templates/workflow-template.md`
**Scopo:** Rappresentare un processo con inizio, fine, passaggi intermedi, punti di decisione e possibili errori. Complementare alla SOP (che è testuale): il workflow è visivo.
**Quando:** Per ogni processo che ha più di 3 passaggi o che prevede decisioni condizionali.
**Naming:** `knowledge-core/processi/workflow/workflow-[processo].md`

```markdown
# Workflow — [Nome processo]

**Versione:** 1.0
**Data:** AAAA-MM-GG
**Attori coinvolti:** CEO | Developer | AI | Sistema automatico
**SOP correlata:** [link se esiste]

---

## LIVELLO 1 — Il percorso in parole semplici

[Descrivi il processo come un viaggio: "Prima si fa X, poi succede Y,
 se va bene arriva Z, altrimenti si fa W."]

## LIVELLO 2 — Diagramma del flusso

```
[INIZIO]
    ↓
[Passo 1: descrizione]
    ↓
[Decisione: condizione?]
    ├─ SÌ → [Passo 2a: percorso positivo]
    │           ↓
    │       [Passo 3a]
    │           ↓
    │       [FINE PERCORSO A]
    │
    └─ NO  → [Passo 2b: percorso alternativo]
                ↓
            [FINE PERCORSO B]
```

## LIVELLO 3 — Dettaglio tecnico per ogni passo

### Passo 1 — [Nome]
**Chi / cosa esegue:** [sistema o persona]
**Input:** [cosa riceve]
**Output:** [cosa produce]
**Possibili errori:** [cosa può andare storto]
**Se errore:** [cosa fare]

### Passo 2a — [Nome]
[Stesso schema]

---

## Vedi anche

- [link a SOP correlata]
- [link a checklist QA]

---

*Workflow — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 6 — Riunione / Meeting Notes

**File:** `templates/riunione-template.md`
**Scopo:** Catturare le decisioni prese, le azioni assegnate e i partecipanti di ogni incontro. Non è una trascrizione — è un registro di decisioni e impegni.
**Quando:** Dopo ogni riunione in cui vengono prese decisioni o assegnate azioni.
**Naming:** `knowledge-core/riunioni/AAAA-MM-GG-[slug]-riunione.md`

```markdown
# Riunione — [Titolo / Argomento principale]

**Data:** AAAA-MM-GG
**Partecipanti:** [lista]
**Durata:** [X ore/minuti]
**Tipo:** STRATEGICA | OPERATIVA | REVISIONE | SPRINT PLANNING | REVIEW

---

## Decisioni prese

| # | Decisione | Motivazione | ADR necessario? |
|---|---|---|---|
| 1 | [Decisione] | [Perché] | Sì → [NNN] / No |

## Azioni assegnate

| # | Azione | Responsabile | Scadenza | Stato |
|---|---|---|---|---|
| 1 | [Azione concreta] | [Chi] | AAAA-MM-GG | APERTA |

## Argomenti discussi (senza decisione finale)

- **[Argomento 1]:** [Sintesi discussione — perché non si è deciso]
- **[Argomento 2]:** [Sintesi]

## Prossima riunione

**Data:** [AAAA-MM-GG o "da definire"]
**Argomenti da portare:**
- [ ] [Punto aperto da questa riunione]
- [ ] [Nuovo argomento]

---

*Riunione — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 7 — QA Checklist

**File:** `templates/qa-checklist-template.md`
**Scopo:** Verifica sistematica prima di ogni operazione critica. Elimina gli errori da distrazione. Non si pubblica, non si fa deploy, non si lancia senza checklist completata.
**Quando:** Prima di ogni operazione che, se sbagliata, causa danni difficili da correggere.
**Naming:** `knowledge-core/qa/checklist-[oggetto].md`

```markdown
# QA Checklist — [Nome operazione]

**Versione:** 1.0
**Data:** AAAA-MM-GG
**Quando usare:** Prima di ogni [operazione]
**Chi esegue:** [Ruolo]
**Tempo stimato:** [X minuti]

---

## Pre-flight check

Verifica PRIMA di iniziare:

- [ ] [Condizione 1 — es. "backup fatto"]
- [ ] [Condizione 2 — es. "ambiente di test verificato"]
- [ ] [Condizione 3]

## Durante l'esecuzione

- [ ] [Step verificabile 1]
- [ ] [Step verificabile 2]
- [ ] [Step verificabile 3]

## Post-esecuzione

Verifica DOPO aver completato:

- [ ] [Risultato atteso 1 verificato]
- [ ] [Risultato atteso 2 verificato]
- [ ] [Nessun errore nei log]

---

## In caso di fallimento

**Stop condition:** [Quando fermarsi immediatamente]

**Come fare rollback:**
[Istruzioni specifiche per tornare alla situazione precedente]

**Chi avvisare:** [nome/ruolo]

**Link al postmortem da compilare:** [link a template postmortem]

---

*QA Checklist — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 8 — Lezione Appresa

**File:** `templates/lezione-template.md`
**Scopo:** Trasformare ogni errore o scoperta in conoscenza permanente e ricercabile. Una lezione documentata è un errore che non si ripete.
**Quando:** Sempre a seguito di un postmortem, o ogni volta che si scopre qualcosa di non ovvio che vale la pena ricordare.
**Naming:** `knowledge-core/lezioni-apprese/AAAA-MM-GG-[slug]-lezione.md`

```markdown
# Lezione Appresa — [Titolo breve e diretto]

**Data:** AAAA-MM-GG
**Fonte:** Postmortem | Sessione di lavoro | Sperimentazione | Feedback utente
**Link postmortem:** [link o "N/A"]
**Tag:** [sicurezza | api | newsletter | blog | engine-unit | deploy | ...]

---

## LIVELLO 1 — La lezione in una frase

> [Una frase che cattura l'essenza. Deve essere diretta e memorabile.]

## LIVELLO 2 — Cosa è successo

[2-3 righe di contesto: cosa stava succedendo, cosa è andato storto
 o cosa è stato scoperto di non ovvio]

## LIVELLO 3 — Come cambia il nostro modo di lavorare

**Prima (come facevamo):**
[Descrizione del comportamento precedente]

**Dopo (come facciamo ora):**
[Descrizione del nuovo comportamento]

**Dove è documentato il cambiamento:**
- [ ] SOP aggiornata: [link]
- [ ] Template aggiornato: [link]
- [ ] ADR creato: [link]
- [ ] Checklist aggiornata: [link]

---

*Lezioni Apprese — Entrate Extra Knowledge Core*
```

---

### TEMPLATE 9 — Deployment

**File:** `templates/deployment-template.md`
**Scopo:** Documentare esattamente come rilasciare in produzione un sistema o un aggiornamento, in modo riproducibile e sicuro.
**Quando:** Ogni volta che viene introdotto un nuovo sistema o cambia significativamente la procedura di rilascio di uno esistente.
**Naming:** `knowledge-core/deployment/deployment-[piattaforma].md`

```markdown
# Deployment — [Nome sistema / componente]

**Versione:** 1.0
**Data:** AAAA-MM-GG
**Piattaforma:** Vercel | GitHub | GHL | ...
**Frequenza deploy:** Continua (push to main) | Manuale | Programmata
**Ambiente:** PRODUZIONE | STAGING | ENTRAMBI

---

## LIVELLO 1 — Come si aggiorna il sistema

[Spiega come se stessi descrivendo come si aggiorna un'app sul telefono.
 Niente tecnico — solo l'idea generale del processo.]

## LIVELLO 2 — Prerequisiti

- [ ] Accesso a [piattaforma] con ruolo [ruolo]
- [ ] Variabili d'ambiente configurate (vedi [RUNBOOK.md])
- [ ] Branch corretto: `[nome branch]`
- [ ] Checklist QA completata: [link]

## LIVELLO 3 — Procedura di deploy

### Step 1 — Verifica locale

```bash
[comandi di verifica]
```

**Risultato atteso:** [cosa deve mostrare il terminale]

### Step 2 — Deploy

```bash
[comandi di deploy]
```

**Risultato atteso:** [URL o conferma]

### Step 3 — Verifica post-deploy

- [ ] [URL di produzione risponde correttamente]
- [ ] [Funzionalità critica X verificata manualmente]
- [ ] [Nessun errore nei log]

---

## Rollback

**Come tornare alla versione precedente:**

```bash
[comandi rollback]
```

**Tempo stimato rollback:** [X minuti]

---

## Vedi anche

- [link a checklist QA correlata]
- [link a RUNBOOK.md sezione rilevante]

---

*Deployment — Entrate Extra Knowledge Core*
```

---

## PARTE 5 — SISTEMA DI COLLEGAMENTO TRA DOCUMENTI

### 5.1 — REGISTRY.md (Indice globale)

Il file `knowledge-core/REGISTRY.md` è l'indice di tutto il KC.
Va aggiornato ogni volta che viene creato un documento.

```markdown
# REGISTRY — Entrate Extra Knowledge Core

**Ultimo aggiornamento:** AAAA-MM-GG
**Totale documenti:** [N]

---

## Documenti per sezione

### Constitution
- [vision.md](constitution/vision.md) — Vision dell'ecosistema Entrate Extra
- [mission.md](constitution/mission.md) — Missione e perché esistiamo

### Architettura
- [panoramica.md](architettura/panoramica.md) — Mappa tecnica completa

### Decisioni Strategiche (ADR)
- [001-...](decisioni-strategiche/001-github-single-source-of-truth.md)

[...e così via per ogni sezione]

---

## Ricerca per tag

| Tag | Documenti correlati |
|---|---|
| sicurezza | [sicurezza.md](architettura/sicurezza.md), [sop-rotazione-api-key.md](...) |
| newsletter | [...] |
| cgv | [...] |
| api | [...] |
```

### 5.2 — CHANGELOG.md (Log globale modifiche KC)

Il file `knowledge-core/CHANGELOG.md` registra ogni modifica significativa al KC come sistema.

```markdown
# CHANGELOG — Knowledge Core

Formato: [Semantic Versioning](https://semver.org/) applicato a documenti.

## [2.0.0] — AAAA-MM-GG
### Aggiunto
- `architettura/` — nuova sezione
### Modificato
- `templates/` — aggiunto adr-template, sop-template, etc.

## [1.0.0] — 2026-06-26
### Aggiunto
- Foundation Freeze — struttura base del Knowledge Core
```

### 5.3 — Link interni e sezione "Vedi anche"

Ogni documento termina con una sezione **Vedi anche** che linka i documenti correlati.

**Formato dei link:** Markdown standard `[testo](percorso/relativo.md)`

**Regola:** Almeno un link in ogni documento. Un documento isolato è un documento a rischio di essere dimenticato.

### 5.4 — Regola di creazione documento

Ogni volta che si crea un nuovo documento:

1. Aggiungerlo al `REGISTRY.md` nello stesso commit
2. Aggiungere una riga al `CHANGELOG.md`
3. Aggiornare i link "Vedi anche" nei documenti correlati

---

## PARTE 6 — GARANZIA DI DOCUMENTAZIONE CONTINUA

### 6.1 — La regola del commit

**Nessuna modifica è conclusa finché non è documentata.**

Ogni commit che modifica il Knowledge Core deve:

1. Aggiornare il frontmatter del documento (data, versione se cambia)
2. Aggiungere riga al `CHANGELOG.md`
3. Se documento nuovo: aggiungerlo al `REGISTRY.md`
4. Se decisione significativa: creare ADR in `decisioni-strategiche/`

### 6.2 — Trigger obbligatori per documentazione

| Evento | Documento obbligatorio | Scadenza |
|---|---|---|
| Bug critico risolto | Postmortem + Lezione appresa | Entro 48 ore |
| Decisione strategica approvata | ADR | Stesso giorno |
| Nuovo processo ricorrente (3+ ripetizioni) | SOP | Prima della 4ª ripetizione |
| Nuovo componente tecnico | Documento in architettura/ | Prima del deploy |
| Deploy in produzione | QA Checklist compilata | Prima del deploy |
| Riunione con decisioni | Meeting notes | Entro 24 ore |
| Nuova Engine Unit | Tutti i doc Blueprint v0.2 | Prima del lancio |
| Cambio API key / credenziali | SOP rotazione + RUNBOOK aggiornato | Stesso giorno |

### 6.3 — Il Session Report come cattura continua

Il Session Report è il meccanismo di cattura automatica durante il lavoro.
Ogni sessione produce un Session Report che registra:

- Cosa è stato fatto
- Problemi risolti
- Decisioni prese
- Task aperti

Il Session Report è grezzo e narrativo. Il suo scopo è **non perdere nulla nell'immediato**.
I contenuti rilevanti vengono poi promossi ai documenti permanenti appropriati (ADR, SOP, Postmortem, etc.).

```
Session Report (cattura immediata)
    ↓
Decisioni → ADR in decisioni-strategiche/
Processi  → SOP in processi/sop/
Bug       → Postmortem in postmortem/
           → Lezione in lezioni-apprese/
```

---

## PARTE 7 — ESPORTABILITÀ DEI DOCUMENTI

### 7.1 — Il formato Markdown come garanzia di libertà

**Tutti i documenti del KC sono in Markdown (.md) — formato aperto, nessuna dipendenza.**

Markdown è:
- Leggibile da qualsiasi editor di testo, anche Blocco Note
- Convertibile in qualsiasi formato senza perdita di informazioni
- Compatibile con Git per il versionamento automatico
- Ingeribile direttamente dai modelli AI (Claude, ChatGPT, etc.)
- Non dipendente da nessuna piattaforma

### 7.2 — Compatibilità con strumenti esistenti e futuri

| Strumento | Compatibilità | Note |
|---|---|---|
| GitHub | Nativa | Rendering Markdown automatico |
| Obsidian | Nativa | Link `[[wiki-style]]` supportati |
| Notion | Import Markdown | Flusso: export zip → import |
| Confluence | Plugin Markdown | Richiede plugin |
| VS Code | Nativa | Preview integrato |
| Claude / ChatGPT | Nativa | Ingeribile direttamente come context |
| PDF | Via pandoc | `pandoc input.md -o output.pdf` |
| Word / Google Docs | Via pandoc | `pandoc input.md -o output.docx` |

### 7.3 — Export script (da costruire in KC v3.0)

Quando necessario, uno script `scripts/export-kc.sh` permetterà:

```bash
./export-kc.sh pdf constitution/      # esporta sezione in PDF
./export-kc.sh zip knowledge-core/    # esporta tutto come archivio
./export-kc.sh html architettura/     # esporta sezione come sito HTML
```

### 7.4 — Backup e ridondanza

| Layer | Tipo | Frequenza |
|---|---|---|
| GitHub repository | Cloud + versioning | Ogni commit |
| Clone locale | Locale | Ogni pull |
| GitHub Actions export (KC v3.0) | PDF automatico | Ogni commit su main |

---

## PARTE 8 — RICOSTRUIBILITÀ A LUNGO TERMINE

### 8.1 — Principio di indipendenza tecnologica

I documenti del KC devono essere comprensibili anche tra 10 anni, quando:
- Vercel potrebbe non esistere più
- GoHighLevel potrebbe essere stato sostituito
- React potrebbe essere obsoleto
- Claude potrebbe essere una versione molto diversa

**Come garantirlo — 5 regole:**

1. **Concetto prima della tecnologia**: sempre "il sistema di gestione contatti (GoHighLevel / GHL)" non solo "GHL"
2. **Acronimi sempre espansi alla prima menzione**: GHL → GoHighLevel, CRM → Customer Relationship Management
3. **Screenshot e diagrammi salvati in assets/**: mai linkati da URL esterni che potrebbero scadere
4. **URL sempre contestualizzati**: non solo il link, ma spiegazione di cosa è e cosa fa
5. **LIVELLO 1 sempre technology-agnostic**: il primo livello deve essere comprensibile senza conoscere nessuna tecnologia

### 8.2 — Contesto storico in ogni documento

Ogni documento deve indicare in quale fase era l'azienda al momento della scrittura.

```
**Contesto storico:** Scritto durante Fase 1 (Fondamenta), luglio 2026.
Tecnologie attive: Vercel (serverless), GoHighLevel (CRM), Base44 (frontend),
GitHub (versionamento).
```

### 8.3 — Glossario (da costruire in KC v2.0)

`knowledge-core/glossario.md` — dizionario di tutti i termini usati nel KC:

```markdown
## [Termine]
**Definizione semplice:** [cosa è in parole comuni]
**Definizione tecnica:** [cosa è tecnicamente]
**Sinonimi e abbreviazioni:** [es. GHL = GoHighLevel = CRM]
**Introdotto:** [data]
**Contesto:** [in quale ambito del progetto si usa]
```

---

## PARTE 9 — PREVENZIONE PERDITA DI CONOSCENZA

### 9.1 — Le 5 cause di perdita di conoscenza

| Causa | Conseguenza | Prevenzione nel KC |
|---|---|---|
| Dipendenza dalla memoria umana | Il CEO dimentica — la conoscenza sparisce | "Se non è scritto qui, non esiste" |
| Dipendenza da una piattaforma | La piattaforma chiude — la conoscenza sparisce | Formati aperti, backup multipli |
| Documentazione incompleta | Non si può ricostruire il processo | Template obbligatori, trigger documentazione |
| Documentazione obsoleta | La conoscenza è sbagliata, peggio che assente | Data + versione su ogni documento |
| Conoscenza tacita | Solo chi ha l'esperienza sa — non si trasferisce | Session Report come cattura continua |

### 9.2 — Il test del camion (Bus Factor = 1)

**Domanda di test:** "Se domani il CEO viene investito da un camion, qualcuno potrebbe ricostruire Entrate Extra partendo solo dal Knowledge Core?"

La risposta deve essere sempre **SÌ**.

**Come verificarlo:**
- `RUNBOOK.md` contiene tutto per onboardare un nuovo CTO/developer?
- `constitution/` definisce l'identità permanente dell'azienda?
- `architettura/` documenta ogni componente tecnico attivo?
- `processi/sop/` documenta ogni operazione ripetuta?
- `decisioni-strategiche/` spiega ogni scelta significativa fatta?

Se la risposta a una di queste domande è "no", il KC ha un gap da colmare.

### 9.3 — Review trimestrale del KC

Ogni trimestre, una sessione dedicata a:

- [ ] Verificare che tutti i documenti abbiano data aggiornata
- [ ] Rimuovere o archiviare documenti obsoleti (stato → ARCHIVIATO)
- [ ] Aggiungere SOP per processi diventati ricorrenti
- [ ] Aggiornare il REGISTRY per nuovi documenti
- [ ] Aggiornare il RUNBOOK se la tecnologia è cambiata
- [ ] Rispondere al test del camion

---

## PARTE 10 — IL KC COME MEMORIA PERMANENTE E CONTESTO AI

### 10.1 — I tre strati di conoscenza

```
STRATO 1 — IMMUTABILE
Constitution: chi siamo, perché esistiamo, i principi
Cambia raramente. È la nostra identità.

STRATO 2 — STABILE
Architettura, Standard, Processi, Engine Units Blueprint
Cambia quando cambia la struttura del business.
Frequenza: mensile o trimestrale.

STRATO 3 — DINAMICO
Session Report, Roadmap, Dashboard, KPI
Cambia continuamente.
Frequenza: ogni sessione di lavoro.
```

### 10.2 — MASTER_PROMPT (da costruire in KC v3.0)

`knowledge-core/MASTER_PROMPT.md` — un documento speciale che sintetizza tutto il KC nel formato ottimale per essere copiato come system prompt in una nuova sessione AI.

Scopo: garantire continuità di contesto tra sessioni diverse, anche con un modello AI che non ha memoria della sessione precedente.

Struttura del MASTER_PROMPT:
1. Chi è Entrate Extra (5 righe — da Constitution)
2. Struttura tecnologica attuale (10 righe — da architettura/)
3. Engine Units attive e stato (lista — da engine-units/)
4. Processi chiave attivi (lista — da processi/sop/)
5. Decisioni strategiche rilevanti (lista — da decisioni-strategiche/)
6. Task aperti e roadmap (lista — da roadmap/)

### 10.3 — Evoluzione prevista del KC

| KC Version | Target | Obiettivo principale |
|---|---|---|
| v1.0 | Luglio 2026 (in produzione) | Foundation: constitution, CGV, RUNBOOK |
| v2.0 | Q3 2026 | Architettura + postmortem + SOP + templates + REGISTRY |
| v3.0 | Q4 2026 | Standards completi + glossario + MASTER_PROMPT + export script |
| v4.0+ | 2027+ | Aggiornamento automatico via AI agents |

---

## PARTE 11 — PIANO DI IMPLEMENTAZIONE

> Nessuna delle azioni seguenti verrà eseguita senza autorizzazione esplicita del CEO.

### FASE A — Consolidamento KC v2.0 (PRIORITÀ ALTA)

| # | Azione | Output | Sessioni stimate |
|---|---|---|---|
| A1 | Creare `knowledge-core/REGISTRY.md` | Indice globale | 1 |
| A2 | Creare `knowledge-core/CHANGELOG.md` | Log modifiche KC | 30 min |
| A3 | Creare tutti i template standard (8) | `templates/*.md` | 1 sessione |
| A4 | Creare sezione `architettura/` con panoramica attuale | 6 file architettura | 2 sessioni |
| A5 | Primo postmortem: bug form newsletter | `postmortem/2026-07-02-form-newsletter-postmortem.md` | 1 ora |
| A6 | Prima lezione appresa: HTTP 200 sempre | `lezioni-apprese/2026-07-02-api-http-200-lezione.md` | 30 min |
| A7 | Creare `knowledge-core/glossario.md` | Glossario base | 1 sessione |

### FASE B — Espansione KC v2.0 (PRIORITÀ MEDIA)

| # | Azione | Output | Sessioni stimate |
|---|---|---|---|
| B1 | SOP pubblicazione articolo | `processi/sop/sop-pubblicazione-articolo.md` | 1 ora |
| B2 | SOP invio newsletter | `processi/sop/sop-invio-newsletter.md` | 1 ora |
| B3 | SOP rotazione API key | `processi/sop/sop-rotazione-api-key.md` | 1 ora |
| B4 | QA checklist pubblicazione articolo | `qa/checklist-pubblicazione-articolo.md` | 30 min |
| B5 | QA checklist deploy Vercel | `qa/checklist-deploy-vercel.md` | 30 min |
| B6 | Deployment Vercel | `deployment/deployment-vercel.md` | 1 ora |
| B7 | ADR formali per decisioni 001-003 | `decisioni-strategiche/00[1-3]-*.md` | 1 sessione |

### FASE C — Maturità KC v3.0 (PRIORITÀ BASSA — futuro)

| # | Azione | Note |
|---|---|---|
| C1 | Standards completi (5 file) | standard-editoriale, standard-seo, etc. |
| C2 | MASTER_PROMPT.md | Contesto ottimale per sessioni AI |
| C3 | Export script `scripts/export-kc.sh` | Richiede sviluppo |
| C4 | Review trimestrale automatica | Processo ricorrente |
| C5 | GitHub Actions export PDF | Richiede configurazione CI/CD |

---

## APPENDICE — I 10 PRINCIPI DEL KNOWLEDGE CORE

| # | Principio | Applicazione pratica |
|---|---|---|
| 1 | La conoscenza vale quanto il codice | Il KC è un asset, non un archivio |
| 2 | Nessuna modifica è conclusa finché non è documentata | Ogni commit porta documentazione |
| 3 | Ogni decisione deve essere tracciata | ADR per ogni scelta significativa |
| 4 | Ogni bug deve produrre una lezione appresa | Postmortem + Lezione entro 48 ore |
| 5 | Ogni architettura deve essere documentata | Se non è in architettura/, non esiste |
| 6 | Ogni workflow deve essere ricostruibile | SOP per ogni processo ricorrente |
| 7 | Ogni documento deve essere comprensibile anche da un bambino di 10 anni | 3 livelli sempre: semplice, operativo, tecnico |
| 8 | Mai dipendere da una singola piattaforma | Formati aperti, backup multipli |
| 9 | Usare formati aperti e facilmente esportabili | Markdown, Git, testo semplice |
| 10 | Il KC rappresenta il patrimonio permanente di Entrate Extra | Va trattato con la stessa cura del codice |

---

*KNOWLEDGE_CORE_MASTER_PLAN.md — Entrate Extra Operating System*
*Versione 1.0 — Approvato il 2 luglio 2026*
*Autori: CEO (Ernesto Carlo) + Lead Software Architect / Knowledge Architect (Claude)*
