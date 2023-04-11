/* When Page Loads Spinner Func Start */

window.onload = function(){
  document.getElementById("loader").className="loader active";
  document.getElementById("logoImage").style.opacity="0";
  document.getElementById("upload").style.fill="transparent";
  document.getElementById("loader-img2").style.display="flex";
  
  
 
  setTimeout(function(){
      document.getElementById("loader").style.display="none";
      document.getElementById("selectedImg").style.opacity="0.9";
      document.getElementById("logoImage").style.opacity="1";
      document.getElementById("upload").style.fill="#fff";
      document.getElementById("loader-img2").style.display="none";
     
     
  },3000)
}

function pink(){
  loader()
    document.getElementById('selectedImg').src="/ assets/Pink umbrella.png";
    document.getElementById('btn').style.backgroundColor="#da398f";
    document.getElementById('loader-img').style.fill="#da398f";
}

/* When Page Loads Spinner Func End */


/* Color Selector Buttons Start */
function blue(){
  loader()
    document.getElementById('selectedImg').src="/ assets/Blue umbrella.png";
    document.getElementById('btn').style.backgroundColor="#33b4e6";
    document.getElementById('loader-img').style.fill="#33b4e6";
}

function yellow(){
  loader()
    document.getElementById('selectedImg').src="/ assets/Yello umbrella.png";
    document.getElementById('btn').style.backgroundColor="#fdd450";
    document.getElementById('loader-img').style.fill="#fdd450";
}
/* Color Selector Buttons End */

/* Upload File Event Start */
const realFileBtn = document.getElementById("logo-upload");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
const resetBtn = document.getElementById("reset-button");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function(event) {

  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});

function previewLogo() {
    // Preview uploaded logo
    loader();
    const logoInput = document.getElementById('logo-upload');
    const logoImage = document.getElementById('logoImage');
    const file = logoInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      logoImage.src = e.target.result;
      logoImage.style.zIndex=4;
      resetBtn.style.opacity=1;
    };
    reader.readAsDataURL(file);
  }


  /* Upload file Event ends  */



  /* Loader Func Start */

  function loader(){
    document.getElementById("loader").className="loader active";
    document.getElementById("loader").style.display="block";
    document.getElementById("selectedImg").style.opacity="0";
    document.getElementById("logoImage").style.opacity="0";
    document.getElementById("upload").style.fill="transparent";
    document.getElementById("loader-img2").style.display="flex";
    setTimeout(function(){
        document.getElementById("loader").style.display="none";
        document.getElementById("selectedImg").style.opacity="0.9";
        document.getElementById("logoImage").style.opacity="1";
        document.getElementById("upload").style.fill="#fff";
        document.getElementById("loader-img2").style.display="none";
       
       
    },5000);
  }
  resetBtn.addEventListener("click", function() {
    
    location.reload();
    
  });

  /* Loader Func Ends */
 


