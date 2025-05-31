function textChange() {
    var inElement = document.getElementById("textIn");
    var outElements = document.getElementsByTagName("p");
    var headingElements = document.getElementsByClassName("heading");

    for(var i =0; i < outElements.length; i++) {
        var outItem = outElements[i];
        headingElements[i].innerHTML = "Updating " + (i + 1) + 
                                       " to " + inElement.value;
        outItem.innerHTML = inElement.value;                               
    }
}

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991)

const calcAge2 = function(birthYear) {
   return 2037 - birthYear
}
 
const age2 = calcAge2(1991)


console.log(age1, age2);