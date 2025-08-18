
// Z to A concept below
let ztoa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let ztoaIndex=25;
    let ztoaData = document.querySelector('.ztoa-alphabet');
    let ztoaInput = document.querySelector('.ztoa-input');
        ztoaData.textContent = ztoa[ztoaIndex];
        ztoaInput.addEventListener('input', function(event){
              let val = event.target.value;
              console.log(val);
              if(ztoaData.textContent===val){
                   ztoaIndex--;
                   ztoaData.textContent=ztoa[ztoaIndex];
                   event.target.value="";
              }else{
                event.target.value="";
              }
              if(ztoaIndex==-1){
                   ztoaIndex=25;
                   ztoaData.textContent=ztoa[ztoaIndex];
              }
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