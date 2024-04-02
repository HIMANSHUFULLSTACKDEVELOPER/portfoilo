   // we have 100 rup
   let coins = 100;
   // start playing
   function startplay() {
       document.getElementById("loader").style.display = "block";
       // javascript timeout on it
       setTimeout(() => {
           startLottery();
       }, 1000);
   }

   // lottery start
   function startLottery() {
       document.getElementById("loader").style.display = "none";
       // formula use 
       let output = parseInt((Math.random() * 100) / 10);
       // bet  coin on it
       let betCoins = document.getElementById("coins").value;
       //   bet number 
       let betNumber = document.getElementById("input").value;

       if (betCoins <= 0 || betNumber < 0) {
           document.getElementById("display-text").innerHTML = "<br/> your coins is " + coins;
           return;
       }
       if (betCoins == betNumber) {
           document.getElementById("display-text").innerHTML = "check  your bet its more than coins   ";
           return;
       }
       if (betCoins == betNumber) {
           coins += betCoins * 9;
       } else {
           coins -= betCoins;
       }

       document.getElementById("display-text").innerHTML =
           "Loottery Number =" + output + "<br/>your coins coins is" + coins;
       document.getElementById("display-text");




   }

   window.onload = function () {
       startplay();
   }

