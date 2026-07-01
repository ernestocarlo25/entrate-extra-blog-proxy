# Automazioni — [NOME_BU]

**Step:** 9 di 9  
**Dipende da:** kpi.md  
**Sblocca:** —  
**Stato:** [ ]  
**Ultimo aggiornamento:** [AAAA-MM-GG]

---

## Automazioni obbligatorie — Fase 0

| Automazione | Trigger | Azione | Strumento | Stato |
|---|---|---|---|---|
| Welcome email | Nuova iscrizione | Invia email di benvenuto | GHL + Vercel `/api/subscribe` | [ ] |
| Tag iscritto | Nuova iscrizione | Assegna tag `newsletter-[nome-bu]` | GHL | [ ] |

---

## Automazioni raccomandate — Fase 1

| Automazione | Trigger | Azione | Strumento | Stato |
|---|---|---|---|---|
| Drip sequence | Nuova iscrizione | Invia le ultime 3 puntate in 7 giorni | GHL workflow | [ ] |
| Re-engagement | Nessuna apertura 60gg | Email "ci sei ancora?" | GHL workflow | [ ] |
| Conferma disiscrizione | Click disiscrizione | Rimuove tag, invia conferma | GHL | [ ] |

---

## Automazioni avanzate — Fase 2+

| Automazione | Trigger | Azione | Stato |
|---|---|---|---|
| Lead scoring | Aperture + click | Punteggio contatto | [ ] |
| Upsell post-conversione | Primo acquisto | Sequenza prodotti correlati | [ ] |
| Segmentazione dinamica | Comportamento lettura | Tag automatici per interessi | [ ] |

---

## Prerequisiti tecnici

- [ ] Endpoint `/api/subscribe` configurato per questa BU
- [ ] Tag `newsletter-[nome-bu]` creato in GHL
- [ ] Welcome email scritta e testata
- [ ] Form di iscrizione attivo sul sito

---

*Step 9 — Sequenza logica completata*  
*Prossimo step: completare la checklist di apertura in [README.md](README.md)*
