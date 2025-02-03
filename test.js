// function helloJs(students) {
//   console.log(students);
//   console.log(students.car4);
// }

// const car = {
//   car1: "BMW",
//   car2: "Lotus",
//   car3: "Porshe",
//   car4: "Lexus",
// };

// helloJs(car);

const tbody = document.querySelector("tbody");
const students = [];
function grade(data) {
  console.log("ami data faisi", data);
  if (data >= 80) {
    return "A+";
  } else if (data >= 50) {
    return "B+";
  } else {
    return "F";
  }
}

function addResult() {
  const names = prompt("Enter the names of the student");
  const marks = parseInt(prompt("Enter the markss of the students"));
  students.push({ studentsName: names, studentsmarks: marks });

  console.log(grade(students[students.length - 1].studentsmarks));

  const row = `
       <tr>
       <td>${students[students.length - 1].studentsName}</td>
       <td>${students[students.length - 1].studentsmarks}</td>   
        <td>${grade(students[students.length - 1].studentsmarks)}</td>   
       </tr>
      `;
  tbody.innerHTML += row;
}
