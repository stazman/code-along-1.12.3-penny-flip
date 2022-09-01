let heads_count=0;
let tails_count=0;
let heads_percent=0;
let tails_percent=0;
let total=0;

let headsCell = document.getElementById("heads")

let headsPercent = document.getElementById("heads-percent")

let tailsCell = document.getElementById("tails")

let tailsPercent = document.getElementById("tails-percent")

let image = document.getElementById("image").src = 'assets/images/penny-heads.jpg';

let message = document.getElementById('message');


document.getElementById("clear").addEventListener("click", function(){

  image=document.getElementById('image').src = 'assets/images/penny-heads.jpg';
  message.textContent="Let\s Get Rolling!"

  headsCell.textContent=0
  headsPercent.textContent=0
  tailsCell.textContent=0
  tailsPercent.textContent=0

  heads_count=0;
  tails_count=0;
  total=0;
})

document.getElementById("flip").addEventListener("click", function(){

  let flip = Math.round((Math.random() * 10))

  if(flip <= 5){
      tails_count++
      total++
      tailsCell.textContent = tails_count
      message.textContent = "You Flipped Tails!"
      image=document.getElementById('image').src = 'assets/images/penny-tails.jpg';
  } else if(flip>5) {
      heads_count++
      total++
      headsCell.textContent = heads_count
      message.textContent = "You Flipped Heads!"
      image=document.getElementById('image').src = 'assets/images/penny-heads.jpg';
  }

  let roundedHeads = headsCell.textContent;
  let roundedTails = tailsCell.textContent;

  headsPercent.textContent = (Math.round((headsCell.textContent/total)*100)).toFixed(0);

  tailsPercent.textContent = (Math.round((tailsCell.textContent/total)*100)).toFixed(0);

  if(roundedHeads + roundedTails > 100){
    headsPercent.textContent = (Math.floor((headsCell.textContent/total)*100)).toFixed(0);
    tailsPercent.textContent = (Math.floor((tailsCell.textContent/total)*100)).toFixed(0);
  }
})