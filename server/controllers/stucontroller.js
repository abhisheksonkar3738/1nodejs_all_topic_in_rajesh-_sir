const stumodel=require("../models/stumodel")

const mydatasave=async(req,res)=>{


    // =================data save insert hua hai ======================

    const {rollno,name,city,fees}=req.body;

   const mydata=await stumodel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })

    res.send("data save in mongodb");
    //  console.log(req.body);
    //  res.send("abhishek");
}





// =============  data display ==============

const datadisplay=async(req,res)=>{
    let mydata= await stumodel.find();
       res.send(mydata);
}


// ==================data search ho raha hai ===============================
const mysearch=async(req,res)=>{
    const {rollno}=req.body
     const mydata=await stumodel.find({rollno:rollno})

    

     res.send(mydata);
}

// ===============================  data delete process ===================

const deletedatashow=async(req,res)=>{

    const mydata= await stumodel.find();
    res.send(mydata);
      
}

const deldata=async(req,res)=>{
    const {myid}=req.body;
   
    const mydelete= await stumodel.findByIdAndDelete(myid);
    res.send(mydelete);
  
}




// ======================================edit data process ====================
const editshow=async(req,res)=>{
      const {id}=req.query;
      const mydata=await stumodel.findById(id);

      res.send(mydata);
}


const editsave=async(req,res)=>{
    const {id,rollno,name,city,fees}=req.body;

    const myans=await stumodel.findByIdAndUpdate(id,{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });

    res.send(myans)

}


module.exports={
    mydatasave,
    datadisplay,
    mysearch,
    deletedatashow,
    deldata,
    editshow,
    editsave
}