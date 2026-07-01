# Session Report — Fondazione dell'Entrate Extra Operating System

**Data:** 26 giugno – 1 luglio 2026  
**Partecipanti:** CEO (Ernesto Carlo), AI (Claude — ruoli CTO / Editor / Analista)  
**Durata stimata:** 3+ sessioni di lavoro  
**Tipo:** Sessione fondativa — prima volta che viene costruito il sistema

---

## Contesto di partenza

Il progetto esisteva già: blog Entrate Extra su FASTER (GoHighLevel), repository GitHub `entrate-extra-blog-proxy` con endpoint Vercel per iscrizioni e pubblicazione. Piano editoriale definito (16 articoli, struttura Pillar + Cluster per Network Marketing).

L'obiettivo iniziale era operativo (newsletter + contenuti). A metà sessione il CEO ha emesso il mandato CTO, trasformando la sessione in una sessione fondativa dell'Operating System.

---

## Cosa è stato fatto

### Fase A — Operativa (pre-mandato)

**Welcome email:**
- Migliorata leggibilità: font sans-serif, testo #e8e8e8, body 17px, footer 13px/#888888
- Aggiunto parametro `testEmail` per preview senza invio reale

**Cluster B Network Marketing:**
- Articolo "Piano di compensazione nel Network Marketing" pubblicato
- Immagine errata (donna con pane generata da Imagen 4) identificata e corretta
- Prompt finale: documento A4 con albero binario e percentuali in oro, senza persone
- Immagine finale: `https://files.catbox.moe/r0zr8v.png`

