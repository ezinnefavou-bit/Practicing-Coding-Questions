import { useState } from "react"

function DecreaseCount(){

    const [number, setNumber] = useState(9)
    
    function decreaseNumber(){
        if(number <= 0){
            return
        }
        setNumber(number - 1)
    }
    return(
        <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row gap-12"> 
        <button onClick={() => decreaseNumber()} 
        className="size-12 bg-green-600 text-2xl text-white">-</button> 
         
        <p>number: {number} </p> 
        </div>
      </div>
    )
}
export default DecreaseCount;