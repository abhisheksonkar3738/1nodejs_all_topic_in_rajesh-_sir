import axios from "axios";
import { useEffect, useState } from "react";


const Display=()=>{
    const [mydata,setdata]=useState([]);

    const loaddata=()=>{
        let api="http://localhost:8080/student/datashow"
        axios.get(api).then((res)=>{
            setdata(res.data);
        })
    }

    useEffect(()=>{
        loaddata()
    },[]);

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
        <h1>this is display page </h1>
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
export default  Display;