import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";


const Home = ()=>{

    const [ans, setans] = useState([]);

    
   
    useEffect(()=>{
        getdata();
    }, []);
    
   const getdata =async ()=>{
    try{
        const res = await axios.get('/notes');
        // console.log(res.data);
        // const data = await res.json();
        // console.log(data);
        setans(res.data.reverse());
        // console.log(ans._id);
   }
   catch(e){
        console.log(e);
   }
}

const deletedata = async (_id)=>{
    alert("Delete Confirm");
    await axios.delete(`/notes/${_id}`);
    getdata();
}
    


    return(
        <>
           
            <div className="mt-5">
            {
                ans.map((answer, index)=>(
                    <div  key={index+1}>
                    <h4 className="row">{answer.question} <span className="ml-2 small">({answer.topic})</span><NavLink type="button" class="btn  btn-sm" style={{marginLeft : "100px", color : "grey"}} placeholder="Edit" to = {`/edit/${answer._id}`}><span>edit</span></NavLink><button type="button" class="btn btn-sm" style={{marginLeft : "10px", color:"grey"}} placeholder="delete" onClick={()=>{deletedata(answer._id)}}><span>delete</span></button></h4>
                    <p className="row">{answer.answer}</p>
                    {/* <h5>{answer._id}</h5> */}
                    <hr/>
                    {/* {`/edit/${ans.id}`} */}
                    </div>
                ))
            }
            </div>
            
        </>
    );
}

export default Home;