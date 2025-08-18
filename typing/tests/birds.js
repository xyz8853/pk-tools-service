

 let birds = ["Eagle","Duck","Hen","Parrot","Peacock","Dove","Stork","Swan","Pigeon","Goose","Pelican","Macaw","Parakeet","Finches","Crow","Raven","Vulture","Hawk","Crane","Penguin","Hummingbird","Sparrow","Woodpecker","Hornbill",
                "Owl","Myna","Cuckoo","Turkey","Quail","Ostrich","Emu","Cockatiel",
,"Kingfisher","Kite","Cockatoo","Nightingale",
"Blue","jay","Magpie","Goldfinch","Robin",
"Swallow","Starling","Pheasant","Toucan","Canary","Seagull","Heron","Potoo",
"Bush","warbler","Barn","swallow","Cassowary","Mallard",
"Common","swift","Falcon","Megapode","Spoonbill","Ospreys","Coot","Rail","Budgerigar",
"Wren","Lark","Sandpiper","Arctic","tern","Lovebird","Conure","Rallidae","Bee-eater",
"Grebe","Guinea","fowl","Passerine","Albatross","Moa","Kiwi","Nightjar","Oilbird",
"Dodo","Azure","dollar","Purple","dollar","Greater","coucal","Greater","racket","tailed","drongo","Gannet","Thrush","Avocet","Catbird",
"Bluebird","Roadrunner","Dunnock","Northern","cardinal",
"Teal","Northern","shoveler","Gadwall","Northern","pintail",
"Hoatzin","Kestrel","Oriole","Partridge","Tailorbird","Wagtail","Weaverbird","Skylark"]


let birdData = document.querySelector('.birds-data');
let birdInput = document.querySelector('.birds-input');
let index =0;
    birdData.textContent = birds[index];
    birdInput.addEventListener('input',(event)=>{
          console.log(event.target.value);
          let val = event.target.value;
          if(val === birdData.textContent){
              index++;
              birdData.textContent=birds[index];
              event.target.value = '';
          }
          if(birds.length==index){
                index=0;
                birdData.textContent=birds[index];
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