const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = require('./models/User')
dotenv.config({path:'config/.env'})

const port = 3000

app.listen(3000, function() {
  console.log('listening on port 3000');
});
// GET : REND TOUS LES UTILISATEURS 
app.get("/all",(req,res)=>{
  const user=User.find();
  res.status(200).json({user})
})
//POST : AJOUTER UN NOUVEL UTILISATEUR A LA BASE DE DONNEES 
app.post('/user/add', (req, res) => {
  var user = {
    name: Bou,
    age: 26,
    favoriteFoods:["Drops"]
  };
  dbase.collection("user").save(user, (err, result) => {
    if(err) {
      console.log(err);
    }

    res.send('user added successfully');
  });
});
// PUT : MODIFIER UN UTILISATEUR PAR ID
app.put("/user/:id",(req,res)=>{
  const user= User.findById(req.params.id)
  res.status(200).json({user})
})
//   SUPPRIMER : SUPPRIMER UN UTILISATEUR PAR ID 
app.delete("/user/:id",(req,res)=>{
  const user= User.deleteOne(req.params.id)
  res.status(200)
})
//CONNECTION A LA BASE DE DONNEES
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log("connexion a la base reussie"))
.catch((err)=>console.log(err)) 