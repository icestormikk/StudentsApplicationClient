import { deleteStudentByStudentId } from "./api.js";

/**
 * Функция отображения данных о студентах в виде html-таблицы
 * @param {string} tableID идентификатор таблицы
 * @param {any[]} studentsData список с данными о студентах
 */
export function displayStudentsData(tableID, studentsData) {
  const table = document.getElementById(tableID);
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';

  studentsData.forEach((student) => {
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
 * @param {any} studentData информация о студенте
 * @returns Строку html-таблицы, заполненную информацией о студенте
 */
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
  button.addEventListener('click', () => onStudentDelete(tr, studentData))
  deleteButtonTd.appendChild(button)
  tr.appendChild(deleteButtonTd);

  return tr;
}

/**
 * Обработчик удаления студента и строки о нём
 * @param {string} tableRow Строка, которую нужно удалить
 * @param {any} studentData Информация о студенте, которого нужно удалить
 */
function onStudentDelete(tableRow, studentData) {
  try {
    deleteStudentByStudentId(studentData.studentId)
    tableRow.remove()
  } catch (e) {
    showErrorMessage(e.message)
  }
}