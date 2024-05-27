import axios from "axios"
import { useState,useEffect } from "react"
function App()
{
  var [fname,setfname]=useState("")
  var [fruit,setfruit]=useState([""])
 useEffect(function(){
  {
    axios.get("http://localhost:5000/fruitlist").then(function(data)
    {
      setfruit(data.data)
    })
  }
 },[])
  function fhandle(evt)
  {
    setfname(evt.target.value)
  }
  function fsubmit()
  {
    axios.post("http://localhost:5000/savefruit",{newfruit:fname})
    setfruit([...fruit,{name:fname}])
    setfname("")
   
  }
  return(
    <>
    <input value={fname} onChange={fhandle}></input>
    <button onClick={fsubmit}>SUBMIT</button>
    <ul>
      {
        fruit.map(function(data,index)
      {
        return(<li key={index}>{data.name}</li>)
      })
      }
    </ul>
    </>
   
  )
}
export default (App)