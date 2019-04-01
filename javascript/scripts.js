    let scoreLabel = document.getElementById("score");
    let minutesLabel = document.getElementById("minutes");
    let secondsLabel = document.getElementById("seconds");
    let interval, totalSeconds = 0;
        
    function changeImage(id) {
        var img =Math.floor(Math.random()*22+1).toString()
        // console.log(img);
        document.getElementById(id).src = "assets/"+img+".jpg";
    }
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
    function compareImages(){
       return (
           (document.getElementById("meme-container").src == document.getElementById("meme-container1").src)
        && (document.getElementById("meme-container2").src == document.getElementById("meme-container3").src)
        ) ? true : false;
    }
    function reshuffleImages() {
        while(compareImages()) {
            changeImage("meme-container");
            changeImage("meme-container" + Math.floor(Math.random()*3+1).toString());
            changeImage("meme-container" + Math.floor(Math.random()*3+1).toString());
        }
    }
    
    document.body.onkeyup = function(e){
        // end with spacebar
        if(e.keyCode == 32){
            if (!interval) {
                alert('Click S to start!');
                return;
            }
            console.log(minutesLabel,secondsLabel);
            if(compareImages()){
                scoreLabel.innerHTML = 'High Score: ' + minutesLabel.innerHTML + ':' + secondsLabel.innerHTML;
                clearInterval(interval);
                interval = null;
            }
            else {
                alert('Not matching!');
            }
        }
        // start with letter s
        if(e.keyCode == 83){
            totalSeconds = 0;
            reshuffleImages();
            if (interval) clearInterval(interval);
            interval = setInterval(setTime, 1000);
            console.log(minutesLabel, secondsLabel);
        }
    }
