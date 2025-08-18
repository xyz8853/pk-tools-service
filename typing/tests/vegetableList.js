

let vegetables_list = [
    "acorn squash","alfalfa sprout","amaranth","anise","artichoke","arugula","asparagus","aubergine","azuki bean","banana squash","basil","bean sprout","beet","black bean","black-eyed pea","bok choy","borlotti bean","broad beans",
    "broccoflower","broccoli","brussels sprout","butternut squash","cabbage","calabrese","caraway","carrot","cauliflower","cayenne pepper","celeriac","celery","chamomile","chard","chayote","chickpea","chives","cilantro","collard green","corn","corn salad","courgette",
    "cucumber","daikon","delicata","dill","eggplant","endive","fennel","fiddlehead","frisee","garlic","gem squash","ginger","green bean","green pepper","habanero","herbs and spice","horseradish","hubbard squash","jalapeno","jerusalem artichoke","jicama","kale","kidney bean","kohlrabi","lavender",
    "leek ","legume","lemon grass","lentils","lettuce","lima bean","mamey","mangetout","marjoram","mung bean","mushroom","mustard green","navy bean","new zealand spinach","nopale","okra","onion","oregano","paprika","parsley","parsnip","patty pan","pea","pinto bean",
    "potato","pumpkin","radicchio","radish","rhubarb","rosemary","runner bean","rutabaga","sage","scallion","shallot","skirret","snap pea","soy bean","spaghetti squash","spinach","squash","sweet potato","tabasco pepper","taro",
    "tat soi","thyme","topinambur","tubers","turnip","wasabi","water chestnut","watercress","white radish","yam","zucchini"
    ]

    let vegettableData = document.querySelector('.vegetable-data');
    let vegetableInput = document.querySelector('.vegetable-input');
    let index =0;
    vegettableData.textContent = vegetables_list[index];
    vegetableInput.addEventListener('input', (event)=>{
            let val = event.target.value;
            if(val===vegettableData.textContent){
                index++;
                vegettableData.textContent=vegetables_list[index];
                event.target.value='';
            }
            if(vegetables_list.length==index){
                index=0;
                vegettableData.textContent=vegetables_list[index];
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