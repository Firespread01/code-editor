const editor = document.querySelector('.editor');
editor.value = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>

</body>
</html>
`;
var control = document.getElementById("import"); 
    control.addEventListener("change", function(event){ 
        var reader = new FileReader();      
        reader.onload = function(event){
            var contents = event.target.result;     
            document.getElementById('tab').value = contents;            
        };      
        reader.onerror = function(event){
            console.error("File could not be read! Code " + event.target.error.code);
        };      
        console.log("Filename: " + control.files[0].name);
        reader.readAsText(control.files[0]);        
    }, false);

var inputField = document.getElementById('tab');

  inputField.onkeydown = function(e) {

   if (e.keyCode === 9) {

       this.setRangeText(

               '\t',

               this.selectionStart,

               this.selectionStart,

               'end'

           )

       return false;

   }

};
function run() {
    document.querySelector('.output').innerHTML = editor.value;
}
function saveTextAsFile() {
  var textToWrite = document.getElementById("tab").value
  var textFileAsBlob = new Blob([textToWrite], { type: "text/html" })
  var fileNameToSaveAs = "code.html"

  var downloadLink = document.createElement("a")
  downloadLink.download = fileNameToSaveAs
  downloadLink.innerHTML = "Download File"
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
    downloadLink.onclick = destroyClickedElement
    downloadLink.style.display = "none"
    document.body.appendChild(downloadLink)
  }

  downloadLink.click()
}

var button = document.getElementById("save")
button.addEventListener("click", saveTextAsFile)

