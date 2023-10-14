const router = require("express").Router();
const bookModel = require("../models/bookModel");


//POST Request
router.post("/add",async (req,res) => {
    try{
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save()
        .then(() => {
            res.status(200).json({message: "Book Added Successfully"});
        })
        
    }catch(error){
        console.log(error);
    }
})

//GET Books
router.get("/getBooks", async (req,res) => {
    let books;
    try{
        books = await bookModel.find();
        res.status(200).json({ books });
    }catch(error){
        console.log(error);
    }
})

//GET Book By ID
router.get("/getBooks/:id", async (req,res) => {
    let book;
    const id = req.params.id;
    try{
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    }catch(error){
        console.log(error);
    }
})



module.exports = router;