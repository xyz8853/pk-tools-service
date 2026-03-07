

  window.onload = function() {
        // Retrieve data from localStorage
        const nToObj = localStorage.getItem('name_to_objective');
        const allAcadmicQual = localStorage.getItem('acadmic_qual');
        const allProQual = localStorage.getItem('prof_qual');
        const allExtraQual = localStorage.getItem('extraQual');
        const AllworkExperience = localStorage.getItem('workExperience') ;
        const clientGenderData = localStorage.getItem('clientGender');
        
        //convert into array(json)
        let nameToOb =  JSON.parse(nToObj);
        let allAcaQual = JSON.parse(allAcadmicQual);
        let allProQualData = JSON.parse(allProQual);
        let allExtraQuali = JSON.parse(allExtraQual);
        let allWorkExp = JSON.parse(AllworkExperience);

        let clientName  = document.querySelector('.temp-two-name');
            clientName.textContent = nameToOb[0];
        let clientAddress = document.querySelector('.address-details');
            clientAddress.textContent = nameToOb[1]
        let clientMobileNo = document.querySelector('.phone-number');
            clientMobileNo.textContent = nameToOb[2];
        let clientEmail = document.querySelector('.email-id-temp-one');
            clientEmail.textContent = nameToOb[3];
        let clientCareerObjective = document.querySelector('.objective-temp-two');
            clientCareerObjective.textContent = nameToOb[12];


         //acadimic qualification work here
        let tableAcadQual = document.querySelector('.acadmic-qual-table');
        let tableRow1 = document.createElement('tr');
        let tableRow2 = document.createElement('tr');
        let tableRow3 = document.createElement('tr');
        let tableRow4 = document.createElement('tr');


        for(let index = 0; index<allAcaQual.length; index++){
            let td1 = document.createElement('td');
                td1.textContent = allAcaQual[index].exam;
            let td2 = document.createElement('td');
                td2.textContent = allAcaQual[index].board;
            let td3 = document.createElement('td');
                td3.textContent = allAcaQual[index].passingYear;
            let td4 = document.createElement('td');
                td4.textContent = allAcaQual[index].markPercentage;
            let td5 = document.createElement('td');
                td5.textContent = allAcaQual[index].division;

            if(index==0){
                tableAcadQual.append(tableRow1);
                tableRow1.append(td1);
                tableRow1.append(td2);
                tableRow1.append(td3);
                tableRow1.append(td4);
                tableRow1.append(td5);
            }if(index==1){
                tableAcadQual.append(tableRow2);
                tableRow2.append(td1);
                tableRow2.append(td2);
                tableRow2.append(td3);
                tableRow2.append(td4);
                tableRow2.append(td5);
            }if(index==2){
                tableAcadQual.append(tableRow3);
                tableRow3.append(td1);
                tableRow3.append(td2);
                tableRow3.append(td3);
                tableRow3.append(td4);
                tableRow3.append(td5);
            }if(index==3){
                tableAcadQual.append(tableRow4);
                tableRow4.append(td1);
                tableRow4.append(td2);
                tableRow4.append(td3);
                tableRow4.append(td4);
                tableRow4.append(td5);
            }
        }
          //professional qualification here
        let tableProQual = document.querySelector('.pro-qual-table');
        let tableRow11 = document.createElement('tr');
        let tableRow22 = document.createElement('tr');
        let tableRow33 = document.createElement('tr');
        let tableRow44 = document.createElement('tr');
        for(index=0; index<allProQualData.length; index++){
            let td1 = document.createElement('td');
                td1.textContent = allProQualData[index].exam;
            let td2 = document.createElement('td');
                td2.textContent = allProQualData[index].board;
            let td3 = document.createElement('td');
                td3.textContent = allProQualData[index].passingYear;
            let td4 = document.createElement('td');
                td4.textContent = allProQualData[index].markPercentage;
            let td5 = document.createElement('td');
                td5.textContent = allProQualData[index].division;

            if(index==0){
                tableProQual.append(tableRow11);
                tableRow11.append(td1);
                tableRow11.append(td2);
                tableRow11.append(td3);
                tableRow11.append(td4);
                tableRow11.append(td5);
            }if(index==1){
                tableProQual.append(tableRow22);
                tableRow22.append(td1);
                tableRow22.append(td2);
                tableRow22.append(td3);
                tableRow22.append(td4);
                tableRow22.append(td5);
            }if(index==2){
                tableProQual.append(tableRow33);
                tableRow33.append(td1);
                tableRow33.append(td2);
                tableRow33.append(td3);
                tableRow33.append(td4);
                tableRow33.append(td5);
            }if(index==3){
                tableProQual.append(tableRow44);
                tableRow44.append(td1);
                tableRow44.append(td2);
                tableRow44.append(td3);
                tableRow44.append(td4);
                tableRow44.append(td5);
            }
        }
      //extra qualification here
        let extraUlList = document.querySelector('.extra-aqual-data');

        for(let index=0; index<allExtraQuali.length; index++){
            let li1 = document.createElement('li');
                li1.textContent = allExtraQuali[index];
            extraUlList.append(li1);
        }
      let workExpUlList = document.querySelector('.work-experience-data');
        for(let index=0; index<allWorkExp.length; index++){
            let li1 = document.createElement('li');
                li1.textContent = allWorkExp[index];
            workExpUlList.append(li1);
        }

       //personal information
        let clientDob = document.querySelector('.dob');
            clientDob.textContent = nameToOb[4];
        let clientFatherName = document.querySelector('.fName');
            clientFatherName.textContent = nameToOb[5];
        let clientMotherName = document.querySelector('.mName');
            clientMotherName.textContent = nameToOb[6];
        let clientNationality = document.querySelector('.country');
            clientNationality.textContent = nameToOb[7];
        let clientMaritalStatus = document.querySelector('.maritalStatus');
            clientMaritalStatus.textContent = nameToOb[9]
        let clientConverLanguage = document.querySelector('.convLanguage');
            clientConverLanguage.textContent = nameToOb[10];
        let clientHobbies = document.querySelector('.hobbies');
            clientHobbies.textContent = nameToOb[11];
        let clientGender = document.querySelector('.CGender');
            clientGender.textContent = nameToOb[8];
        let footerClientName = document.querySelector('#footerClientName');
            footerClientName.textContent = nameToOb[0];
        let clientSetPhoto = document.querySelector('#clientPhotoSet');
       
        //photo get from the session
        // Get the image data URL from sessionStorage
        const imageDataUrl = sessionStorage.getItem('uploadedImage');

        if (imageDataUrl) {
        // Set the src attribute of the image element
        const imageElement = document.querySelector('#clientPhotoSet');
        imageElement.src = imageDataUrl;
        // Optional: Clear the storage after use if no longer needed
        // sessionStorage.removeItem('uploadedImage');
        } else {
        // Handle cases where no image data is found
        const imageElement = document.getElementById('displayImage');
        // imageElement.alt = 'No image found in session storage.';
        }
  } 

  
  
  const cssColors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
  "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
  "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
  "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
  "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
  "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
  "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
  "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
  "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
  "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
  "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey",
  "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
  "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
  "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
  "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
  "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey",
  "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
  "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
  "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
  "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
  "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
  "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
  "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru",
  "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
  "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon",
  "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver",
  "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow",
  "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
  "Tomato", "Turquoise", "Violet", "Wheat", "White",
  "WhiteSmoke", "Yellow", "YellowGreen"
];



