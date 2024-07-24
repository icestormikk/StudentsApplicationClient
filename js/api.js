const url = 'http://localhost:8080/students'

export async function getAllStudents() {
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function addStudent(studentData) {
  return fetch(
    url, 
    { 
      method: 'POST', 
      body: JSON.stringify(studentData), 
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.error(err);
    })
}

export async function deleteStudentByStudentId(id) {
  return fetch(`${url}?student_id=${id}`, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Во время удаления объекта с student_id = ${id} произошла ошибка: ${res.text}`)
      }
    })
}