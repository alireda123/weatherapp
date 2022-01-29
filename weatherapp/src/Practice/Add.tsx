import React, { useState, useEffect } from "react"
import {User as Adder} from "./Practice"
export {}

interface use{
    data: Adder["people"]
    setdata: Function
}

export default function Add<use>({people, setPeople}){

    const [name, setName] = useState({
        name: "",
        age: "",
        notes: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName({
            ...name,
            [e.target.name]: [e.target.value]
        })
    }

    const res = (e) => {
        e.preventDefault()
        setPeople({ 
            ...people, 
            name
        })
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                <input type="text" placeholder="age" name="age" onChange={handleChange}/> 
                <textarea name="" placeholder="Notes" onChange={handleChange}/>
                <button type="submit" onClick = {res}>Submit</button>
            </form>
        </div>
    )
}

