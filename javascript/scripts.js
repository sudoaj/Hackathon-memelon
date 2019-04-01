    function changeImage(id) {
        let img =Math.floor(Math.random()*22+1).toString()
        console.log(img);
        document.getElementById(id).src = "assets/"+img+".jpg";
    }


    let minutesLabel = document.getElementById("minutes");
    let secondsLabel = document.getElementById("seconds");
    let interval, totalSeconds = 0;
    
    

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
            if(compareImages()){
                scoreLabel.innerHTML = 'High Score: ' + minutesLabel.innerHTML + ':' + secondsLabel.innerHTML;
                clearInterval(interval);
            }

        }
        // start with letter s
        if(e.keyCode == 83){
            clearInterval(interval);
            interval = setInterval(setTime, 1000);
            totalSeconds = 0
            console.log(minutesLabel, secondsLabel)
            //setInterval(setTime, 1000);
        }
    }

    function compareImages(){
        if (document.getElementById("meme-container").src == document.getElementById("meme-container1").src && document.getElementById("meme-container2").src == document.getElementById("meme-container3").src) 
        {
            //alert('matching!');
            return true;
        }
        else
        {
            alert('Not matching!');
            return false;
        }
    }
