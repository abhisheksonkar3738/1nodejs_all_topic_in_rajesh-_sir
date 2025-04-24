import { useState } from "react"
import axios from "axios";

const Insert=()=>{
    const [myinput,setinput]=useState({})

    const handleinput=(e)=>{
      let nm=e.target.name;
      let val=e.target.value;

      setinput(values=>({...values,[nm]:val}));

    }

    const handlesubmit=()=>{
         let api="http://localhost:8080/student/datasave";
         
         axios.post(api,myinput).then((res)=>{

            alert("data save ");
            console.log(res.data);
            
         })
    }

   

  
    return(
        <>
        <h1>this is insert page</h1>
      
        <br />
        Enter Rollno : <input type="text" name="rollno" onChange={handleinput} />
        <br />
        Enter name: <input type="text" name="name" onChange={handleinput} />
        <br />
        Enter city : <input type="text" name="city" onChange={handleinput} />
        <br />
        Enter Fees : <input type="text" name="fees" onChange={handleinput} />
        <br />
        <button onClick={handlesubmit}>submit</button>

        </>
    )
}

export default Insert;