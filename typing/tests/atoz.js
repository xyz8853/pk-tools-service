
    //A to Z concept below

let AtoZ = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let atoz = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let index=0;

let alphabetData = document.querySelector('.alphabet-data');
let atozInput = document.querySelector('.atoz-input');
    alphabetData.textContent = AtoZ[index];
    console.log(alphabetData.textContent);
    atozInput.addEventListener('input', function(event){
        let val = event.target.value;
        if(alphabetData.textContent===val){
            index++;
            alphabetData.textContent=AtoZ[index];
            event.target.value="";
        }else{
            event.target.value="";
        }
        if(index==26){
            index=0;
            alphabetData.textContent=AtoZ[index];
        }
        console.log(val);
    })


//index.html file nav bar heading text

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