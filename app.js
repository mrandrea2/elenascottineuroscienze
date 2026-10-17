/* Il cervello che impara — web app didattica
   Liceo Statale «Galileo Galilei» di Verona · contenuti a cura della prof.ssa Elena Scotti
   Privacy: nessun cookie, nessuna libreria esterna, nessuna richiesta di rete, nessun salvataggio.
   Tutto lo stato vive in memoria e sparisce alla chiusura della pagina. */
(function () {
  'use strict';

  /* ---------- utilità ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const visited = new Set(); // solo in memoria
  const tag = (t) => `<span class="activity-tag">${t}</span>`;

  /* =========================================================
     CONTENUTI DEI CAPITOLI
     ========================================================= */
  const CHAPTERS = [
    {
      id: 'm1', n: 1, color: 'var(--c1)', short: 'La macchina',
      title: 'Il cervello che impara',
      sub: 'Neuroni, sinapsi e strutture: che cosa succede fisicamente quando impari qualcosa.',
      toc: [['s1-neuro', 'Che cosa sono le neuroscienze'], ['s1-strutture', 'Le strutture che lavorano mentre studi'], ['s1-neurone', 'Neuroni e sinapsi'], ['s1-imparare', 'Imparare = creare collegamenti'], ['s1-plast', 'Neuroplasticità'], ['s1-due', 'Due modi di imparare']],
      html: `
<p class="lead">Al liceo la quantità di cose da imparare cresce di colpo, ma nessuno spiega mai <em>come</em> si fa. Partiamo dalla macchina: capire come funziona il cervello spiega perché certe strategie funzionano e altre no.</p>
<div class="callout sport"><span class="tag">Allenamento e studio</span><p>Carico, recupero, progressione, ripetizione distribuita, automatismo: i principi che rendono efficace un allenamento valgono anche per lo studio. Sono gli stessi principi, applicati al cervello.</p></div>

<h2 id="s1-neuro">Che cosa sono le neuroscienze</h2>
<p>Le neuroscienze sono l'insieme delle discipline che studiano il <strong>sistema nervoso</strong>: com'è fatto, come funziona, come si sviluppa, come cambia e come si ammala. Ci lavorano insieme biologia, anatomia, fisiologia, genetica, chimica, fisica, matematica, psicologia e informatica.</p>
<p>Quando si occupano di <em>come si impara</em>, incontrano la <strong>psicologia cognitiva</strong>, che studia attenzione, memoria e ragionamento.</p>
<div class="box">
<h3>Il sistema nervoso in breve</h3>
<p>È la rete che collega il corpo all'ambiente: <strong>riceve</strong> informazioni, le <strong>elabora</strong> e <strong>comanda una risposta</strong>.</p>
<ul class="dots">
<li>Risposte volontarie: alzare un braccio, saltare a muro.</li>
<li>Risposte involontarie: il battito del cuore, un riflesso, la postura.</li>
<li>E poi attenzione, pensieri, memoria, emozioni.</li>
</ul>
<p>Si divide in <strong>sistema nervoso centrale</strong> (encefalo e midollo spinale) e <strong>sistema nervoso periferico</strong> (i nervi che collegano il centro al resto del corpo).</p>
</div>

<h3>Il cervello in numeri</h3>
<section class="activity" data-act="numbers"></section>
<div class="callout warn"><span class="tag">Attenzione a non confondere</span><p>«Cervello» ed «encefalo» non sono la stessa cosa: il cervello è la parte più grande dell'encefalo, che comprende anche cervelletto e tronco encefalico.</p></div>

<h2 id="s1-strutture">Le strutture che lavorano mentre studi</h2>
<p>Quattro strutture entrano in gioco ogni volta che studi. Esplorale una alla volta.</p>
<section class="activity" data-act="brain"></section>

<h2 id="s1-neurone">Neuroni e sinapsi</h2>
<p>Il <strong>neurone</strong> è la cellula del sistema nervoso: riceve, elabora e trasmette segnali. I neuroni comunicano con impulsi elettrici; quando l'impulso arriva in fondo all'assone libera sostanze chimiche, i <strong>neurotrasmettitori</strong>, che attraversano lo spazio tra due neuroni e agiscono su quello successivo. La <strong>dopamina</strong>, per esempio, entra in gioco quando ci si aspetta qualcosa di interessante.</p>
<section class="activity" data-act="neuron"></section>
<p>Ogni neurone può avere da 5.000 a 50.000 connessioni. La capacità di formare nuove sinapsi si chiama <strong>plasticità</strong>: è grazie a lei che possiamo imparare, e che l'intelligenza è dinamica e modificabile.</p>

<h2 id="s1-imparare">Imparare = creare collegamenti tra neuroni</h2>
<div class="callout key"><span class="tag">Il concetto chiave</span><p>Imparare significa <strong>creare e rafforzare collegamenti tra neuroni</strong>: nuove sinapsi che si formano, sinapsi esistenti che diventano più efficienti. È un cambiamento fisico, come un muscolo che si adatta al carico.</p></div>
<p>Un ricordo non sta in un singolo neurone: è un <strong>gruppo di neuroni che si attivano insieme</strong>. Quando due neuroni si attivano insieme, il legame tra loro si rafforza. Così, ogni volta che richiami qualcosa, la rendi più facile da richiamare la volta dopo.</p>
<p>Vale anche il contrario: un gruppo di neuroni attivato una volta sola mantiene collegamenti deboli. Per dimenticare basta non riattivare più un'informazione.</p>
<section class="activity" data-act="path"></section>

<h3>Perché ci vuole tempo</h3>
<p>Rafforzare stabilmente una sinapsi richiede la costruzione di nuove proteine e modifiche nella struttura del collegamento. Sono processi che impiegano <strong>ore</strong>, e una parte avviene <strong>durante il sonno</strong>. Il tempo non è un dettaglio organizzativo: fa parte del meccanismo.</p>
<div class="table-wrap"><table>
<tr><th>Compresso</th><th></th><th>Distribuito</th></tr>
<tr><td>5 ore di studio la sera prima</td><td>non equivale a</td><td>5 ore distribuite su una settimana</td></tr>
<tr><td>10 ore di palestra in un giorno</td><td>non equivale a</td><td>10 ore distribuite in un mese</td></tr>
</table></div>
<p>Lo studio della sera prima può servire a ripassare qualcosa che è già in memoria, non a impararlo da zero.</p>

<h2 id="s1-plast">Neuroplasticità</h2>
<p>È la capacità del cervello di modificarsi, ristrutturarsi e riorganizzarsi per tutta la vita, in risposta a esperienze, stimoli e studio.</p>
<div class="flips">
<div class="callout sport"><span class="tag">La buona notizia</span><p>Il cervello si modifica con l'esercizio. Il livello di partenza non è un verdetto: «non sono portato» descrive quasi sempre il punto di partenza, non quello di arrivo.</p></div>
<div class="callout myth"><span class="tag">L'avvertenza</span><p>Plasticità non vuol dire onnipotenza. Il cervello cambia in risposta a ciò che si fa davvero e ripetutamente, non a ciò che si desidera o che promette un video motivazionale.</p></div>
</div>

<h2 id="s1-due">Due modi di imparare</h2>
<p>Negli anni Cinquanta un paziente subì l'asportazione dell'ippocampo da entrambi i lati per curare una grave epilessia. Da allora non riuscì più a formare nuovi ricordi di fatti ed eventi. Eppure, messo a ripetere per tre giorni un compito motorio difficile, migliorò giorno dopo giorno, convinto ogni volta di non averlo mai provato <span class="source">(Scoville e Milner, 1957)</span>.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Memoria dichiarativa</th><th>Memoria procedurale</th></tr>
<tr><th>Che cos'è</th><td>Sapere <strong>che cosa</strong>: fatti ed eventi</td><td>Sapere <strong>come</strong>: abilità e procedure</td></tr>
<tr><th>Si può raccontare?</th><td>Sì, a parole</td><td>No, o molto male</td></tr>
<tr><th>Dove</th><td>Ippocampo e lobo temporale, poi corteccia</td><td>Cervelletto, gangli della base, corteccia motoria</td></tr>
<tr><th>Esempio</th><td>La definizione di «capacità condizionali»</td><td>La schiacciata a pallavolo</td></tr>
<tr><th>Come si allena</th><td>Ripetere, distribuire, richiamare</td><td>Ripetere, distribuire, correggere</td></tr>
</table></div>
<p>I due sistemi sono diversi ma si allenano quasi allo stesso modo. Nessuno pensa di imparare la schiacciata guardando un video la sera prima della partita. Per lo studio, invece, ci si prova di continuo.</p>
<section class="activity" data-act="declproc"></section>

<div class="callout key"><span class="tag">Da ricordare</span><p>Imparare è costruire collegamenti fisici. Costruirli richiede ore e passaggi ripetuti. Da qui discende tutto il resto: <strong>ripetere</strong>, <strong>distribuire nel tempo</strong>, <strong>richiamare invece di rileggere</strong>.</p></div>`
    },
    {
      id: 'm2', n: 2, color: 'var(--c2)', short: 'La memoria',
      title: 'La memoria di lavoro e i chunk',
      sub: 'Perché a volte studi e non entra niente: il passaggio obbligato e come aggirarlo.',
      toc: [['s2-prove', 'Quattro prove di memoria'], ['s2-magazzini', 'I tre magazzini'], ['s2-lavoro', 'La memoria di lavoro'], ['s2-chunk', 'Il chunk'], ['s2-sovra', 'Il sovraccarico'], ['s2-inganno', 'Perché ci si inganna']],
      html: `
<p class="lead">Prima la prova, poi la spiegazione. Le quattro prove qui sotto funzionano solo se non sai già come vanno: non leggere oltre prima di averle fatte.</p>
<h2 id="s2-prove">Quattro prove di memoria</h2>
<section class="activity" data-act="memotests"></section>

<h2 id="s2-magazzini">I tre magazzini della memoria</h2>
<p>Il percorso di un'informazione attraversa tre magazzini in sequenza <span class="source">(Atkinson e Shiffrin, 1968)</span>. È una semplificazione, ma una mappa utile per orientarsi.</p>
<section class="activity" data-act="flow"></section>

<h2 id="s2-lavoro">La memoria di lavoro: il collo di bottiglia</h2>
<p>È il <strong>banco da lavoro</strong> della mente: qui tieni le informazioni mentre le usi, per esempio durante un calcolo a mente o mentre segui una frase lunga fino al verbo.</p>
<div class="flips">
<div class="box"><p class="timer-big">3–5</p><p>cose nuove alla volta (chunk) <span class="source">(Cowan, 2001)</span></p></div>
<div class="box"><p class="timer-big">pochi s</p><p>di durata, se non le ripeti a mente: per questo un numero dettato si perde mentre cerchi la penna</p></div>
<div class="box"><p class="timer-big">1</p><p>compito alla volta</p></div>
</div>
<p>Per decenni si è citato il limite di circa sette elementi <span class="source">(Miller, 1956)</span>. Studi più recenti hanno abbassato la stima a circa quattro, quando si impedisce di ripetersi le cose sottovoce e di raggrupparle. La formulazione utile è: <strong>tra le tre e le cinque cose nuove alla volta</strong>.</p>
<div class="callout myth"><span class="tag">Il multitasking non esiste</span><p>Quello che chiamiamo multitasking è un rapido alternarsi tra compiti, e ogni cambio ha un costo di rientro: quando torni al primo compito devi ricostruire a che punto eri e come finiva il ragionamento <span class="source">(Rubinstein e coll., 2001)</span>. Una notifica non costa solo i due secondi per leggerla, ma anche il tempo per ritrovare il filo.</p></div>

<h2 id="s2-chunk">Il chunk: l'unità di misura</h2>
<p>Le 3–5 cose non sono informazioni: sono <strong>chunk</strong>. Un chunk è qualunque cosa il cervello riconosca come <strong>un blocco unico</strong>. E ciò che riconosce come blocco dipende da quello che sai già.</p>
<div class="flips">
<div class="box"><h3>«1492»</h3><p>Per chi sa che è la scoperta dell'America: <strong>un</strong> chunk. Per un bambino di sei anni: quattro cifre separate.</p></div>
<div class="box"><h3>In campo</h3><p>Davanti a un'azione confusa un giocatore esperto vede una cosa sola: «palla al centro, difesa scoperta a sinistra». Un principiante guarda un compagno alla volta, e intanto l'azione è finita.</p></div>
</div>
<section class="activity" data-act="chunkdemo"></section>
<div class="callout key"><span class="tag">Il punto</span><p>Chi sa già molto di un argomento impara più in fretta non perché abbia più memoria, ma perché ha <strong>chunk più grandi</strong>. Per questo saltare le basi si paga caro.</p></div>
<h3>E allora il tuo numero di telefono?</h3>
<p>Ha dieci cifre, come il numero impossibile della prova 2. Eppure lo sai senza sforzo. Le prime volte anche quelle dieci cifre erano dieci cose separate: oggi sono una sola, perché sono passate molte volte, in giorni diversi. Il collo di bottiglia non si allarga: <strong>si aggira</strong>, facendo passare le stesse cose abbastanza volte perché occupino meno posto.</p>

<h2 id="s2-sovra">Il sovraccarico cognitivo non è pigrizia</h2>
<p>Quando gli elementi nuovi superano la capacità della memoria di lavoro non impari più lentamente: <strong>non impari</strong>. Il sistema si blocca, come un computer che esaurisce la memoria.</p>
<section class="activity" data-act="overload"></section>

<h3>Il ponte: che cosa segue da tutto questo</h3>
<ol>
<li>Il collo di bottiglia impone di <strong>spezzare e ripetere</strong> → da qui nasce lo studio distribuito.</li>
<li>Un'informazione che non si aggancia a niente si perde → da qui nascono <strong>l'elaborazione e le mappe</strong>.</li>
<li>Conta quante volte l'informazione viene <strong>tirata fuori</strong>, non quante volte entra → da qui nasce il <strong>recupero attivo</strong>.</li>
<li>La sensazione di sapere non è un indicatore affidabile → lo vediamo subito.</li>
</ol>
<div class="callout key"><p>«La memoria è il residuo del pensiero» <span class="source">(D. Willingham)</span>: si ricorda ciò su cui si è pensato, non ciò che è passato davanti agli occhi.</p></div>

<h2 id="s2-inganno">Perché ci si inganna</h2>
<p>Ogni ricordo ha due forze, ma se ne percepisce solo una <span class="source">(Bjork e Bjork, 1992)</span>:</p>
<div class="flips">
<div class="box"><h3>Forza di immagazzinamento</h3><p>Quanto una conoscenza è radicata. È quella che conta tra due settimane.</p></div>
<div class="box"><h3>Forza di recupero</h3><p>Quanto è accessibile adesso. Sale subito dopo averla vista e cala col tempo. È l'unica che senti.</p></div>
</div>
<p>Alla terza rilettura la forza di recupero è altissima: tutto scorre, ti senti pronto. Ma la forza di immagazzinamento può non essersi mossa affatto. Il giorno della verifica, senza il testo davanti, la sensazione sparisce.</p>
<div class="callout sport"><span class="tag">Difficoltà desiderabili</span><p>Più è faticoso il recupero, maggiore è il guadagno. In palestra lo sai già: un carico che sollevi senza fatica non produce alcun adattamento. La fatica del richiamo è il lavoro, non un segnale che stai sbagliando.</p></div>`
    },
    {
      id: 'm3', n: 3, color: 'var(--c3)', short: 'Le strategie',
      title: 'Le strategie di studio',
      sub: 'Che cosa funziona davvero, secondo la ricerca e non secondo le abitudini.',
      toc: [['s3-prova', 'La prova della pallavolo'], ['s3-illusione', "L'illusione di competenza"], ['s3-classifica', 'La classifica delle tecniche'], ['s3-sei', 'Le sei strategie'], ['s3-recupero', 'Il recupero attivo'], ['s3-stili', 'Gli «stili di apprendimento»'], ['s3-ripasso', 'Quanto e quando ripassare']],
      html: `
<h2 id="s3-prova">La prova della pallavolo</h2>
<section class="activity" data-act="volley"></section>

<h2 id="s3-illusione">L'illusione di competenza</h2>
<p>Rileggere qualcosa lo rende <strong>familiare</strong>, e la familiarità viene confusa con la conoscenza: il testo scorre facile e la sensazione è di sapere. Ma la fluidità della lettura misura solo quante volte hai già visto quel testo, non quanto hai imparato.</p>
<div class="callout sport"><span class="tag">Nello sport</span><p>Guardare tre volte il video di un gesto tecnico dà la sensazione di saperlo fare. Poi vai in campo e il movimento non viene: guardare qualcosa di fatto bene non è averlo fatto.</p></div>

<h2 id="s3-classifica">La classifica delle tecniche di studio</h2>
<p>Un gruppo di ricercatori ha passato in rassegna dieci tecniche di studio molto diffuse, valutandone l'efficacia <span class="source">(Dunlosky e coll., 2013)</span>. Prova a indovinare dove finisce ciascuna.</p>
<section class="activity" data-act="dunlosky"></section>
<h3>Allora non si sottolinea più?</h3>
<p>«Bassa utilità» non significa vietato. Significa che, usate da sole, producono poco. Hanno un ruolo preciso: sono la <strong>fase di ingresso</strong> nel materiale, servono a orientarsi, capire e selezionare. Lo studio vero comincia dopo, a libro chiuso.</p>
<div class="box">
<h3>Come si sottolinea bene</h3>
<ol>
<li><strong>Prima lettura:</strong> non sottolineare niente, leggi e basta. Sottolineare subito significa tirare a indovinare.</li>
<li><strong>Seconda lettura:</strong> sii avaro, una o due frasi per paragrafo. Se la pagina diventa gialla, non hai scelto niente.</li>
<li><strong>Chiediti perché</strong> proprio quella frase. Se non c'è risposta, non va evidenziata.</li>
<li>Usa le parti evidenziate come <strong>domande</strong> su cui interrogarti.</li>
</ol>
<p><strong>Riassumere</strong> funziona solo se ricostruisci il senso con parole tue: allora diventa elaborazione. Un riassunto che ricopia le frasi del libro serve a poco.</p>
</div>

<h2 id="s3-sei">Le sei strategie</h2>
<p>Sono quelle proposte dal gruppo di ricerca The Learning Scientists <span class="source">(Weinstein e coll., 2018)</span>. Tocca una carta per girarla.</p>
<section class="activity" data-act="six"></section>

<h2 id="s3-recupero">Il recupero attivo, passo per passo</h2>
<p>È la strategia con le prove più solide in assoluto: interrogarsi batte nettamente il rileggere, e il vantaggio è tanto più grande quanto più la verifica è lontana.</p>
<ol>
<li>Studia un blocco: un paragrafo, non un capitolo.</li>
<li>Chiudi tutto.</li>
<li>Su un foglio bianco scrivi tutto ciò che ricordi, oppure dillo a voce.</li>
<li>Riapri e controlla: che cosa mancava? Quella è la tua lista di cose da studiare.</li>
</ol>
<section class="activity" data-act="recall"></section>

<h2 id="s3-stili">Gli «stili di apprendimento»</h2>
<div class="callout myth"><span class="tag">Un mito molto diffuso</span><p>Il modello VARK <span class="source">(Fleming, 1987)</span> sostiene che ognuno abbia un canale preferito (visivo, uditivo, lettura/scrittura, cinestetico) e che studiare in quel canale renda tutto più facile. Quando lo si mette alla prova, insegnando lo stesso contenuto in canali diversi, chi studia nel proprio stile <strong>non va meglio</strong> degli altri <span class="source">(Pashler e coll., 2008)</span>.</p></div>
<div class="box">
<h3>Che cosa funziona per tutti</h3>
<ul class="dots">
<li><strong>Doppia codifica:</strong> parole e immagini insieme danno due vie d'accesso allo stesso contenuto.</li>
<li>Ti senti «più visivo»? Ripeti a voce quello che hai letto: attivi anche il codice verbale.</li>
<li>Ti senti «più uditivo»? Affianca uno schema o un disegno: attivi anche il codice visivo.</li>
<li>È il <strong>compito</strong> a scegliere il canale: geografia o schemi di gioco → visivo-spaziale; pronuncia di una lingua → uditivo; un gesto atletico → pratica diretta.</li>
</ul>
</div>

<h2 id="s3-ripasso">Quanto e quando ripassare</h2>
<p>Più è lontana la prova, più larghi devono essere gli intervalli tra un ripasso e l'altro <span class="source">(Cepeda e coll., 2008)</span>. Ripassare tutto il giorno prima è l'esatto contrario.</p>
<div class="table-wrap"><table>
<tr><th>Se la verifica è…</th><th>il primo ripasso si fa…</th><th>e poi se ne fanno altri…</th></tr>
<tr><td>tra una settimana</td><td>domani</td><td>ogni giorno o quasi (bastano pochi minuti)</td></tr>
<tr><td>tra un mese</td><td>fra 3–4 giorni</td><td>ogni 3–4 giorni</td></tr>
<tr><td>tra tre mesi</td><td>fra una settimana</td><td>ogni 1–2 settimane</td></tr>
</table></div>
<div class="callout key"><span class="tag">Il criterio, non i minuti</span><p>Nella prima sessione ripassa ogni concetto finché non riesci a richiamarlo correttamente <strong>3 volte</strong>, alternandolo ad altri argomenti (A, poi B, poi di nuovo A). Poi ripassalo altre 3 volte in giorni diversi. La domanda giusta non è «quanto tempo devo ripassare?», ma <strong>«riesco a tirarlo fuori senza guardare?»</strong></p></div>
<section class="activity" data-act="planner"></section>
<div class="callout key"><span class="tag">La regola d'oro</span><p>Il ripasso non è rileggere: è <strong>provare a ricordare, prima di riaprire</strong>.</p></div>`
    },
    {
      id: 'm4', n: 4, color: 'var(--c4)', short: 'Le mappe',
      title: 'Mappe mentali e mappe concettuali',
      sub: 'Due strumenti diversi che a scuola chiamiamo con lo stesso nome.',
      toc: [['s4-prova', 'La prova'], ['s4-test', 'Quale mappa?'], ['s4-mentale', 'La mappa mentale'], ['s4-concettuale', 'La mappa concettuale'], ['s4-legame', 'Le parole-legame'], ['s4-errori', 'Gli errori tipici'], ['s4-costruire', 'Costruirla o scaricarla?']],
      html: `
<h2 id="s4-prova">La prova</h2>
<section class="activity" data-act="maptimer"></section>

<h2 id="s4-test">Quale mappa? Il test della lettura ad alta voce</h2>
<p>Leggi la tua mappa ad alta voce, seguendo le frecce.</p>
<div class="flips">
<div class="box"><h3>Escono frasi di senso compiuto</h3><p>È una <strong>mappa concettuale</strong>: struttura gerarchica, frecce con etichetta. Mostra come stanno insieme i concetti.</p></div>
<div class="box"><h3>Escono parole staccate</h3><p>È una <strong>mappa mentale</strong>: struttura a raggiera, parole singole. Serve a generare e organizzare idee attorno a un tema.</p></div>
</div>
<p>Nessuna delle due è «meglio»: servono a cose diverse. Il problema nasce quando si usa una al posto dell'altra.</p>
<section class="activity" data-act="maptype"></section>

<h2 id="s4-mentale">La mappa mentale</h2>
<p>Codificata negli anni Settanta da <strong>Tony Buzan</strong>, si sviluppa in modo radiale: dal centro si diramano parole chiave, immagini e simboli. Serve a raccogliere idee, progettare, ripassare un elenco, preparare un'esposizione orale seguendo i rami.</p>
<div class="box">
<svg class="figure big-svg only-wide" viewBox="-20 0 680 340" role="img" aria-label="Esempio di mappa mentale sulla pallavolo: al centro pallavolo, rami storia, campo, fondamentali, ruoli, regole; da fondamentali partono bagher, palleggio, battuta.">
  <path d="M320 165 C250 120 200 80 120 70" stroke="#c0392b" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M320 165 C400 110 450 80 530 70" stroke="#1f6fb2" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M320 165 C230 190 190 230 110 250" stroke="#2e8b57" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M320 165 C410 200 450 240 540 255" stroke="#8e44ad" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M320 165 C325 220 320 260 330 300" stroke="#d68910" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M110 250 C80 270 60 285 30 290" stroke="#2e8b57" stroke-width="4" fill="none"/>
  <path d="M110 250 C110 280 120 300 135 318" stroke="#2e8b57" stroke-width="4" fill="none"/>
  <path d="M110 250 C70 240 50 225 25 215" stroke="#2e8b57" stroke-width="4" fill="none"/>
  <path d="M120 70 C220 50 430 50 530 70" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity=".5"/>
  <circle cx="320" cy="165" r="46" fill="#ffd27a" stroke="#17202f" stroke-width="3"/>
  <text x="320" y="172" text-anchor="middle" font-size="22" font-weight="700" fill="#17202f">pallavolo</text>
  <text class="svg-label" x="100" y="58">storia</text>
  <text class="svg-label" x="505" y="58">campo</text>
  <text class="svg-label" x="150" y="268">fondamentali</text>
  <text class="svg-label" x="540" y="285">ruoli</text>
  <text class="svg-label" x="338" y="305">regole</text>
  <text class="svg-small" x="-18" y="282">bagher</text>
  <text class="svg-small" x="142" y="326">palleggio</text>
  <text class="svg-small" x="-18" y="206">battuta</text>
</svg>
<svg class="figure only-narrow" viewBox="0 0 360 520" role="img" aria-label="Esempio di mappa mentale sulla pallavolo: al centro pallavolo, rami storia, campo, fondamentali, ruoli, regole; da fondamentali partono bagher, palleggio, battuta.">
  <path d="M50 100 C120 45 240 45 310 100" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity=".5"/>
  <path d="M180 240 C140 180 110 130 50 100" stroke="#c0392b" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M180 240 C220 180 250 130 310 100" stroke="#1f6fb2" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M180 240 C240 260 280 280 330 300" stroke="#8e44ad" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M180 240 C190 320 200 380 230 440" stroke="#d68910" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M180 240 C140 290 110 330 80 370" stroke="#2e8b57" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M80 370 C60 400 40 430 22 452 M80 370 C85 400 88 430 92 460 M80 370 C105 390 125 405 142 418" stroke="#2e8b57" stroke-width="4" fill="none"/>
  <circle cx="180" cy="240" r="50" fill="#ffd27a" stroke="#17202f" stroke-width="3"/>
  <text x="180" y="247" text-anchor="middle" font-size="21" font-weight="700" fill="#17202f">pallavolo</text>
  <text class="svg-label halo" x="14" y="86">storia</text>
  <text class="svg-label halo" x="262" y="86">campo</text>
  <text class="svg-label halo" x="284" y="332">ruoli</text>
  <text class="svg-label halo" x="200" y="470">regole</text>
  <text class="svg-label halo" x="10" y="342">fondamentali</text>
  <text class="svg-small halo" x="2" y="478">battuta</text>
  <text class="svg-small halo" x="62" y="488">bagher</text>
  <text class="svg-small halo" x="104" y="442">palleggio</text>
</svg>
<p class="source">Una versione possibile, non l'unica giusta. La linea tratteggiata è un collegamento trasversale.</p>
</div>
<h3>Come si costruisce</h3>
<ol>
<li>Foglio orizzontale. Al centro l'argomento: una parola e un'immagine.</li>
<li>I rami principali sono le grandi categorie: «di che cosa si parla, quando si parla di…?». Quattro o cinque, non dodici.</li>
<li>I rami secondari rispondono a una sola domanda: «che cosa ci sta dentro?».</li>
<li>Su ogni ramo una sola parola chiave, scritta sopra il ramo. Rami curvi, più spessi al centro, un colore per ramo principale.</li>
<li>Se ti viene da scrivere una frase, sono due cose: spezzala in due rami.</li>
</ol>
<div class="callout key"><span class="tag">La prova della parola chiave</span><p>Se rileggendola torna in mente la frase, funziona. Se da sola non dice più niente, è quella sbagliata. Per questo le parole chiave si scelgono dopo aver capito il testo.</p></div>
<p><strong>A che cosa non serve:</strong> a capire perché una cosa ne causa un'altra. La mappa mentale non dice che rapporto c'è tra due parole vicine: per questo serve la mappa concettuale.</p>

<h2 id="s4-concettuale">La mappa concettuale</h2>
<p>Sviluppata da <strong>Joseph Novak</strong> sulle idee di Ausubel: si impara in modo duraturo quando si collega il nuovo a ciò che già si sa. È gerarchica e reticolare: in alto i concetti generali, sotto quelli particolari, e sulle frecce le <strong>parole-legame</strong> che rendono esplicita la relazione.</p>
<div class="box">
<svg class="figure big-svg only-wide" viewBox="0 0 640 340" role="img" aria-label="Esempio di mappa concettuale. Domanda focale: perché ci si riscalda prima di allenarsi? Il riscaldamento aumenta la temperatura muscolare, che migliora l'elasticità; il riscaldamento prepara allo sforzo; l'elasticità riduce il rischio di infortuni.">
  <text class="svg-label" x="320" y="24" text-anchor="middle">Domanda focale: perché ci si riscalda prima di allenarsi?</text>
  <line x1="290" y1="92" x2="160" y2="160" class="axis"/>
  <line x1="350" y1="92" x2="480" y2="160" class="axis"/>
  <line x1="130" y1="200" x2="130" y2="262" class="axis"/>
  <line x1="220" y1="285" x2="420" y2="285" class="axis" stroke-dasharray="7 6"/>
  <rect x="235" y="50" width="170" height="42" rx="10" fill="#ffd27a" stroke="#17202f" stroke-width="2.5"/>
  <text x="320" y="77" text-anchor="middle" font-size="17" font-weight="700" fill="#17202f">riscaldamento</text>
  <rect x="30" y="160" width="200" height="40" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="130" y="186" text-anchor="middle">temperatura muscolare</text>
  <rect x="410" y="160" width="140" height="40" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="480" y="186" text-anchor="middle">sforzo</text>
  <rect x="45" y="264" width="170" height="40" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="130" y="290" text-anchor="middle">elasticità</text>
  <rect x="425" y="264" width="170" height="40" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="510" y="290" text-anchor="middle">infortuni</text>
  <text class="svg-small" x="150" y="122" font-style="italic">aumenta la</text>
  <text class="svg-small" x="420" y="122" font-style="italic">prepara allo</text>
  <text class="svg-small" x="140" y="236" font-style="italic">migliora l'</text>
  <text class="svg-small" x="250" y="276" font-style="italic">riduce il rischio di</text>
</svg>
<svg class="figure only-narrow" viewBox="0 0 360 480" role="img" aria-label="Esempio di mappa concettuale. Domanda focale: perché ci si riscalda prima di allenarsi? Il riscaldamento aumenta la temperatura muscolare, che migliora l'elasticità; il riscaldamento prepara allo sforzo; l'elasticità riduce il rischio di infortuni.">
  <text class="svg-label" x="180" y="22" text-anchor="middle">Domanda focale: perché ci si</text>
  <text class="svg-label" x="180" y="46" text-anchor="middle">riscalda prima di allenarsi?</text>
  <line x1="150" y1="118" x2="110" y2="172" class="axis"/>
  <line x1="220" y1="118" x2="295" y2="172" class="axis"/>
  <line x1="110" y1="216" x2="110" y2="282" class="axis"/>
  <line x1="120" y1="326" x2="180" y2="420" class="axis" stroke-dasharray="7 6"/>
  <rect x="85" y="72" width="190" height="46" rx="10" fill="#ffd27a" stroke="#17202f" stroke-width="2.5"/>
  <text x="180" y="102" text-anchor="middle" font-size="20" font-weight="700" fill="#17202f">riscaldamento</text>
  <rect x="4" y="172" width="228" height="44" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="118" y="200" text-anchor="middle">temperatura muscolare</text>
  <rect x="242" y="172" width="114" height="44" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="299" y="200" text-anchor="middle">sforzo</text>
  <rect x="30" y="282" width="160" height="44" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="110" y="310" text-anchor="middle">elasticità</text>
  <rect x="100" y="420" width="160" height="44" rx="10" class="zone-ok" stroke="currentColor" stroke-width="2"/>
  <text class="svg-label" x="180" y="448" text-anchor="middle">infortuni</text>
  <text class="svg-small halo" x="16" y="150" font-style="italic">aumenta la</text>
  <text class="svg-small halo" x="252" y="150" font-style="italic">prepara allo</text>
  <text class="svg-small halo" x="120" y="256" font-style="italic">migliora l'</text>
  <text class="svg-small halo" x="150" y="372" font-style="italic">riduce il rischio di</text>
</svg>
<p class="source">Leggila seguendo le frecce: «il riscaldamento aumenta la temperatura muscolare», «la temperatura muscolare migliora l'elasticità»… La linea tratteggiata è un collegamento trasversale.</p>
</div>
<h3>I quattro elementi</h3>
<ul class="dots">
<li><strong>Concetti:</strong> una o due parole dentro un riquadro.</li>
<li><strong>Parole-legame:</strong> sopra la freccia («provoca», «è un tipo di», «richiede»).</li>
<li><strong>Proposizioni:</strong> concetto + parola-legame + concetto = una frase che si può dire vera o falsa.</li>
<li><strong>Collegamenti trasversali:</strong> frecce tra rami diversi, che mostrano relazioni non ovvie.</li>
</ul>
<h3>Come si costruisce <span class="source">(procedura di Novak e Cañas)</span></h3>
<ol>
<li><strong>Scrivi la domanda focale in alto.</strong> Non un argomento («il sistema muscolare») ma una domanda («come fa un muscolo a produrre movimento?»).</li>
<li><strong>Elenca i concetti a lato:</strong> dieci o venti parole chiave in una lista di appoggio. Qualcuno può restare fuori.</li>
<li><strong>Ordinali dal generale al particolare:</strong> in alto idee generali, cause e classificazioni; sotto effetti ed esempi.</li>
<li><strong>Collega ed etichetta ogni freccia</strong> con una parola-legame. È il passo difficile, ed è lì che si capisce.</li>
<li><strong>Cerca i collegamenti trasversali</strong> tra rami lontani.</li>
<li><strong>Rileggi ad alta voce</strong> seguendo le frecce. Se non escono frasi sensate, la mappa va corretta.</li>
</ol>
<div class="callout warn"><p>Una freccia senza parola-legame non è una mappa concettuale: è un disegno. E una mappa non si fa su un argomento non ancora capito: prima si legge e si capisce, poi si mappa.</p></div>

<h2 id="s4-legame">Che cosa si scrive sopra la freccia?</h2>
<p>Verbi, preposizioni, avverbi e congiunzioni. <strong>Mai nomi, mai aggettivi.</strong> Espressioni come «è un tipo di» o «al fine di» vanno bene, perché esprimono un legame.</p>
<div class="table-wrap"><table>
<tr><th>Tipo di relazione</th><th>Parole-legame</th></tr>
<tr><td>Inclusione</td><td>è composto da, si suddivide in, è un tipo di, comprende</td></tr>
<tr><td>Causa ed effetto</td><td>provoca, determina, perché, poiché, dipende da</td></tr>
<tr><td>Fine o scopo</td><td>serve a, per ottenere, al fine di</td></tr>
<tr><td>Che cosa fa</td><td>produce, regola, controlla, trasporta</td></tr>
<tr><td>Temporale</td><td>durante, prima di, dopo, mentre</td></tr>
<tr><td>Spaziale</td><td>si trova in, nel, dal</td></tr>
<tr><td>Addizione</td><td>e, sia… sia, né… né, oppure</td></tr>
<tr><td>Esemplificazione</td><td>cioè, ad esempio, come</td></tr>
</table></div>
<div class="callout key"><span class="tag">Autodiagnosi</span><p>Se sulla freccia ti viene da scrivere un nome, quel nome non è una relazione: è un concetto, e va messo in un nodo.</p></div>
<section class="activity" data-act="linkwords"></section>

<h2 id="s4-errori">Gli errori tipici</h2>
<section class="activity" data-act="maperrors"></section>

<h2 id="s4-costruire">Costruirla o scaricarla?</h2>
<div class="flips">
<div class="callout sport"><span class="tag">Costruirla vale</span><p>Il lavoro utile è decidere che cosa va in alto, quali concetti collegare, che parola scrivere sulla freccia. Quella decisione è lo studio.</p></div>
<div class="callout myth"><span class="tag">Scaricarla non vale</span><p>Una mappa già fatta ha tutte le decisioni prese da qualcun altro. Guardarla è come guardare il video del gesto tecnico.</p></div>
</div>
<div class="callout key"><p><strong>La mappa organizza, il recupero fissa.</strong> Servono entrambe, in quest'ordine: finita la mappa, coprila e rifalla a memoria, oppure usala come traccia per ripetere ad alta voce.</p></div>
<h3>Strumenti per le mappe al computer</h3>
<p>Le prime volte meglio a mano: richiede più tempo e costringe a riflettere su ogni collegamento. Il digitale serve per riorganizzare o condividere.</p>
<ul class="dots">
<li>Mappe concettuali: <a href="https://cmap.ihmc.us/cmaptools/cmaptools-download/" target="_blank" rel="noopener noreferrer">CmapTools</a></li>
<li>Mappe mentali: <a href="https://coggle.it" target="_blank" rel="noopener noreferrer">Coggle</a>, <a href="https://xmind.com/download" target="_blank" rel="noopener noreferrer">Xmind</a>, <a href="https://www.freeplane.org" target="_blank" rel="noopener noreferrer">Freeplane</a>, <a href="https://app.diagrams.net" target="_blank" rel="noopener noreferrer">diagrams.net</a></li>
</ul>`
    },
    {
      id: 'm5', n: 5, color: 'var(--c5)', short: 'Leggere e appunti',
      title: 'Leggere e prendere appunti',
      sub: 'Quello che si fa prima di studiare e mentre si ascolta.',
      toc: [['s5-occhio', "L'occhio che legge"], ['s5-veloce', 'Il mito della lettura veloce'], ['s5-anteprima', "L'anteprima"], ['s5-appunti', 'Prendere appunti']],
      html: `
<h2 id="s5-occhio">Come funziona l'occhio che legge</h2>
<p>Gli occhi non scorrono lungo la riga: compiono piccoli salti, le <strong>saccadi</strong>, intervallati da brevissime soste, le <strong>fissazioni</strong>. L'informazione si raccoglie solo durante le soste: durante il salto, in pratica, non vedi. Ogni tanto l'occhio torna indietro, e non è una cattiva abitudine: spesso serve a correggere un'incomprensione.</p>
<section class="activity" data-act="saccades"></section>

<h2 id="s5-veloce">Il mito della lettura velocissima</h2>
<section class="activity" data-act="syllables"></section>
<div class="callout myth"><span class="tag">Leggere più in fretta fa studiare meglio?</span>
<ol>
<li><strong>La velocità non dipende dagli occhi</strong>, ma dalla dimensione dei blocchi che riconosci: i chunk del capitolo 2.</li>
<li><strong>Il limite è il tempo che serve al cervello per capire.</strong> Oltre un certo punto la comprensione crolla <span class="source">(Rayner e coll., 2016)</span>. Un adulto legge 200–300 parole al minuto: chi promette 25.000 vende qualcosa.</li>
<li><strong>Leggere non è il momento in cui si impara.</strong> Anche leggendo il doppio più in fretta, arriveresti solo prima al punto in cui bisogna chiudere il libro e provare a ridirlo.</li>
</ol></div>
<p>La strada che funziona è <strong>leggere molto e ampliare il vocabolario</strong>. Chi conosce più parole legge più in fretta e capisce di più. Ma non capisce di più perché va veloce: <strong>va veloce perché capisce</strong>.</p>

<h2 id="s5-anteprima">L'anteprima: cinque minuti che cambiano la lettura</h2>
<p>Prima di leggere un capitolo, investi cinque minuti per costruire la cornice. Così, durante la lettura vera, ogni informazione trova un posto dove appoggiarsi invece di fluttuare da sola. E le domande lette in anticipo ti fanno leggere <em>cercando</em> qualcosa.</p>
<section class="activity" data-act="preview"></section>

<h2 id="s5-appunti">Prendere appunti</h2>
<div class="callout myth"><span class="tag">L'errore comune</span><p>Scrivere tutto quello che si sente, a pappagallo. Trascrivere parola per parola occupa la memoria di lavoro: mentre la mano insegue una frase, non resta spazio per capire quella dopo.</p></div>
<p>Prendere appunti, di per sé, aiuta poco: quello che cambia i risultati è <strong>riprenderli dopo</strong> <span class="source">(Kobayashi, 2006)</span>. Appunti che nessuno riapre sono tempo buttato.</p>
<section class="activity" data-act="notes"></section>
<div class="callout key"><span class="tag">Il criterio</span><p>Appunti buoni sono quelli che, riletti una volta, bastano a far tornare in mente la lezione. Se non si capisce più di che cosa si parlava, sono troppo scarni. Se per trovare le cose importanti devi rileggere tre pagine fitte, la selezione non è stata fatta.</p></div>`
    },
    {
      id: 'm6', n: 6, color: 'var(--c6)', short: 'Il corpo che studia',
      title: 'Il corpo che studia',
      sub: 'Sonno, movimento, attenzione ed emozioni: le condizioni senza le quali nessun metodo funziona.',
      toc: [['s6-sonno', 'Il sonno'], ['s6-movimento', 'Il movimento'], ['s6-attenzione', "L'attenzione"], ['s6-pause', 'Pause che funzionano'], ['s6-emozioni', 'Le emozioni'], ['s6-curiosita', 'Curiosità e dopamina'], ['s6-sintesi', 'In sintesi']],
      html: `
<p class="lead">Il cervello è un organo. Se viene trattato male, funziona male: nessuna strategia di studio compensa tre notti da cinque ore.</p>
<h2 id="s6-sonno">Il sonno</h2>
<p>Il sonno fa parte dello studio. Durante il <strong>sonno profondo</strong> le tracce di memoria del giorno vengono riattivate dall'ippocampo e trasferite nella corteccia, dove diventano stabili <span class="source">(Diekelmann e Born, 2010)</span>. È il processo che trasforma ciò che hai studiato oggi in qualcosa che ricorderai tra un mese.</p>
<p>Tra i 13 e i 18 anni la raccomandazione è dormire <strong>8–10 ore per notte</strong> <span class="source">(American Academy of Sleep Medicine, 2016)</span>.</p>
<div class="callout warn"><span class="tag">Attenzione</span><p>Studiare fino all'una per la verifica del giorno dopo sabota proprio il processo che dovrebbe fissare quanto hai studiato. Quell'ora in più si paga due volte: con una prestazione peggiore il giorno dopo e con un consolidamento peggiore la notte stessa.</p></div>
<section class="activity" data-act="sleep"></section>

<h2 id="s6-movimento">Il movimento</h2>
<p>L'attività fisica ha effetti positivi su <strong>attenzione</strong>, <strong>funzioni esecutive</strong> e <strong>memoria di lavoro</strong> <span class="source">(ACSM, 2016)</span>. Uno dei meccanismi è l'aumento del <strong>BDNF</strong> (Brain-Derived Neurotrophic Factor), una proteina prodotta soprattutto dopo esercizio aerobico.</p>
<div class="callout sport"><span class="tag">Il fertilizzante del cervello</span><p>Il BDNF aiuta a mantenere vivi i neuroni esistenti e favorisce la formazione di nuove connessioni: agisce sulle sinapsi, la stessa struttura su cui lavora lo studio. Un'ora di allenamento e mezz'ora di studio rendono più di un'ora e mezza di studio a freddo.</p></div>

<h2 id="s6-attenzione">L'attenzione</h2>
<div class="flips">
<div class="box"><h3>Attenzione selettiva</h3><p>Sceglie che cosa seguire in un dato istante: la voce dell'insegnante in mezzo al rumore dell'aula.</p></div>
<div class="box"><h3>Attenzione sostenuta</h3><p>Mantiene quella scelta nel tempo. È quella che si esaurisce, ed è il motivo per cui una sessione di studio va spezzata.</p></div>
</div>
<h3>Chi decide dove va l'attenzione?</h3>
<div class="flips">
<div class="box"><h3>Controllo top-down</h3><p>Parte da un obiettivo che ti sei dato («cerco la data in questo paragrafo»). Resiste meglio ai disturbi. <strong>Rimedio se è debole:</strong> porsi una domanda precisa prima di iniziare.</p></div>
<div class="box"><h3>Controllo bottom-up</h3><p>Parte dallo stimolo: un rumore, una luce, una notifica. Cattura l'attenzione anche se non vuoi. <strong>Rimedio:</strong> non resistere, togliere lo stimolo.</p></div>
</div>
<p>In un esperimento, chi riceveva notifiche durante un compito di attenzione peggiorava anche <strong>senza prendere in mano il telefono</strong> <span class="source">(Stothart e coll., 2015)</span>. Non si combatte una notifica con la forza di volontà: si toglie il telefono dalla stanza.</p>
<section class="activity" data-act="topdown"></section>
<h3>Quanto dura l'attenzione?</h3>
<div class="callout myth"><p>Non esiste un numero fisso: «tanti minuti quanti gli anni» è un mito senza base scientifica. Il calo di prestazione (<em>vigilance decrement</em>) arriva prima nei compiti monotoni, anche nei primi minuti, e più tardi nei compiti vari, anche dopo 30–45 minuti <span class="source">(Warm e coll., 2008)</span>. Il principio: <strong>spezzare prima che arrivi il calo, e variare</strong>.</p></div>

<h2 id="s6-pause">Pause che funzionano</h2>
<section class="activity" data-act="breaks"></section>

<h2 id="s6-emozioni">Le emozioni non sono un contorno</h2>
<p>L'ansia consuma memoria di lavoro: la occupa con la preoccupazione e lascia meno spazio al compito. Ma lo stress non fa sempre male. Come prima di una gara, la prestazione migliore arriva con un'<strong>attivazione moderata</strong>.</p>
<section class="activity" data-act="arousal"></section>
<div class="callout key"><span class="tag">La difesa migliore</span><p>Contro l'ansia da prestazione la difesa migliore non è una tecnica di respirazione: è essersi già interrogati diverse volte a libro chiuso, in giorni diversi. Una parte dell'ansia da verifica è ansia da impreparazione, ed è la parte su cui puoi agire. Se l'ansia arriva anche quando sei ben preparato, non è un segno di scarsa preparazione: parlane con un adulto di cui ti fidi.</p></div>

<h2 id="s6-curiosita">Le emozioni che aiutano: curiosità e dopamina</h2>
<p>Quando aspetti una risposta che vuoi davvero sapere, si attiva il circuito della <strong>dopamina</strong>, che lavora insieme all'ippocampo: quello che arriva in quel momento viene registrato meglio e lo ritrovi anche il giorno dopo <span class="source">(Gruber e coll., 2014)</span>.</p>
<div class="callout myth"><span class="tag">Non è «l'ormone del piacere»</span><p>La dopamina riguarda il <strong>volere</strong> qualcosa, non il piacere di averlo. Ed è proprio questo che rende utile la curiosità: è uno stato di attesa, e l'attesa si può costruire con una domanda.</p></div>
<div class="box">
<h3>Come costruire la curiosità</h3>
<ul class="dots">
<li>Trasforma il titolo del capitolo in una domanda (è l'anteprima).</li>
<li>Chiediti a che cosa serve e a che cosa si collega di ciò che sai già (è l'elaborazione).</li>
<li>Prova a indovinare una risposta prima di leggerla.</li>
<li>Fermati su ciò che non torna: un'incongruenza è una domanda già pronta.</li>
</ul>
</div>
<section class="activity" data-act="loop"></section>

<h2 id="s6-sintesi">In sintesi</h2>
<div class="callout key">
<ul class="dots">
<li>Imparare è costruire collegamenti fisici: richiede tempo distribuito.</li>
<li>Tutto passa per una stanza piccola: si studia a blocchi.</li>
<li>Il ripasso non è rileggere: è provare a ricordare prima di riaprire.</li>
<li>Le mappe organizzano, il recupero fissa.</li>
<li>Il corpo fa parte del metodo: sonno, movimento, telefono lontano.</li>
<li>La sensazione di sapere non è affidabile: l'unico modo di sapere se sai è provare a ridirlo a libro chiuso.</li>
</ul>
<p>Se durante lo studio ti senti comodo, probabilmente non stai imparando. La fatica giusta è il lavoro, esattamente come in allenamento.</p>
</div>`
    }
  ];

  /* =========================================================
     DATI: verifica, quiz, glossario
     ========================================================= */
  const OPEN_Q = {
    m1: [
      ['Dove si trova un ricordo? Che cosa succede ai collegamenti ogni volta che lo si richiama?', 'Un ricordo è un gruppo di neuroni che si attivano insieme. Ogni volta che lo richiami quei neuroni si riattivano insieme e i loro collegamenti si rafforzano: la volta dopo ricordare costa meno.'],
      ['Perché non si può studiare tutto in una sera?', 'Rafforzare una sinapsi richiede la costruzione di nuove proteine e modifiche strutturali: processi che durano ore e avvengono in parte nel sonno. Cinque ore la sera prima non valgono cinque ore distribuite in una settimana.'],
      ['Quali sono le tre funzioni esecutive? Dove hanno sede?', 'Controllo inibitorio, memoria di lavoro e flessibilità cognitiva. Hanno sede soprattutto nella corteccia prefrontale, l’ultima area a maturare (dopo i vent’anni).'],
      ['Qual è la differenza tra memoria dichiarativa e procedurale?', 'La dichiarativa è sapere «che cosa» (fatti ed eventi, si può raccontare; ippocampo e lobo temporale, poi corteccia). La procedurale è sapere «come» (abilità, si costruisce con la pratica; cervelletto, gangli della base, corteccia motoria). Si allenano con la stessa logica: ripetere e distribuire.']
    ],
    m2: [
      ['Qual è il «filtro» che decide che cosa passa dalla memoria sensoriale alla memoria di lavoro?', 'L’attenzione. Solo ciò a cui presti attenzione passa: per questo studiare distratti è poco efficace, una parte del materiale non entra proprio.'],
      ['Che cos’è un chunk? Perché chi sa già molto impara più in fretta?', 'Un chunk è un blocco di informazioni che il cervello riconosce come unità. Chi sa molto ha chunk più grandi: nella stessa memoria di lavoro (3–5 chunk) fa entrare più informazione. Esempio: «1492» è un chunk per chi conosce la storia, quattro cifre per un bambino.'],
      ['Che cosa sono la forza di immagazzinamento e la forza di recupero? Perché confonderle porta a sbagliare?', 'Immagazzinamento: quanto una conoscenza è radicata. Recupero: quanto è accessibile adesso. Si percepisce solo la seconda, che dopo una rilettura è altissima: ci si sente pronti e ci si ferma proprio quando lo studio stava cominciando.']
    ],
    m3: [
      ['Perché «bassa utilità» non vuol dire «da non fare»? Che ruolo hanno sottolineatura e rilettura?', 'Usate da sole producono poco, ma sono la fase di ingresso: servono a orientarsi, capire e selezionare. Si sottolinea poco e alla seconda lettura, e le parti evidenziate diventano domande per interrogarsi.'],
      ['Elenca le sei strategie.', 'Studio distribuito, recupero attivo, elaborazione, esempi concreti, doppia codifica, pratica intercalata. (Ricordarne quattro va già bene: rifai la prova domani.)'],
      ['Qual è il criterio per sapere quando si è ripassato abbastanza?', 'Non i minuti, ma riuscire a richiamare il concetto senza guardare: 3 richiami corretti nella prima sessione, alternati ad altri argomenti, poi altri 3 in giorni diversi.']
    ],
    m4: [
      ['Qual è la differenza tra mappa mentale e mappa concettuale, e qual è il test per riconoscerle?', 'La mappa mentale è a raggiera, con parole singole, e serve a generare e organizzare idee. La concettuale è gerarchica, con frecce etichettate, e mostra le relazioni tra concetti. Test: leggila ad alta voce. Se escono frasi è concettuale, se escono parole staccate è mentale.'],
      ['Che cos’è la domanda focale e perché viene per prima?', 'È la domanda, scritta in alto, a cui la mappa deve rispondere. Viene per prima perché sceglierla significa già decidere che cosa conta; senza, la mappa diventa un elenco di parole.'],
      ['Che cosa si scrive sopra una freccia? Che cosa significa se viene in mente un nome?', 'Verbi, preposizioni, avverbi e congiunzioni, mai nomi o aggettivi. Se viene in mente un nome, quello non è una relazione ma un concetto, e va messo in un nodo.'],
      ['Perché una mappa scaricata vale meno di una costruita in prima persona?', 'Perché a far imparare sono le decisioni: che cosa va in alto, che cosa collegare, quale parola-legame usare. In una mappa scaricata le ha già prese qualcun altro.']
    ],
    m5: [
      ['Che cosa sono saccadi e fissazioni? In quale dei due momenti si raccoglie informazione?', 'Le saccadi sono i salti dell’occhio lungo la riga, le fissazioni le brevi soste. L’informazione si raccoglie durante le fissazioni.'],
      ['Perché la «lettura fotografica» non funziona?', 'Perché tra velocità e comprensione c’è uno scambio: oltre un certo punto la comprensione crolla. Il limite è il tempo che serve al cervello per capire, non gli occhi. Le app a raffica impediscono anche di tornare indietro.'],
      ['Perché leggere le domande di fine capitolo prima del testo è utile?', 'Fanno da radar: costruiscono i ganci prima che servano e ti fanno leggere cercando qualcosa, invece di leggere passivamente.'],
      ['Perché degli appunti presi bene, se non vengono più riaperti, servono a poco?', 'Perché ciò che cambia i risultati è l’uso che se ne fa: completarli lo stesso giorno e poi coprirli e ripetere la lezione, cioè recupero attivo.']
    ],
    m6: [
      ['Che cosa succede tra ippocampo e corteccia durante il sonno?', 'Nel sonno profondo l’ippocampo riattiva le tracce di memoria del giorno e le trasferisce alla corteccia, dove si integrano e diventano stabili (consolidamento).'],
      ['Perché è importante la curiosità? Come possiamo stimolarla?', 'Nell’attesa di una risposta il circuito della dopamina lavora con l’ippocampo e ciò che arriva viene registrato meglio. Si stimola trasformando il titolo in domanda, chiedendosi a che cosa serve e a che cosa si collega, provando a indovinare, fermandosi su ciò che non torna.'],
      ['Che differenza c’è tra attenzione selettiva e sostenuta? Perché contro una notifica non serve la forza di volontà?', 'La selettiva sceglie che cosa seguire, la sostenuta mantiene la scelta nel tempo e si esaurisce. Una notifica agisce dal basso (bottom-up): cattura l’attenzione anche senza guardarla. Resistere costa energia ogni volta: conviene togliere lo stimolo.']
    ]
  };

  const QUIZ = [
    { q: 'Quanta energia consuma il cervello a riposo, rispetto a tutto il corpo?', o: ['Circa il 2%', 'Circa il 20%', 'Circa il 50%'], a: 1, why: 'Pesa circa il 2% del corpo ma consuma intorno al 20% dell’energia a riposo: pensare stanca davvero.', ch: 'm1' },
    { q: 'Quale struttura è la «porta d’ingresso» della memoria a lungo termine?', o: ['L’amigdala', 'L’ippocampo', 'Il cervelletto'], a: 1, why: 'L’ippocampo forma e consolida i nuovi ricordi, poi li trasferisce alla corteccia.', ch: 'm1' },
    { q: 'Perché a 15 anni resistere al telefono costa tanta fatica?', o: ['Perché la corteccia prefrontale è ancora in maturazione', 'Perché l’ippocampo è troppo piccolo', 'Perché manca la dopamina'], a: 0, why: 'La corteccia prefrontale, sede del controllo inibitorio, matura fino a dopo i vent’anni. Meglio usare strategie (telefono in un’altra stanza) che la sola forza di volontà.', ch: 'm1' },
    { q: 'Il «vuoto di memoria» all’interrogazione dipende soprattutto da…', o: ['Mancanza di intelligenza', 'Un allarme troppo forte dell’amigdala che occupa la memoria di lavoro', 'Troppo sonno'], a: 1, why: 'L’amigdala non distingue un pericolo reale da uno immaginato: troppa attivazione fa lavorare peggio la corteccia prefrontale.', ch: 'm1' },
    { q: 'Imparare, dal punto di vista fisico, significa…', o: ['Aumentare il numero di neuroni', 'Creare e rafforzare collegamenti tra neuroni', 'Riempire un magazzino'], a: 1, why: 'Nuove sinapsi che si formano e sinapsi esistenti che diventano più efficienti.', ch: 'm1' },
    { q: 'Quante cose nuove riesce a tenere insieme la memoria di lavoro?', o: ['1–2', '3–5 chunk', 'Circa 20'], a: 1, why: 'Tra tre e cinque chunk (Cowan, 2001): è il collo di bottiglia dell’apprendimento.', ch: 'm2' },
    { q: 'Perché 27457830 si ricorda e 27457830419067362459 no?', o: ['Perché le cifre del secondo sono più difficili', 'Perché il primo diventa 4 blocchi, il secondo 10', 'Perché 10 secondi non bastano mai'], a: 1, why: 'Non conta quante cifre sono, ma in quanti pezzi si riescono a raggruppare.', ch: 'm2' },
    { q: 'Che cosa succede davvero quando studi con le notifiche attive?', o: ['Fai due cose insieme senza costi', 'Alterni rapidamente i compiti e ogni rientro costa tempo', 'Niente, se non le leggi'], a: 1, why: 'Il multitasking è un rapido alternarsi: ogni cambio svuota la memoria di lavoro e al ritorno va riempita da capo.', ch: 'm2' },
    { q: 'Dopo la terza rilettura ti senti pronto. Che cosa è alta, in quel momento?', o: ['La forza di recupero', 'La forza di immagazzinamento', 'Entrambe, sicuramente'], a: 0, why: 'La forza di recupero è alta perché il testo è appena passato sotto gli occhi; quella di immagazzinamento può non essersi mossa.', ch: 'm2' },
    { q: 'Quale strategia ha le prove scientifiche più solide?', o: ['Rileggere', 'Il recupero attivo (interrogarsi)', 'Riassumere'], a: 1, why: 'Interrogarsi batte nettamente il rileggere, e il vantaggio cresce quanto più la verifica è lontana.', ch: 'm3' },
    { q: 'Quale di queste tecniche è risultata a bassa utilità (Dunlosky, 2013)?', o: ['Studio distribuito', 'Pratica di recupero', 'Sottolineare'], a: 2, why: 'Sottolineare, rileggere, riassumere, mnemotecniche e immagini mentali sono a bassa utilità se usate da sole.', ch: 'm3' },
    { q: 'Quando conviene sottolineare?', o: ['Alla prima lettura, tutto ciò che sembra importante', 'Alla seconda lettura, poco e con un perché', 'Mai'], a: 1, why: 'Alla prima lettura non sai ancora che cosa conta. Alla seconda si sceglie, una o due frasi per paragrafo.', ch: 'm3' },
    { q: 'La verifica è tra un mese. Quando fai il primo ripasso?', o: ['Domani', 'Fra 3–4 giorni', 'La sera prima'], a: 1, why: 'Più lontana è la prova, più larghi gli intervalli: per un mese, ripasso fra 3–4 giorni e poi ogni 3–4 giorni.', ch: 'm3' },
    { q: 'Che cosa dice la ricerca sugli «stili di apprendimento»?', o: ['Studiare nel proprio stile dà risultati migliori', 'Studiare nel proprio stile non dà vantaggi: parole e immagini insieme aiutano tutti', 'I visivi non devono leggere'], a: 1, why: 'Pashler e colleghi (2008) non hanno trovato vantaggi. La doppia codifica funziona per tutti.', ch: 'm3' },
    { q: 'La pratica intercalata (alternare tipi di esercizi)…', o: ['Sembra più facile mentre la usi', 'Sembra peggiore mentre la usi, ma rende di più', 'Funziona solo in palestra'], a: 1, why: 'Si sbaglia di più e ci si sente impacciati, ma si impara a scegliere il metodo giusto: è quello che serve alla verifica.', ch: 'm3' },
    { q: 'Leggi una mappa ad alta voce e ottieni frasi di senso compiuto. È una…', o: ['Mappa mentale', 'Mappa concettuale', 'Lista'], a: 1, why: 'Concetto + parola-legame + concetto = proposizione: è la mappa concettuale.', ch: 'm4' },
    { q: 'Che cosa si scrive sopra una freccia di una mappa concettuale?', o: ['Nomi e aggettivi', 'Verbi, preposizioni, avverbi, congiunzioni', 'Niente, basta la freccia'], a: 1, why: 'Se ti viene un nome, è un concetto e va in un nodo. Una freccia senza parola-legame è solo un disegno.', ch: 'm4' },
    { q: 'Quante parole al minuto legge in media un adulto?', o: ['200–300', '2.000–3.000', '25.000'], a: 0, why: 'Oltre un certo punto la comprensione crolla: chi promette 25.000 parole al minuto vende qualcosa.', ch: 'm5' },
    { q: 'Durante la lettura, quando raccogli informazione?', o: ['Durante le saccadi', 'Durante le fissazioni', 'Sempre, in modo continuo'], a: 1, why: 'Gli occhi saltano e si fermano: si vede durante le soste, le fissazioni.', ch: 'm5' },
    { q: 'Che cosa rende utili gli appunti?', o: ['Scrivere tutto parola per parola', 'Riprenderli lo stesso giorno e usarli per ripetere a libro chiuso', 'Usare tanti colori'], a: 1, why: 'Prendere appunti di per sé aiuta poco: conta riprenderli (Kobayashi, 2006).', ch: 'm5' },
    { q: 'Quante ore di sonno sono raccomandate tra i 13 e i 18 anni?', o: ['6–7', '8–10', '11–12'], a: 1, why: '8–10 ore per notte (American Academy of Sleep Medicine, 2016).', ch: 'm6' },
    { q: 'Qual è la difesa più efficace contro il telefono mentre studi?', o: ['Tenerlo a faccia in giù sul tavolo', 'Tenerlo in un’altra stanza', 'Resistere con la forza di volontà'], a: 1, why: 'Contro uno stimolo bottom-up non si resiste: si toglie. Anche un telefono non guardato peggiora la prestazione.', ch: 'm6' },
    { q: 'La dopamina è legata soprattutto…', o: ['Al piacere di ottenere qualcosa', 'Al volere qualcosa, all’attesa', 'Al sonno'], a: 1, why: 'Non è «l’ormone del piacere»: riguarda il volere. Per questo la curiosità, che è attesa, aiuta a ricordare.', ch: 'm6' },
    { q: 'Qual è la pausa migliore durante lo studio?', o: ['Scorrere i social per 10 minuti', 'Alzarsi, camminare, guardare lontano', 'Guardare un video breve'], a: 1, why: 'Un altro schermo cambia lo stimolo ma non riposa l’attenzione. Muoversi sì.', ch: 'm6' }
  ];

  const GLOSSARY = [
    ['Amigdala', 'Nucleo a forma di mandorla nel lobo temporale; valuta rapidamente il significato emotivo degli stimoli.'],
    ['Assone', 'Il prolungamento lungo del neurone, che porta il segnale in uscita.'],
    ['BDNF', 'Molecola coinvolta nella plasticità delle sinapsi; aumenta con l’attività fisica.'],
    ['Chunk', 'Unità di informazione che il cervello tratta come un blocco unico. La sua dimensione dipende da ciò che già si sa.'],
    ['Consolidamento', 'Processo, in gran parte notturno, con cui una memoria recente diventa stabile.'],
    ['Corteccia prefrontale', 'Area frontale, sede principale delle funzioni esecutive; è l’ultima a maturare.'],
    ['Dendriti', 'Le ramificazioni del neurone che ricevono i segnali in arrivo.'],
    ['Difficoltà desiderabili', 'Condizioni che rendono lo studio più faticoso sul momento e più duraturo nel tempo.'],
    ['Dopamina', 'Neurotrasmettitore coinvolto nell’attesa di qualcosa di interessante; il suo circuito lavora insieme all’ippocampo.'],
    ['Doppia codifica', 'Uso combinato di parole e immagini per lo stesso contenuto.'],
    ['Forza di immagazzinamento', 'Quanto una conoscenza è radicata. Non si percepisce direttamente.'],
    ['Forza di recupero', 'Quanto una conoscenza è accessibile in un dato momento. È l’unica che si percepisce.'],
    ['Funzioni esecutive', 'Controllo inibitorio, memoria di lavoro e flessibilità cognitiva.'],
    ['Illusione di competenza', 'Sensazione di padroneggiare un contenuto prodotta dalla familiarità con il testo.'],
    ['Ippocampo', 'Struttura essenziale per formare e consolidare nuovi ricordi dichiarativi.'],
    ['Memoria dichiarativa', 'Memoria di fatti ed eventi; si può raccontare a parole.'],
    ['Memoria di lavoro', 'Sistema a capacità molto limitata in cui si mantengono e si manipolano informazioni nell’immediato.'],
    ['Memoria procedurale', 'Memoria di abilità e procedure; si costruisce con la pratica.'],
    ['Neuroplasticità', 'Capacità del cervello di modificarsi in risposta all’esperienza, lungo tutta la vita.'],
    ['Neurotrasmettitore', 'Sostanza chimica liberata nella sinapsi per trasmettere il segnale al neurone successivo.'],
    ['Parola chiave', 'La parola più corta che richiama il maggior numero di significati di un passaggio. Funziona solo se poggia su conoscenze già possedute.'],
    ['Proposizione', 'In una mappa concettuale: concetto + parola-legame + concetto, una frase che si può dire vera o falsa.'],
    ['Recupero attivo', 'Tentativo di richiamare un’informazione senza consultare il materiale.'],
    ['Saccadi e fissazioni', 'I salti e le soste che l’occhio compie durante la lettura.'],
    ['Sinapsi', 'Punto di contatto funzionale tra due neuroni.'],
    ['Sovraccarico cognitivo', 'Condizione in cui gli elementi nuovi superano la capacità della memoria di lavoro.'],
    ['Studio distribuito', 'Distribuzione delle sessioni di studio nel tempo invece della concentrazione in una sola.']
  ];

  /* =========================================================
     COMPONENTI RIUTILIZZABILI
     ========================================================= */

  // Classificazione: ogni elemento va assegnato a una categoria
  function classify(el, cfg) {
    function draw() {
      const items = shuffle(cfg.items);
      let done = 0, good = 0;
      el.innerHTML = `${tag(cfg.tag || 'Gioca')}<h3>${cfg.title}</h3>${cfg.intro ? `<p>${cfg.intro}</p>` : ''}<div class="items"></div><div class="score" aria-live="polite"></div>`;
      const wrap = $('.items', el);
      items.forEach((it) => {
        const row = document.createElement('div');
        row.className = 'sort-item';
        row.innerHTML = `<div class="label">${it.t}</div><div class="opts">${cfg.cats.map((c) => `<button type="button" data-c="${c.id}">${c.label}</button>`).join('')}</div><div class="why" aria-live="polite"></div>`;
        $$('button', row).forEach((b) => b.addEventListener('click', () => {
          const ok = b.dataset.c === it.c;
          const right = cfg.cats.find((c) => c.id === it.c).label;
          row.classList.add(ok ? 'done-ok' : 'done-ko');
          $('.opts', row).remove();
          $('.why', row).innerHTML = `<span class="mark ${ok ? 'ok' : 'ko'}">${ok ? '✓ Giusto' : '✗ Non proprio'}</span> → <strong>${right}</strong>${it.why ? '. ' + it.why : ''}`;
          done++; if (ok) good++;
          if (done === items.length) {
            const s = $('.score', el);
            s.innerHTML = `Risultato: ${good} su ${items.length}. ${good === items.length ? 'Perfetto!' : 'Rifallo tra qualche giorno: è recupero attivo.'} <div class="btn-row"><button class="btn secondary small" type="button">Ricomincia</button></div>`;
            $('button', s).addEventListener('click', draw);
          }
        }));
        wrap.appendChild(row);
      });
    }
    draw();
  }

  // Domande a scelta multipla, una alla volta
  function mcq(el, cfg) {
    let qs, i, good, wrongs;
    function start() { qs = cfg.shuffle === false ? cfg.qs.slice() : shuffle(cfg.qs); i = 0; good = 0; wrongs = []; show(); }
    function show() {
      if (i >= qs.length) return end();
      const q = qs[i];
      const order = shuffle(q.o.map((t, k) => ({ t, k })));
      el.innerHTML = `${tag(cfg.tag || 'Quiz')}<h3>${cfg.title}</h3><p class="pill">Domanda ${i + 1} di ${qs.length}</p><p><strong>${q.q}</strong></p><div class="opts"></div><div class="fb" aria-live="polite"></div>`;
      const box = $('.opts', el);
      order.forEach((o) => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'choice'; b.textContent = o.t;
        b.addEventListener('click', () => {
          const ok = o.k === q.a;
          if (ok) good++; else wrongs.push(q);
          $$('.choice', box).forEach((x, idx) => { x.disabled = true; if (order[idx].k === q.a) x.classList.add('correct'); });
          if (!ok) b.classList.add('wrong');
          const fb = $('.fb', el);
          fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'ko'}"><span class="mark ${ok ? 'ok' : 'ko'}">${ok ? '✓ Esatto.' : '✗ Non è questa.'}</span> ${q.why || ''}</div><div class="btn-row"><button class="btn" type="button">${i + 1 < qs.length ? 'Avanti' : 'Vedi il risultato'}</button></div>`;
          const nb = $('button', fb); nb.addEventListener('click', () => { i++; show(); }); nb.focus();
        });
        box.appendChild(b);
      });
    }
    function end() {
      const ch = {};
      wrongs.forEach((w) => { if (w.ch) ch[w.ch] = true; });
      const links = Object.keys(ch).map((id) => { const c = CHAPTERS.find((x) => x.id === id); return `<li><a href="#${id}">Capitolo ${c.n} · ${c.short}</a></li>`; }).join('');
      el.innerHTML = `${tag(cfg.tag || 'Quiz')}<h3>${cfg.title}</h3><p class="timer-big">${good} / ${qs.length}</p><p>${good === qs.length ? 'Tutto giusto. Rifallo tra qualche giorno: il ripasso distanziato funziona così.' : 'Le risposte sbagliate sono la tua lista di cose da ripassare: non è un voto, è un’informazione.'}</p>${links ? `<p><strong>Da riguardare:</strong></p><ul>${links}</ul>` : ''}<div class="btn-row"><button class="btn" type="button">Ricomincia</button></div>`;
      $('button', el).addEventListener('click', start);
    }
    start();
  }

  // Carte da girare
  function flips(el, cfg) {
    el.innerHTML = `${tag(cfg.tag || 'Tocca e scopri')}<h3>${cfg.title}</h3>${cfg.intro ? `<p>${cfg.intro}</p>` : ''}<div class="flips"></div>`;
    const w = $('.flips', el);
    cfg.cards.forEach((c) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'flip'; b.setAttribute('aria-expanded', 'false');
      const front = `<span class="front-title">${c.front}</span><span class="hint">${c.hint || 'Tocca per girare'}</span>`;
      const back = `<span class="front-title">${c.front}</span><span class="back">${c.back}</span>`;
      b.innerHTML = front;
      b.addEventListener('click', () => {
        const open = b.classList.toggle('open');
        b.setAttribute('aria-expanded', String(open));
        b.innerHTML = open ? back : front;
      });
      w.appendChild(b);
    });
  }

  // Checklist con barra di avanzamento
  function checklist(el, cfg) {
    el.innerHTML = `${tag(cfg.tag || 'Checklist')}<h3>${cfg.title}</h3>${cfg.intro ? `<p>${cfg.intro}</p>` : ''}<div class="checklist">${cfg.items.map((t, k) => `<label><input type="checkbox" data-k="${k}"><span>${t}</span></label>`).join('')}</div><div class="progress" aria-hidden="true"><div></div></div><p class="cl-msg" aria-live="polite"></p>`;
    const bar = $('.progress > div', el), msg = $('.cl-msg', el), boxes = $$('input', el);
    const upd = () => {
      const n = boxes.filter((b) => b.checked).length;
      bar.style.width = (100 * n / boxes.length) + '%';
      msg.textContent = n === boxes.length ? (cfg.done || 'Tutto fatto.') : `${n} su ${boxes.length}`;
    };
    boxes.forEach((b) => b.addEventListener('change', upd)); upd();
  }

  // Timer con conto alla rovescia
  function countdown(display, seconds, onEnd) {
    let left = seconds, id = null;
    const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    display.textContent = fmt(left);
    return {
      start() { if (id) return; id = setInterval(() => { left--; display.textContent = fmt(Math.max(left, 0)); if (left <= 0) { clearInterval(id); id = null; if (onEnd) onEnd(); } }, 1000); },
      stop() { clearInterval(id); id = null; },
      reset() { clearInterval(id); id = null; left = seconds; display.textContent = fmt(left); }
    };
  }
  let activeTimers = [];

  /* =========================================================
     ATTIVITÀ
     ========================================================= */
  const ACT = {};

  ACT.numbers = (el) => flips(el, {
    title: 'Indovina il numero, poi gira la carta',
    cards: [
      { front: 'Quanto pesa?', back: 'Poco più di un chilo: circa il 2% del peso corporeo.' },
      { front: 'Quanta energia consuma?', back: 'Circa il 20% dell’energia del corpo a riposo. È l’organo più «costoso»: pensare stanca davvero.' },
      { front: 'Quanti neuroni?', back: 'Circa 86 miliardi (Azevedo e coll., 2009). Ma conta di più che ognuno sia collegato a migliaia di altri.' },
      { front: 'Emisferi e lobi', back: '2 emisferi, 4 lobi per emisfero. La distinzione «sinistro logico, destro creativo» non è rigida: la corteccia connette tutte le sue aree.' }
    ]
  });

  ACT.brain = (el) => {
    const R = {
      pref: { n: 'Corteccia prefrontale', sw: 'sw-pref', h: '<p><strong>Dove:</strong> la parte anteriore del cervello, dietro la fronte.</p><p><strong>Che cosa fa:</strong> è la <strong>regia</strong>, sede delle funzioni esecutive: <em>controllo inibitorio</em> (resistere a impulsi e distrazioni, come non guardare il telefono), <em>memoria di lavoro</em> (tenere in mente e manipolare informazioni), <em>flessibilità cognitiva</em> (cambiare strategia quando non funziona).</p><p><strong>Perché ti riguarda:</strong> è l’ultima area a maturare, dopo i vent’anni. A quindici anni queste funzioni sono ancora in costruzione: non è un difetto, è un’informazione utile. Affidarsi solo alla forza di volontà funziona poco: meglio orari decisi, un calendario scritto, il telefono in un’altra stanza.</p>' },
      cort: { n: 'Corteccia cerebrale', sw: 'sw-cort', h: '<p><strong>Dove:</strong> lo strato esterno del cervello, con le tipiche circonvoluzioni.</p><p><strong>Che cosa fa:</strong> è dove le conoscenze vengono <strong>immagazzinate a lungo termine</strong>. Riceve dall’ippocampo i ricordi nuovi e col tempo li integra con quello che sai già. La sua capacità è virtualmente infinita.</p><p><strong>Perché ti riguarda:</strong> il problema non è lo spazio a destinazione, ma il passaggio per arrivarci, la memoria di lavoro. E chi ha già conoscenze su un argomento impara più in fretta, perché ha punti di aggancio: per questo saltare le basi crea difficoltà.</p>' },
      hipp: { n: 'Ippocampo', sw: 'sw-hipp', h: '<p><strong>Dove:</strong> struttura allungata nella parte interna del lobo temporale, una per emisfero, all’incirca sopra le orecchie. Il nome viene dal cavalluccio marino, per la forma.</p><p><strong>Che cosa fa:</strong> <strong>forma</strong> i nuovi ricordi di fatti ed eventi ed è la porta d’ingresso della memoria a lungo termine; poi li <strong>consolida</strong>, un lavoro che continua per ore dopo lo studio e in buona parte durante il sonno. È un magazzino temporaneo: i ricordi definitivi passano alla corteccia.</p><p><strong>Perché ti riguarda:</strong> cinque ore in una notte ne saturano la capacità. Distribuire lo studio su una settimana permette più cicli di sonno. E dormire poco la notte prima interrompe il lavoro che avrebbe fissato ciò che hai studiato.</p><p class="source">Attenzione: l’ippocampo non è la sede della memoria di lavoro.</p>' },
      amyg: { n: 'Amigdala', sw: 'sw-amyg', h: '<p><strong>Dove:</strong> due piccoli nuclei a forma di mandorla (in greco <em>amygdala</em>), in profondità nei lobi temporali, accanto all’ippocampo.</p><p><strong>Che cosa fa:</strong> valuta il significato emotivo di ciò che accade, soprattutto la minaccia: è il <strong>rilevatore di pericolo</strong> del cervello. Fissa i ricordi legati alle emozioni: gli eventi intensi si ricordano meglio.</p><p><strong>Perché ti riguarda:</strong> l’allarme non distingue un pericolo reale da uno immaginato, quindi un’interrogazione viene trattata come una minaccia. Se l’allarme è troppo forte la corteccia prefrontale lavora peggio: è il vuoto di memoria. Serve la giusta attivazione, come prima di una gara.</p>' }
    };
    el.innerHTML = `${tag('Esplora')}<h3>Tocca una struttura</h3>
<svg class="figure mid-svg" viewBox="0 0 400 300" role="img" aria-label="Schema semplificato del cervello visto di lato, con la fronte a sinistra">
  <path class="brain-stem" d="M245 205 C250 235 255 262 262 292 L286 292 C279 258 277 232 281 205 Z"/>
  <ellipse class="brain-cereb" cx="302" cy="222" rx="44" ry="25"/>
  <path class="brain-outline" d="M70 165 C50 105 105 45 200 40 C295 35 355 85 355 145 C357 180 338 200 308 205 L265 208 C245 222 205 226 172 220 C128 224 85 205 70 165 Z"/>
  <path class="region r-pref" data-r="pref" d="M70 165 C50 105 105 45 168 42 C142 85 132 140 142 210 C110 207 82 192 70 165 Z"/>
  <path class="region r-cort" data-r="cort" d="M70 165 C50 105 105 45 200 40 C295 35 355 85 355 145 C357 180 338 200 308 205"/>
  <path class="region r-hipp" data-r="hipp" d="M196 178 C216 197 248 197 267 172"/>
  <circle class="region r-amyg" data-r="amyg" cx="185" cy="172" r="11"/>
  <text class="svg-small" x="4" y="150">fronte</text>
  <text class="svg-small" x="300" y="275">cervelletto</text>
  <text class="svg-small" x="200" y="292">tronco</text>
</svg>
<div class="region-btns" role="group" aria-label="Strutture">${Object.keys(R).map((k) => `<button type="button" data-r="${k}" aria-pressed="false"><span class="sw ${R[k].sw}"></span>${R[k].n}</button>`).join('')}</div>
<div class="box info" aria-live="polite"><p>Scegli una delle quattro strutture per scoprire dove si trova, che cosa fa e perché riguarda il tuo modo di studiare.</p></div>`;
    const pick = (k) => {
      $$('.region', el).forEach((r) => r.classList.toggle('active', r.dataset.r === k));
      $$('.region-btns button', el).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.r === k)));
      $('.info', el).innerHTML = `<h3><span class="sw ${R[k].sw}"></span>${R[k].n}</h3>${R[k].h}`;
    };
    $$('[data-r]', el).forEach((n) => n.addEventListener('click', () => pick(n.dataset.r)));
  };

  ACT.neuron = (el) => {
    const P = {
      dend: ['Dendriti', 'Le ramificazioni che <strong>ricevono</strong> i segnali dagli altri neuroni: sono i segnali in entrata. Un neurone ne ha tanti.'],
      soma: ['Corpo cellulare', 'La centrale: <strong>raccoglie</strong> i segnali in arrivo e «decide» se trasmettere a sua volta.'],
      axon: ['Assone', 'Il prolungamento lungo che porta il segnale <strong>in uscita</strong>, verso altri neuroni. Ogni neurone ne ha uno solo.'],
      syn: ['Sinapsi', 'Il punto di contatto tra l’assone di un neurone e il neurone successivo. Qui l’impulso elettrico libera i <strong>neurotrasmettitori</strong> (i pallini) che attraversano la fessura sinaptica. Imparare significa formare nuove sinapsi o rendere più efficienti quelle esistenti.']
    };
    el.innerHTML = `${tag('Esplora')}<h3>Le parti del neurone</h3><p>Tocca una parte del disegno o un pulsante.</p>
<svg class="figure mid-svg" viewBox="0 0 440 180" role="img" aria-label="Disegno di un neurone: dendriti, corpo cellulare, assone e sinapsi con il neurone successivo">
  <g class="n-part" data-p="dend"><path class="n-line" d="M68 80 L30 40 M68 80 L14 82 M70 102 L30 145 M80 66 L66 22 M50 60 L36 52 M44 128 L22 128"/><rect x="0" y="10" width="62" height="150" fill="transparent"/></g>
  <g class="n-part" data-p="soma"><circle class="n-soma" cx="90" cy="90" r="27"/><circle class="n-nucleus" cx="90" cy="90" r="8"/></g>
  <g class="n-part" data-p="axon"><path class="n-line" d="M117 90 L330 90"/><rect x="117" y="75" width="213" height="30" fill="transparent"/></g>
  <g class="n-part" data-p="syn"><path class="n-line" d="M330 90 L352 68 M330 90 L356 90 M330 90 L352 112"/><circle class="n-vesicle" cx="366" cy="84" r="4"/><circle class="n-vesicle" cx="372" cy="94" r="4"/><circle class="n-vesicle" cx="366" cy="102" r="4"/><path class="n-line" d="M392 50 C380 90 380 90 392 130 M392 90 L436 90"/><rect x="330" y="40" width="110" height="100" fill="transparent"/></g>
  <text class="svg-small" x="236" y="168">neurone successivo →</text>
</svg>
<div class="region-btns">${Object.keys(P).map((k) => `<button type="button" data-p="${k}" aria-pressed="false">${P[k][0]}</button>`).join('')}</div>
<div class="box info" aria-live="polite"><p>Il segnale viaggia sempre nello stesso verso: dendriti → corpo cellulare → assone → sinapsi.</p></div>`;
    const pick = (k) => {
      $$('.n-part', el).forEach((g) => g.classList.toggle('active', g.dataset.p === k));
      $$('.region-btns button', el).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.p === k)));
      $('.info', el).innerHTML = `<h3>${P[k][0]}</h3><p>${P[k][1]}</p>`;
    };
    $$('[data-p]', el).forEach((n) => n.addEventListener('click', () => pick(n.dataset.p)));
  };

  ACT.path = (el) => {
    let grass = '';
    for (let x = 8; x < 400; x += 14) for (let y = 18; y < 160; y += 22) { const dx = (x * 7 + y * 3) % 9 - 4; grass += `M${x} ${y + 10} L${x + dx} ${y}`; }
    el.innerHTML = `${tag('Prova tu')}<h3>La metafora del sentiero</h3><p>Attraversare un prato con l’erba alta la prima volta è faticoso e non lascia traccia. Ogni passaggio è un ripasso.</p>
<svg class="figure" viewBox="0 0 400 170" role="img" aria-label="Un prato attraversato da un sentiero che diventa più o meno visibile">
  <rect class="path-bg" x="0" y="0" width="400" height="170" rx="14"/>
  <path class="path-grass" d="${grass}"/>
  <path class="path-trail" d="M-5 150 C110 110 250 140 405 25"/>
</svg>
<div class="btn-row"><button class="btn" type="button" data-a="plus">Ripassa (+1 passaggio)</button><button class="btn secondary" type="button" data-a="minus">Lascia passare una settimana</button></div>
<p class="pill">Passaggi: <span class="cnt">0</span></p>
<div class="feedback info st" aria-live="polite"></div>`;
    let n = 0;
    const trail = $('.path-trail', el), st = $('.st', el), cnt = $('.cnt', el);
    const upd = () => {
      trail.setAttribute('stroke-width', String(n === 0 ? 0 : 4 + n * 2.6));
      trail.setAttribute('opacity', String(Math.min(1, n / 8)));
      cnt.textContent = n;
      st.textContent = n === 0 ? 'Erba alta: nessuna traccia. L’informazione è passata, ma non è stata appresa.'
        : n <= 2 ? 'L’erba si piega appena: collegamenti ancora deboli.'
          : n <= 6 ? 'Si intravede un sentiero: ogni richiamo rende il successivo più facile.'
            : 'Un sentiero netto: percorrerlo è facile. Quel sentiero è il ricordo.';
    };
    $('[data-a="plus"]', el).addEventListener('click', () => { n = Math.min(12, n + 1); upd(); });
    $('[data-a="minus"]', el).addEventListener('click', () => { n = Math.max(0, n - 2); upd(); if (n >= 0) st.textContent = 'Se smetti di passarci, l’erba ricresce. ' + st.textContent; });
    upd();
  };

  ACT.declproc = (el) => classify(el, {
    title: 'Dichiarativa o procedurale?',
    intro: 'Per ogni esempio scegli quale memoria entra in gioco.',
    cats: [{ id: 'd', label: 'Dichiarativa (sapere che cosa)' }, { id: 'p', label: 'Procedurale (sapere come)' }],
    items: [
      { t: 'La definizione di «capacità condizionali»', c: 'd' },
      { t: 'La schiacciata a pallavolo', c: 'p' },
      { t: 'L’anno in cui è nata la pallavolo', c: 'd' },
      { t: 'Andare in bicicletta', c: 'p' },
      { t: 'Le regole del cambio nella pallavolo', c: 'd', why: 'È una regola: si può raccontare a parole.' },
      { t: 'Il palleggio', c: 'p' },
      { t: 'I nomi delle ossa del braccio', c: 'd' },
      { t: 'Allacciarsi le scarpe senza pensarci', c: 'p', why: 'Un’abilità diventata automatica: difficile da spiegare a parole.' }
    ]
  });

  ACT.memotests = (el) => {
    const T = [
      { s: '27457830', label: 'Prova 1 · un numero' },
      { s: '27457830419067362459', label: 'Prova 2 · un numero più lungo' },
      { s: 'RAGEDENKCAZLREUBEBL', label: 'Prova 3 · una sequenza di lettere' },
      { s: 'A RED GREEN BLUE BLACK Z', label: 'Prova 4 · un’altra sequenza di lettere' }
    ];
    const results = [];
    let k = 0, timer = null;
    const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, '');
    function intro() {
      el.innerHTML = `${tag('Prova tu')}<h3>Guarda per 10 secondi, poi riscrivi</h3><p>Quattro prove. Per ognuna hai 10 secondi per guardare; poi la sequenza sparisce e devi riscriverla. Niente carta e penna durante la visione: solo la tua testa.</p><div class="btn-row"><button class="btn" type="button">Inizia la prova 1</button></div>`;
      $('button', el).addEventListener('click', () => { k = 0; results.length = 0; look(); });
    }
    function look() {
      const t = T[k];
      el.innerHTML = `${tag('Prova tu')}<h3>${t.label}</h3><p>Guarda. Hai 10 secondi.</p><div class="timer-bar" aria-hidden="true"><div class="timer-fill"></div></div><div class="memo-display" aria-live="off">${t.s}</div><p class="sr-only" aria-live="polite">Memorizza la sequenza mostrata. Hai 10 secondi.</p>`;
      const fill = $('.timer-fill', el);
      const t0 = Date.now();
      timer = setInterval(() => {
        const p = Math.max(0, 1 - (Date.now() - t0) / 10000);
        fill.style.width = (p * 100) + '%';
        if (p <= 0) { clearInterval(timer); write(); }
      }, 100);
      activeTimers.push(() => clearInterval(timer));
    }
    function write() {
      const t = T[k];
      el.innerHTML = `${tag('Prova tu')}<h3>${t.label}</h3><label class="field"><span>Riscrivi senza guardare</span><input class="input" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" inputmode="${/\d/.test(t.s) ? 'numeric' : 'text'}"></label><div class="btn-row"><button class="btn" type="button">Controlla</button></div>`;
      const inp = $('input', el); inp.focus();
      const go = () => check(inp.value);
      $('button', el).addEventListener('click', go);
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
    }
    function check(val) {
      const t = T[k], a = norm(t.s), b = norm(val);
      let ok = 0, html = '';
      for (let j = 0; j < a.length; j++) { const good = b[j] === a[j]; if (good) ok++; html += `<span class="${good ? 'g' : 'b'}">${esc(b[j] || '·')}</span>`; }
      results.push({ ok, tot: a.length });
      el.innerHTML = `${tag('Prova tu')}<h3>${t.label}</h3><p>Originale:</p><div class="cmp">${esc(a)}</div><p>La tua risposta (in verde i caratteri al posto giusto):</p><div class="cmp">${html}</div><p class="score">${ok} su ${a.length} al posto giusto</p><div class="btn-row"><button class="btn" type="button">${k < 3 ? 'Prova ' + (k + 2) : 'Che cosa è successo?'}</button></div>`;
      $('button', el).addEventListener('click', () => { k++; if (k < 4) look(); else explain(); });
    }
    function explain() {
      const r = results.map((x, j) => `<li>Prova ${j + 1}: ${x.ok} su ${x.tot}</li>`).join('');
      el.innerHTML = `${tag('Prova tu')}<h3>Che cosa è appena successo</h3><ul>${r}</ul>
<div class="box"><h3>Due domande</h3><p><strong>1.</strong> Otto cifre ce l’hai fatta (quasi certamente), venti no. Sono cifre in entrambi i casi: perché?</p><p><strong>2.</strong> Le prove 3 e 4 usano esattamente le stesse 19 lettere, solo in ordine diverso. Perché una volta è quasi impossibile e una volta è facile?</p></div>
<p>Per rispondere servono due cose: quanto tiene la memoria di lavoro, e che cosa conta come «una cosa». Continua a leggere: le risposte sono qui sotto, nel paragrafo sul chunk.</p>
<div class="btn-row"><button class="btn secondary" type="button">Rifai le prove</button></div>`;
      $('button', el).addEventListener('click', intro);
    }
    intro();
  };

  ACT.flow = (el) => {
    const S = [
      ['Memoria sensoriale', 'una frazione di secondo', 'Raccoglie tutto ciò che arriva dai sensi e lo trattiene per una frazione di secondo. Tantissime informazioni, che svaniscono quasi subito. Se non ci fai caso, l’informazione sparisce.'],
      ['Memoria di lavoro', '3–5 chunk, pochi secondi', 'Il banco da lavoro mentale, sotto la regia dell’attenzione. È piccolissima: tutto quello che impari deve attraversarla. Le quattro prove si sono giocate tutte qui. Se non elabori, l’informazione non passa.'],
      ['Memoria a lungo termine', 'senza limiti noti', 'L’archivio permanente: conoscenze (dichiarativa) e abilità (procedurale). Il problema non è mai lo spazio qui, ma il passaggio per arrivarci. Il <strong>recupero</strong>, cioè tirare fuori ciò che sai, è il momento in cui si impara davvero.']
    ];
    el.innerHTML = `${tag('Esplora')}<h3>Il percorso di un’informazione</h3><p>Tocca ogni magazzino.</p>
<div class="flow">
<button type="button" class="flow-step" data-i="0" aria-pressed="false"><strong>${S[0][0]}</strong><small>${S[0][1]}</small></button>
<div class="flow-arrow" aria-hidden="true">→<small>filtro: attenzione</small></div>
<button type="button" class="flow-step" data-i="1" aria-pressed="false"><strong>${S[1][0]}</strong><small>${S[1][1]}</small></button>
<div class="flow-arrow" aria-hidden="true">⇄<small>elaborazione · recupero</small></div>
<button type="button" class="flow-step" data-i="2" aria-pressed="false"><strong>${S[2][0]}</strong><small>${S[2][1]}</small></button>
</div>
<div class="box info" aria-live="polite"><p>Solo ciò a cui presti attenzione passa al magazzino successivo: per questo studiare distratti rende poco.</p></div>`;
    $$('.flow-step', el).forEach((b) => b.addEventListener('click', () => {
      $$('.flow-step', el).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const s = S[+b.dataset.i];
      $('.info', el).innerHTML = `<h3>${s[0]}</h3><p>${s[2]}</p>`;
    }));
  };

  ACT.chunkdemo = (el) => {
    el.innerHTML = `${tag('Guarda')}<h3>Le risposte alle due domande</h3>
<h4>Otto cifre sì, venti no</h4>
<div class="chunks">${['27', '45', '78', '30'].map((c) => `<span class="chunk">${c}</span>`).join('')}</div>
<p>Otto cifre lette a coppie diventano <strong>4 blocchi</strong>: dentro il limite.</p>
<div class="chunks">${['27', '45', '78', '30', '41', '90', '67', '36', '24', '59'].map((c) => `<span class="chunk bad">${c}</span>`).join('')}</div>
<p>Venti cifre, anche lette a coppie, restano <strong>10 blocchi</strong>: molto oltre il limite. Non è difficile: è impossibile.</p>
<h4>Le stesse lettere</h4>
<div class="chunks lettersA">${'RAGEDENKCAZLREUBEBL'.split('').map((c) => `<span class="chunk bad">${c}</span>`).join('')}</div>
<div class="btn-row"><button class="btn" type="button">Riordina le lettere</button></div>
<div class="lettersB hidden"><div class="chunks">${['A', 'RED', 'GREEN', 'BLUE', 'BLACK', 'Z'].map((c) => `<span class="chunk">${c}</span>`).join('')}</div>
<p>19 blocchi separati diventano <strong>6 chunk</strong>: parole che sai già (l’inglese, i nomi dei colori, la prima e l’ultima lettera dell’alfabeto). In venti secondi non è cambiata la tua memoria: è cambiato il fatto che le lettere si sono agganciate a cose note.</p></div>
<p class="feedback info"><strong>Non conta quante informazioni sono: conta in quanti pezzi riesci a raggrupparle.</strong></p>`;
    $('button', el).addEventListener('click', (e) => { $('.lettersB', el).classList.remove('hidden'); e.target.remove(); });
  };

  ACT.overload = (el) => flips(el, {
    tag: 'Tocca e scopri', title: 'Situazioni fisicamente impossibili',
    intro: 'Perché queste abitudini bloccano l’apprendimento?',
    cards: [
      { front: 'Studiare con le notifiche attive', back: 'Ogni cambio di compito svuota la stanza piccola, e al ritorno va riempita da capo.' },
      { front: 'Affrontare un capitolo intero senza spezzarlo', back: 'Se passano più di 3–5 chunk nuovi alla volta, il sistema si blocca.' },
      { front: 'Studiare cose nuove senza aver capito le precedenti', back: 'Senza chunk già formati ogni pezzo resta separato: è la prova 3 applicata a una materia.' },
      { front: 'Studiare con musica cantata', back: 'Le parole cantate competono con quelle che stai leggendo per le stesse risorse verbali.' }
    ]
  });

  ACT.volley = (el) => {
    const TXT = `<p>La pallavolo nasce il 9 febbraio 1895 a Holyoke, nel Massachusetts. La inventa William G. Morgan, direttore di educazione fisica dell’YMCA, che cerca un gioco meno faticoso della pallacanestro e senza contatto fisico.</p><p>Morgan lo chiama Mintonette, prendendo il nome dal badminton, e mette la rete a sei piedi e sei pollici da terra, circa 198 centimetri. Poco dopo un collega, Alfred Halstead, osserva che l’azione principale è colpire la palla al volo e propone il nome volleyball.</p><p>Il gioco si diffonde grazie alla rete internazionale dell’YMCA. La federazione internazionale, la FIVB, nasce nel 1947; la pallavolo diventa sport olimpico nel 1964. Oggi il campo misura 18 metri per 9 e la rete sta a 2,43 metri per gli uomini e 2,24 per le donne.</p>`;
    const KEYS = ['La data: 9 febbraio 1895', 'Il luogo: Holyoke, Massachusetts', 'William G. Morgan', 'Alfred Halstead', 'Il primo nome: Mintonette', 'Il nome volleyball', 'La rete di allora: circa 198 cm (sei piedi e sei pollici)', 'La rete di oggi: 2,43 m uomini, 2,24 m donne', 'La FIVB nasce nel 1947', 'Sport olimpico dal 1964', 'Il campo: 18 × 9 m'];
    let guess = 6;
    function s1() {
      el.innerHTML = `${tag('Prova tu')}<h3>Passo 1 · Leggi il brano due volte</h3><div class="box">${TXT}</div><div class="btn-row"><button class="btn" type="button">Fatto, l’ho letto due volte</button></div>`;
      $('button', el).addEventListener('click', s2);
    }
    function s2() {
      el.innerHTML = `${tag('Prova tu')}<h3>Passo 2 · Quanto pensi di ricordare?</h3><p>La seconda lettura è stata più facile della prima? Nel testo ci sono <strong>11 informazioni precise</strong>. Quante pensi di ricordarne?</p><label class="field"><span>La mia previsione: <span class="gv">${guess}</span> su 11</span><input type="range" min="0" max="11" value="${guess}"></label><div class="btn-row"><button class="btn" type="button">Nascondi il testo e scrivi</button></div>`;
      const r = $('input', el); r.addEventListener('input', () => { guess = +r.value; $('.gv', el).textContent = guess; });
      $('button', el).addEventListener('click', s3);
    }
    function s3() {
      el.innerHTML = `${tag('Prova tu')}<h3>Passo 3 · Riscrivi tutto ciò che ricordi</h3><p>Hai 3 minuti. Il testo è nascosto. Scrivi qui o su un foglio.</p><div class="timer-big" aria-live="off">3:00</div><textarea class="input" aria-label="Ciò che ricordi del brano"></textarea><div class="btn-row"><button class="btn" type="button">Ho finito: controlliamo</button></div>`;
      const t = countdown($('.timer-big', el), 180, () => { $('.timer-big', el).textContent = 'Tempo!'; });
      t.start(); activeTimers.push(() => t.stop());
      $('textarea', el).focus();
      $('button', el).addEventListener('click', () => { t.stop(); s4($('textarea', el).value); });
    }
    function s4(written) {
      el.innerHTML = `${tag('Prova tu')}<h3>Passo 4 · Conta le cose giuste</h3>${written.trim() ? `<div class="box"><p class="source">Hai scritto:</p><p>${esc(written).replace(/\n/g, '<br>')}</p></div>` : ''}<p>Spunta solo le informazioni che hai scritto in modo esatto.</p><div class="checklist">${KEYS.map((t2) => `<label><input type="checkbox"><span>${t2}</span></label>`).join('')}</div><div class="btn-row"><button class="btn" type="button">Confronta con la previsione</button></div>`;
      $('button', el).addEventListener('click', () => {
        const got = $$('input:checked', el).length;
        const diff = guess - got;
        el.innerHTML = `${tag('Prova tu')}<h3>Il risultato</h3><div class="flips"><div class="box"><p class="timer-big">${guess}</p><p>la tua previsione</p></div><div class="box"><p class="timer-big">${got}</p><p>quelle davvero ricordate</p></div></div>
<div class="feedback ${diff > 0 ? 'ko' : 'ok'}">${diff > 0 ? `Hai previsto ${diff} informazion${diff === 1 ? 'e' : 'i'} in più di quelle che ricordavi. È l’<strong>illusione di competenza</strong>: la seconda lettura scorre facile e sembra di sapere.` : 'La tua previsione era prudente o esatta: ottimo segno. Ma la sensazione di sapere resta un indicatore poco affidabile per tutti: l’unico modo di saperlo è provare a ridirlo.'}</div>
<div class="btn-row"><button class="btn secondary" type="button">Rifai la prova</button></div>`;
        $('button', el).addEventListener('click', s1);
      });
    }
    s1();
  };

  ACT.dunlosky = (el) => classify(el, {
    title: 'Alta, moderata o bassa utilità?',
    cats: [{ id: 'a', label: 'Alta' }, { id: 'm', label: 'Moderata' }, { id: 'b', label: 'Bassa' }],
    items: [
      { t: 'Interrogarsi (pratica di recupero)', c: 'a' },
      { t: 'Studio distribuito nel tempo', c: 'a' },
      { t: 'Chiedersi perché', c: 'm' },
      { t: 'Spiegare a voce', c: 'm' },
      { t: 'Alternare gli argomenti', c: 'm' },
      { t: 'Sottolineare', c: 'b', why: 'È tra le tecniche più usate in assoluto.' },
      { t: 'Rileggere', c: 'b', why: 'Altra tecnica usatissima: rende il testo familiare, non saputo.' },
      { t: 'Riassumere', c: 'b', why: 'Funziona solo se ricostruisci il senso con parole tue.' },
      { t: 'Mnemotecniche', c: 'b' },
      { t: 'Immagini mentali', c: 'b' }
    ]
  });

  ACT.six = (el) => flips(el, {
    title: 'Le sei strategie che funzionano',
    cards: [
      { front: '1 · Studio distribuito', back: 'Distribuire lo studio nel tempo invece di concentrarlo: un po’ ogni giorno batte due ore filate. <em>In allenamento: nessuno si allena una volta sola, il giorno prima della gara.</em>' },
      { front: '2 · Recupero attivo', back: 'Chiudere tutto e tirare fuori ciò che si sa, su un foglio bianco o a voce. Le prove più solide in assoluto. <em>È la differenza tra eseguire un esercizio e guardare chi lo esegue.</em>' },
      { front: '3 · Elaborazione', back: 'Non fermarsi al che cosa: chiedersi come e perché, e collegare a ciò che si sa. Un’informazione collegata a dieci cose note ha dieci strade per essere ritrovata.' },
      { front: '4 · Esempi concreti', back: 'Ogni concetto astratto diventa un esempio tuo. Inventarlo è già elaborazione; non riuscirci significa che non hai ancora capito, ed è un’informazione preziosa.' },
      { front: '5 · Doppia codifica', back: 'Parole più immagine: uno schema, un disegno. Disegna il processo, copri il disegno e raccontalo; poi copri le parole e ridisegnalo. Funziona per tutti.' },
      { front: '6 · Pratica intercalata', back: 'Alternare argomenti o tipi di problema. Dopo trenta esercizi uguali applichi il metodo senza sceglierlo; alla verifica il difficile è capire quale serve. Sembra peggio mentre la usi, rende di più.' }
    ]
  });

  ACT.recall = (el) => {
    const PAR = 'Il sonno fa parte dello studio. Durante la sua fase profonda le tracce di memoria registrate nel giorno vengono riattivate dall’ippocampo e trasferite nella corteccia, dove diventano stabili. Un cervello stanco, inoltre, registra peggio le nuove informazioni. Tra i 13 e i 18 anni la raccomandazione è dormire 8–10 ore per notte. Studiare fino all’una prima di una verifica compromette proprio il processo che dovrebbe fissare quanto studiato.';
    const KEYS = ['Il sonno fa parte dello studio', 'Avviene nel sonno profondo', 'L’ippocampo riattiva le tracce del giorno', 'Le trasferisce alla corteccia, dove diventano stabili', 'Un cervello stanco registra peggio', '8–10 ore tra i 13 e i 18 anni', 'Fare tardi la sera prima sabota il consolidamento'];
    function a() {
      el.innerHTML = `${tag('Prova tu')}<h3>Recupero attivo su un paragrafo</h3><p><strong>Passo 1.</strong> Leggi con attenzione questo blocco (uno solo).</p><div class="box"><p>${PAR}</p></div><div class="btn-row"><button class="btn" type="button">Passo 2 · Chiudi il libro</button></div>`;
      $('button', el).addEventListener('click', b);
    }
    function b() {
      el.innerHTML = `${tag('Prova tu')}<h3>Recupero attivo su un paragrafo</h3><p><strong>Passo 3.</strong> Il testo è nascosto. Scrivi tutto ciò che ricordi, con parole tue.</p><textarea class="input" aria-label="Ciò che ricordi"></textarea><div class="btn-row"><button class="btn" type="button">Passo 4 · Riapri e controlla</button></div>`;
      $('textarea', el).focus();
      $('button', el).addEventListener('click', () => c($('textarea', el).value));
    }
    function c(w) {
      el.innerHTML = `${tag('Prova tu')}<h3>Che cosa mancava?</h3><div class="box"><p>${PAR}</p></div>${w.trim() ? `<div class="box"><p class="source">Hai scritto:</p><p>${esc(w).replace(/\n/g, '<br>')}</p></div>` : ''}<p>Spunta i punti che avevi scritto. Quelli rimasti vuoti sono la tua lista di cose da studiare.</p><div class="checklist">${KEYS.map((k) => `<label><input type="checkbox"><span>${k}</span></label>`).join('')}</div><p class="gap" aria-live="polite"></p><div class="btn-row"><button class="btn secondary" type="button">Rifai</button></div>`;
      const boxes = $$('input', el);
      const upd = () => { const miss = boxes.filter((x) => !x.checked).length; $('.gap', el).innerHTML = miss ? `<strong>Lacune: ${miss}.</strong> Domani riprova partendo da queste.` : '<strong>Nessuna lacuna.</strong> Riprova tra qualche giorno per fissarlo davvero.'; };
      boxes.forEach((x) => x.addEventListener('change', upd)); upd();
      $('.btn', el).addEventListener('click', a);
    }
    a();
  };

  ACT.planner = (el) => {
    const pad = (n) => String(n).padStart(2, '0');
    const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const def = new Date(today); def.setDate(def.getDate() + 7);
    const fmt = (d) => d.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });
    el.innerHTML = `${tag('Strumento 1')}<h3>Il tuo piano di ripasso</h3><p>Inserisci la data della verifica: il piano segue la regola «più è lontana la prova, più larghi gli intervalli». Niente viene salvato: se vuoi conservarlo, stampalo o ricopialo sul diario.</p>
<label class="field"><span>Argomento (facoltativo)</span><input class="input" type="text" maxlength="80" autocomplete="off" placeholder="Per esempio: storia, capitolo 3"></label>
<label class="field"><span>Data della verifica</span><input class="input" type="date" min="${toISO(today)}" value="${toISO(def)}"></label>
<div class="btn-row"><button class="btn" type="button" data-a="go">Crea il piano</button></div><div class="out" aria-live="polite"></div>`;
    const [topicIn, dateIn] = $$('input', el);
    $('[data-a="go"]', el).addEventListener('click', () => {
      const out = $('.out', el);
      if (!dateIn.value) { out.innerHTML = '<p class="feedback ko">Scegli una data.</p>'; return; }
      const [y, m, d] = dateIn.value.split('-').map(Number);
      const exam = new Date(y, m - 1, d);
      const days = Math.round((exam - today) / 86400000);
      if (days < 2) { out.innerHTML = '<div class="feedback ko">La verifica è troppo vicina per un piano distribuito. Oggi fai solo recupero attivo a libro chiuso, e stanotte dormi: il sonno fissa ciò che hai studiato.</div>'; return; }
      let first, steps, rule;
      if (days <= 12) { first = 1; steps = [1]; rule = 'Verifica vicina: primo ripasso domani, poi ogni giorno o quasi (bastano pochi minuti a ripasso).'; }
      else if (days <= 50) { first = 3; steps = [4, 3]; rule = 'Verifica a qualche settimana: primo ripasso fra 3–4 giorni, poi ogni 3–4 giorni.'; }
      else { first = 7; steps = [10]; rule = 'Verifica lontana: primo ripasso fra una settimana, poi ogni 1–2 settimane.'; }
      const list = [['Oggi · studio iniziale', today, 'Capire, selezionare, organizzare. Poi recupero fino a 3 richiami corretti, alternando gli argomenti.']];
      let cur = first, idx = 0, n = 1;
      while (cur < days - 1 && n <= 12) {
        const dt = new Date(today); dt.setDate(dt.getDate() + cur);
        list.push([`Ripasso ${n}`, dt, n === 1 ? 'Libro chiuso: scrivi o dì tutto ciò che ricordi. Poi riapri e annota le lacune.' : 'Recupero attivo partendo dalle lacune della volta prima.']);
        cur += steps[idx % steps.length]; idx++; n++;
      }
      const eve = new Date(exam); eve.setDate(eve.getDate() - 1);
      list.push(['Vigilia', eve, 'Solo recupero a libro chiuso. Poi a letto presto: 8–10 ore.']);
      const topic = topicIn.value.trim();
      out.innerHTML = `<div class="feedback info">${rule}</div>${topic ? `<h4>${esc(topic)}</h4>` : ''}<ul class="plan-list">${list.map((r) => `<li><input type="checkbox" aria-label="Fatto: ${r[0]}"><div><div class="pl-when">${r[0]} · ${fmt(r[1])}</div><div>${r[2]}</div></div></li>`).join('')}</ul><p class="source">Il criterio per dire «basta» non sono i minuti: è riuscire a ridirlo a libro chiuso.</p><div class="btn-row"><button class="btn secondary small" type="button" data-a="print">Stampa il piano</button></div>`;
      $('[data-a="print"]', out).addEventListener('click', () => window.print());
    });
  };

  ACT.maptimer = (el) => {
    el.innerHTML = `${tag('Prova tu')}<h3>Fai una mappa sulla pallavolo</h3><p>Foglio bianco, orizzontale. <strong>5 minuti.</strong> Falla come la faresti normalmente per studiare: nessuna regola, nessuna indicazione. Non leggere oltre finché non hai finito.</p><div class="timer-big" aria-live="off">5:00</div><div class="btn-row"><button class="btn" type="button" data-a="s">Avvia</button><button class="btn secondary" type="button" data-a="r">Azzera</button></div><p class="done" aria-live="polite"></p>`;
    const t = countdown($('.timer-big', el), 300, () => { $('.done', el).innerHTML = '<strong>Tempo!</strong> Ora leggi la tua mappa ad alta voce, seguendo le frecce.'; });
    activeTimers.push(() => t.stop());
    $('[data-a="s"]', el).addEventListener('click', () => t.start());
    $('[data-a="r"]', el).addEventListener('click', () => { t.reset(); $('.done', el).textContent = ''; });
  };

  ACT.maptype = (el) => classify(el, {
    title: 'Mentale o concettuale?',
    intro: 'Ecco come «suonano» alcune mappe lette ad alta voce. Di che tipo sono?',
    cats: [{ id: 'm', label: 'Mappa mentale' }, { id: 'c', label: 'Mappa concettuale' }],
    items: [
      { t: '«Pallavolo… rete… battuta… muro… sei giocatori…»', c: 'm', why: 'Parole staccate attorno a un centro.' },
      { t: '«La pallavolo si gioca su un campo che misura 18 × 9 metri.»', c: 'c', why: 'Concetto + parola-legame + concetto: una frase.' },
      { t: '«Il riscaldamento provoca un aumento della temperatura muscolare.»', c: 'c' },
      { t: '«Vacanze: mare, amici, libri, sport.»', c: 'm', why: 'Raccogliere idee attorno a un tema è il lavoro tipico della mappa mentale.' },
      { t: '«Il muscolo scheletrico è composto da fibre, che si contraggono durante lo sforzo.»', c: 'c' }
    ]
  });

  ACT.linkwords = (el) => mcq(el, {
    tag: 'Gioca', title: 'Scegli la parola-legame giusta',
    qs: [
      { q: 'Il muscolo scheletrico → ? → fibre', o: ['è composto da', 'provoca', 'durante'], a: 0, why: 'Relazione di inclusione.' },
      { q: 'L’allenamento aerobico → ? → aumento della gittata cardiaca', o: ['provoca', 'si trova in', 'ad esempio'], a: 0, why: 'Relazione di causa ed effetto.' },
      { q: 'Il riscaldamento → ? → preparare i muscoli allo sforzo', o: ['serve a', 'è composto da', 'mentre'], a: 0, why: 'Relazione di fine o scopo.' },
      { q: 'L’ippocampo → ? → i nuovi ricordi', o: ['consolida', 'muscolo', 'veloce'], a: 0, why: 'Che cosa fa: un verbo. «Muscolo» è un nome e «veloce» un aggettivo: mai sopra la freccia.' },
      { q: 'Il recupero → ? → lo sforzo', o: ['avviene dopo', 'provoca', 'è un tipo di'], a: 0, why: 'Relazione temporale.' },
      { q: 'L’amigdala → ? → lobo temporale', o: ['si trova nel', 'serve a', 'oppure'], a: 0, why: 'Relazione spaziale.' },
      { q: 'Le capacità condizionali → ? → la velocità', o: ['ad esempio', 'durante', 'trasporta'], a: 0, why: 'Esemplificazione.' },
      { q: 'Sulla freccia ti viene da scrivere «ossigeno». Che cosa significa?', o: ['Va bene, è una parola-legame', 'È un concetto: va messo in un nodo', 'Basta scriverlo in piccolo'], a: 1, why: 'Un nome non è una relazione: è un concetto.' }
    ]
  });

  ACT.maperrors = (el) => flips(el, {
    title: 'Errore → come te ne accorgi',
    cards: [
      { front: 'Nessuna domanda focale', back: 'La mappa è un elenco travestito.' },
      { front: 'Frecce senza etichetta', back: 'Leggendola ad alta voce non escono frasi.' },
      { front: 'Troppi concetti', back: 'Non sta in una pagina e non verrà più riguardata.' },
      { front: 'Frasi intere nei riquadri', back: 'Il libro è stato ricopiato, non rielaborato.' },
      { front: 'Nessun collegamento trasversale', back: 'È un indice ad albero, non una mappa.' },
      { front: 'Un concetto sopra una freccia', back: 'Va spostato in un nodo.' }
    ]
  });

  ACT.saccades = (el) => {
    const words = 'Gli occhi non scorrono lungo la riga: saltano da un punto all’altro e raccolgono le parole solo durante le soste.'.split(' ');
    const seq = [0, 2, 4, 6, 7, 9, 8, 11, 13, 15, 17, 18].filter((i) => i < words.length);
    el.innerHTML = `${tag('Guarda')}<h3>Saccadi e fissazioni</h3><p>Il riquadro giallo simula le soste dell’occhio. Nota il salto all’indietro: è una regressione, serve a correggere.</p><div class="reading-line">${words.map((w, i) => `<span class="word" data-i="${i}">${esc(w)}</span>`).join(' ')}</div><div class="btn-row"><button class="btn" type="button">Avvia la simulazione</button></div>`;
    $('button', el).addEventListener('click', () => {
      let k = 0;
      const ws = $$('.word', el);
      const id = setInterval(() => {
        ws.forEach((w) => w.classList.remove('fix'));
        if (k >= seq.length) { clearInterval(id); return; }
        ws[seq[k]].classList.add('fix'); k++;
      }, 380);
      activeTimers.push(() => clearInterval(id));
    });
  };

  ACT.syllables = (el) => {
    el.innerHTML = `${tag('Prova tu')}<h3>Leggi queste due righe ad alta voce</h3>
<p class="reading-line">Un tes to spez za to in pez zi sen za sen so co strin ge a ri met te re in sie me le pa ro le pri ma an co ra di ca pir le.</p>
<p class="reading-line">Un testo raggruppato in blocchi di significato si legge più in fretta perché ogni blocco arriva già intero.</p>
<div class="btn-row"><button class="btn" type="button">Che cosa è cambiato?</button></div><div class="ans" aria-live="polite"></div>`;
    $('button', el).addEventListener('click', (e) => { e.target.remove(); $('.ans', el).innerHTML = '<div class="feedback info">Nella prima riga il cervello deve ricomporre le parole sillaba per sillaba; nella seconda arrivano già raggruppate in blocchi noti: i chunk del capitolo 2. Sulla velocità di lettura non si agisce direttamente: si agisce sui blocchi.</div>'; });
  };

  ACT.preview = (el) => {
    el.innerHTML = `${tag('Prova tu')}<h3>L’anteprima in 5 minuti</h3><p>Apri il libro di un’altra materia su un capitolo <strong>non ancora studiato</strong>. Avvia il timer e spunta man mano. <strong>Vietato leggere il testo.</strong></p><div class="timer-big" aria-live="off">5:00</div><div class="btn-row"><button class="btn" type="button" data-a="s">Avvia</button><button class="btn secondary" type="button" data-a="r">Azzera</button></div><div class="cl"></div><p class="done" aria-live="polite"></p>`;
    const t = countdown($('.timer-big', el), 300, () => { $('.done', el).innerHTML = '<strong>Tempo!</strong> Che cosa sai già di questo capitolo, senza averlo letto? Ora conosci di che cosa parla, come è organizzato e quali termini nuovi conterrà.'; });
    activeTimers.push(() => t.stop());
    $('[data-a="s"]', el).addEventListener('click', () => t.start());
    $('[data-a="r"]', el).addEventListener('click', () => { t.reset(); $('.done', el).textContent = ''; });
    const cl = document.createElement('div'); $('.cl', el).appendChild(cl);
    checklist(cl, { tag: 'Anteprima', title: 'Che cosa guardare', items: ['Titolo e sottotitoli', 'Immagini, grafici e didascalie', 'Introduzione e sintesi finale', 'Domande di fine capitolo, senza rispondere: fanno da radar', 'Se non ci sono domande, ricavale dal titolo con le cinque W: chi, che cosa, quando, dove, perché', 'Parole in grassetto e in corsivo'], done: 'Cornice pronta: ora ogni informazione avrà un posto dove appoggiarsi.' });
    cl.className = 'box';
  };

  ACT.notes = (el) => classify(el, {
    title: 'Buona pratica o errore?',
    cats: [{ id: 'si', label: 'Buona pratica' }, { id: 'no', label: 'Errore' }],
    items: [
      { t: 'Scrivere parole chiave e il verbo che collega un concetto al precedente', c: 'si' },
      { t: 'Trascrivere parola per parola quello che dice il docente', c: 'no', why: 'Occupa la memoria di lavoro e non lascia spazio per capire.' },
      { t: 'Lasciare spazio bianco e un margine libero', c: 'si', why: 'Gli appunti si completano dopo, e serve spazio per farlo.' },
      { t: 'Segnare con un punto di domanda i passaggi non capiti', c: 'si', why: 'Diventano le domande da fare in classe o da cercare sul libro.' },
      { t: 'Riprenderli dopo una settimana, la sera prima della verifica', c: 'no', why: 'Vanno ripresi lo stesso giorno, finché la lezione è fresca.' },
      { t: 'Coprirli e provare a ripetere la lezione', c: 'si', why: 'Da qui non sono più appunti: è recupero attivo.' }
    ]
  });

  ACT.sleep = (el) => {
    el.innerHTML = `${tag('Calcola')}<h3>A che ora andare a letto?</h3><label class="field"><span>Domani mi sveglio alle</span><input class="input" type="time" value="07:00"></label><div class="out feedback info" aria-live="polite"></div>`;
    const inp = $('input', el), out = $('.out', el);
    const upd = () => {
      if (!inp.value) return;
      const [h, m] = inp.value.split(':').map(Number);
      const t = (back) => { let mm = h * 60 + m - back * 60; mm = (mm + 1440) % 1440; return `${String(Math.floor(mm / 60)).padStart(2, '0')}:${String(mm % 60).padStart(2, '0')}`; };
      out.innerHTML = `Per dormire 8–10 ore dovresti essere addormentato <strong>tra le ${t(10)} e le ${t(8)}</strong>. Calcola anche il tempo per prendere sonno, e spegni gli schermi un po’ prima.`;
    };
    inp.addEventListener('input', upd); upd();
  };

  ACT.topdown = (el) => classify(el, {
    title: 'Top-down o bottom-up?',
    intro: 'Chi sta guidando l’attenzione: un tuo obiettivo o uno stimolo esterno?',
    cats: [{ id: 't', label: 'Top-down (obiettivo)' }, { id: 'b', label: 'Bottom-up (stimolo)' }],
    items: [
      { t: 'Cerchi la data della battaglia nel paragrafo', c: 't' },
      { t: 'Il telefono vibra sul tavolo e ti giri', c: 'b', why: 'Rimedio: toglierlo dalla stanza, non resistere.' },
      { t: 'Una conversazione a intermittenza nella stanza accanto', c: 'b', why: 'Disturba più di un rumore costante: il cervello continua a valutare se contiene qualcosa di rilevante.' },
      { t: 'Prima di leggere ti chiedi: «perché l’ippocampo è importante?»', c: 't', why: 'Una domanda precisa rafforza il controllo top-down.' },
      { t: 'Una scheda del browser aperta su un video', c: 'b', why: 'Anche senza guardarla, sapere che c’è è già un piccolo carico.' },
      { t: 'In partita sai che in questa fase devi coprire quello spazio', c: 't', why: 'Chi ha un piano chiaro tiene l’attenzione più a lungo.' }
    ]
  });

  ACT.breaks = (el) => classify(el, {
    title: 'Questa pausa riposa l’attenzione?',
    cats: [{ id: 'si', label: 'Sì, funziona' }, { id: 'no', label: 'No' }],
    items: [
      { t: 'Alzarsi e camminare qualche minuto', c: 'si' },
      { t: 'Scorrere i social', c: 'no', why: 'Cambia lo stimolo ma non riposa: scegliere cosa guardare in un feed è ancora attenzione selettiva.' },
      { t: 'Guardare lontano, fuori dalla finestra', c: 'si', why: 'Riposa gli occhi dopo il lavoro a distanza ravvicinata.' },
      { t: 'Uscire all’aria aperta', c: 'si' },
      { t: 'Guardare un video breve', c: 'no' },
      { t: 'Rispondere a dieci messaggi', c: 'no', why: 'Sono decisioni continue: il carico mentale non si allenta.' }
    ]
  });

  ACT.arousal = (el) => {
    const P0 = [30, 200], P1 = [210, -140], P2 = [390, 200];
    const pt = (t) => [(1 - t) ** 2 * P0[0] + 2 * t * (1 - t) * P1[0] + t * t * P2[0], (1 - t) ** 2 * P0[1] + 2 * t * (1 - t) * P1[1] + t * t * P2[1]];
    el.innerHTML = `${tag('Prova tu')}<h3>La giusta attivazione</h3><p>Sposta il cursore: quanto sei attivato prima della verifica?</p>
<svg class="figure" viewBox="0 0 420 240" role="img" aria-label="Curva a U rovesciata: la prestazione è massima con un'attivazione moderata">
  <rect class="zone-ok" x="150" y="20" width="120" height="180" rx="8"/>
  <line class="axis" x1="30" y1="200" x2="400" y2="200"/><line class="axis" x1="30" y1="200" x2="30" y2="20"/>
  <path class="curve" d="M${P0} Q${P1} ${P2}"/>
  <circle class="dot-now" r="11" cx="0" cy="0"/>
  <text class="svg-small" x="300" y="225">attivazione →</text>
  <text class="svg-small" x="36" y="18">prestazione</text>
  <text class="svg-small" x="164" y="192">zona ottimale</text>
</svg>
<input type="range" min="0" max="100" value="50" aria-label="Livello di attivazione">
<div class="out feedback" aria-live="polite"></div>`;
    const r = $('input', el), dot = $('.dot-now', el), out = $('.out', el);
    const upd = () => {
      const t = +r.value / 100, [x, y] = pt(t);
      dot.setAttribute('cx', x.toFixed(1)); dot.setAttribute('cy', y.toFixed(1));
      if (t < 0.3) { out.className = 'out feedback ko'; out.innerHTML = '<strong>Attivazione troppo bassa.</strong> Si rende poco: come la gara in cui non «senti» niente.'; }
      else if (t <= 0.65) { out.className = 'out feedback ok'; out.innerHTML = '<strong>Attivazione utile.</strong> Concentrazione alta, la sensazione di essere sul pezzo: qui si rende al massimo.'; }
      else { out.className = 'out feedback ko'; out.innerHTML = '<strong>Ansia che blocca.</strong> La preoccupazione occupa la memoria di lavoro e non resta spazio per il compito: vuoto di memoria. Non è mancanza di preparazione, è spazio occupato.'; }
    };
    r.addEventListener('input', upd); upd();
  };

  ACT.loop = (el) => {
    const S = [['1 · Recupero attivo', 'Ti interroghi a libro chiuso.'], ['2 · Successo', 'Scopri di sapere la risposta.'], ['3 · Dopamina', 'Il cervello registra la ricompensa.'], ['4 · Spinta a ricominciare', 'La voglia di studiare si autoalimenta.']];
    el.innerHTML = `${tag('Guarda')}<h3>Il loop della motivazione</h3><div class="loop">${S.map((s, i) => `<div class="loop-step" data-i="${i}"><b>${s[0]}</b>${s[1]}</div>`).join('')}</div><div class="btn-row"><button class="btn" type="button">Avanti</button></div><p class="feedback info">Per questo il recupero attivo, oltre a far ricordare, tiene viva la voglia di studiare.</p>`;
    let k = -1;
    const steps = $$('.loop-step', el);
    $('button', el).addEventListener('click', () => { k = (k + 1) % 4; steps.forEach((s, i) => s.classList.toggle('on', i === k)); });
  };

  /* =========================================================
     PAGINE
     ========================================================= */
  function pageHome() {
    return `<div class="hero">
<span class="kicker">Neuroscienze, apprendimento e metodo di studio</span>
<h1>Istruzioni per l’uso del nostro cervello</h1>
<p class="lead">Capire come il cervello impara ti aiuta a imparare meglio. Sei capitoli brevi, con prove da fare e giochi per metterti alla prova.</p>
<p class="byline">Liceo Statale «Galileo Galilei» di Verona<br>Scienze motorie, liceo scientifico a indirizzo sportivo<br>A cura della prof.ssa Elena Scotti</p>
</div>
<div class="grid">${CHAPTERS.map((c) => `<a class="card-link" href="#${c.id}" data-cc="${c.id}"><span class="num">Capitolo ${c.n}</span><h3>${c.title}</h3><p>${c.sub}</p>${visited.has(c.id) ? '<span class="seen">✓ Già aperto</span>' : ''}</a>`).join('')}
<a class="card-link" href="#verifica"><span class="num">Allenamento</span><h3>Mettiti alla prova</h3><p>Domande a libro chiuso per ogni capitolo e un quiz finale.</p></a>
<a class="card-link" href="#strumenti"><span class="num">Kit</span><h3>Strumenti</h3><p>Piano di ripasso, le cinque domande, le checklist.</p></a>
<a class="card-link" href="#glossario"><span class="num">Parole</span><h3>Glossario</h3><p>Tutti i termini, con le flashcard per ripassarli.</p></a>
</div>
<div class="callout key"><span class="tag">Come usare questa app</span><p>Fai le prove <em>prima</em> di leggere le spiegazioni: alcune funzionano solo se non sai già come vanno. E alla fine di ogni capitolo chiudi tutto e prova a ridire quello che hai imparato.</p></div>`;
  }

  function pageChapter(c) {
    const i = CHAPTERS.indexOf(c), prev = CHAPTERS[i - 1], next = CHAPTERS[i + 1];
    return `<div class="chapter-head" data-cc="${c.id}"><span class="num">Capitolo ${c.n} di ${CHAPTERS.length}</span><h1>${c.title}</h1><p class="lead">${c.sub}</p></div>
<nav class="toc" aria-label="In questo capitolo"><strong>In questo capitolo</strong><ol>${c.toc.map((t) => `<li><a href="#${c.id}" data-goto="${t[0]}">${t[1]}</a></li>`).join('')}</ol></nav>
<div class="chapter-body" data-cc="${c.id}">${c.html}</div>
<section class="activity" data-cc="${c.id}"><span class="activity-tag">A libro chiuso</span><h3>Verifica di comprensione</h3><p>Prima di andare avanti: rispondi senza guardare, poi controlla.</p><div class="openqs" data-ch="${c.id}"></div></section>
<div class="pager">${prev ? `<a class="btn secondary" href="#${prev.id}">← ${prev.short}</a>` : '<a class="btn secondary" href="#home">← Inizio</a>'}${next ? `<a class="btn" href="#${next.id}">${next.short} →</a>` : '<a class="btn" href="#verifica">Mettiti alla prova →</a>'}</div>`;
  }

  function renderOpenQs(box, ch) {
    const qs = OPEN_Q[ch];
    box.innerHTML = qs.map((q, k) => `<div class="open-q" data-k="${k}"><div class="q">${k + 1}. ${q[0]}</div><button class="btn secondary small reveal" type="button" aria-expanded="false">Mostra una risposta possibile</button><div class="ans hidden">${q[1]}<div class="selfeval" role="group" aria-label="Come è andata?"><button type="button" class="s-ok" aria-pressed="false">L’avevo detto</button><button type="button" class="s-mid" aria-pressed="false">In parte</button><button type="button" class="s-ko" aria-pressed="false">Non lo sapevo</button></div></div></div>`).join('') + '<p class="sum source" aria-live="polite"></p>';
    const sum = $('.sum', box);
    const upd = () => {
      const marks = $$('.open-q', box).map((q) => $('.selfeval [aria-pressed="true"]', q));
      const todo = marks.filter((m) => m && !m.classList.contains('s-ok')).length;
      const done = marks.filter(Boolean).length;
      sum.textContent = done ? `Risposte valutate: ${done} su ${qs.length}. ${todo ? `Da ripassare: ${todo}. Riprova tra qualche giorno partendo da queste.` : 'Ottimo: ripeti la prova tra qualche giorno.'}` : '';
    };
    $$('.open-q', box).forEach((q) => {
      const rb = $('.reveal', q), ans = $('.ans', q);
      rb.addEventListener('click', () => { ans.classList.remove('hidden'); rb.remove(); });
      $$('.selfeval button', q).forEach((b) => b.addEventListener('click', () => {
        $$('.selfeval button', q).forEach((x) => x.setAttribute('aria-pressed', String(x === b))); upd();
      }));
    });
  }

  function pageVerifica() {
    return `<h1>Mettiti alla prova</h1>
<p class="lead">Il ripasso non è rileggere: è provare a ricordare, prima di riaprire. Qui ti alleni a farlo.</p>
<div class="callout warn"><p>Le risposte sbagliate non sono un voto: sono la tua lista di cose da studiare. E la fatica del richiamo è il lavoro, non un segnale che stai sbagliando.</p></div>
<h2>Quiz finale</h2>
<section class="activity" data-act="finalquiz"></section>
<h2>Domande a libro chiuso, capitolo per capitolo</h2>
${CHAPTERS.map((c) => `<section class="activity" data-cc="${c.id}"><span class="activity-tag">Capitolo ${c.n}</span><h3>${c.title}</h3><div class="openqs" data-ch="${c.id}"></div></section>`).join('')}`;
  }
  ACT.finalquiz = (el) => mcq(el, { tag: 'Quiz', title: `${QUIZ.length} domande su tutta l’unità`, qs: QUIZ });

  function pageStrumenti() {
    return `<h1>Strumenti</h1><p class="lead">Da usare durante lo studio, per ogni materia.</p>
<section class="activity" data-act="planner"></section>
<section class="activity" data-act="five"></section>
<section class="activity" data-act="beforeclose"></section>
<section class="activity" data-act="mapcheck"></section>`;
  }
  ACT.five = (el) => {
    const Q = ['Perché questo è vero? Come lo sappiamo?', 'A quale cosa già nota somiglia?', 'Come lo spiegheresti a un bambino di dieci anni?', 'Qual è un esempio personale, non del libro?', 'Che cosa succederebbe se non fosse così?'];
    el.innerHTML = `${tag('Strumento 2')}<h3>Le cinque domande</h3><p>Da farti durante lo studio: trasformano la lettura in elaborazione.</p><ol>${Q.map((q) => `<li>${q}</li>`).join('')}</ol><div class="btn-row"><button class="btn" type="button">Pesca una domanda a caso</button></div><p class="feedback info pick hidden" aria-live="polite"></p>`;
    $('button', el).addEventListener('click', () => { const p = $('.pick', el); p.classList.remove('hidden'); p.textContent = Q[Math.floor(Math.random() * Q.length)]; });
  };
  ACT.beforeclose = (el) => checklist(el, { tag: 'Strumento 3', title: 'Controllo rapido prima di chiudere il libro', items: ['Libro chiuso e almeno un tentativo di richiamo fatto', 'So spiegare l’argomento a voce senza guardare', 'C’è almeno un esempio personale', 'So perché è così, non solo che è così', 'Ho fissato quando farò il ripasso'], done: 'Puoi chiudere il libro.' });
  ACT.mapcheck = (el) => checklist(el, { tag: 'Strumento 4', title: 'Checklist della mappa concettuale', items: ['In alto c’è la domanda focale', 'In alto stanno le idee generali, le cause, le classificazioni', 'Ogni freccia ha una parola-legame', 'Sulle frecce ci sono relazioni, non concetti (verbi, preposizioni, avverbi, congiunzioni)', 'Letta ad alta voce, escono frasi di senso compiuto', 'C’è almeno un collegamento trasversale', 'L’ho costruita io', 'L’ho coperta e rifatta a memoria almeno una volta'], done: 'Mappa pronta. Ora coprila e ripeti.' });

  function pageGlossario() {
    return `<h1>Glossario</h1><p class="lead">Le parole dell’unità. Cercale, oppure ripassale con le flashcard.</p>
<section class="activity" data-act="flashcards"></section>
<label class="field"><span>Cerca un termine</span><input class="input" id="gsearch" type="search" autocomplete="off"></label>
<dl id="glist">${GLOSSARY.map((g) => `<div class="gloss-item"><dt>${g[0]}</dt><dd>${g[1]}</dd></div>`).join('')}</dl><p id="gnone" class="hidden">Nessun termine trovato.</p>`;
  }
  ACT.flashcards = (el) => {
    let deck, i, flipped;
    const start = () => { deck = shuffle(GLOSSARY); i = 0; flipped = false; draw(); };
    function draw() {
      const g = deck[i];
      el.innerHTML = `${tag('Flashcard')}<h3>Prima prova a dire la definizione, poi gira</h3><p class="pill">${i + 1} di ${deck.length}</p><button type="button" class="flashcard" aria-live="polite">${flipped ? `<span class="fc-term">${g[0]}</span><span class="fc-def">${g[1]}</span>` : `<span class="fc-term">${g[0]}</span><span class="hint">Tocca per girare</span>`}</button><div class="btn-row"><button class="btn secondary" type="button" data-a="p">← Indietro</button><button class="btn" type="button" data-a="n">Avanti →</button><button class="btn secondary" type="button" data-a="s">Mescola</button></div>`;
      $('.flashcard', el).addEventListener('click', () => { flipped = !flipped; draw(); $('.flashcard', el).focus(); });
      $('[data-a="n"]', el).addEventListener('click', () => { i = (i + 1) % deck.length; flipped = false; draw(); });
      $('[data-a="p"]', el).addEventListener('click', () => { i = (i - 1 + deck.length) % deck.length; flipped = false; draw(); });
      $('[data-a="s"]', el).addEventListener('click', start);
    }
    start();
  };

  /* =========================================================
     ROUTER
     ========================================================= */
  const main = $('#main');
  function render() {
    activeTimers.forEach((f) => f()); activeTimers = [];
    const id = (location.hash || '#home').slice(1);
    const ch = CHAPTERS.find((c) => c.id === id);
    let html, title = 'Il cervello che impara';
    if (ch) { html = pageChapter(ch); title = `${ch.n}. ${ch.title} · ${title}`; visited.add(ch.id); }
    else if (id === 'verifica') { html = pageVerifica(); title = 'Mettiti alla prova · ' + title; }
    else if (id === 'strumenti') { html = pageStrumenti(); title = 'Strumenti · ' + title; }
    else if (id === 'glossario') { html = pageGlossario(); title = 'Glossario · ' + title; }
    else { html = pageHome(); }
    main.innerHTML = html;
    document.title = title;

    // colori per capitolo
    $$('[data-cc]', main).forEach((n) => { const c = CHAPTERS.find((x) => x.id === n.dataset.cc); if (c) n.style.setProperty('--cc', c.color); });
    if (ch) $$('.activity', main).forEach((n) => n.style.setProperty('--cc', ch.color));
    // attività
    $$('[data-act]', main).forEach((n) => { const f = ACT[n.dataset.act]; if (f) f(n); });
    $$('.openqs', main).forEach((n) => renderOpenQs(n, n.dataset.ch));
    // tabelle: etichette per la vista a schede su telefono
    $$('.table-wrap table', main).forEach((t) => {
      const rows = $$('tr', t); const head = $$('th, td', rows[0]).map((c) => c.textContent.trim());
      rows.slice(1).forEach((r) => $$('th, td', r).forEach((c, j) => { if (c.tagName === 'TD') c.setAttribute('data-label', head[j] || ''); }));
      t.classList.add('stack');
    });
    // indice interno
    $$('[data-goto]', main).forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); const t = document.getElementById(a.dataset.goto); if (t) { t.scrollIntoView({ block: 'start' }); t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); } }));
    // ricerca glossario
    const gs = $('#gsearch');
    if (gs) gs.addEventListener('input', () => {
      const q = gs.value.trim().toLowerCase(); let n = 0;
      $$('.gloss-item', main).forEach((it) => { const show = !q || it.textContent.toLowerCase().includes(q); it.classList.toggle('hidden', !show); if (show) n++; });
      $('#gnone').classList.toggle('hidden', n > 0);
    });
    // navigazione
    $$('#nav a').forEach((a) => { if (a.getAttribute('href') === '#' + (ch || ['verifica', 'strumenti', 'glossario'].includes(id) ? id : 'home')) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $('#nav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }

  $('#menuBtn').addEventListener('click', () => {
    const open = $('#nav').classList.toggle('open');
    $('#menuBtn').setAttribute('aria-expanded', String(open));
  });
  window.addEventListener('hashchange', render);
  render();
})();
