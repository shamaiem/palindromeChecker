// getting the value of what the user typed
// getting a single element by its identifier
const input = document.getElementById("palindrome"); //this gets the entire tag! If we want to get the value that's different

function check(){
    //outputting what the value is
    const value = input.value;
    alert(value);
    console.log(typeof value);
    const splitValue = value.split("");
    const reverseValue = splitValue.reverse();
    const fin_reverseValue = reverseValue.join("")
    console.log(typeof fin_reverseValue);

    if (value === fin_reverseValue){
        alert("P A L I N D R O M E");
    }
    else{
        alert("N O T PALINDROME")
    }

    //remove input after I press the button
    input.value="";
}

function reverse(str){
    return str.split("").reverse().join("");
}