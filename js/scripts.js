import { addStudent, getAllStudents } from './api.js'
import { displayStudentsData, hideLoadingMessage, showLoadingMessage } from './display.js'

function onGetStudentsButtonClick() {
  showLoadingMessage();

  getAllStudents()
    .then((res) => {
      displayStudentsData('students-data-table', res);
    })
    .finally(() => {
      hideLoadingMessage();
    });
}

function onAddStudentsButtonClick() {
  const addStudentForm = document.getElementById("add-student-form");

  const currentDisplay = addStudentForm.style.display;
  console.log(currentDisplay)
  addStudentForm.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
}

function onSubmitAddStudentFormClick() {
  const form = document.getElementById("add-student-form")
  const data = Object.fromEntries(new FormData(form));

  data['groupId'] = Number(data['groupId']);
  data['studentId'] = Number(data['studentId']);

  addStudent(data).then(onGetStudentsButtonClick)
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("get-students-button").addEventListener('click', onGetStudentsButtonClick)

  document.getElementById("add-student-button").addEventListener('click', onAddStudentsButtonClick)

  document.getElementById("add-student-form").addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmitAddStudentFormClick();
  })
})