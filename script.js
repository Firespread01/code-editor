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
