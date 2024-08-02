/**
 * Класс-представление студента учебного заведения
 */
export class Student {
  /**
   * Конструктор для создания объекта класса Student
   * @param {number} id Уникальный идентификационный номер студента из БД
   * @param {string} firstname Имя студента
   * @param {string} lastname Фамилия студента
   * @param {string | null} patronymic Отчество студента
   * @param {Date} birthday День рождения студента
   * @param {number} group_id  Уникальный идентификатор группы студента
   * @param {number} student_id Уникальный идентификатор студента
   */
  constructor(id, firstname, lastname, patronymic, birthday, group_id, student_id) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.patronymic = patronymic;
    this.birthday = birthday;
    this.group_id = group_id;
    this.student_id = student_id;
  }
}