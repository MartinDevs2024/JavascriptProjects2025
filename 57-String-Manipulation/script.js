function writeIt(){
    let line1 = "In a [place] a long time ago";
    let line2 = "There lived an [animal] that liked to";
    let line3 = " [action] people";
    let place = "crater";
    let animal = "elephant";
    let action = "smell";
    let madlib = line1.concat(line2,line3);
    madlib = madlib.replace("[place]", place);
    madlib = madlib.replace("[animal]", animal);
    madlib = madlib.replace("[action]", action);
    document.write(madlib);
}