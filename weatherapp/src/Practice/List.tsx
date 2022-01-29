
export {}

interface Props {
    people: {
        name: string
        age: number
    }[]
}


 
export default function List({data}) {
    

    const renderer = () => {
        return data.map(item => {
            return(
                <div>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                </div>
            )
        })
    }

    return(
        <div>
            <h1>List function</h1>
            {renderer()}
        </div>
    )
}