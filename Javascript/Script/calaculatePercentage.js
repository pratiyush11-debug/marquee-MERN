const marks = [95, 78, 90, 78, 59];


function getTotal(total, mark) {
    return total + mark;
}


const totalMarks = marks.reduce(getTotal, 0);
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage + "%");