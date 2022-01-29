import {useState, useEffect, useRef} from "react"
import List from "./List"
import Add from "./Add"

export interface User {
    people: {
        name: string
        age: number
    }[]
}

export default function Practice() {


    const [people, setPeople] = useState<User["people"]>([
        {
        name: "ali",
        age: 19},
        {
        name: "otto",
        age: 13
        },
        {
        name: "un",
        age: 21
        }

             


    ])


    return(
        <div>
        <h1>hello</h1>
        <List data = {people}/>
        <Add people = {people} setPeople={setPeople}/>
        </div>
    )
}

