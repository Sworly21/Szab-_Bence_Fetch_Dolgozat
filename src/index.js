import './style.css';


async function osszesMegjelenit(idezetlista){
    let lista = document.getElementById('idezetek');
    for (let e of idezetlista){
        let li = document.createElement('li');
        li.textContent = e.author + ", " + e.quote;
        lista.appendChild(li);
    }
}

function darabszamMegjelenit(){
    document.getElementById('szerzo')
    
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

    

});

