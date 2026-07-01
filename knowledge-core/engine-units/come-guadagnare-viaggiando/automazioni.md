# Automazioni — Come Guadagnare Viaggiando

**Versione:** 0.1  
**Stato:** DA DEFINIRE  
**Ultimo aggiornamento:** 1 luglio 2026

---

## Automazioni obbligatorie (Fase 0) — da Blueprint v0.1

| Automazione | Trigger | Azione | Strumento | Stato |
|---|---|---|---|---|
| Welcome email | Nuova iscrizione newsletter | Invia email di benvenuto | GHL + Vercel `/api/subscribe` | DA DEFINIRE |
| Tag iscritto | Nuova iscrizione | Assegna tag `newsletter-come-guadagnare-viaggiando` | GHL | DA DEFINIRE |

---

## Automazioni raccomandate (Fase 1)

| Automazione | Trigger | Azione | Strumento | Stato |
|---|---|---|---|---|
| Drip sequence | Nuova iscrizione | Invia le ultime 3 puntate in 7 giorni | GHL workflow | DA DEFINIRE |
| Re-engagement | Nessuna apertura per 60 giorni | Email "ci sei ancora?" | GHL workflow | DA DEFINIRE |
| Conferma disiscrizione | Click su "annulla iscrizione" | Rimuove tag, invia conferma | GHL | DA DEFINIRE |

---

## Prerequisiti tecnici prima di attivare le automazioni

- [ ] Endpoint `/api/subscribe` configurato per questa Engine Unit
- [ ] Tag `newsletter-come-guadagnare-viaggiando` creato in GHL
- [ ] Welcome email scritta e testata
- [ ] Form di iscrizione attivo sul sito

---

## Note

Nessuna automazione è attiva su questa Engine Unit perché la Engine Unit non è ancora stata lanciata. Le automazioni verranno configurate nella fase di pre-lancio, contestualmente alla checklist di apertura.

---

*Automazioni da configurare — Fase 0, pre-lancio*
