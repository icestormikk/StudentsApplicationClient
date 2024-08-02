import { Student } from "./classes/student.js";

// Адрес сервера, на который направляются запросы
const url = 'http://localhost:8080/students'

/**
 * Получение с сервера списка из всех студентов
 * @returns {Promise<Student[]>} Список студентов, информация о которых есть на сервере
 */
export async function getAllStudents() {
  const response = await fetch(url)

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Произошла ошибка во время получения списка студентов: ${error.message || response.statusText}`)
  }

  return response.json();
}

/**
 * Добавление нового студента в БД на сервере
 * @param {Student} student Информация о новом студенте
 * @returns {Promise<Student[]>} Новосозданный объект Student, полученный от сервера
 */
export async function addStudent(student) {
  const response = await fetch(
    url, 
    { 
      method: 'POST', 
      body: JSON.stringify(student), 
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Произошла ошибка во время добавления студента: ${error.message || response.statusText}`)
    }

    return response.json();
}

/**
 * Удаление студента по уникальному номеру
 * @param {number} id уникальный номер студента, которого необходимо удалить
 */
export async function deleteStudentByStudentId(id) {
  const response = await fetch(`${url}?student_id=${id}`, { method: 'DELETE' })
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Во время удаления объекта с studentId = ${id} произошла ошибка: ${error.message || response.statusText}`)
  }
}