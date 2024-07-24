import { deleteStudentByStudentId } from "./api.js";

export function displayStudentsData(tableID, studentsData) {
  const table = document.getElementById(tableID);
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';

  studentsData.forEach((student) => {
    const row = createTableRow(student);
    tbody.appendChild(row);
  })
}

export function showLoadingMessage() {
  const loadingMessage = document.getElementById('loading-data-message');
  loadingMessage.style.display = 'block';
}

export function hideLoadingMessage() {
  const loadingMessage = document.getElementById('loading-data-message');
  loadingMessage.style.display = 'none';
}

function createTableRow(studentData) {
  const tr = document.createElement('tr');

  const idTd = document.createElement('td');
  idTd.textContent = studentData.id;
  tr.appendChild(idTd);

  const firstnameTd = document.createElement('td');
  firstnameTd.textContent = studentData.firstname;
  tr.appendChild(firstnameTd);

  const lastnameTd = document.createElement('td');
  lastnameTd.textContent = studentData.lastname;
  tr.appendChild(lastnameTd);

  const patronymicTd = document.createElement('td');
  patronymicTd.textContent = studentData.patronymic;
  tr.appendChild(patronymicTd);

  const birthdayTd = document.createElement('td');
  birthdayTd.textContent = studentData.birthday;
  tr.appendChild(birthdayTd);

  const groupIdTd = document.createElement('td');
  groupIdTd.textContent = studentData.groupId;
  tr.appendChild(groupIdTd);

  const studentIdTd = document.createElement('td');
  studentIdTd.textContent = studentData.studentId;
  tr.appendChild(studentIdTd);

  const deleteButtonTd = document.createElement('td');
  const button = document.createElement('button');
  button.textContent = 'Удалить'
  button.addEventListener('click', () => {
    deleteStudentByStudentId(studentData.studentId)
      .then(() => {
        tr.remove()
      })
      .catch((err) => {
        console.error("Произошла ошибка во время удаления: " + err)
      })
  })
  deleteButtonTd.appendChild(button)
  tr.appendChild(deleteButtonTd);

  return tr;
}