
let img = document.createElement('img');
function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.addEventListener("load",function() {
          var avatarImg = new Image();
          var src = reader.result;
          avatarImg.src = src;
          let byteCode = document.getElementById("dataUrl").innerText = src;
          avatarImg.onload = function() {           
            let td = document.querySelector('#store-img');
            td.append(img);
            img.setAttribute("src",`${src}`);
            img.setAttribute('id','selected-img');
          };
        },
        false
      );
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  