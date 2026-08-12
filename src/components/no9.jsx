import { useState } from "react"

function Removearray(){
    const [number,setNumber]= useState(0)
    function addNumber(){
        setNumber(number + 1)
    }
    function subtractNumber(){
        setNumber(number - 1)
    }
    return(
        <div className="h-screen flex  items-center justify-center">
            <div className="flex flex-row gap-12">
                <button onClick={subtractNumber} className="size-12 bg-red-600 text-2xl text-white">subtract</button>
                <p>value: {number}</p>
                <button onClick={addNumber} className="size-12 bg-green-600 text-2xl text-white">addition</button>
            </div>
        </div>
)
}
export default Removearray;
