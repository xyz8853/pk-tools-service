


//concept of restart button of typing
let setIntervalId;
let restartButtonClicking=false;
let stopButtonClicking=true;
let timeEnd=true;
let timingSet = document.querySelector('#timeMinutes');
let timeSec = document.querySelector('#timeSecond');
let restart = document.querySelector('.restart-button-typing');
let stopButton = document.querySelector('#typingStopButton');
/**type character  */
let inputValue = document.querySelector('#wordTypeInputData');
let checkAccuracy = document.querySelector('#accuracy');
let grossSpeed = document.querySelector('#count_wpm');
let cpmSpeed = document.querySelector('#count_cpm');
  let index=0;
  let totalWrongWord = 0;
  let totalCorrectWord = 0;
  let accuracy=0;
  let totalChar=0;
  let wpm=0;
  let totalWhiteSpace=0;
  let totalAttempWord=0;

  let totalTypingTime;


/** is the timing function */
let min;
let sec;
let typingTiming = function(timeMinutes=1){
    checkAccuracy.textContent=`${0}`;
    grossSpeed.textContent=`${0}`;
    cpmSpeed.textContent=`${0}`;
    totalWrongWord=0;
    totalCorrectWord=0;
    accuracy=0;
    totalChar=0;
    wpm=0;
    totalAttempWord=0;
    totalTypingTime=timeMinutes;
    let totalSec = timeMinutes*60;
    sec=0;
    min=1;
    setIntervalId = setInterval(()=>{
    if(stopButtonClicking == true){
         timeEnd=true;
         inputValue.removeAttribute('disabled');
        if(totalSec>=0){
            sec++;
            timeSec.textContent = `${60-sec}`;
            if(sec==60){
                min++;  
                sec=0;
                timeSec.textContent = `${60}`;
            }
            totalSec--;
        }
        timingSet.innerText = `${timeMinutes-min}`;
        if(totalSec==0){
            timeEnd=false;
            inputValue.setAttribute('disabled', 'true');
            timingSet.innerText = `0`;
            timeSec.textContent=`0`;
            restart.style.backgroundColor = 'yellow';
            restart.style.color='red';
            clearTimeout(setIntervalId);
            restartButtonClicking=true;
            stopButtonClicking=true;
        }
    }else{
            inputValue.setAttribute('disabled', 'true');
            timeEnd=false;
    }
      console.log(timeMinutes);
    },1000);  
}

typingTiming();/**it is the function calling concept */

/**restart button concept  */
    restart.addEventListener('click', function(e){
      if(restartButtonClicking==true){
         index=0;
         content();//function calling here concept.

        restart.style.backgroundColor='green';
        restart.style.color='white';
        typingTiming(1);
        restartButtonClicking=false;
      }
    })


let stopNo=0;
/**stop button concept */
stopButton.addEventListener('click', function(){
    //console.log(stopButtonClicking);
    if(stopNo%2==0){
      stopButtonClicking=false;
      stopButton.textContent=`Start`;
    //   timeEnd=false;
    }
    if(stopNo%2==1){
        stopButtonClicking=true;
        stopButton.textContent=`Stop`;
        // timeEnd=true;
    }
    stopNo++;
});


let inputWordData = document.querySelector('#wordTypeInputData');
    inputWordData.addEventListener('input', (event)=>{
        // typingTiming();
    })
    
   
  


  //Typing concept total
  
  let typingData = document.querySelector('#typingContent');
  let content = ()=>{
    let allTypingWord = typingData.textContent;
    typingData.textContent="";
    let arr =  allTypingWord.split(" ");
    //   arr = arr.join("X");
    for(let r=0; r<arr.length; r++){
          let span = document.createElement('span');
              span.setAttribute('class', `span-${r}`);
              span.textContent = arr[r]+" ";
              span.style.color="black";
              typingData.append(span);
    }
  }
  content();//function calling concept

  let currentValue = "";
  let currentSpan = document.querySelector(`.span-${index}`);
      currentSpan.style.color='red';    
  let spanNewValue = currentSpan.textContent;
      spanNewValue = spanNewValue.substring(0, spanNewValue.length-1);


      inputValue.addEventListener('input', function(event){
        //   if(timeEnd==false){
        //       inputValue.setAttribute('disabled', 'true');
        //   }else{
        //     inputValue.removeAttribute('disabled');
        //   }
          let v = event.target.value;
          if(!(v.charAt(v.length-1) == ' ')){
              totalChar++;
          }
          console.log("total character:"+totalChar);
          let value = event.target.value;
          currentValue = value;
          if(currentValue==' ' || currentValue.charAt(currentValue.length-1) == ' '){
            index++;
            event.target.value="";
            currentValue = '';
            currentSpan= document.querySelector(`.span-${index}`);
            currentSpan.style.color= 'red';
            spanNewValue = currentSpan.textContent;
            spanNewValue = spanNewValue.substring(0, spanNewValue.length-1);

            totalWrongWord++;
          }
          if(currentValue===spanNewValue){
            currentSpan.style.color='green';
            index++;
            event.target.value="";
            currentValue = '';
            currentSpan= document.querySelector(`.span-${index}`);
            currentSpan.style.color= 'red';
            spanNewValue = currentSpan.textContent;
            spanNewValue = spanNewValue.substring(0, spanNewValue.length-1); 

            totalCorrectWord++;
          }
          /**Accuracy */
          accuracy = Math.round((totalCorrectWord*100)/(totalWrongWord+totalCorrectWord));
          checkAccuracy.textContent=`${accuracy}`;
          /**Gross Speed(WPM) */
          wpm = Math.round(((totalChar/5)/totalTypingTime));
          grossSpeed.textContent=`${wpm}`;
          /**CPM */
          let cpm = totalChar/totalTypingTime;
          cpmSpeed.textContent=`${cpm}`;

      });

    // menu tools name designing
    let color = ['#C70039','#FFC733','#DAF7A6','#FF5733','#900C3F','#C70039','#6495ED','#CCCCFF','#40E0D0','#00FF00','#0000FF','#FF0000','Lime'];
    let colorIndex =0;
    let navContent = document.querySelector('.navbar-heading-text') 
    let navBarContent = ()=>{
        
        navContent.style.color = color[colorIndex];
        colorIndex++;
        if(colorIndex>=color.length-1){
             colorIndex =0;
        }
        
    }

    setInterval(navBarContent,500);
