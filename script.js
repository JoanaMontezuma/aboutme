 // memory game

 let counter = 0;
 let firstSelection ="";
 let secondSelection = "";
 
 const cards = document.querySelectorAll(".cards .card");
 cards.forEach((card) =>{
     // criar o evento ao clicar na carta
     card.addEventListener("click", () =>{
         //para mudar a cor da carta selecionada
         card.classList.add("clicked");
 
         if(counter === 0){
             firstSelection = card.getAttribute("show");
             counter++;
 
         } else {
             secondSelection = card.getAttribute("show");
             counter = 0;
 
             //para ver se as seleçoes do show sao iguais
             if(firstSelection === secondSelection){
                 const correctCards = document.querySelectorAll(
                     ".card[show='" + firstSelection + "']"
                     );
 
                     correctCards[0].classList.add("checked");
                     correctCards[0].classList.remove("clicked");
                     correctCards[1].classList.add("checked");
                     correctCards[1].classList.remove("clicked");
             } else{
                 const incorrectCards = document.querySelectorAll(".card.clicked");
 
                 incorrectCards[0].classList.add("shake");
                 incorrectCards[1].classList.add("shake");
 
                 setTimeout(() =>{
                    incorrectCards[0] .classList.remove("shake");
                    incorrectCards[0] .classList.remove("clicked");
                    incorrectCards[1] .classList.remove("shake");
                    incorrectCards[1] .classList.remove("clicked");
                 }, 800);
             }
         }
 
 
 });
 
 
 }) ;
 