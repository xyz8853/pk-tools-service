
    /** Marriege Bio Data html page java-script concept here */

        /** For Name Input check Box concept */
let nameCheckBoxIndex=1;
let nameCheckBox = document.querySelector('#person-user-name');
        nameCheckBox.addEventListener('click', function(e){
            let namePenIcon = document.querySelector('#person-edit-name');
            let personNameLabel = document.querySelector('.persion-name-label');

            if(nameCheckBoxIndex%2 != 0){
                namePenIcon.removeAttribute('class');
                personNameLabel.style.color = '#877575';
            }else if(nameCheckBoxIndex%2==0){
                namePenIcon.setAttribute('class','fas fa-pen');
                personNameLabel.style.color = 'black';
            }
            nameCheckBoxIndex++;
        })

        /** For Date of Birth Check Box Concept */
let dobCheckBoxIndex = 1;
let dobCheckBox = document.querySelector('#person-dob');
        dobCheckBox.addEventListener('click', function(e){
             let dobPenIcon = document.querySelector('#person-edit-dob');
             let personDobLabel = document.querySelector('#person-dob-label');

             if(dobCheckBoxIndex%2 != 0){
                 dobPenIcon.removeAttribute('class');
                 personDobLabel.style.color = '#877575';
             }else if(dobCheckBoxIndex%2 == 0){
                 dobPenIcon.setAttribute('class','fas fa-pen');
                 personDobLabel.style.color = 'black';
             }
             dobCheckBoxIndex++;
        })







    /** Label management  */
        //create pen icon variable 

    
    let labelManage = document.querySelectorAll('.person-label-manage');
        labelManage.forEach( events => {
            events.addEventListener('click', function(e){
                     console.log(e.target);
                      
                      let i = document.createElement('li');
                      i.setAttribute('class','fas fa-pen');
                      e.target.prepend(i);
                      e.target.style.color ='black';
                      setTimeout( function(){
                        e.target.removeAttribute('for');
                        
                      },100);            
             });
        })

    /** Person all Checkbox manage */
    let check=1;
    let checkboxManage = document.querySelectorAll('.person-checkbox-manage');
        checkboxManage.forEach(events =>{
            events.addEventListener('click', function(e){
                if(check==1){
                    
                   check=0;
                }else if(check==0){

                    check=1;
                }
            })
        })


        console.log("Dob:: Index no:",dobCheckBoxIndex);
        console.log('Nmae index no::',nameCheckBoxIndex);

        /** persoonal deatils add button  */
    let personAddButtonIndex =0;
    let tableWork = document.querySelector('.table-personal-details');
    let personAddButton = document.querySelector('.add-more-personal-details-button');
    personAddButton.addEventListener('click', function(e){
        if(personAddButtonIndex<14){
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.style.display='inline-flex';
            td1.style.marginTop = '5px';
            let td2 = document.createElement('td');
            td2.style.marginTop = '5px';
            let i = document.createElement('i');
            i.setAttribute('class','fas fa-trash');
            
            i.style.marginTop = '10px';
            i.style.marginRight = '10px';
            let input1 = document.createElement('input');
            input1.setAttribute('type','text');
            input1.setAttribute('class','input-custom-one');
            input1.setAttribute('placeholder','Enter Custom field name');


            let input2 = document.createElement('input');
            input2.setAttribute('type','text');
            input2.setAttribute('class','input-custom-two');
            input2.setAttribute('placeholder','Enter Description');

            tableWork.append(tr);
            tr.append(td1);
            tr.append(td2);
            td1.append(i);
            td1.append(input1);
            td2.append(input2);
            
        }
        personAddButtonIndex++;
    })

// all bio model image clicking concept

    let setImage = document.querySelector('.set-images');
    let bioAllImageHandling = document.querySelector('.bio-all-images');
        bioAllImageHandling.addEventListener('click', function(e){
              let content = e.target;
              let url = (content.getAttribute('src'));
              console.log(url);
              setImage.setAttribute('src',url);
        });
    