/**  theme- and text color- change all concept below included-----*/
  let clientSetPhoto = document.querySelector('#clientPhotoSet');
  let changeThemeColor = document.querySelector('#changeColorTheme');
  let changeTextColor = document.querySelector('#changeTextColor')
  let resumeTitle = document.querySelector('#resumeTitle');
  let uTagDes = document.querySelectorAll('u');
  /**to change work below selected id or class */
  let colBackground = document.querySelector('.basic-info-head');
  let h5 = document.querySelectorAll('h5');
  let indexColor = 0;
    //theme color -right
      changeThemeColor.addEventListener('click', (event)=>{
        if(indexColor>=0 && indexColor<=cssColors.length-2){
            indexColor++;
        }else{
            indexColor=0;
        }
        colBackground.style.backgroundColor = cssColors[indexColor];
        resumeTitle.style.backgroundColor = cssColors[indexColor];
        clientSetPhoto.style.border = `5px solid ${cssColors[indexColor]}`;
            h5.forEach((val)=>{
                val.style.backgroundColor = cssColors[indexColor];
            })
        //   ++indexColor;
      })
  //text color right
  let textColorIndex=cssColors.length-1;
  changeTextColor.addEventListener('click',e=>{
     if(textColorIndex>0){
        textColorIndex--;
      }else{
        textColorIndex=cssColors.length-1;
      }
      uTagDes.forEach((val)=>{
                val.style.color = cssColors[textColorIndex];
      })
      resumeTitle.style.color=cssColors[textColorIndex];
      h5.forEach((val)=>{
          val.style.color = cssColors[textColorIndex];
       })
       console.log(textColorIndex);
  })
   /** text color change of the temp shift left color */
    let textLeftColor = document.querySelector('#textColorShiftLeft');
        textLeftColor.addEventListener('click', e=>{
           if(textColorIndex == cssColors.length-1){
                textColorIndex=0;
            }else{
                textColorIndex++;
            }
            uTagDes.forEach((val)=>{
                val.style.color = cssColors[textColorIndex];
            })
            console.log(textColorIndex);
            resumeTitle.style.color=cssColors[textColorIndex];
            h5.forEach((val)=>{
                val.style.color = cssColors[textColorIndex];
            })
        
    })
    /**all button un-visible set */
  let displayNoneBtnDiv = document.querySelector('.template-color-theme-change');
  let manageTwoBtn = document.querySelector('#manageBtn');
    manageTwoBtn.addEventListener('click', e=>{
        displayNoneBtnDiv.style.display = 'none';
        window.print();
    })
 /** theme color -left shift-- */
 let themeIndex2=0;
 let themeLeftColor = document.querySelector('#tempShiftColorLeft');
     themeLeftColor.addEventListener('click', e=>{
        if(indexColor==0){
            indexColor=cssColors.length-1;
        }else{
            indexColor--;
        }
        colBackground.style.backgroundColor = cssColors[indexColor];
         resumeTitle.style.backgroundColor = cssColors[indexColor];
         clientSetPhoto.style.border = `5px solid ${cssColors[indexColor]}`;
         h5.forEach((val)=>{
                val.style.backgroundColor = cssColors[indexColor];
         })
          
     })
