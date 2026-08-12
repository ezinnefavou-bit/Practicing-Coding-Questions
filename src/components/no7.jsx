import { useState } from "react";
function Removecondition(){
    const [number, setNumber] = useState(9)
        
        function decreaseNumber(){
            
            setNumber(Math.max(0, number - 1))
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
export default Removecondition;