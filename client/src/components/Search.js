import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Search = ()=>{

    const {topic} = useParams();

    
    // alert(topic);

    const [ans, setans] = useState([]);
   
    useEffect(()=>{
        getdata();
    }, []);
    
   const getdata =async ()=>{
    try{
        const res = await axios.get(`/notes/${topic}`);
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

    return(
        <>
           
            <div className="mt-5">
            {/* <div><h3>Topic : {ans[0].topic}</h3></div> */}
            {/* <br></br> */}
            {
                ans.map((answer, index)=>(
                    <div key={index+1}>
                    <h4 className="row">{answer.question} </h4>
                    <p className="row">{answer.answer}</p>
                    <hr/>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Search;