const userSchema = require('../Models/userSchema');
const mongoose = require('mongoose');
const user = mongoose.model('User', userSchema);

const createUser = (req, res) => {
    const { name ,email ,password , role_id ,phone} = req.body;
    const newUser = new user({
      name:name,
      email:email,
      password :password,
      role_id:role_id,
      phone:phone
  })
  newUser
      .save()
      .then(() => res.status(200).send("user created successfully"))
      .catch((error) => res.status(500).send( error));
  };

const login = async (req, res) => {
    const {email,password } = req.body;
      try {
          const foundUser = await user.findOne({ email: email });
          if (foundUser) {
            if (foundUser.password === password) {
                  res.send(`Welcome ${foundUser.name}`);
              } else {
                  res.send("icorrect password!!");
              }
          } else {
              res.send("User not found");
          }
      } catch (error) {
          console.error("Error:", error);
          res.status(500).send("Internal Server Error");
      }
    };

function getAllUser(req,res) {

        user.find({})
          .then((users) => res.send(users))
          .catch((error) => console.log("Error fetching users: ", error));
      
      }
const search = (req, res) => {

    const name = req.params.name;
        user.findOne({ name: name  },{email:0})
          .then((user) => {
            if (user) res.send(user);
            else res.send("User not found");
          })
        };
const update = (req, res) => {
        user.findOneAndUpdate({ name: req.params.name},
            { $set:{name : req.body.name , email:req.body.email , password :req.body.password,role_id:req.bodyrole_id,phone:req.body.phone,createAt:new Date}})
        .then((user) => {
                if (user) res.send("User updated successfully: ");
                    else res.send("User not found");
                 })
         }
const deleteUser = (req, res) => {
    const name = req.params.name
            user.findOneAndDelete({name:name})
              .then((user) => {
                if (user) res.send("User deleted successfully: ");
                else res.send("User not found");
              })
              .catch((error) => console.log("Error deleting user: ", error));
          };

    module.exports = {login, createUser,getAllUser,search,update,deleteUser}