
var cat_S = new  Audio(CAT.mpeg);
var camel_S = new  Audio(CAMEL.mpeg);
var dog_S = new  Audio(DOG.mpeg);
var bee_S = new  Audio(BEE.mpeg);
var chick_S = new  Audio(CHICKEN.mpeg);
const Cat = document.getElementById('cat');


document.querySelector("#cat").onclick = function(e) {
    e.preventDefault();
    const audio = new Audio("cat_S");
    audio.play();
  }




