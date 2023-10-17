import express from "express";
import { addStudent, getAllStudents } from "./src/students.js";
const app = express(); //app is now the guard

//list of allowed requests
app.get("/students", (request, response) => {
    response.send(['Joelle', 'Mesut', 'Andy', 'John', 'Tre'])
})// always starts with a slash. second parameter is a request and response- a function


app.get("/hello", (request, response) => {
    response.send("Hello there!")
})

//Tells api to go "guard the door"(aka port)
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000...')
})