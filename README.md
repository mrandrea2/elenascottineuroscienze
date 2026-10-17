# Il cervello che impara

Web app per l'apprendimento interattivo di neuroscienze, apprendimento e metodo di studio.
Liceo Statale «Galileo Galilei» di Verona · Scienze motorie, liceo scientifico a indirizzo sportivo.
Contenuti a cura della prof.ssa Elena Scotti (© 2026, materiale didattico ad uso personale).

## Che cosa contiene

- 6 capitoli: la macchina, la memoria, le strategie, le mappe, leggere e appunti, il corpo che studia
- attività interattive in ogni capitolo (prove di memoria, esploratore del cervello, giochi di classificazione, piano di ripasso, timer…)
- verifica a libro chiuso per ogni capitolo e quiz finale
- strumenti (piano di ripasso, le cinque domande, checklist) e glossario con flashcard

## File

| File | A che cosa serve |
|---|---|
| `index.html` | la pagina |
| `style.css` | grafica: caratteri grandi, alto contrasto, tema chiaro e scuro automatico |
| `app.js` | contenuti e attività |
| `favicon.svg` | icona |
| `vercel.json` | intestazioni di sicurezza e privacy per Vercel |

Non serve nessuna installazione né compilazione: è un sito statico.

## Privacy di chi visita

- nessun cookie, nessun sistema di statistiche o tracciamento, nessun font o script esterno
- nessun salvataggio: risposte e piani restano solo nella pagina aperta e spariscono alla chiusura
- `vercel.json` blocca qualsiasi connessione verso altri siti (Content-Security-Policy), non invia il referrer e disattiva fotocamera, microfono, posizione e profilazione pubblicitaria
- su Vercel **non attivare** Web Analytics né Speed Insights

## Pubblicazione

### 1. GitHub

1. Accedi a github.com → **New repository** → nome `cervello-che-impara` → **Create repository**.
2. Nella pagina del repository: **uploading an existing file** → trascina tutti i file di questa cartella → **Commit changes**.

Oppure da terminale, dentro questa cartella:

```bash
git init
git add .
git commit -m "Prima versione"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/cervello-che-impara.git
git push -u origin main
```

### 2. Vercel

1. Accedi a vercel.com con l'account GitHub → **Add New… → Project**.
2. Scegli il repository `cervello-che-impara` → **Import**.
3. Framework Preset: **Other**. Lascia vuoti Build Command e Output Directory.
4. **Deploy**. Dopo meno di un minuto ricevi l'indirizzo (es. `cervello-che-impara.vercel.app`).

Ogni modifica caricata su GitHub viene ripubblicata automaticamente.
