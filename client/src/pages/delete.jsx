import { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import {useNavigate} from "react-router-dom"


const Delete=()=>{
    const [mydata,setmydata]=useState([]);

    
    const navi=useNavigate();


    const loaddata=()=>{
        let api="http://localhost:8080/student/deletedatashow";
        axios.get(api).then((res)=>{
            setmydata(res.data);
        })

    }


    useEffect(()=>{
        loaddata();
    },[]);


    const mydel=(id)=>{
        let api="http://localhost:8080/student/deletedata";
        axios.post(api,{myid:id}).then((res)=>{

            alert("data delete");

        })

        loaddata();
    }


    const myedit=(id)=>{
         navi(`../edit/${id}`)
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td><a href="#" onClick={()=>{mydel(key._id)}}>
                <MdDelete />
                </a></td>
                <td>
                    <a href="#" onClick={()=>{myedit(key._id)}}>
                    <FaEdit />
                    </a>
                </td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>this is delete and update page </h1>
        <table border={1}>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default Delete;