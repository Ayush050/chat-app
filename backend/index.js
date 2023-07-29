const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json()); // this is used to parse the JSON object from the request body
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body; 
    try{
          const r=await axios.put('https://api.chatengine.io/users/',
          {username:username , secret:username , first_name:username},
          {headers:{"private-key": "8345c131-41f9-45fc-8d08-c8f6823c500d "}}
          ) 
          return res.status(r.status).json(r.data)
    } 
    catch(e){
      return res.status(e.response.status).json(e.response.data)
    }
    
  });

app.listen(3002);