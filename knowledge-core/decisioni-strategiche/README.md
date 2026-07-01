# Decisioni Strategiche — Il Registro delle Scelte Importanti

**Cartella:** `knowledge-core/decisioni-strategiche/`  
**Scopo:** Tenere memoria di ogni decisione importante e del perché è stata presa

---

## A cosa serve questa cartella

Ogni azienda prende decisioni ogni giorno. La maggior parte vengono dimenticate. Tra sei mesi, nessuno ricorda perché si è scelto una piattaforma invece di un'altra, perché si è abbandonata un'idea, perché si è cambiato un approccio.

Il Registro delle Decisioni Strategiche risolve questo problema.

Ogni volta che viene presa una **decisione rilevante** — su tecnologia, business model, partner, struttura organizzativa, investimenti — viene documentata qui con:
- il **contesto** in cui è stata presa
- le **opzioni considerate**
- la **scelta fatta** e perché
- le **conseguenze attese**

---

## Formato di ogni decisione (ADR — Architectural Decision Record)

Ogni decisione è un file separato con questo formato:

```
decisioni-strategiche/
├── 001-piattaforma-blog.md
├── 002-stack-tecnico.md
├── 003-newsletter-settimanale.md
└── ...
```

Ogni file segue questa struttura:

```markdown
# [001] Titolo della decisione

**Data:** AAAA-MM-GG  
**Stato:** Approvata / In valutazione / Revisionata  
**Decisore:** CEO / Team

## Contesto
Perché si è arrivati a questa scelta...

## Opzioni considerate
1. Opzione A — pro e contro
2. Opzione B — pro e contro

## Scelta
Abbiamo scelto [opzione] perché...

## Conseguenze
Cosa cambia. Cosa si guadagna. Cosa si perde.
```

---

## Perché questo approccio

Una decisione documentata bene vale quanto un anno di esperienza. Permette di:
- **Non ripetere gli stessi errori** — "già valutato, non funziona per questi motivi"
- **Onboardare velocemente** nuove persone o AI senza ripetere le stesse discussioni
- **Rivalutare** decisioni passate con nuove informazioni

---

*Contenuto da popolare — Fase 2*