**Sistema newsletter L'Osservatorio:**
- Template HTML dark/gold completo (background #0a0a0a, card #111111, oro #c9a84c)
- Endpoint `/api/newsletter.js` costruito con 5 sezioni, modalità test e invio reale
- Paginazione contatti GHL via `meta.nextPageUrl` (fix: il parametro `skip` causa 422)
- Filtro tag `newsletter-osservatorio` client-side (il filtro via query param GHL non funziona)
- Puntata #01 scritta con fonti verificate via WebSearch
- Puntata #01 inviata a 1 destinatario (ernestocarlo25@gmail.com, contactId: oa52HlndJ8jWoHNuUvLy)
- CTA cambiata da "Entra nella Community" a "Leggi il Blog" (community non esiste ancora)

**Archivio fonti:**
- `data/newsletter-sources.json` creato come archivio permanente fonti
- Puntata #01 archiviata con 4 fonti verificate (FTC, TrueList, Grand View Research)

---

### Fase B — Strategica (post-mandato CTO)

**Knowledge Core v1.0:**
- 14 cartelle create con README in ciascuna
- Struttura: manifesto, operating-blueprint, decisioni-strategiche, business-units (4 BU), ruoli, processi, dashboard, session-report, roadmap
- Commit: `feat: Knowledge Core v1.0 — governance structure`

**Foundation Freeze:**
- 5 cartelle aggiunte: constitution, standards, templates, prompts, assets
- constitution/ con 4 placeholder: vision.md, mission.md, principles.md, governance.md
- Commit: `feat: Knowledge Core — Foundation Freeze`

**Constitution v0.1:**
- `vision.md`: Business Operating Platform AI-Native, crescita distribuita, ecosistema multi-BU
- `mission.md`: strumenti, automazioni e agenti AI per persone comuni; controllo umano delle decisioni
- `principles.md`: i 10 principi dell'OS (Semplicità, Business Continuity, Single Source of Truth, No Single Platform Dependency, Modularità, Duplicabilità, Sicurezza, Documentazione, Versionamento, CEO Supervisiona)
- `governance.md`: ruoli CEO/AI, cosa richiede approvazione, KC come legge

**RUNBOOK v0.1:**
- Manuale operativo completo: architettura, servizi, env vars, flussi, sicurezza, chiavi API, backup, rischi noti, business continuity, disaster recovery, manutenzione, onboarding nuovo CTO

**Business Units Blueprint v0.1 → v0.2:**
- v0.1: struttura, documentazione, standard, dashboard, KPI, repository, asset, social, funnel, automazioni, agenti AI, 3 checklist
- v0.2: introdotti 3 stati (ESISTENTE / DA DOCUMENTARE / DA DEFINIRE), brand separato dalla sequenza come patrimonio, nuova sequenza a 9 step, aggiunto customer-journey.md, audience.md rinominato avatar.md

**Business Unit CGV (Come Guadagnare Viaggiando):**
- 9 file creati su Blueprint v0.1: README, brand, audience, funnel, revenue-model, piano-editoriale, kpi, automazioni, agenti-ai
- Aggiunto `proposta-di-valore.md` durante migrazione parziale a v0.2
- Nota: CGV avviata sulla v0.1, migrazione completata nello Sprint 1

**BU Template:**
- 12 file blank in `knowledge-core/templates/bu-template/`
- Pronti per clonazione su ogni nuova BU

---

## Decisioni prese

| # | Decisione | Motivazione |
|---|---|---|
| 1 | GitHub come Single Source of Truth | Versioning permanente, accessibile ovunque, gratuito |
| 2 | "Se non è scritto qui, non esiste" | Eliminare dipendenza dalla memoria delle persone |
| 3 | Constitution sostituisce il Manifesto | Evitare duplicazione di documenti fondativi |
| 4 | Brand = patrimonio, non step della roadmap | Un brand già esistente non si definisce, si censisce |
| 5 | Sequenza logica BU: vision → proposta → avatar → revenue → journey → funnel → editoriale → kpi → automazioni | Le dipendenze reali tra i documenti impongono questo ordine |
| 6 | 3 stati: ESISTENTE / DA DOCUMENTARE / DA DEFINIRE | Evitare confusione tra "non scritto" e "non esiste" |
| 7 | CTA newsletter → "Leggi il Blog" | La Community non esiste ancora |
| 8 | Fonti newsletter sempre verificate + archiviate | Episodio critico: link a contenuti non esistenti |

---

## Problemi risolti

| Problema | Causa | Soluzione |
|---|---|---|
| Immagine Cluster B sbagliata (donna con pane) | Prompt Imagen 4 troppo astratto | Prompt letterale: documento A4, albero binario, percentuali, nessuna persona |
| GHL pagination 422 error | Parametro `skip` non supportato | Sostituito con `meta.nextPageUrl` |
| Filtro tag GHL non funziona via query | Limitazione API GHL | Fetch tutti i contatti + filtro client-side |
| Newsletter inviata a 0 destinatari | Email CEO non presente come contatto GHL | Contatto creato manualmente via endpoint subscribe |
| Link newsletter a contenuti non esistenti | Creati senza verifica | Implementato WebSearch obbligatorio + archivio fonti |

---

## File creati o modificati

| File | Tipo | Operazione |
|---|---|---|
| `api/subscribe.js` | Tecnico | Modificato — welcome email migliorata |
| `api/publish.js` | Tecnico | Modificato — aggiunto supporto PUT (update) |
| `api/newsletter.js` | Tecnico | Creato — sistema newsletter completo |
| `data/newsletter-sources.json` | Dati | Creato — archivio fonti puntata #01 |
| `knowledge-core/` | Governance | Creato — 46 file, struttura OS completa |
| `faster/send_newsletter_01.py` | Script locale | Creato — script invio puntata #01 |
| `faster/update_cluster_b_image.py` | Script locale | Creato — script rigenerazione immagine |

---

## Cosa resta aperto

| Task | Priorità | Note |
|---|---|---|
| Completare CGV Vision e Customer Journey | Alta | Bloccato: richiede decisioni CEO su vision e revenue model |
| Drip sequence per nuovi iscritti | Media | Nuovi iscritti non ricevono le puntate precedenti |
| Migrazione immagini da catbox.moe a Cloudflare R2 | Media | Rischio identificato: nessuna garanzia di uptime |
| Creare standard/ (standard-editoriale.md etc.) | Media | Referenziati in Blueprint e agenti-ai.md ma non esistono |
| Rotazione Google AI Studio API key | Alta | Non ancora ruotata dalla sessione di fondazione |
| Popolare Entrate Extra BU con documenti Blueprint v0.2 | Media | Solo README.md esiste |
| Cluster C Network Marketing | Bassa | Pianificato nel piano editoriale |
| Newsletter puntata #02 (tema Investimenti) | Media | Target: 10 luglio 2026 |

---

*Session Report — Entrate Extra Operating System*  
*Questo documento è il primo Session Report del progetto.*
