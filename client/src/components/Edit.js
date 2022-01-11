import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";


const Edit = ()=>{

    const navigate = useNavigate();

    const {_id} = useParams();
    // alert(_id);


    const [data, setdata] = useState({
        topic : "",
        question : "",
        answer : ""
    });


    const {topic, question, answer} = data;
   const InputChange = (e)=>{
       setdata({...data, [e.target.name] : e.target.value})
   }

   const Submitdata = async (e)=>{
       e.preventDefault();
      try{
        await axios.patch(`/notes/${_id}`, data);
        navigate("/");
      }
      catch(e){
            console.log(e);
      }
   }

   const loaddata = async ()=>{
       const result = await axios.get(`/notes/api/${_id}`);
    //    console.log(result);
       setdata(result.data);
   }

   useEffect(()=>{
       loaddata();
   }, []);


    return (
        <>
            <div className="container">
                <div className="mt-5">
                <div className="text-sm-center"><h3>Update Notes</h3></div>
                <div>
            <form onSubmit={(e)=>{Submitdata(e)}}>
                <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Topic Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example OS/DBMS/OOP"
                    value={topic}
                    name="topic"
                    onChange={(e)=>InputChange(e)}
                />
                </div>
                <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Question</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Question"
                    value={question}
                    name="question"
                    onChange={(e)=>InputChange(e)}
                />
                </div>
                <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"  placeholder="Enter Answer"
                    value={answer}
                    name="answer"
                    onChange={(e)=>InputChange(e)}
                />
                </div>
                <div className="col-12">
                <button type="submit" className="btn btn-warning">Update</button>
                </div>
            </form>
                </div>
                </div>
            </div>
        </>
    );
}
export default Edit;