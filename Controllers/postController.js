const ProductModel = require("../Models/post")

const getProducts = async (req, res)=>{
  const findAllProducts = await ProductModel.find({})
  res.send(findAllProducts)
  console.log(findAllProducts)
}

const getProductById = async (req, res)=>{
  const id_url = req.params.id
  const findById = await ProductModel.find({idCategory:id_url})
  console.log(findById)
  if (findById[0]) res.send(findById)
  else return res.send("this product does not exist")
  console.log(findById)
}

const creatProduct = async (req, res)=>{
  const {name, price, description} = req.body
  const findLast = await ProductModel.find().limit(1).sort({idCategory:-1})
  const idCategory = findLast[0].idCategory + 1
  // console.log(idCategory)
  const data = { idCategory: idCategory, name : name, price: price, description: description}
  const prd = await ProductModel.create(data)
  await prd.save()
  res.send("created")
}

const updateProduct = async (req, res)=>{
  const id_url = req.params.id
  const { name, price, description} = req.body
  const prd = await ProductModel.findOneAndUpdate({idCategory: id_url},{$set:{name:name, price: price, description: description}})
  if (prd) res.send("Updated")
  else return res.send("this product does not exist")
}  

const deletePorduct = async (req, res)=>{
  const id_url = req.params.id
  const find = await ProductModel.find({idCategory:id_url})
  console.log(find)
  if (find[0]) {
      await ProductModel.deleteOne({idCategory: id_url})
      res.send("the product was deleted")
  }
  else return res.send("this product does not exist")
}


module.exports = {getProducts, getProductById, creatProduct, updateProduct, deletePorduct}