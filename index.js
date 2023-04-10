function pink(){
    document.getElementById('selectedImg').src="/ assets/Pink umbrella.png";
    document.getElementById('btn').style.backgroundColor="#da398f";
}


function blue(){
    document.getElementById('selectedImg').src="/ assets/Blue umbrella.png";
    document.getElementById('btn').style.backgroundColor="#33b4e6";
}

function yellow(){
    document.getElementById('selectedImg').src="/ assets/Yello umbrella.png";
    document.getElementById('btn').style.backgroundColor="#fdd450";
}


const realFileBtn = document.getElementById("logo-upload");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

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
    const logoInput = document.getElementById('logo-upload');
    const logoImage = document.getElementById('logoImage');
    const file = logoInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      logoImage.src = e.target.result;
      logoImage.style.zIndex=2;
    };
    reader.readAsDataURL(file);
  }

  $("img").on("error", function() {
    $(this).hide();
  });
 


