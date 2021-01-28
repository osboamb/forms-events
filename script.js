let submitButton = document.getElementById("submit-button");
console.log(submitButton);       
submitButton.addEventListener("click", function(){
    console.log('clicked');
    let textInput = document.getElementById("name-input");
    console.log(textInput);
    console.log(textInput.value);
});
