// TODO: Declare any global variables we need
let heads_count =0;
let tails_count = 0;
let heads_percent = 0;
let tails_percent=0;
let total=0;




    // TODO: Add event listener and handler for flip and clear buttons


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

    document.getElementById("flip").addEventListener("click", function(){

        let flip = Math.round((Math.random() * 10))

        if(flip <= 5){
            tails_count++
            total++
            if(tails_percent + heads_percent > 100){
              tails_percent = (100-heads_percent)
            } else if(total===0){
               tails_percent = 0
            } else {
              tails_percent=(tails_count/total*100)
            }
        } else if(flip>5) {
            heads_count++
            total++
            if(tails_percent + heads_percent > 100){
                heads_percent = (100-tails_percent)
              } else if(total===0){
                 heads_percent = 0
              } else {
                heads_percent=(heads_count/total*100)
              }
        }

        let headsCell = document.getElementById("heads")

        headsCell.textContent = heads_count


        let headsPercent = document.getElementById("heads-percent")

        headsPercent.textContent = heads_percent


        let tailsCell = document.getElementById("tails")

        tailsCell.textContent = tails_count


        let tailsPercent = document.getElementById("tails-percent")

        tailsPercent.textContent = tails_percent

    })







        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)