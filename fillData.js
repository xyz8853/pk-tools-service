
//JAY MOHShIN SIR 

// for Acadmic Qualification 

let acadmicIndex = 0;
let acadmicFlagArr = [];
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
        acadmicFlagArr.push(acadmicIndex);
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
            input1.setAttribute('name','clientExam'+acadmicIndex);
            input1.setAttribute('class','input'+acadmicIndex);
            

            let input2 = document.createElement('input');
            input2.setAttribute('placeholder','Board/University');
            input2.setAttribute('type','text');
            input2.setAttribute('name','clientBoardOrUniversity'+acadmicIndex);

            let input3 = document.createElement('input');
            input3.setAttribute('placeholder','Passing year');
            input3.setAttribute('type', 'text');
            input3.setAttribute('name','clientPassingYear'+acadmicIndex);

            let input4 = document.createElement('input');
            input4.setAttribute('placeholder', 'Mark %');
            input4.setAttribute('type', 'text');
            input4.setAttribute('name','clientMarkPercentage'+acadmicIndex);


            let input5 = document.createElement('input');
            input5.setAttribute('placeholder','Division');
            input5.setAttribute('type','text');
            input5.setAttribute('name','clientDivision'+acadmicIndex);

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
    let proFlagArray = [];
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
        proFlagArray.push(professionalIndex);
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
            input1.setAttribute('name','clientProExam'+professionalIndex);

            let input2 = document.createElement('input');
            input2.setAttribute('placeholder','Board/University');
            input2.setAttribute('type','text');
            input2.setAttribute('class','input-'+professionalIndex);
            input2.setAttribute('name','clientProBoard'+professionalIndex);
            
            let input3 = document.createElement('input');
            input3.setAttribute('placeholder','Passing year');
            input3.setAttribute('type','text');
            input3.setAttribute('class','input-'+professionalIndex);
            input3.setAttribute('name','clientProPassingYear'+professionalIndex);


            let input4 = document.createElement('input');
            input4.setAttribute('placeholder','Mark %');
            input4.setAttribute('type','text');
            input4.setAttribute('name','clientProMarkPercentage'+professionalIndex);


            let input5 = document.createElement('input');
            input5.setAttribute('placeholder','Division');
            input5.setAttribute('type','text');
            input5.setAttribute('name','clientProDivision'+professionalIndex);

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
    let extraFlagArr = [];
    let extraQualificationButton = document.querySelector('.extra-add-button');
    let insideExtraTd = document.querySelector('.extra-qualification');

    //create a new div
    let createExtraNewDiv = document.createElement('div');
        createExtraNewDiv.setAttribute('class','extra1');
        insideExtraTd.append(createExtraNewDiv);

    extraQualificationButton.addEventListener('click', function(e){
        e.preventDefault();
        extraIndex++;
        extraFlagArr.push(extraIndex);
        if(extraIndex<=1){
           
            let input = document.createElement('input');
            input.setAttribute('type','text');
            input.setAttribute('name','clientExtraQualification'+extraIndex);

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
    let workExpFlagArr = [];
    let workExperienceButton = document.querySelector('#work-new-add-button');

    let insideWorkTd = document.querySelector('.work-experience');
    //create new div
    let createWorkNewDiv = document.createElement('div');
    createWorkNewDiv.setAttribute('class','work1');
    insideWorkTd.append(createWorkNewDiv);

        workExperienceButton.addEventListener('click', function(e){
            e.preventDefault();
            workExperienceIndex++;
            workExpFlagArr.push(workExperienceIndex);
            if(workExperienceIndex<=1){
                
                let workExperienceRemoveButton = document.createElement('button');
                workExperienceRemoveButton.setAttribute('id','work-remove-button1');
                workExperienceRemoveButton.textContent = 'Remove';
                workExperienceRemoveButton.style.color='red';
                workExperienceRemoveButton.style.backgroundColor = '#ddd';
                workExperienceRemoveButton.style.border='none';

                let input = document.createElement('input');
                input.setAttribute('type','text');
                input.setAttribute('name','clientWorkExperience'+workExperienceIndex);

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

    //captcha changable concept
    // let signup_button = document.querySelector('.captcha-changble-button');
    // let inputCaptchaCode = document.querySelector('.input-captch-code');
    
    // let code='';
    // let getInputChaptaCode='';
    // signup_button.addEventListener('click', function(event){
    //  event.preventDefault();
    // code = '';
    //  for(let r=1; r<=5; r++){
    //       let captchaCode = 'ABCDEFGHKIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz234567890';
    //       let char = captchaCode.charAt((Math.floor(Math.random()*captchaCode.length)));
    //       code = code+char;
    //  }
    //  let captchaValue = document.querySelector('.captcha-text');
    //  captchaValue.setAttribute('value',code);
    //  console.log(code);
    // });

    //resume template data handling
    //template choose option
    let templateActiveFlag = false;
    let templateOption = 1;
    let clientMaxData = [];
    let acadmicQualification = [];
    let professionQualification = [];
    let extraQual = [];
    let workExp = [];
    let clientGender='Other';
    let resumeTemplateFlag=false;
    let clientInputName ='';
    function formHandlingData(event){
        //template avtive choose option
        templateActiveFlag = true;
        
        var acadmicObject = {
        exam:'mca',
        board:'up',
        passingYear:'2026',
        markPercentage:'75',
        division:'first'
    }
        clientMaxData.push(event.target.clientName.value);
        clientMaxData.push(event.target.clientAddress.value);
        clientMaxData.push(event.target.clientMobileNumber.value);
        clientMaxData.push(event.target.clientEmailId.value);
        clientMaxData.push(event.target.clientDOB.value);
        clientMaxData.push(event.target.ClientFatherName.value);
        clientMaxData.push(event.target.clientMotherName.value);
        clientMaxData.push(event.target.clientNationality.value);
        clientMaxData.push(event.target.ClientGender.value);
        clientMaxData.push(event.target.ClientMarital.value);
        clientMaxData.push(event.target.clientSpeakLanguage.value)
        clientMaxData.push(event.target.ClientHobbies.value)
        clientMaxData.push(event.target.clientObjectiveText.value)
        // clientMaxData.push(event.target.clientPhoto.value);
        
        //Qualification
       acadmicObject.exam = event.target.clientExam.value;
       acadmicObject.board = event.target.clientBoardOrUniversity.value;
       acadmicObject.passingYear = event.target.clientPassingYear.value;
       acadmicObject.markPercentage = event.target.clientMarkPercentage.value;
       acadmicObject.division = event.target.clientDivision.value;
       acadmicQualification.push({...acadmicObject});
       
       if(acadmicFlagArr[0]==1){
            acadmicObject.exam = event.target.clientExam1.value;
            acadmicObject.board = event.target.clientBoardOrUniversity1.value;
            acadmicObject.passingYear = event.target.clientPassingYear1.value;
            acadmicObject.markPercentage = event.target.clientMarkPercentage1.value;
            acadmicObject.division = event.target.clientDivision1.value;
            acadmicQualification.push({...acadmicObject});
       }
       if(acadmicFlagArr[1]==2){
            acadmicObject.exam = event.target.clientExam2.value;
            acadmicObject.board = event.target.clientBoardOrUniversity2.value;
            acadmicObject.passingYear = event.target.clientPassingYear2.value;
            acadmicObject.markPercentage = event.target.clientMarkPercentage2.value;
            acadmicObject.division = event.target.clientDivision2.value;
            acadmicQualification.push({...acadmicObject});
       }
       if(acadmicFlagArr[2]==3){
            acadmicObject.exam = event.target.clientExam3.value;
            acadmicObject.board = event.target.clientBoardOrUniversity3.value;
            acadmicObject.passingYear = event.target.clientPassingYear3.value;
            acadmicObject.markPercentage = event.target.clientMarkPercentage3.value;
            acadmicObject.division = event.target.clientDivision3.value;
            acadmicQualification.push({...acadmicObject});
       }

        //other professional qualification
        acadmicObject.exam = event.target.clientProExam.value;
        acadmicObject.board = event.target.clientProBoard.value;
        acadmicObject.passingYear = event.target.clientProPassingYear.value;
        acadmicObject.markPercentage = event.target.clientProMarkPercentage.value;
        acadmicObject.division = event.target.clientProDivision.value;
        professionQualification.push({...acadmicObject});

        if(proFlagArray[0]==1){
            acadmicObject.exam = event.target.clientProExam1.value;
            acadmicObject.board = event.target.clientProBoard1.value;
            acadmicObject.passingYear = event.target.clientProPassingYear1.value;
            acadmicObject.markPercentage = event.target.clientProMarkPercentage1.value;
            acadmicObject.division = event.target.clientProDivision1.value;
            professionQualification.push({...acadmicObject});
        }
        if(proFlagArray[1]==2){
            acadmicObject.exam = event.target.clientProExam2.value;
            acadmicObject.board = event.target.clientProBoard2.value;
            acadmicObject.passingYear = event.target.clientProPassingYear2.value;
            acadmicObject.markPercentage = event.target.clientProMarkPercentage2.value;
            acadmicObject.division = event.target.clientProDivision2.value;
            professionQualification.push({...acadmicObject});
        }
        if(proFlagArray[2]==3){
            acadmicObject.exam = event.target.clientProExam3.value;
            acadmicObject.board = event.target.clientProBoard3.value;
            acadmicObject.passingYear = event.target.clientProPassingYear3.value;
            acadmicObject.markPercentage = event.target.clientProMarkPercentage3.value;
            acadmicObject.division = event.target.clientProDivision3.value;
            professionQualification.push({...acadmicObject});
        }
        //extra qualification
        if(event.target.clientExtraQualification.value.length>0){
            extraQual.push(event.target.clientExtraQualification.value);
            // console.log(event.target.clientExtraQualification.value)
        }if(extraFlagArr[0]==1){
            extraQual.push(event.target.clientExtraQualification1.value);
            // console.log(event.target.clientExtraQualification1.value)
        }
        //work experience
        if(event.target.clientWorkExperience.value.length>0){
            workExp.push(event.target.clientWorkExperience.value);
        }if(workExpFlagArr[0]==1){
            workExp.push(event.target.clientWorkExperience1.value);
        }

        //client gender
        clientGender = event.target.ClientGender.value;
        resumeTemplateFlag=true;
        // localStorage
            localStorage.setItem('name_to_objective', JSON.stringify(clientMaxData));
            localStorage.setItem('acadmic_qual', JSON.stringify(acadmicQualification));
            localStorage.setItem('prof_qual', JSON.stringify(professionQualification));
            localStorage.setItem('extraQual', JSON.stringify(extraQual));
            localStorage.setItem('workExperience', JSON.stringify(workExp));
            localStorage.setItem('clientGender', clientGender);
        //call url 
        if(templateOption==1){
            location.assign("template1.html");
        }else if(templateOption==2){
            location.assign("template2.html");
        }else if(templateOption==3){
            location.assign("template3.html");
        }else if(templateOption==4){
            location.assign("templat4.html");
        }

        //localstorage to templateFlag 
        localStorage.setItem('templateChooseFalg', templateActiveFlag);

        
        event.preventDefault();
    }

    //image processing work and pass localstorage
     function storeImageAndRedirect() {
        const fileInput = document.querySelector('#selectedClientPhoto');
        const file = fileInput.files[0];

        if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Store the image data URL in sessionStorage
            sessionStorage.setItem('uploadedImage', e.target.result);
            // Redirect to the second page
            // window.location.href = 'page2.html';
        };
        // Read the image file as a Data URL (Base64 string)
        reader.readAsDataURL(file);
        } else {
        alert('Please select an image file.');
        }
  }

  let resumeTheme1 = document.querySelector('#resumeTemplate1ActivateButton');
      resumeTheme1.addEventListener('click', e=>{
         templateOption=1;
         let templFlag = localStorage.getItem('templateChooseFalg');
         if(templateOption==1 && templFlag)
                 location.assign("template1.html");
      })
  let resumeTheme2 = document.querySelector('#resumeTemplate2ActivateButton');
      resumeTheme2.addEventListener('click', e=>{
        templateOption = 2;
        let templFlag = localStorage.getItem('templateChooseFalg');
        if(templateOption==2 && templFlag)
                 location.assign("template2.html");
      })
  let resumeTheme3 = document.querySelector('#resumeTemplate3ActivateButton');
      resumeTheme3.addEventListener('click', e=>{
        templateOption = 3;
        let templFlag = localStorage.getItem('templateChooseFalg');
        if(templateOption==3 && templFlag)
                 location.assign("template3.html");
      })
  let resumeTheme4 = document.querySelector('#resumeTemplate4ActivateButton');
      resumeTheme4.addEventListener('click', e=>{
        templateOption = 4;
        let templFlag = localStorage.getItem('templateChooseFalg');
        if(templateOption==4 && templFlag)
                 location.assign("templat4.html");
      })
