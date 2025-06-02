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
var file = document.getElementById("import").files[0];
var reader = new FileReader();
reader.onload = function (e) {
    editor.value = e.target.result;
};
reader.readAsText(file);

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
