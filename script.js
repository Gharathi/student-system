const studentForm = document.getElementById('studentForm');
const studentsTable = document.getElementById('studentsTable');

studentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    const row = studentsTable.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = course;

    studentForm.reset();
});