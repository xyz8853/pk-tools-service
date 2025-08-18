
//JAY MOHShIN SIR 

// for Acadmic Qualification 

let acadmicIndex = 0;
let insideAcadmicTd = document.querySelector('.acadmic-all-input');
let acadmicButton = document.querySelector('.acadmic-add-button');

//for first remove div
let createAcadmicNewDiv = document.createElement('div');
createAcadmicNewDiv.setAttribute('class','acadmic1');
insideAcadmicTd.append(createAcadmicNewDiv);

//for second remove div
let createAcadmicNewDiv2 = document.createElement('div');
createAcadmicNewDiv2.setAttribute('class','acadmic2');
insideAcadmicTd.append(createAcadmicNewDiv2);

//for third remove div
let createAcadmicNewDiv3 = document.createElement('div');
createAcadmicNewDiv3.setAttribute('class','acadmic3');
insideAcadmicTd.append(createAcadmicNewDiv3);

acadmicButton.addEventListener('click', function(e){
        
        e.preventDefault();
        acadmicIndex++;
        if(acadmicIndex<=3){
         let acadmicRemoveButton = document.createElement("button");
            acadmicRemoveButton.setAttribute('class','acadmic-remove-'+acadmicIndex);
            acadmicRemoveButton.setAttribute('id','acadmic-remove-button'+acadmicIndex);
            acadmicRemoveButton.textContent = 'Remove';
            acadmicRemoveButton.style.color='red';
            acadmicRemoveButton.style.margin = '0px 0px';
            acadmicRemoveButton.style.border = 'none';
            acadmicRemoveButton.style.backgroundColor = '#ddd'; 

            let input1 = document.createElement('input');
            input1.setAttribute('placeholder','Exam');
            input1.setAttribute('type','text');
            input1.setAttribute('name','aexam'+acadmicIndex);
            input1.setAttribute('class','input'+acadmicIndex);
            

            let input2 = document.createElement('input');
            input2.setAttribute('placeholder','Board/University');
            input2.setAttribute('type','text');
            input2.setAttribute('name','aboard'+acadmicIndex);

            let input3 = document.createElement('input');
            input3.setAttribute('placeholder','Passing year');
            input3.setAttribute('type', 'text');
            input3.setAttribute('name','aPassingYear'+acadmicIndex);

            let input4 = document.createElement('input');
            input4.setAttribute('placeholder', 'Mark %');
            input4.setAttribute('type', 'text');
            input4.setAttribute('name','aMark'+acadmicIndex);


            let input5 = document.createElement('input');
            input5.setAttribute('placeholder','Division');
            input5.setAttribute('type','text');
            input5.setAttribute('name','aDivision'+acadmicIndex);

            // insideElement.append(input1);
            // insideElement.append(input2);
            // insideElement.append(input3);
            // insideElement.append(input4);
            // insideElement.append(input5);
            // insideElement.append(acadmicRemoveButton);
            // console.log('successfully done');
            // insideAcadmicTd.append(createAcadmicNewDiv);
            if(acadmicIndex==1){
                createAcadmicNewDiv.append(input1);
                createAcadmicNewDiv.append(input2);
                createAcadmicNewDiv.append(input3);
                createAcadmicNewDiv.append(input4);
                createAcadmicNewDiv.append(input5);
                createAcadmicNewDiv.append(acadmicRemoveButton);
            }
            else if(acadmicIndex==2){
                createAcadmicNewDiv2.append(input1);
                createAcadmicNewDiv2.append(input2);
                createAcadmicNewDiv2.append(input3);
                createAcadmicNewDiv2.append(input4);
                createAcadmicNewDiv2.append(input5);
                createAcadmicNewDiv2.append(acadmicRemoveButton);
            }else if(acadmicIndex == 3){
                createAcadmicNewDiv3.append(input1);
                createAcadmicNewDiv3.append(input2);
                createAcadmicNewDiv3.append(input3);
                createAcadmicNewDiv3.append(input4);
                createAcadmicNewDiv3.append(input5);
                createAcadmicNewDiv3.append(acadmicRemoveButton);
            }
        }

})


//acadmic remove button concept div first

let parentAcadmic1 = document.querySelector('.acadmic1');

    parentAcadmic1.addEventListener('click', function(e){
            e.preventDefault();
            if(e.target.id == 'acadmic-remove-button1'){
                console.log('Remove Button-1');
                e.currentTarget.remove();
                //acadmicIndex--;
            }
})

