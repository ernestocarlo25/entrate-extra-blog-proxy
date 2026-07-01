# Agenti AI — Come Guadagnare Viaggiando

**Versione:** 0.1  
**Stato:** Ereditato da Blueprint v0.1  
**Ultimo aggiornamento:** 1 luglio 2026

---

## Agenti assegnati

Ogni BU opera con tre agenti AI. Gli scope generali sono definiti nel Blueprint v0.1. Qui si documentano le istruzioni specifiche per questa BU.

---

### Agente 1 — CTO

**Scope generale:** sviluppo tecnico, configurazione sistemi, deploy, debug  
**Istruzioni specifiche per CGV:**

- Stack da usare: identico a Entrate Extra (GHL + Vercel + GitHub)
- Repository: DA DEFINIRE (cartella in `entrate-extra-blog-proxy` o repository separato?)
- Endpoint da configurare: `/api/subscribe`, `/api/publish`, `/api/newsletter`
- Tag CRM da usare: `newsletter-come-guadagnare-viaggiando`

**Limite:** nessun deploy in produzione senza approvazione CEO.

---

### Agente 2 — Editor

**Scope generale:** ricerca, scrittura contenuti, newsletter, archiviazione fonti  
**Istruzioni specifiche per CGV:**

- Tono di voce: DA DEFINIRE (dipende da brand.md)
- Categorie di contenuto: DA DEFINIRE (dipende da piano-editoriale.md)
- Standard editoriale: identico a Entrate Extra (da `knowledge-core/standards/`)
- Archivio fonti: file separato `data/cgv-newsletter-sources.json`

**Limite:** nessuna pubblicazione senza approvazione CEO.  
**Standard obbligatorio:** ogni link esterno verificato prima della pubblicazione.

---

### Agente 3 — Analista

**Scope generale:** ricerca di mercato, verifica fonti, analisi metriche  
**Istruzioni specifiche per CGV:**

- Priorità di ricerca Fase 0: mappatura competitiva nel settore travel blogging e business di viaggio italiano
- KPI da monitorare: i 7 standard definiti in kpi.md
- Report: aggiornare kpi.md dopo ogni revisione mensile

**Limite:** le analisi sono input per il CEO, non decisioni autonome.

---

## Come attivare un agente

Non servono sistemi separati. Il CEO apre una sessione con Claude e specifica il ruolo attivo:

> *"Agisci come Editor di Come Guadagnare Viaggiando. Il brand è [descrizione]. Lo standard editoriale è quello di Entrate Extra."*

L'agente opera nel contesto specificato per tutta la sessione.

---

*Istruzioni specifiche da completare dopo la definizione di brand.md e piano-editoriale.md*