// image change check box event handling 

    let bioImageEditPen = document.querySelector('#bio-img-edit-pen');
    let bioImageChangeText = document.querySelector('#bio-img-change');
    let imgChangeCheckbox = document.querySelector('#img-symbol');
    let bioImageIndex =0;
        imgChangeCheckbox.addEventListener('click', function(e){
            
            if(bioImageIndex%2==0){
                 bioImageEditPen.removeAttribute('class');
                 bioImageChangeText.style.color = '#877575';
            }else{
                bioImageEditPen.setAttribute('class','fas');
                bioImageEditPen.classList.add('fa-pen');
                bioImageChangeText.style.color ='black';
            }
            bioImageIndex++;
        })

/**  Bio Heading text check box event handling  */
    let bioHeadingEditPen = document.querySelector("#bio-heading-edit-pen");
    let bioHeadingInputHeadingValue = document.querySelector('#bio-heading-text');
    let bioHeadingIndex = true;
    let bioHeadingTextCheckbox = document.querySelector('#bio-heading-text-checkbox');
        bioHeadingTextCheckbox.addEventListener('click', function(){

                if(bioHeadingIndex == true){
                    bioHeadingInputHeadingValue.setAttribute('Disabled','');
                    bioHeadingEditPen.removeAttribute('class');

                    bioHeadingIndex = false;
                }else{
                    bioHeadingInputHeadingValue.removeAttribute('Disabled');
                    bioHeadingEditPen.setAttribute('class','fas');
                    bioHeadingEditPen.classList.add('fa-pen');

                    bioHeadingIndex = true;

                }
        });

/** Bio Top second heading content concept  */
    let bioFileTypeEditPen = document.querySelector('#file-type-edit-pen');
    let bioFileInputText = document.querySelector('#file-type-text');
    let bioFileHeadingChecked=true;
    let bioFiletypeHeadingCheckBox = document.querySelector("#file-type-checkbox");
        bioFiletypeHeadingCheckBox.addEventListener('click', function(e){

                if(bioFileHeadingChecked == true){
                    bioFileTypeEditPen.removeAttribute('class');
                    bioFileInputText.setAttribute('Disabled','');

                    bioFileHeadingChecked = false;
                }else{
                     bioFileTypeEditPen.setAttribute('class','fas');
                     bioFileTypeEditPen.classList.add('fa-pen');
                     bioFileInputText.removeAttribute('Disabled');

                     bioFileHeadingChecked=true;
                }
        })

/** family details all label manage */

    let familyAllLable = document.querySelectorAll('.family-label-manage');
        familyAllLable.forEach(events =>{
             events.addEventListener('click', function(e){
                  let i = document.createElement('i');
                      i.setAttribute('class', 'fas fa-pen');
                      
                      i.style.color = 'black';
                      e.target.style.color = 'black';
                      e.target.prepend(i);
                      setTimeout( function(){
                        e.target.removeAttribute('for');    
                      },100)
                      
             })
        })


    /** family deatils add button  */
        let familyAddButtonIndex =0;
        let familytableWork = document.querySelector('.table-family-details');
        let familyAddButton = document.querySelector('.add-more-family-details-button');
        familyAddButton.addEventListener('click', function(e){
            if(familyAddButtonIndex<14){

                let div = document.createElement('div');
                div.style.display='inline-flex';
                div.style.marginTop = '5px';
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                
                
                let td2 = document.createElement('td');
                td2.style.marginTop = '5px';
                let i = document.createElement('i');
                i.setAttribute('class','fas fa-trash');
                
                i.style.marginTop = '10px';
                i.style.marginRight = '10px';
                let input1 = document.createElement('input');
                input1.setAttribute('type','text');
                input1.setAttribute('class','input-custom-one');
                input1.setAttribute('placeholder','Enter Custom field name');
    
    
                let input2 = document.createElement('input');
                input2.setAttribute('type','text');
                input2.setAttribute('class','input-custom-two');
                input2.setAttribute('placeholder','Enter Description');
    
                familytableWork.append(tr);
                tr.append(div);
                tr.append(td1);
                tr.append(td2);
                td1.append(div);
                div.append(i);
                div.append(input1);
                td2.append(input2);
                
            }
            familyAddButtonIndex++;
        })