//acadmic remove second button concept
let parentAcadmic2 = document.querySelector('.acadmic2');
    parentAcadmic2.addEventListener('click', function(e){
            e.preventDefault();
            if(e.target.id == 'acadmic-remove-button2'){
                console.log('Remove Button-2')
                e.currentTarget.remove();
                //acadmicIndex--;
            }
    })

//acadmic remove third button concept
let parentAcadmic3 = document.querySelector('.acadmic3');
    parentAcadmic3.addEventListener('click' , function(e){
           e.preventDefault();
           if(e.target.id == 'acadmic-remove-button3'){
               console.log('Remove Button-3');
               e.currentTarget.remove();
               //acadmicIndex--;
           }
})




// For Prfessional Qualification 

    let professionalIndex = 0;    
    let insideProfessionalTd = document.querySelector('.professional-all-input');

    createProfessionalNewDiv = document.createElement('div');
    createProfessionalNewDiv.setAttribute('class','professional-div1');
    insideProfessionalTd.append(createProfessionalNewDiv);

    createProfessionalNewDiv2 = document.createElement('div');
    createProfessionalNewDiv2.setAttribute('class','professional-div2');
    insideProfessionalTd.append(createProfessionalNewDiv2);

    createProfessionalNewDiv3 = document.createElement('div');
    createProfessionalNewDiv3.setAttribute('class','professional-div3');
    insideProfessionalTd.append(createProfessionalNewDiv3);

    let professionalButton = document.querySelector('.professional-add-button');
    professionalButton.addEventListener('click', function(e){
        e.preventDefault();
        professionalIndex++;
        if(professionalIndex<=3){

            let professionalRemoveButton = document.createElement('button');
            professionalRemoveButton.textContent = 'Remove';
            professionalRemoveButton.style.border = "none";
            professionalRemoveButton.style.backgroundColor = '#ddd';
            professionalRemoveButton.setAttribute('class','professional-remove-'+professionalIndex);
            professionalRemoveButton.setAttribute('id','professional-remove-button'+professionalIndex);
            professionalRemoveButton.style.color = 'red';

            let input1  = document.createElement('input');
            input1.setAttribute('placeholder','Exam');
            input1.setAttribute('type','text');
            input1.setAttribute('class','input-'+professionalIndex);
            input1.setAttribute('name','pExam'+professionalIndex);

            let input2 = document.createElement('input');
            input2.setAttribute('placeholder','Board/University');
            input2.setAttribute('type','text');
            input2.setAttribute('class','input-'+professionalIndex);
            input2.setAttribute('name','pBoard'+professionalIndex);
            
            let input3 = document.createElement('input');
            input3.setAttribute('placeholder','Passing year');
            input3.setAttribute('type','text');
            input3.setAttribute('class','input-'+professionalIndex);
            input3.setAttribute('name','pPassingYear'+professionalIndex);


            let input4 = document.createElement('input');
            input4.setAttribute('placeholder','Mark %');
            input4.setAttribute('type','text');
            input4.setAttribute('name','pMark'+professionalIndex);


            let input5 = document.createElement('input');
            input5.setAttribute('placeholder','Division');
            input5.setAttribute('type','text');
            input5.setAttribute('name','pDivision'+professionalIndex);

            // insideProfessionalElement.append(input1);
            // insideProfessionalElement.append(input2);
            // insideProfessionalElement.append(input3);
            // insideProfessionalElement.append(input4);
            // insideProfessionalElement.append(input5);
            // insideProfessionalElement.append(professionalRemoveButton);
            if(professionalIndex==1){
                 createProfessionalNewDiv.append(input1);
                 createProfessionalNewDiv.append(input2);
                 createProfessionalNewDiv.append(input3);
                 createProfessionalNewDiv.append(input4);
                 createProfessionalNewDiv.append(input5);
                 createProfessionalNewDiv.append(professionalRemoveButton);
            }else if(professionalIndex == 2){
                createProfessionalNewDiv2.append(input1);
                createProfessionalNewDiv2.append(input2);
                createProfessionalNewDiv2.append(input3);
                createProfessionalNewDiv2.append(input4);
                createProfessionalNewDiv2.append(input5);
                createProfessionalNewDiv2.append(professionalRemoveButton);
            }else if(professionalIndex == 3){
                 createProfessionalNewDiv3.append(input1);
                 createProfessionalNewDiv3.append(input2);
                 createProfessionalNewDiv3.append(input3);
                 createProfessionalNewDiv3.append(input4);
                 createProfessionalNewDiv3.append(input5);
                 createProfessionalNewDiv3.append(professionalRemoveButton);
            }
        }

        // console.log("success...");
    })

        //professional remove first button concept

    let parentProfessional1 = document.querySelector('.professional-div1');
    parentProfessional1.addEventListener('click', function(e){
          e.preventDefault();
          if(e.target.id == 'professional-remove-button1'){
                console.log('Professional-Remove-Button-1');
                e.currentTarget.remove();
          }
    })

    //professional second remove button concept

