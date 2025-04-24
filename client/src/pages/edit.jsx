import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit=()=>{

    const {id}=useParams();

    const navi=useNavigate();

    const [mydata,setmydata]=useState({});

    const loaddata=()=>{
        let api=`http://localhost:8080/student/editshow/?id=${id}`;
        axios.get(api).then((res)=>{
            setmydata(res.data)
        })
    }

 useEffect(()=>{
   loaddata();
 },[]);

 const handleinput=(e)=>{
     let nm=e.target.name;
     let val=e.target.value;

     setmydata(values=>({...values,[nm]:val}));
 }

 const handlesubmit=()=>{
    let api="http://localhost:8080/student/editsave";
    axios.post(api,{id:id ,  ...mydata}).then((res)=>{
        alert("data update ");
        navi("/delete")
    })
 }
 

return(
    <>
    <h1>this is navigate: {id}</h1>
    Enter Rollno: <input type="text" name="rollno" value={mydata.rollno} onChange={handleinput} />
    <br /><br />
    Enter Name: <input type="text" name="name" value={mydata.name} onChange={handleinput} />
    <br /><br />
    Enter City: <input type="text" name="city" value={mydata.city} onChange={handleinput} />
    <br /><br />
    Enter Fees: <input type="text" name="fees" value={mydata.fees} onChange={handleinput} />
    <br /><br />
    <button onClick={handlesubmit}>submit</button>

    </>
)
}

export default Edit;