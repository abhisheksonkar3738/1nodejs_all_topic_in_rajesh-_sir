import axios from "axios";
import { useState } from "react";


const Search=()=>{
    const [mydata,setdata]=useState([]);
    const [rno,setrno]=useState("");

    const handleinput=(e)=>{


    //     let nm=e.target.name;
    //     let val=e.target.value;

    //    setrno(values=>({...values,[nm]:val}));   //this is wrong tarika

      setrno(e.target.value)

    }
 

    const handlesubmit=()=>{
     let api="http://localhost:8080/student/search";
     axios.post(api,{rollno:rno}).then((res)=>{

           setdata(res.data);
     })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })

    
    return(
        <>
        <h1>this is search page </h1>

        Enter Rollno: <input type="text" name="rollno" value={rno} onChange={handleinput} />
        <button onClick={handlesubmit}>check</button>
        <br /><br /><br />
        <table border={1}>
        <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
        </tr>
        {ans}
        </table>
        </>
    )
}

export default Search;