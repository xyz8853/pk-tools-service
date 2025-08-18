let animals_name =[
                "Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison",
                "Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod",
                "Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant",
                "Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper",
                "Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion",
                "Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich",
                "Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven",
                "Red deer","Red panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sand Dollar","Sandpiper","Sardine","Scorpion","Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir",
                "Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"
                 ]


    let animalsData = document.querySelector('.animals-data');
    let animalsInput = document.querySelector('.animals-input');
    let index=0;
        animalsData.textContent = animals_name[index];
        animalsInput.addEventListener('input', (event)=>{

             let val = event.target.value;
             if(val == animalsData.textContent){
                  index++;
                  animalsData.textContent=animals_name[index];
                  event.target.value="";
             }
             if(animals_name.length==index){
                  index=0;
                  animalsData.textContent=animals_name[index];
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