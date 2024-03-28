const categorySchema = require("../Models/categorySchema");

const getCategory = async (req, res) => {
  const findAllCategory = await categorySchema.find({});
  res.send(findAllCategory);
  console.log(findAllCategory);
};

const getCategoryById = async (req, res) => {
  const id_url = req.params.id;
  const findById = await categorySchema.find({ idCategory: id_url });
  console.log(findById);
  if (findById[0]) res.send(findById);
  else return res.send("this Category does not exist");
  console.log(findById);
};

const creatCategory = async (req, res) => {
  const { name, price, description } = req.body;
  const findLast = await categorySchema.find().limit(1).sort({ idCategory: -1 });
  const idCategory = findLast[0].idCategory + 1;
  // console.log(idCategory)
  const data = {
    idCategory: idCategory,
    name: name,
    price: price,
    description: description,
  };
  const prd = await categorySchema.create(data);
  await prd.save();
  res.send("created");
};

const updateCategory = async (req, res) => {
  const id_url = req.params.id;
  const { name, price, description } = req.body;
  const prd = await categorySchema.findOneAndUpdate(
    { idCategory: id_url },
    { $set: { name: name, price: price, description: description } }
  );
  if (prd) res.send("Updated");
  else return res.send("this Category does not exist");
};

const deleteCategory = async (req, res) => {
  const id_url = req.params.id;
  const find = await categorySchema.find({ idCategory: id_url });
  console.log(find);
  if (find[0]) {
    await categorySchema.deleteOne({ idCategory: id_url });
    res.send("the Category was deleted");
  } else return res.send("this Category does not exist");
};

module.exports = {
  getCategory,
  getCategoryById,
  creatCategory,
  updateCategory,
  deleteCategory,
};
