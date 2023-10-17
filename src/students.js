let students = ["Michael", "Debbie", "Tre", "Joelle", "Diego"];

export function getAllStudents(req, res) {
    res.send(students);
}

export function addStudent(req, res) {
    const newStudent = req.body;//we put the request in the body in postman, which is where we get body here
    students.push(newStudent.name)
    res.status(201).send({ message:"Student added.", success: true }) //put a JSON object in the send()
}

//http.cat for status codes, defaults to a 200 status code 