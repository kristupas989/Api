const paieska = document.getElementById('country');
const mygtukas = document.getElementById('button');

mygtukas.addEventListener('click', paieskos_funkcija);

async function paieskos_funkcija() {
    try {
        const ieskoma_salis = paieska.value;
        let salis = await fetch(`https://restcountries.eu/rest/v2/name/${ieskoma_salis}`);
        // Rezultatą pakeičiam į JSON formatą
        salis = await salis.json();
        // Dėl patogumo perkeliam objektą.
        salis = salis[0];

        // Ieskoma ar jau yra sukurtas card elementas (Jei yra - jis ištrinamas)
        if(document.getElementById('card') != undefined) {
            document.getElementById('card').remove();
        }

        // Susikuriam card elementą
        const card = document.createElement('div');

        card.innerHTML = `
        <div id="card" class="row d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${salis.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${salis.name}</h5>
                    <p class="card-text">Languages: ${salis.languages[0].name}</p>
                </div>
            </div>
        </div>
        `;

        // Prie <body> elemento pridedam card elementą
        document.body.appendChild(card);
        // Išsikonsolinam šalį
        console.log(salis);
    } catch(ex) {
        console.error(ex);
    }
}
