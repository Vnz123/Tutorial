import express from express;


 const router=express.Router();




const app= express();
const port=5000;


app.get('/',(req,res)=> {
    
    res.send('Hello from homepage.');
});
app.listen(port,()=> console.log(`Server running on port: http://localhost:${port}`));
