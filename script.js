// const names = prompt("Enter the names of the student");

// const mark = parseInt(prompt("Enter the marks of the student"));

const students = [];

// students.push({
//   name: names,
//   mark: mark,
// });

const tbody = document.querySelector("tbody");
function calculateGrade(mark) {
  if (mark >= 80) {
    return "A+";
  } else if (mark >= 70) {
    return "A";
  } else if (mark >= 60) {
    return "A-";
  } else if (mark >= 50) {
    return "B+";
  } else if (mark >= 40) {
    return "B";
  } else if (mark >= 33) {
    return "C";
  } else {
    return "f";
  }
}

for (let i = 0; i < students.length; i++) {
  console.log(calculateGrade(students[i].mark));
  const row = `
     <tr>
     <td>${students[i].name}</td>
     <td>${students[i].mark}</td>
      <td>${calculateGrade(students[i].mark)}</td>
     </tr>
    `;
  tbody.innerHTML += row;
}
function addResult() {
  const names = prompt("Enter the names of the student");

  const mark = parseInt(prompt("Enter the marks of the student"));

  students.push({
    name: names,
    mark: mark,
  });

  console.log(students[students.length - 1].name);

  const row = `
       <tr>
       <td>${students[students.length - 1].name}</td>
       <td>${students[students.length - 1].mark}</td>
        <td>${calculateGrade(students[students.length - 1].mark)}</td>
       </tr>
      `;
  tbody.innerHTML += row;
}
