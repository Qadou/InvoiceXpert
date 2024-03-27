const costumerSchema = require('../Models/costumerSchema');
const mongoose = require('mongoose');
const costumer = mongoose.model('costumer', costumerSchema);

const createCostumer = (req, res) => {
    const { name ,email ,password ,phone, adress} = req.body;
    const newcostumer = new costumer({
      name:name,
      email:email,
      password :password,
      phone:phone ,
      adress :adress
  })
  newcostumer
      .save()
      .then(() => res.status(200).send("costumer created successfully"))
      .catch((error) => res.status(500).send( error));
  };

const login = async (req, res) => {
    const {email,password } = req.body;
      try {
          const foundcostumer = await costumer.findOne({ email: email });
          if (foundcostumer) {
            if (foundcostumer.password === password) {
                  res.send(`Welcome ${foundcostumer.name}`);
              } else {
                  res.send("icorrect password!!");
              }
          } else {
              res.send("costumer not found");
          }
      } catch (error) {
          console.error("Error:", error);
          res.status(500).send("Internal Server Error");
      }
    };

function getAllCostumer(req,res) {

        costumer.find({})
          .then((costumers) => res.send(costumers))
          .catch((error) => console.log("Error fetching costumers: ", error));
      
      }
const search = (req, res) => {

    const name = req.params.name;
        costumer.findOne({ name: name  },{email:0})
          .then((costumer) => {
            if (costumer) res.send(costumer);
            else res.send("costumer not found");
          })
        };
const update = (req, res) => {
        costumer.findOneAndUpdate({ name: req.params.name},
            { $set:{name : req.body.name , email:req.body.email , password :req.body.password,adress:req.body.adress,phone:req.body.phone}})
        .then((costumer) => {
                if (costumer) res.send("costumer updated successfully: ");
                    else res.send("costumer not found");
                 })
         }
const deleteCostumer = (req, res) => {
    const name = req.params.name
            costumer.findOneAndDelete({name:name})
              .then((costumer) => {
                if (costumer) res.send("costumer deleted successfully: ");
                else res.send("costumer not found");
              })
              .catch((error) => console.log("Error deleting costumer: ", error));
          };

    module.exports = {createCostumer,getAllCostumer,search,update,deleteCostumer,login,getAllCostumer}