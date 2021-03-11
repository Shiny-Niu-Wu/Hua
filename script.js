// Get the modal
var modal_title = document.getElementById("titleModal");
var modal_main = document.getElementById("mainModal");

// Get the image and insert it inside the modal
var img_title = document.getElementById("titlePic");
img_title.onclick = function(){
  var modalImg = document.getElementById("img_title");
  modal_title.style.display = "block";
  modalImg.src = this.src;

  var span = document.getElementsByClassName("close")[0];
  span.onclick = ()=>{
    modal_title.style.display = "none";
  }
}

var img_main = document.getElementById("mainPic");
img_main.onclick = function(){
  var modalImg = document.getElementById("img_main");
  modal_main.style.display = "block";
  modalImg.src = this.src;

  var span = document.getElementsByClassName("close")[1];
  span.onclick = ()=>{
    modal_main.style.display = "none";
  }
}





//sliding images
let slidingBlock = document.getElementById("slidingBG");
let slidingImages = [];
//list images into array
for (var i = 0; i < 22; i++) {
  let imgFormat = "images/slide" + i + ".jpg";
  slidingImages.push(imgFormat);
}
console.log(slidingImages);

for (var i = 0; i < slidingImages.length; i++) {
  var slideImg = document.createElement("IMG");
  slideImg.src = slidingImages[i];
  slideImg.className = "slidePic";
  slideImg.id = "slidePic" + i;
  slideImg.style.top = (90*Math.random()) + "%";
  slideImg.style.left = (90*Math.random()) + "%";
  console.log(slideImg.id + " | " + slideImg.style.top);
  slidingBlock.appendChild(slideImg);

  // //add modal divs
  // var imgModDiv = document.createElement("DIV");
  // imgModDiv.id = "modal" + i;
  // imgModDiv.className = "modal";
  // var divSpan = document.createElement("SPAN");
  // divSpan.className = "close";
  // divSpan.id = "close" + i;
  // divSpan.innerHTML = "&times;";
  // imgModDiv.appendChild(divSpan);
  // var divImg = document.createElement("IMG");
  // divImg.className = "modal-content";
  // divImg.id = "img_" + i;
  // imgModDiv.appendChild(divImg);
  // slidingBlock.appendChild(imgModDiv);
  //
  // //modal function
  // let modal_img = document.getElementById(imgModDiv.id);
  // let img = document.getElementById(slideImg.id);
  // img.onclick = function(){
  //   var modalImg = document.getElementById(divImg.id);
  //   modal_img.style.display = "block";
  //   modalImg.src = this.src;
  //
  //   var span = document.getElementById(divSpan.id);
  //   span.onclick = ()=>{
  //     modal_img.style.display = "none";
  //   }
  // }
}

changeImgPos();

function changeImgPos(){
  setTimeout(() => {   }, 60000);//after the first 60 seconds, start changing every 60 seconds
  setInterval(function(){
     for (var i = 0; i < slidingImages.length; i++) {
       let img = document.getElementById("slidePic" + i);
       // console.log(img.id);
       img.style.top = (90*Math.random()) + "%";
       img.style.left = (90*Math.random()) + "%";
       console.log(img.id + " | " + img.style.top);
     }
  }, 60000);//reset position every 60 seconds
}





//upload and play audio files
//sourced from Cannicide on stackoverflow
//from https://stackoverflow.com/questions/43710173/upload-and-play-audio-file-js
function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
}

document.getElementById("upload").addEventListener("change", handleFiles, false);

//pause or resume music stand audio
let audio = document.getElementById("standAudio");
let audioButton = document.getElementById("musicNote");
audioButton.onclick = ()=>{
  if (audio.paused == false) {
    audio.pause();
  } else {
    audio.play();
  }
}
