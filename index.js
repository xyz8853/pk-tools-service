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

//age-calculation form js handling

    let ageForm = document.querySelector('.age-calculation-form');
    let oldYear,oldMonth,oldDay;
    let newYear,newMonth,newDay;


    let ageColumn = document.querySelector('.age-col');
    let heading = document.createElement('h1');
    heading.setAttribute('class', 'age-calculatin-heading')
    let div = document.createElement('div');
    div.setAttribute('class', 'age-calculation-div')
    div.style.backgroundColor = 'white';
    let span = document.createElement('span');

    let ul = document.createElement('ul');
    ul.setAttribute('class','age-calculation-ul')
    let month_li = document.createElement("li");
    let week_li = document.createElement("li");
    let day_li = document.createElement("li");
    let hour_li = document.createElement("li");
    let minutes_li = document.createElement("li");
    let second_li = document.createElement("li");

    ul.append(month_li);
    ul.append(week_li);
    ul.append(day_li);
    ul.append(hour_li);
    ul.append(minutes_li);
    ul.append(second_li);
    // heading.style.fontFamily = 'math';
    // heading.style.marginTop ='-7px';
    
    
    /** for  create list birthday purpose*/
    
    let birthday_div = document.createElement('div');
    birthday_div.setAttribute('class', 'birthday-div');

    let birthday_ul = document.createElement('ul');
    birthday_ul.setAttribute('class', 'birthday-ul')
    let birthday_li1 = document.createElement('li');
    let birthday_li2 = document.createElement('li');
    let birthday_li3 = document.createElement('li');
    let birthday_li4 = document.createElement('li');
    let birthday_li5 = document.createElement('li');

    birthday_ul.append(birthday_li1);
    birthday_ul.append(birthday_li2);
    birthday_ul.append(birthday_li3);
    birthday_ul.append(birthday_li4);
    birthday_ul.append(birthday_li5);


    let birthday_button = document.createElement('button');
    birthday_button.setAttribute('class', 'birthday-button');
    birthday_button.textContent=`Know Birthday`;
    birthday_div.append(birthday_button);
    /**end of birthday declaration */

    ageForm.addEventListener('submit', function(e){
        e.preventDefault();
        let oldAll = ageForm.oldDate.value;
        let newAll = ageForm.newDate.value;
        let old_arr = oldAll.split("-");
        let new_arr = newAll.split("-");
        
        oldYear =  (Number)(old_arr[0]);
        oldMonth = (Number)(old_arr[1]);
        oldDay = (Number)(old_arr[2]);

        newYear = (Number)(new_arr[0]);
        newMonth = (Number)(new_arr[1]);
        newDay = (Number)(new_arr[2]);

        let totalMonths=0;
        let totalWeeks=0;
        let totalDays=0;
        let totalHours=0;
        let totalMinutes=0;
        let totalSeconds=0;

        if(ageForm.oldDate.value == "" || ageForm.newDate.value == ""){
            alert('Please select both date!');
        }else{
            if((newYear - oldYear) >= 1){
                if(newDay>=oldDay){
                    newDay = newDay - oldDay;
                    if(newMonth >= oldMonth){
                        newMonth = newMonth - oldMonth; // newMonth -= oldMonth
                        newYear = newYear - oldYear; // newYear -= oldYear;
                    }else if(newMonth < oldMonth){
                        newMonth = newMonth+12; // newMonth += 1;
                        newMonth = newMonth-oldMonth; // newMonth -= oldMonth;
                        newYear = newYear-1; // newYear -= 1;
                        newYear = newYear-oldYear; // newYear -= oldYear
                    }
                }else if(newDay<oldDay){
                    if(newMonth == 1 ||
                       newMonth == 3 ||
                       newMonth == 5 ||
                       newMonth == 7 ||
                       newMonth == 8 ||
                       newMonth == 10 ||
                       newMonth == 12){
                        newDay = newDay+31; //newDay += 31;
                        newDay = newDay - oldDay;
                        newMonth = newMonth-1; //newMonth -= 1;
                       // newYear = newYear-1; // newYear -=1;
                       }else if(newMonth == 4 ||
                                newMonth == 6 ||
                                newMonth == 9 || 
                                newMonth == 11){
                            newDay = newDay+30; //newDay += 30;
                            newDay = newDay-oldDay; // newDay -= oldDay;  
                            newMonth = newMonth - 1; //newMonth -= 1;
                           // newYear = newYear-1; //newYear -=1;
                        }else{
                            if(newYear%4 == 0 && newYear%100 != 0 || newYear%400 == 0){
                                //it is the leap year
                                newDay = newDay+29; //newDay += 29;
                                newDay = newDay - oldDay;
                                newMonth = newMonth -1; // newMonth -= 1;
                               // newYear = newYear-1; // newYear -=1;
                            }else{
                                newDay = newDay+28; //newDay += 28;
                                newDay = newDay - oldDay; // newDay -= oldDay;
                                newMonth = newMonth - 1 // newMonth -= 1;
                               // newYear = newYear-1; // newYear -= 1;
                            }
                        }
                        newYear = newYear-oldYear; // newYear -= oldYear
                }else if(newMonth >= oldMonth){
                    newMonth = newMonth - oldMonth;
                }else if(newMonth < oldMonth){
                    newMonth = newMonth + 12; // newMonth += newMonth;
                    newYear = newYear -1; // newYear -= 1;
                    newYear = newYear-oldYear; // newYear -= oldYear;
                    newMonth = newMonth - oldMonth; // newMonth -= oldMonth
                }
                   //**** All calculation */
                    totalMonths = newYear*12+newMonth;
                    let stringWeeks = (String)((totalMonths*4.34524+(newDay/7)));
                    let stringWeeksArr = stringWeeks.split(".");
                    totalWeeks = (Number)(stringWeeksArr[0]);
                    console.log("total weeks1:",totalWeeks);
                    let stringDays = (String)(stringWeeks*7);
                    let stringDaysArr = stringDays.split(".");
                    totalDays = (Number)(stringDaysArr[0]);
                    totalHours = totalDays*24;
                    totalMinutes = totalHours*60;
                    totalSeconds = totalMinutes*60;
                    heading.textContent = `${newYear} Year ${newMonth} Months ${newDay} Days or`;
                    month_li.textContent = `${totalMonths} months ${newDay} days or`;
                    week_li.textContent = `${totalWeeks} weeks  or`;
                    day_li.textContent = `${totalDays} days or`;
                    hour_li.textContent = `${totalHours} hours or`;
                    minutes_li.textContent = `${totalMinutes} minutes`;
                    second_li.textContent = `${totalSeconds} seconds`;
                    div.append(heading);
                    div.append(ul);
                    ageColumn.append(div);
                    ageColumn.append(birthday_div);
                    //span.style.display = 'none';

            }else if((newYear == oldYear) && (newMonth >= oldMonth)){
                newYear = newYear - oldYear;
                if(newMonth == oldMonth && newDay >= oldDay){
                     newMonth = newMonth-oldMonth; // newMonth -= oldMonth;
                     newDay = newDay-oldDay; // newDay -= oldDay;


                      //**** All calculation */
                    totalMonths = newYear*12+newMonth;
                    let stringWeeks = (String)((totalMonths*4.34524)+(newDay/7));
                    let stringWeeksArr = stringWeeks.split(".");
                    totalWeeks = (Number)(stringWeeksArr[0]);
                    console.log("total weeks2:",totalWeeks);
                    let stringDays = (String)(stringWeeks*7);
                    let stringDaysArr = stringDays.split(".");
                    totalDays = (Number)(stringDaysArr[0]);
                    totalHours = totalDays*24;
                    totalMinutes = totalHours*60;
                    totalSeconds = totalMinutes*60;

                    heading.textContent = `${newYear} Year ${newMonth} Months ${newDay} Days or`;
                    month_li.textContent = `${totalMonths} months ${newDay} days or`;
                    week_li.textContent = `${totalWeeks} weeks or`;
                    day_li.textContent = `${totalDays} days or`;
                    hour_li.textContent = `${totalHours} hours or`;
                    minutes_li.textContent = `${totalMinutes} minutes`;
                    second_li.textContent = `${totalSeconds} seconds`;

                    heading.textContent = `${newYear} Year ${newMonth} Months ${newDay} Days`;
                    div.append(heading);
                    div.append(ul);
                    ageColumn.append(div);
                    ageColumn.append(birthday_div);
                }else if(newMonth > oldMonth){
                    if(newDay >= oldDay){
                        newDay -= oldDay;
                        newMonth -= oldMonth;
                    }else if(newDay < oldDay){
                        if(newMonth == 1 ||
                           newMonth == 3 ||
                           newMonth == 5 ||
                           newMonth == 7 ||
                           newMonth == 8 ||
                           newMonth == 10 ||
                           newMonth == 12 ){
                       
                           newDay = newDay+31;  // newDay += 31;
                           newDay = newDay-oldDay; // newDay -= oldDay;
                           newMonth = newMonth-1; // newMonth -= 1;
                           newMonth = newMonth-oldMonth; // newMonth -= oldMonth;
                        }else if(newMonth == 4 ||
                            newMonth == 6 ||
                            newMonth == 9 ||
                            newMonth == 11){
                                newDay = newDay+30; //newDay += 30;
                                newDay = newDay-oldDay; // newDay -= oldDay;
                                newMonth = newMonth -1 // newMonth -= 1;
                                newMonth = newMonth-oldMonth;
                        } else if(newMonth ==2){
                             newDay = newDay+28; // newDay += 28;
                             newDay = newDay-oldDay; // newDay -=oldDay;
                             newMonth = newMonth-1; //newMonth -=oldMonth
                             newMonth = newMonth-oldMonth; // newMonth -= oldMonth

                        } 
                    }

                     //**** All calculation */
                     totalMonths = newYear*12+newMonth;
                     let stringWeeks = (String)((totalMonths*4.34524)+(newDay/7));
                     let stringWeeksArr = stringWeeks.split(".");
                     totalWeeks = (Number)(stringWeeksArr[0]);
                     console.log("total weeks3:",totalWeeks);
                     let stringDays = (String)(stringWeeks*7);
                     let stringDaysArr = stringDays.split(".");
                     totalDays = (Number)(stringDaysArr[0]);
                     totalHours = totalDays*24;
                     totalMinutes = totalHours*60;
                     totalSeconds = totalMinutes*60;
 
                     heading.textContent = `${newYear} Year ${newMonth} Months ${newDay} Days or`;
                     month_li.textContent = `${totalMonths} months ${newDay} days or`;
                     week_li.textContent = `${totalWeeks} weeks or`;
                     day_li.textContent = `${totalDays} days or`;
                     hour_li.textContent = `${totalHours} hours or`;
                     minutes_li.textContent = `${totalMinutes} minutes`;
                     second_li.textContent = `${totalSeconds} seconds`;
                    heading.textContent = `${newYear} Year ${newMonth} Months ${newDay} Days`;
                    div.append(heading);
                    div.append(ul);
                    ageColumn.append(div);
                    ageColumn.append(birthday_div);
                    //span.style.display = 'none';
                }else{
                    span.textContent = 'Notice: End Date should be greater than DOB';
                    span.style.color = 'red';
                    div.append(span);
                    ageColumn.append(div);
                    //heading.style.display = 'none';
                }
            }else{
                span.textContent = 'Notice: End date should be greater than DOB';
                span.style.color = 'red';
                div.append(span);
                ageColumn.append(div);
                //heading.style.display = 'none';
            }
        }
       console.log('newYear',newYear);
       console.log('new months',newMonth);
       console.log("total month:",totalMonths);

        /**birthday concept below */
            let birthday_button_click = document.querySelector(".birthday-button");
            let bNewYear = (Number)(new_arr[0]);
            let monthName="";
            let allMonthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let m=0;
            let repeat=1;
            while(true){
                if(oldMonth == repeat){
                    monthName = allMonthName[m];
                    break;
                }
                repeat++;
                m++;
                if(oldMonth>12){
                    break;
                }
            }
            birthday_button_click.addEventListener('click', ()=>{
                
                const birth1 = (`${new Date(`${bNewYear}-${oldMonth}-${oldDay}`)}`);
                if(oldYear==bNewYear && oldMonth > newMonth){
                        birthday_li1.textContent = birth1.substring(0,15);
                        let birth2 = `${new Date(`${bNewYear+1}-${oldMonth}-${oldDay}`)}`;
                        birthday_li2.textContent = birth2.substring(0,15)
                        let birth3 = `${new Date(`${bNewYear+2}-${oldMonth}-${oldDay}`)}`;
                        birthday_li3.textContent = birth3.substring(0,15);
                        let birth4 = `${new Date(`${bNewYear+3}-${oldMonth}-${oldDay}`)}`;
                        birthday_li4.textContent = birth4.substring(0,15);
                        let birth5 = `${new Date(`${bNewYear+4}-${oldMonth}-${oldDay}`)}`;
                        birthday_li5.textContent = birth5.substring(0,15);
                }else{
                    let birth1 = `${new Date(`${bNewYear+1}-${oldMonth}-${oldDay}`)}`;
                    birthday_li1.textContent = birth1.substring(0,15);
                    let birth2 = `${new Date(`${bNewYear+2}-${oldMonth}-${oldDay}`)}`;
                    birthday_li2.textContent = birth2.substring(0,15);
                    let birth3 = `${new Date(`${bNewYear+3}-${oldMonth}-${oldDay}`)}`;
                    birthday_li3.textContent = birth3.substring(0,15);
                    let birth4 = `${new Date(`${bNewYear+4}-${oldMonth}-${oldDay}`)}`;
                    birthday_li4.textContent = birth4.substring(0,15);
                    let birth5 = `${new Date(`${bNewYear+5}-${oldMonth}-${oldDay}`)}`;
                    birthday_li5.textContent = birth5.substring(0,15);
                }
                birthday_div.append(birthday_ul);
                console.log("successfull done");
            })
       
        /**end of birthday concept below */
})

// Date Of Birth age calculator date management
let ageInputTagDof = document.querySelector('#old-date-submit-button');

    ageInputTagDof.addEventListener('focus', function(e){
          ageInputTagDof.setAttribute('type','date');
          
})

let ageInputTagLastDate = document.querySelector('#newDate');
    ageInputTagLastDate.addEventListener('focus', function(e){
          ageInputTagLastDate.setAttribute('type','date');
})

