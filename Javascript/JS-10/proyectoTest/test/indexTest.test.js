
//import { indexTest } from "../calculadora"

//const calculadora = require("../calculadora")

const indexTest = require('../calculadora')

test ("test suma", () => {
    const r = indexTest.sum(1,2)
    expect (r).toBe(3)
})

test.todo('test de rest')
test.todo('test de mult')
test.todo('test de div')