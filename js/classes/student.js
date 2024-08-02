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
   * @param {number} groupId  Уникальный идентификатор группы студента
   * @param {number} studentId Уникальный идентификатор студента
   */
  constructor(id, firstname, lastname, patronymic, birthday, groupId, studentId) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.patronymic = patronymic;
    this.birthday = birthday;
    this.groupId = groupId;
    this.studentId = studentId;
  }
}