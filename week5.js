function getGrade(marks) {
    var marks = 90;
    if (marks >= 80) {
        console.log("A");
    } else if (marks >= 79) {
        console.log("B");
    } else if (marks >= 69) {
        console.log("C");
    } else if (marks >= 59) {
        console.log("D");
    } else if (marks >= 49) {
        console.log("E")
    } else if (marks <= 48) {
        console.log("F");
    }
}
getGrade();