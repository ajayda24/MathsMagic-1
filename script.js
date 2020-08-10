document.getElementById("first").setAttribute("maxlength","20");
document.getElementById("calc").disabled = "true";
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
        document.getElementById("second").placeholder = "Enter a "+firstNDigit+" Digit Number";
        document.getElementById("forth").placeholder = "Enter a "+firstNDigit+" Digit Number";
        document.getElementById("first").disabled = "true";
        document.getElementById("getSum").innerHTML = "Scroll Down. AI Predicted the Sum";
    } else {
        document.getElementById("answer").value = "2"+firstN-2;
        document.getElementById("second").setAttribute("maxlength",firstNDigit);
        document.getElementById("forth").setAttribute("maxlength",firstNDigit);
        document.getElementById("second").placeholder = "Enter a "+firstNDigit+" Digit Number";
        document.getElementById("forth").placeholder = "Enter a "+firstNDigit+" Digit Number";
        document.getElementById("first").disabled = "true";
        document.getElementById("getSum").innerHTML = "Scroll Down. AI Predicted the Sum";
    }
    
});

function secondTextbox(current)  {
    var firstN = Number(document.form.firstNumber.value);
    var firstString = firstN.toString();
    var firstNDigit = Number(firstString.length);

    var sString = document.form.secondNumber.value
    var secondN = Number(sString);
    var secondString = secondN.toString();
    var thirdTextbox = "";
    
    if(current.value.length >= current.maxLength){
        var zeroSFront = sString[0];
        if(zeroSFront == 0){
            alert("Enter a Three digit Number");
            document.getElementById("second").value = "";
        } else {
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
}

function forthTextbox(current) {
    var firstN = Number(document.form.firstNumber.value);
    var firstString = firstN.toString();
    var firstNDigit = Number(firstString.length);

    var forString = document.form.forthNumber.value
    var forthN = Number(forString);
    var forthString = forthN.toString();
    var fifthTextbox = "";
    if(current.value.length >= current.maxLength){
        var zeroFFront = forString[0]
        if(zeroFFront == 0){
            alert("Enter a Three digit Number");
            document.getElementById("forth").value = "";
        } else {
            for(var i=0;i<firstNDigit;i++){
                var forthDigit = forthString[firstNDigit-(firstNDigit-i)];
                var forthTextboxMinuseNine = 9-forthDigit;
                fifthTextbox += forthTextboxMinuseNine;
                }
            document.getElementById("forth").setAttribute("disabled","true");
            document.getElementById("fifth").value = fifthTextbox;
        }
    }
}
