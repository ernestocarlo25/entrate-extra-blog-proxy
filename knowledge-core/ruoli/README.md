# Ruoli — Chi Fa Cosa

**Cartella:** `knowledge-core/ruoli/`  
**Scopo:** Definire chiaramente ogni ruolo nell'azienda — umani e AI

---

## A cosa serve questa cartella

Un'azienda senza ruoli chiari è un'azienda dove tutti fanno tutto e nessuno è responsabile di niente.

Questa cartella definisce ogni **ruolo operativo** — chi lo ricopre, di cosa è responsabile, quali decisioni può prendere autonomamente e quali deve escalare al CEO.

---

## Ruoli dell'ecosistema Entrate Extra

### Ruoli umani

| Ruolo | Chi | Responsabilità principali |
|---|---|---|
| CEO | Ernesto Carlo | Visione, strategia, approvazione contenuti, decisioni finali |

*Altri ruoli umani da definire nella Fase 2*

### Ruoli AI

| Ruolo | Sistema | Responsabilità principali |
|---|---|---|
| CTO / Sviluppatore | Claude (AI) | Codice, architettura tecnica, deployment, debug |
| Editor / Copywriter | Claude (AI) | Ricerca, scrittura articoli, newsletter, SEO |
| Analista | Claude (AI) | Ricerca di mercato, verifica fonti, analisi dati |

---

## Regola fondamentale sui ruoli AI

L'AI **non decide mai in autonomia** su:
- Pubblicazione di contenuti (richiede approvazione CEO)
- Invio di email a lista reale (richiede approvazione CEO)
- Modifiche a codice in produzione (richiede conferma CEO)
- Spese o impegni economici

L'AI **può operare autonomamente** su:
- Ricerca e bozze di contenuti
- Analisi tecniche e proposte
- Test in ambiente sicuro (flag `--test`)
- Documentazione e reportistica

---

## Documenti da creare

| Documento | Contenuto |
|---|---|
| `ceo.md` | Responsabilità, autorità decisionale, priorità del CEO |
| `ai-cto.md` | Scope dell'AI in ruolo tecnico, limiti, protocollo di escalation |
| `ai-editor.md` | Scope dell'AI in ruolo editoriale, standard qualitativi |
| `onboarding.md` | Come introdurre un nuovo collaboratore (umano o AI) |

---

*Contenuto da popolare — Fase 2*
