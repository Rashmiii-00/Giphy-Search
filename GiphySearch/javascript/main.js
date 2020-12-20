/* 1. Grab the input*/
button = document.querySelector(".js-go");
button.addEventListener("click", function(){
    var InputDemo = document.querySelector(".js-userinput").value;
    var input =  getUserInput()
    searchGiphy(input)
});

function getUserInput(){
  inputValue =  document.querySelector(".js-userinput").value;
  return inputValue;
    
}

document.querySelector(".js-userinput").addEventListener("keyup", enter);

function enter(e){   /* e is a object which is passed*/

   if(e.which === 13){  /* every key has a associated key code, enter key has key code 13 */
    var input =  getUserInput();
    searchGiphy(input);
   }
}



/* 2. Do the stuff with API */

function searchGiphy(searchQuery){

    // url = "http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=dc6zaTOxFJmzC";
var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

// AJAX Request

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e) {

// your callback events go here 
var data = e.target.response;
//console.log(data);
pushToDom(data);

});

}


/* 3. Show me the GIFs */

function pushToDom(x){
    // turn response into real javascript object
    var response = JSON.parse(x);
    // drill down to the data array
    var ImageUrls = response.data;

    container = document.querySelector(".js-container");
    container.innerHTML = "" ;    // to reset the div

    // loop through data array and add IMG html
    ImageUrls.forEach(function(image) {
        //find image
    src = image.images.fixed_height.url;
    // append it to existing container
    //container.innerHTML += "<img src='"+ src +"' class='container-image' />";
    container.innerHTML += "   <img src = \"   " + src + "      \">" ;

    });

    
}