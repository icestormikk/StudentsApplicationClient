import { deleteStudentByStudentId } from "./api.js";
import { Student } from "./classes/student.js";

/**
 * Функция отображения данных о студентах в виде html-таблицы
 * @param {string} tableID идентификатор таблицы
 * @param {Student[]} students список с данными о студентах
 */
export function displayStudentsData(tableID, students) {
  const table = document.getElementById(tableID);
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';

  students.forEach((student) => {
    const row = createTableRow(student);
    tbody.appendChild(row);
  })
}

/**
 * Функция для отображения сообщения о загрузке данных
 */
export function showLoadingMessage() {
  const loadingMessage = document.getElementById('loading-data-message');
  loadingMessage.style.display = 'block';
}

/**
 * Функция для скрытия сообщения о загрузке данных
 */
export function hideLoadingMessage() {
  const loadingMessage = document.getElementById('loading-data-message');
  loadingMessage.style.display = 'none';
}

/**
 * Функция для отображения сообщения об ошибке
 */
export function showErrorMessage(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerHTML = `<p>${message}</p>`
  errorMessage.style.display = 'block'
}

/**
 * Функция для скрытия сообщения об ошибке
 */
export function hideErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'none'
}

/**
 * Преобразование объекта Student в строку html-таблицы
 * @param {Student} student информация о студенте
 * @returns Строку html-таблицы, заполненную информацией о студенте
 */
function createTableRow(student) {
  const tr = document.createElement('tr');

  const idTd = document.createElement('td');
  idTd.textContent = student.id;
  tr.appendChild(idTd);

  const firstnameTd = document.createElement('td');
  firstnameTd.textContent = student.firstname;
  tr.appendChild(firstnameTd);

  const lastnameTd = document.createElement('td');
  lastnameTd.textContent = student.lastname;
  tr.appendChild(lastnameTd);

  const patronymicTd = document.createElement('td');
  patronymicTd.textContent = student.patronymic;
  tr.appendChild(patronymicTd);

  const birthdayTd = document.createElement('td');
  birthdayTd.textContent = student.birthday;
  tr.appendChild(birthdayTd);

  const groupIdTd = document.createElement('td');
  groupIdTd.textContent = student.group_id;
  tr.appendChild(groupIdTd);

  const studentIdTd = document.createElement('td');
  studentIdTd.textContent = student.student_id;
  tr.appendChild(studentIdTd);

  const deleteButtonTd = document.createElement('td');
  const button = document.createElement('button');
  button.textContent = 'Удалить'
  button.addEventListener('click', () => onStudentDelete(tr, studentData))
  deleteButtonTd.appendChild(button)
  tr.appendChild(deleteButtonTd);

  return tr;
}

/**
 * Обработчик удаления студента и строки о нём
 * @param {string} tableRow Строка, которую нужно удалить
 * @param {Student} student Информация о студенте, которого нужно удалить
 */
function onStudentDelete(tableRow, student) {
  try {
    deleteStudentByStudentId(student.student_id)
    tableRow.remove()
  } catch (e) {
    showErrorMessage(e.message)
  }
}