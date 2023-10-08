var quantidade = document.getElementById('quantidade');
            quantidade.addEventListener('keyup',()=>{
            pegaPokemons(quantidade.value)    ;
            })

            pegaPokemons(1);
            function pegaPokemons(quantidade){


            fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit="+quantidade)
            .then(response => response.json())
            .then(allpokemon => {


                var pokemons = [];

                allpokemon.results.map((val)=>{
                
                    
             fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
            pokemons.push({nome: val.name, imagem: pokemonSingle.sprites.front_default})
            if(pokemons.length == 10){

            console.log(pokemons)}

                    var pokemonboxes = document.querySelector('.pokemon-boxes');
                    pokemonboxes.innerHTML="";

            pokemons.map(function(val){
                pokemonboxes.innerHTML+=`
                
                <div class = "pokemon-box">
                  <img src = "`+val.imagem+`"/>
                 <p>`+val.nome+`</p>
                </div>
                
                
                `;



            })

            
            })




                })






            })



        }

        /*
//0 CRIANDO UM POKEDEX COM API, PUXANDO IMAGENS E ELEMENTOS DE UMA SEDE, O SITE DO POKEMON API
//1. Coisa depois de estilizar o site com css e html, iniciamos no JS
//2. No JS, primeira coisa crie um fetch com um link dado pelo site
//3. o código do fetch é FETCH("LINK").THEN(RESPONSE => RESPONSE.JSON()).THEN(nomedado => {AQUI DENTRO VAI TUDO})
4. crie um VAR POKEMONS = [] (ARRAY, AFINAL, ISSO SERÁ UMA LISTA DE POKEMONS)
5. agora eu digo => nomedado.results.map((val)=>{console.log(val);
            dentro desses resultados, eu quero que puxe um específico que é o nome e a imagem, porém a imagem não está la, apenas tem URL
5.5. para acessar o url devemos abrir o fetch de novo            
6. Vou pedir a url, pra poder identificar onde está os nomes e as fotos
7. então abro o fetch dnv pra buscar isso, dentro desse fetch eu coloco val.URL pra descobrir onde tá a imagem
8. faça a fetch e dê console.log (pokemonsingle) para descobrir onde tá a imagem
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemonSingle.push({})
            }
9. achou a imagem, crie um pokemons.push pra puxar essa informação pro array
10. dentro dela pokemons.push({nome: val.name, imagem: pokemonSingle.sprites.front_default});
11. COLOCAR VIRGULA PRA SEPARAR
12. Dar um if(pokemons.length == 10){console.log(pokemons)} pra checar se ta vindo nome e imagem mesmo
PRONTO, TA PUXANDO

3 PARTE

13. CRIE, DENTRO DO IF, UMA VAR POKEMONBOXES = DOCUMENT.QUERYSELECTOR('SELECIONE A DIV .POKEMON-BOXES')
14. DIGA QUE É VAZIO pokemonboxes.innerHTML="";
15. agora utilizaremos a funcao MAP pra fazer aparecer os pokemons
16. pokemons.map(function(val){
    pokemonboxes.innerHTML+=`     aqui coloque a div da imagem do pokemon          `;
17. dentro dessa div, coloque `+val.nome` e `+val.valor+`

AQUI JA DEVE VER OS POKEMONS NA TELA
})

4 PARTE

18. Crie uma função pra buscar quantos pokemons queremos
19. function pegaPokemons(quantidade){COLOQUE TODO O SCRIPT AQUI DENTRO}
19.5 - modifique no link a quantidade de pokemons por +quantidade
20. ative-a em cima utilizando pegaPokemons(10);

})
})
AQUI JÁ É POSSIVEL ESCOLHER QUANTOS POKEMONS VC QUER VER PELA FUNCAO

AGORA NA QUINTA PARTE VAMOS USAR UM PLACEHOLDER PRA SELECIONAR ISSO LÁ NA TELA MESMO

5 PARTE

21. Primeiramente, crie um <input id = "quantidade" type = "text" name = "quantidade" placeholder = "insira aqui">
22. depois, crie uma var, chamando esse document.getelementsbyID('quantidade')
23. adicione quantidade.eventlistener('keyup',()=>{

})
24. dentro disso, jogue a funcao PEGAPOKEMONS(QUANTIDADE.VALUE);
25. TA PRONTO


*/
            