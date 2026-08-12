import { useState } from "react"

function Clicknumber(){
    const [count, setCount] = useState(0)
    function increaseNumber(){
        setCount(count + 1)

    }
    return(
        <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row gap-12"> 
        <button onClick={()=>increaseNumber()} 
        className="size-12 bg-green-600 text-2xl text-white">+</button> 
         
        <p>Count: {count} </p> 
        
      </div>
    </div>
    )
}
export default Clicknumber;