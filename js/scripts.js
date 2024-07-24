import { onGetStudentsButtonClick, onAddStudentsButtonClick, onSubmitAddStudentFormClick } from './handlers.js'

/**
 * Основные слушатели событий
 */
document.addEventListener('DOMContentLoaded', () => {
  // Слушатель событий нажатия на кнопку получения списка студентов
  document.getElementById("get-students-button").addEventListener('click', onGetStudentsButtonClick)

  // Слушатель событий нажатия на кнопку для добавления нового студента
  document.getElementById("add-student-button").addEventListener('click', onAddStudentsButtonClick)

  // Слушатель событий отправки формы с данными о новом пользователе
  document.getElementById("add-student-form").addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmitAddStudentFormClick();
  })
})