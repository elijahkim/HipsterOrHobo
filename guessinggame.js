$(function(){
  loadImage();
  $("#hobo").on("click", function(){
    guess("hobo");
  });
  $("#hipster").on("click", function(){
    guess("hipster");
  });
});

var correctCounter = 0;
var imageCounter = 0;
var images = [
  { kind: "hobo", src: "http://static.fjcdn.com/pictures/Hipster_8ea714_2448425.jpeg"},
  { kind: "hipster", src: "http://ironingboardcollective.files.wordpress.com/2010/07/the-original-hipster.jpg" },
  { kind: "hipster", src: "http://hiporhobo.files.wordpress.com/2012/10/bild-27.jpg" },
  { kind: "hobo", src: "https://pbs.twimg.com/profile_images/2410029605/image.jpg" },
  { kind: "hipster", src: "http://jetsetcitizen.com/wp-content/uploads/2013/04/chris-kirkland-hobo-ceo.jpg" }];

console.log("hello");

function guess(choice){
  if (images[imageCounter].kind === choice){
    correctCounter ++;
  }
  updateGuesses();
  imageCounter ++;
  loadImage();
}

function loadImage(){
  if (images[imageCounter] != undefined){
    $("#guessingImage").attr("src", images[imageCounter].src);
  }
  else {
    alert("you win!");
  }
}

function updateGuesses(){
  $("#correctGuesses").text(correctCounter);
}

