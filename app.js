const express = require("express");
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())


app.get("/", cors(),(req, res)=>{
    
   /* collection.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        });

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json()

    })*/

    collection.find( {} , {_id:0})
    .then(result=>{
        res.status(200).json({
            studentData:result,
        
        });

    })
    

})


app.post("/", async(req,res)=>{
    const{email, password} = req.body

    try{
        const check = await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }catch(e){
        res.json("notexist")

    }
})


app.post("/Signup", async(req,res)=>{
    const{email, password} = req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check = await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }catch(e){
        res.json("notexist")

    }
})

app.listen(3000,()=>{
    

    console.log("Port connected");
})

