import image from "../assets/no-projects.png";
import "./Main.css";

import "./SideBar.css"
import Project from "./Project.jsx";
import {useState} from "react"
function Main(){
    const [saved,setSaved]=useState({
        title:"",
        date:"",
        description:""
    });
    const [open,setOpen]=useState(false);
    const [sideBar,setSideBar]=useState(false);
    const[arr,setArr]=useState([])
    const[selectedProject,setSelectedProject]=useState("",null);

    function handleChange(type,value){
        setSaved((prev)=>{
            return({
                ...prev,
                [type]:value
            })
        })
    }
    function handleDelete(item){
        setArr((prev)=>prev.filter((i)=>i!==item));
        setSelectedProject("");
        setOpen(false);
        setProject(false);
    }
    function handleClick2(e){
        e.preventDefault();
        setArr((prev)=>[...prev,saved])
        setSaved({title:"",
            date:"",
            description:""})
        setSideBar(true);
        setProject(false);
    }
    const[project,setProject]=useState(false);
    function handleClick(){
        setProject(true);
    }
    function handleClick4(item){
        setOpen(true);
        setProject(false);
        setSelectedProject(item);
    }
     
    return(
        
        <>
    <div className="app">
    <div id="left">
    <div className="sideBar">
         Your Projects
         <button id="add" onClick={handleClick}>+Add Project</button>
         <ul>
            {sideBar && arr.map((item,index)=>(
                <li key={index}><button id="project"onClick={()=>handleClick4(item)}>{item.title}</button></li>
            ))}
         </ul>
        </div>
    </div>
    <div id="right">
    {(!open &&!project) &&
            <div id="main">
            <div >
            <img src={image} height="70vh"></img>
            </div>
            <div>
            <p>Select a project or get started with a new one </p>
            </div>
            <div>
            <button onClick={handleClick}>Create new project</button>
            </div>
            </div>
}
            {(!open &&project) &&
               
                    <form>
                        <div id="main2">
                    <div id="button">
                        <button id="cancel">Cancel</button>
                        <button id="save" onClick={handleClick2}>Save</button>
                    </div>
                    <div>
                    <label>TITLE</label>
                    <input type="text" value={saved.title} onChange={(e)=>handleChange("title",e.target.value)}></input>
                    </div>
                    <div>
                    <label>Description</label>
                    <textarea value={saved.description} onChange={(e)=>handleChange("description",e.target.value)} ></textarea>
                    </div>
                    <div>
                    <label>Due Data</label>
                    <input type="date" value={saved.date} onChange={(e)=>handleChange("date",e.target.value)}></input>
                    </div>
                    </div>
                    </form>
                    
                
            }
                    {(open && selectedProject) &&
                        <Project onDelete={()=>handleDelete(selectedProject)} title={selectedProject.title} description={selectedProject.description} date={selectedProject.date} />
                     }
    </div>

    </div>
           
        </>
    )

}

export default Main;