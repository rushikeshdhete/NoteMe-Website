import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Add = ()=>{

    const navigate = useNavigate();
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

        await axios.post("/add", data);
        navigate("/");
      }
      catch(e){
            console.log(e);
      }
   }


    return (
        <>
            <div className="container">
                <div className="mt-5">
                <div className="text-sm-center"><h3>Enter Your Notes</h3></div>
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
                <button type="submit" className="btn btn-primary">Add Answer</button>
                </div>
            </form>
                </div>
                </div>
            </div>
        </>
    );
}
export default Add;