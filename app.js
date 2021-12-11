var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"


function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function clickEventHandler() {
  // outputDiv.innerText = "ajajajajajaj " + txtInput.value;
 var inputText = txtInput.value;
 
fetch(getTranslationURL(inputText))
  .then(responce => responce.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
    })
};

btnTranslate.addEventListener("click",  clickEventHandler) 