/** Contact Details start here......... */

// all level mange of contact table 


let contactLabelEvent = document.querySelectorAll('.contact-label-manage');
    contactLabelEvent.forEach( events =>{
         events.addEventListener('click', function(e){
            let i = document.createElement('i');
            i.setAttribute('class','fas fa-pen');
            e.target.prepend(i);
            e.target.style.color = 'black';
            setTimeout( function(){
                  e.target.removeAttribute('for');
            },100);
        })
    })

/** create new custom index box of contact details */
let contactAddNewButtonIndex =0;
let contactTable = document.querySelector('.table-contact-details');
let contactAddButtonEvent = document.querySelector('.add-more-contact-details-button');
    contactAddButtonEvent.addEventListener('click', function(e){
        if(contactAddNewButtonIndex <14){
            let div = document.createElement('div');
            div.style.display='inline-flex';
            div.style.marginTop = '5px';
            div.style.display = 'inline-flex';
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td2.style.marginTop = '5px';
            let i = document.createElement('i');
            i.style.marginTop = '10px';
            i.style.marginRight = '10px';
            i.setAttribute('class','fas fa-trash');
            let input = document.createElement('input');
            input.setAttribute('type','text');
            input.setAttribute('placeholder','Enter Custom field name');
            let textarea = document.createElement('textarea');
            contactTable.append(tr);
            tr.append(td1);
            tr.append(td2)
            td1.append(div);
            div.append(i);
            div.append(input);
            td2.append(textarea);
        }
        contactAddNewButtonIndex++;
    })

    // Bio photo uploaded here 
let img1 = document.createElement('img');
function firstPhoto(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.addEventListener("load",function() {
          var avatarImg = new Image();
          var src = reader.result;
          avatarImg.src = src;
        //   let byteCode = document.getElementById("dataUrl").innerText = src;
          avatarImg.onload = function() {           
            let td = document.querySelector('.bio-first-photo-store');
            td.append(img1);
            img1.setAttribute("src",`${src}`);
            img1.setAttribute('id','selected-img');
          };
        },
        false
      );
  
      reader.readAsDataURL(input.files[0]);
    }
  }

//   second bio phot uploaded
let img2 = document.createElement('img');
function secondPhoto(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.addEventListener("load",function() {
          var avatarImg = new Image();
          var src = reader.result;
          avatarImg.src = src;
        //   let byteCode = document.getElementById("dataUrl").innerText = src;
          avatarImg.onload = function() {           
            let td = document.querySelector('.bio-second-photo-store');
            td.append(img2);
            img2.setAttribute("src",`${src}`);
            img2.setAttribute('id','selected-img');
          };
        },
        false
      );
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  

// yes or no 
let yes = document.querySelector('#bio-yes-button');
    yes.addEventListener('click', function(){
        let tableManagement = document.querySelector(".photo-bio-details");
        // let value = tableManagement.classList[0];
        // console.log(value);
        tableManagement.setAttribute('class','table');
        tableManagement.style.fontFamily='math';
        // yes.style.display='none';
        let option = document.querySelector('.bio-option-user');
        option.style.display='none';
        console.log(option);
    })

    let no = document.querySelector('.bio-no-button');
        no.addEventListener('click', function(){
             no.setAttribute('id','collapseFour');
             //no.setAttribute('data-bs-toggle','collapse');
             //no.setAttribute('data-bs-target','#collapseFour');
             //no.setAttribute('aria-expanded','false');
            // no.setAttribute('aria-controls','collapsefour');
             //no.classList.add('accordion-button');
             //no.classList.add('collapsed');
        });