

    function changeImage() {
        let img =Math.floor(Math.random()*22+1).toString()
        console.log(img)
        document.getElementById("meme-container").src = "assets/"+img+".jpg";
        
    }

    function changeImage1() {
        
        let img =Math.floor(Math.random()*22+1).toString()
        console.log(img)
        document.getElementById("meme-container1").src = "assets/"+img+".jpg";
        
    }


    function changeImage2() {
        
        let img =Math.floor(Math.random()*22+1).toString()
        console.log(img)
        document.getElementById("meme-container2").src = "assets/"+img+".jpg";
        
    }


    function changeImage3() {
        
        let img =Math.floor(Math.random()*22+1).toString()
        console.log(img)
        document.getElementById("meme-container3").src = "assets/"+img+".jpg";
        
    }

    function tomerFunction() {

        let img =Math.floor(Math.random()*22+1).toString()
        console.log(img)
        document.getElementById("meme-container3").src = "assets/"+img+".jpg";
        
    }


    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
    
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
    }

    var scoreLabel = document.getElementById("score");


    document.body.onkeyup = function(e){
        // end with spacebar
        if(e.keyCode == 32){
            
            var seconds_done = secondsLabel;
            var minutes_done = minutesLabel

            console.log(minutesLabel,secondsLabel);
            setTime();

            scoreLabel.innerHTML = 'High Score: ' + minutesLabel.innerHTML + ':' + secondsLabel.innerHTML;

        }
        // start with letter s
        if(e.keyCode == 83){
            //console.log(minutesLabel, secondsLabel)
            totalSeconds = 0
            console.log(minutesLabel, secondsLabel)
            //setInterval(setTime, 1000);
        }
    }