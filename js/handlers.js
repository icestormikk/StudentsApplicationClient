import { addStudent, getAllStudents } from './api.js'
import { displayStudentsData, hideErrorMessage, hideLoadingMessage, showErrorMessage, showLoadingMessage } from './display.js'

/**
 * Функция для получения всех имеющихся на сервере студентов и вывод их на экран
 */
export async function onGetStudentsButtonClick() {
  showLoadingMessage();
  hideErrorMessage();

  try {
    const students = await getAllStudents();
    displayStudentsData('students-data-table', students);
  } catch (e) {
    showErrorMessage(e.message);
  } finally {
    hideLoadingMessage();
  }
}

/**
 * Фукнция для отображения/скрытия формы добавления нового студента
 */
export function onAddStudentsButtonClick() {
  const addStudentForm = document.getElementById("add-student-form");

  const currentDisplay = addStudentForm.style.display;
  addStudentForm.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
}

/**
 * Функция для получения данных о новом студенте из html-формы и отправки данных на сервер
 */
export async function onSubmitAddStudentFormClick() {
  hideErrorMessage();

  const form = document.getElementById("add-student-form")
  const data = Object.fromEntries(new FormData(form));

  data['groupId'] = Number(data['groupId']);
  data['studentId'] = Number(data['studentId']);

  try {
    await addStudent(data)
    onGetStudentsButtonClick()
  } catch (e) {
    showErrorMessage(e.message)
  }
}