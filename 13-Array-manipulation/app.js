function writeArray(msg, arr) {
    let arrString = arr.join('|');
    document.write("<br>" + msg + ":</br>" + arrString + "<br></br>");
}

function writeIt() {
    let weekDays = ["Monday","Tuesday","Wednesdat", "Thursday","Friday"];
    writeArray("Week Days", weekDays);
    let weekEnd = new Array();
    weekEnd.push("Saturday");
    weekEnd.push("Sunday");
    writeArray("Weekend", weekEnd);
    let week = weekDays.concat([]);
    week.unshift(weekEnd[1]);
    week.push(weekEnd[0]);
    writeArray("week", week);
    let midWeek = week.slice(2,5);
    writeArray = ("Mid Week", midWeek);
    let sortedWeek = week.sort();
    document.write("<b> Sorted Days: </b></br");
    for(dayIndex in sortedWeek) {
        document.write(sortedWeek[dayIndex] + "</br>");
    }
}