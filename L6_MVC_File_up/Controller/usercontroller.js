const path = require('path');
let users = require('../Module/userdata');

exports.userdata = (req, res) => {
  res.sendFile(path.join(__dirname, '/../View/index.html'));
};

exports.createuser = (req, res) => {
  const id = Number(req.body.id);
  const name = req.body.name;
  const age = Number(req.body.age);
  const imageurl = `http://localhost:3000/uploads/${req.file.filename}`; // Check if file was uploaded

  const user = {
    id,
    name,
    age,
    imageurl
  };

  users.push(user);
  res.send(users);
};

exports.updateuser = (req, res) =>{
  const id = Number(req.params.id);
  const {name, age} = req.body;
  users.filter((user)=> user.id === id)
  .map((selecteduser)=> {
      selecteduser.name = name,
      selecteduser.age = Number(age)
  })

  res.send(users);
};

exports.deleteuser = (req, res) =>{
  const id = Number(req.params.id);
  users = users.filter((user)=> user.id != id)

  res.send(users);
}


