import './style.css';


async function osszesMegjelenit(idezetlista){
    let lista = document.getElementById('idezetek');
    for (let e of idezetlista){
        let li = document.createElement('li');
        li.textContent = e.author + ", " + e.quote;
        lista.appendChild(li);
    }
}

 function darabszamMegjelenit(szerzolista){
    let nev = document.getElementById('szerzo').value;
    let darab = 0;
    let szerzok = szerzolista.filter(function(szerzolista){
        return szerzolista.author == nev
    })
    for (let e of szerzok ){
        if ( e.author == nev ){
            darab++
        }
    }

    document.getElementById('eredmeny').value = darab;
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('osszes').addEventListener('click', async() => {
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
        let osszes = eredmeny.quotes;
        osszes = osszes.sort((a, b) => {
            if (a.author < b.author) {
              return -1;
            }
        });
        osszesMegjelenit(osszes);       
        
    });

    document.getElementById('darabszam').addEventListener('click', async()=>{
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
        let legyeljo = eredmeny.quotes;

        darabszamMegjelenit(legyeljo);

    })

    

});

