var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img1 = loadImage('img/dog.jpg', main);
var img2 = loadImage('img/pokego240.png', main);

var imagesLoaded = 0;
function main() {
  makeImage(img1);
}

function makeImage(img) {
  imagesLoaded += 1;

  if(imagesLoaded == 2) {
      // composite now
      var scale = canvas.height / img.height;
      var imgwidth = scale * img.width;
      var imgheight = scale * img.height;
      ctx.drawImage(img,
        canvas.width / 2 - imgwidth / 2,
        canvas.height / 2 - imgheight / 2,
        imgwidth,
        imgheight
      );

      //ctx.globalAlpha = 0.5;
      ctx.drawImage(img2, 0, 0);
  }
}

function loadImage(src, onload) {
    // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
    var img = new Image();

    img.onload = onload;
    img.src = src;

    return img;
}

function newImage() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    var img = loadImage(reader.result);
    var scale = canvas.height / img.height;
    var imgwidth = scale * img.width;
    var imgheight = scale * img.height;
    ctx.drawImage(img,
      canvas.width / 2 - imgwidth / 2,
      canvas.height / 2 - imgheight / 2,
      imgwidth,
      imgheight
    );

    //ctx.globalAlpha = 0.5;
    ctx.drawImage(img2, 0, 0);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
