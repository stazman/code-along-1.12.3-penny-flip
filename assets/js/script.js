let heads_count=0;
let tails_count=0;
let heads_percent=0;
let tails_percent=0;
let total=0;

let headsCell = document.getElementById("heads")

let headsPercent = document.getElementById("heads-percent")

let tailsCell = document.getElementById("tails")

let tailsPercent = document.getElementById("tails-percent")

let image = document.getElementById("image").src = 'assets/images/penny-heads.jpg'

        // TODO: Update status message in the DOM

        document.getElementById("clear").addEventListener("click", function(){

          image=document.getElementById('image').src = 'assets/images/penny-heads.jpg';

          headsCell.textContent = 0

          headsPercent.textContent = 0

          tailsCell.textContent = 0

          tailsPercent.textContent = 0

          heads_count=0;
          tails_count=0;
          heads_percent=0;
          tails_percent=0;
          total=0;
        })

        document.getElementById("flip").addEventListener("click", function(){

          let flip = Math.round((Math.random() * 10))

          if(flip <= 5){
              tails_count++
              total++
              tailsCell.textContent = tails_count
              image=document.getElementById('image').src = 'assets/images/penny-tails.jpg';
          } else if(flip>5) {
              heads_count++
              total++
              headsCell.textContent = heads_count
              image=document.getElementById('image').src = 'assets/images/penny-heads.jpg';
          }
    })



        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