let parentProfessional2 = document.querySelector('.professional-div2');
    parentProfessional2.addEventListener('click', function(e){
            e.preventDefault();
            if(e.target.id == 'professional-remove-button2'){
                console.log('Professional-Remove-Button-2');
                e.currentTarget.remove();
            }
    })

    //professional third remove button concept
let parentProfessional3 = document.querySelector('.professional-div3');
    parentProfessional3.addEventListener('click', function(e){
            e.preventDefault();
            if(e.target.id == 'professional-remove-button3'){
                console.log('Professional-Remove-Button-3');
                e.currentTarget.remove();
            }
    });


//Extra Qualification
    let extraIndex = 0;
    let extraQualificationButton = document.querySelector('.extra-add-button');
    let insideExtraTd = document.querySelector('.extra-qualification');

    //create a new div
    let createExtraNewDiv = document.createElement('div');
        createExtraNewDiv.setAttribute('class','extra1');
        insideExtraTd.append(createExtraNewDiv);

    extraQualificationButton.addEventListener('click', function(e){
        e.preventDefault();
        extraIndex++;
        if(extraIndex<=1){
           
            let input = document.createElement('input');
            input.setAttribute('type','text');
            input.setAttribute('name','extraQualification'+extraIndex);

            let extraRemoveButton = document.createElement('button');
            extraRemoveButton.setAttribute('id', 'extra-remove-button1');
            extraRemoveButton.textContent = "Remove";
            extraRemoveButton.style.color = 'red';
            extraRemoveButton.style.border='none';
            extraRemoveButton.style.backgroundColor='#ddd';

            createExtraNewDiv.append(input);
            createExtraNewDiv.append(extraRemoveButton);
        }
    })

//extra remove button concept below

    let parentExtra = document.querySelector('.extra1');
        parentExtra.addEventListener('click', function(e){
            e.preventDefault();
            if(e.target.id == 'extra-remove-button1'){
                console.log('extra remove button -deleted');
                e.currentTarget.remove();
            }
        })

// for using work experience
    let workExperienceIndex = 0;
    let workExperienceButton = document.querySelector('#work-new-add-button');

    let insideWorkTd = document.querySelector('.work-experience');
    //create new div
    let createWorkNewDiv = document.createElement('div');
    createWorkNewDiv.setAttribute('class','work1');
    insideWorkTd.append(createWorkNewDiv);

        workExperienceButton.addEventListener('click', function(e){
            e.preventDefault();
            workExperienceIndex++;
            if(workExperienceIndex<=1){
                
                let workExperienceRemoveButton = document.createElement('button');
                workExperienceRemoveButton.setAttribute('id','work-remove-button1');
                workExperienceRemoveButton.textContent = 'Remove';
                workExperienceRemoveButton.style.color='red';
                workExperienceRemoveButton.style.backgroundColor = '#ddd';
                workExperienceRemoveButton.style.border='none';

                let input = document.createElement('input');
                input.setAttribute('type','text');
                input.setAttribute('name','workExperience'+workExperienceIndex);

                createWorkNewDiv.append(input);
                createWorkNewDiv.append(workExperienceRemoveButton);
            }
            // console.log('work');
    });


//remove work experience remove button
    let parentWork = document.querySelector('.work1');
        parentWork.addEventListener('click', function(e){
                e.preventDefault();
                if(e.target.id == 'work-remove-button1'){
                    //   console.log("work experience remove button deleted");
                      e.currentTarget.remove();
                }
        })

//index.html file nav bar heading text

let color = ['#C70039','#FFC733','#DAF7A6','#FF5733','#900C3F','#C70039','#6495ED','#CCCCFF','#40E0D0','#00FF00','#0000FF','#FF0000','Lime'];
let colorIndex =0;
let navContent = document.querySelector('.navbar-heading-text')
// console.log(navContent);

    let navBarContent = () =>{
        navContent.style.color = color[colorIndex];
        colorIndex++;
        if(colorIndex>=color.length-1){
             colorIndex =0;
        }
        // console.log('color');
    }

    setInterval(navBarContent,500);