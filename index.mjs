import express from 'express';
import dotenv from 'dotenv'
import db from './db/conn.mjs';
dotenv.config();



import grades from './routes/grades.mjs'



const PORT = process.env.PORT||5050;
const app = express();
app.use(express.json());

//routes
app.get('/',(req,res)=>
{
res.send("welcome to the API. Documentation could go here,or your could redirect to cocumentation")
})

app.use('/api/grades',grades)

app.use((err,_req,res,next)=>{
    res.status(500).send("error sending")
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

