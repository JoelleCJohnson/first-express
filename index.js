import express from "express";
import { addStudent, getAllStudents } from "./src/students.js";
const app = express(); //app is now the guard

//list of allowed requests
app.get("/students", getAllStudents) //functions don't have ()
app.post("/student", addStudent)


app.get("/hello", (request, response) => {
    response.send("Hello there!")
})

//Tells api to go "guard the door"(aka port)
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000...')
})