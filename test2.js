
const http= ('http');
//import express from express;



//const app= express();

const port=5000;


http.get('/',(req,res)=> {
     console.log('file working');
    res.send('Hello from homepage.');
});
http.listen(port,()=> console.log(`Server running on port: http://localhost:${port }`));
