import { useState } from "react"


function Increasefix(){
const [number, setNumber] = useState(0)
  function increaseNumber(){ 
  setNumber(number + 1) 
  
}
  return(
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row gap-12"> 
        <button onClick={()=>increaseNumber()} 
        className="size-12 bg-green-600 text-2xl text-white">+</button> 
         
        <p>Number: {number} </p> 
        
      </div>
    </div>
  )
}
export default Increasefix;