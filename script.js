

$("#second").click(function(){
    
    
    var firstN = Number(document.form.firstNumber.value);
    var firstString = firstN.toString();
    var firstNDigit = Number(firstString.length);
    var firstStringLastDigit = (firstN%10);

    
    if(firstN == ""){
        alert("Enter a Number");
        location.reload();
    }else if(firstN <=0){
        alert("Enter a Positive Number");
        location.reload();
    }else if(isNaN(firstN)){
        alert("Enter a number");
        location.reload();
    }else if(firstN == 1){
        document.getElementById("answer").value = "19";
        document.getElementById("second").setAttribute("maxlength",firstNDigit);
        document.getElementById("forth").setAttribute("maxlength",firstNDigit);
        document.getElementById("first").disabled = "true";
    } else {
        document.getElementById("answer").value = "2"+firstN-2;
        document.getElementById("second").setAttribute("maxlength",firstNDigit);
        document.getElementById("forth").setAttribute("maxlength",firstNDigit);
        document.getElementById("first").disabled = "true";
    }
    
});

function secondTextbox(current)  {
    var firstN = Number(document.form.firstNumber.value);
    var firstString = firstN.toString();
    var firstNDigit = Number(firstString.length);

    var secondN = Number(document.form.secondNumber.value);
    var secondString = secondN.toString();
    var thirdTextbox = "";
    if(current.value.length >= current.maxLength){
        for(var i=0;i<firstNDigit;i++){
            var secondDigit = secondString[firstNDigit-(firstNDigit-i)];
            var thirdTextboxMinuseNine = 9-secondDigit;
            thirdTextbox += thirdTextboxMinuseNine;
            }
        document.getElementById("second").setAttribute("disabled","true");
        document.getElementById("forth").removeAttribute("disabled");
        document.getElementById("third").value = thirdTextbox;
        document.getElementById("forth").focus();
    }
}

function forthTextbox(current) {
    var firstN = Number(document.form.firstNumber.value);
    var firstString = firstN.toString();
    var firstNDigit = Number(firstString.length);

    var forthN = Number(document.form.forthNumber.value);
    var forthString = forthN.toString();
    var fifthTextbox = "";
    if(current.value.length >= current.maxLength){
        for(var i=0;i<firstNDigit;i++){
            var forthDigit = forthString[firstNDigit-(firstNDigit-i)];
            var forthTextboxMinuseNine = 9-forthDigit;
            fifthTextbox += forthTextboxMinuseNine;
            }
        document.getElementById("forth").setAttribute("disabled","true");
        document.getElementById("fifth").value = fifthTextbox;
    }
}

// alert(count);