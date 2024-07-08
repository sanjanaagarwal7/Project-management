import "./Project.css"
import {useState} from "react";


function Project({description,date,title,onDelete}){
   const[task,setTask]=useState("");
   const[submitted,setSubmitted]=useState(false);
   const [arr,setArr]=useState([]);
   function handleClick(){
      setSubmitted(true);
      setArr((prev)=>[...prev,task])
      setTask("");
   }
   function handleClick2(item){
      setArr((prev) => prev.filter((i)=>i!==item));
   }
 return(
    <div className="project">
    <div id="title">
    <h1>{title}</h1>
    <button onClick={onDelete}>delete</button>
    <p id="date">{date}</p>
    <p id="description">{description}</p>
    </div>
    <div id="tasks">
      <div>
      <h1>Tasks</h1>
      </div>
       <div id="input">
         <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}></input>
         <button onClick={handleClick}>Add Task</button>
       </div>
       {submitted &&<div id="taskList">
         <ul>{arr.map((item,index)=>(
            <li key={index}>{item}
            <button id="clear" onClick={()=>handleClick2(item)}>clear</button>
            </li>
           
         ))}</ul>
         
         </div>
       }
    </div>
    </div>
 )
}

export default Project;