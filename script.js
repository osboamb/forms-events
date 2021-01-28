let submitButton = document.getElementById("submit-button");
console.log(submitButton);       
submitButton.addEventListener("click", function(){
    console.log('clicked');
    let textInput = document.getElementById("name-input");
    console.log(textInput);
    console.log(textInput.value);
});

let selectBox = document.getElementById("select-language");
selectBox.onchange = function(){
    console.log('changed');
    let language = selectBox.value;
    console.log(language);
    console.log(selectBox.selectedOptions);
};
console.log(selectBox);
