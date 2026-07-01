# NAMING POLICY — Entrate Extra Operating System

**Versione:** 1.0  
**Data:** 1 luglio 2026  
**Stato:** Approvata  
**Scope:** Tutti i file e le cartelle del Knowledge Core

---

> **Regola fondamentale**  
> Un nome deve essere autoesplicativo senza contesto aggiuntivo. Se devi aprire un file per capire cosa contiene, il nome è sbagliato.

---

## Lingua

**Italiano** per tutti i nomi di file e cartelle, salvo le eccezioni elencate di seguito.

**Eccezioni ammesse — termini inglesi mantenuti:**
- Nomi di file speciali con convenzione consolidata: `README.md`, `BLUEPRINT.md`, `RUNBOOK.md`, `NAMING_POLICY.md`
- Termini tecnici senza equivalente italiano funzionale: `kpi`, `funnel`, `avatar`
- Documenti della Constitution (già creati in inglese e congelati): `vision.md`, `mission.md`, `principles.md`, `governance.md`

**Non ammesso:** mescolare italiano e inglese nello stesso nome (`piano-editorial.md`, `brand-identity.md`).

---

## 1. Cartelle

**Formato:** `lowercase-kebab-case`  
**Lingua:** italiano  
**Nessun numero progressivo nel nome della cartella**

```
✅ engine-units/
✅ decisioni-strategiche/
✅ session-report/
✅ operating-blueprint/

❌ BusinessUnits/
❌ Decisioni Strategiche/
❌ session_report/
❌ 01-engine-units/
```

---

## 2. Documenti standard

**Formato:** `lowercase-kebab-case.md`  
**Lingua:** italiano  

```
✅ proposta-di-valore.md
✅ piano-editoriale.md
✅ revenue-model.md
✅ customer-journey.md

❌ PropostaDiValore.md
❌ piano_editoriale.md
❌ PianoEditoriale.md
```

**Eccezione — documenti meta del Knowledge Core:**  
Usano ALLCAPS per distinguersi visivamente come documenti di sistema:

```
✅ README.md
✅ BLUEPRINT.md
✅ RUNBOOK.md
✅ NAMING_POLICY.md
```

---

## 3. Engine Unit

**Nome visualizzato:** Italiano, con maiuscole sui sostantivi principali  
**Slug (cartella e tag CRM):** `lowercase-kebab-case`, italiano

```
✅ Nome visualizzato: "Come Guadagnare Viaggiando"
✅ Slug cartella: come-guadagnare-viaggiando/
✅ Tag CRM: newsletter-come-guadagnare-viaggiando

✅ Nome visualizzato: "Oro Reale"
✅ Slug cartella: oro-reale/
✅ Tag CRM: newsletter-oro-reale
```

**Regola tag CRM:** sempre `newsletter-[slug-eu]`, senza variazioni.

---

## 4. Standard

**Formato:** `standard-[nome].md`  
**Posizione:** `knowledge-core/standards/`

```
✅ standard-editoriale.md
✅ standard-seo.md
✅ standard-visivo.md
✅ standard-newsletter.md
✅ standard-tecnico.md

❌ editoriale-standard.md
❌ StandardEditoriale.md
```

---

## 5. Template

**Cartella template:** `[tipo]-template/`  
**File interni al template:** stesso naming dei documenti standard

**Posizione:** `knowledge-core/templates/`

```
✅ templates/engine-unit-template/
✅ templates/newsletter-template/
✅ templates/articolo-template/

❌ templates/BUTemplate/
❌ templates/template-bu/
```

---

## 6. Prompt

**Formato:** `prompt-[task].md`  
**Posizione:** `knowledge-core/prompts/`

Il `[task]` descrive l'output atteso, non il processo:

```
✅ prompt-articolo-blog.md       (output: articolo del blog)
✅ prompt-newsletter-analisi.md  (output: sezione analisi newsletter)
✅ prompt-immagine-blog.md       (output: immagine per blog)
✅ prompt-session-report.md      (output: session report)

❌ prompt-scrittura-articolo.md  (descrive il processo, non l'output)
❌ articolo-blog-prompt.md
```

---

## 7. Decisioni Strategiche (ADR)

**Formato:** `[NNN]-[slug].md`  
**NNN:** numero progressivo a 3 cifre, zero-padded  
**Slug:** italiano, kebab-case, descrive la decisione (non il numero)

**Posizione:** `knowledge-core/decisioni-strategiche/`

```
✅ 001-github-single-source-of-truth.md
✅ 002-constitution-sostituisce-manifesto.md
✅ 003-brand-come-patrimonio.md

❌ decisione-001.md
❌ github.md
❌ 1-github.md   (non zero-padded)
```

---

## 8. Session Report

**Formato:** `AAAA-MM-GG-[slug].md`  
**AAAA-MM-GG:** data di inizio della sessione, non di redazione del report  
**Slug:** italiano, kebab-case, descrive il tema principale della sessione

**Posizione:** `knowledge-core/session-report/`

```
✅ 2026-06-26-entrate-extra-os-fondazione.md
✅ 2026-07-15-newsletter-02-investimenti.md
✅ 2026-08-01-migrazione-cloudflare-r2.md

❌ session-report-01.md          (non ha data)
❌ 26-06-2026-fondazione.md      (formato data sbagliato)
❌ 2026-06-26.md                 (nessuno slug)
```

---

## 9. File di dati

**Formato:** `[nome]-[tipo].json`  
**Posizione:** `data/`

```
✅ newsletter-sources.json
✅ posts-content.json

❌ newsletterSources.json
❌ sources.json   (troppo generico)
```

---

## Tabella riepilogativa

| Categoria | Formato | Esempio |
|---|---|---|
| Cartella | `lowercase-kebab-case` | `engine-units/` |
| Documento standard | `lowercase-kebab-case.md` | `proposta-di-valore.md` |
| Documento meta | `ALLCAPS.md` | `RUNBOOK.md` |
| Engine Unit slug | `lowercase-kebab-case` | `come-guadagnare-viaggiando` |
| Tag CRM | `newsletter-[slug-eu]` | `newsletter-oro-reale` |
| Standard | `standard-[nome].md` | `standard-editoriale.md` |
| Template cartella | `[tipo]-template/` | `engine-unit-template/` |
| Prompt | `prompt-[task].md` | `prompt-articolo-blog.md` |
| ADR | `[NNN]-[slug].md` | `001-github-single-source-of-truth.md` |
| Session Report | `AAAA-MM-GG-[slug].md` | `2026-06-26-os-fondazione.md` |
| File dati | `[nome]-[tipo].json` | `newsletter-sources.json` |

---

## Documenti esclusi da questa policy

I seguenti documenti sono già congelati e non vengono modificati per adeguarli a questa policy:

- `knowledge-core/constitution/` — vision.md, mission.md, principles.md, governance.md (inglese, congelati)
- `knowledge-core/templates/engine-unit-template/` — template Engine Unit congelato al Blueprint v0.2
- `knowledge-core/operating-blueprint/RUNBOOK.md` — congelato alla v0.1

Tutti i nuovi documenti creati dopo l'approvazione di questa policy devono rispettarla.

---

*NAMING POLICY v1.0 — Entrate Extra Operating System*
