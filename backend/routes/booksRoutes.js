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

//GET Request
router.get("/getBooks", async (req,res) => {
    let books;
    try{
        books = await bookModel.find();
        res.status(200).json({ books });
    }catch(error){
        console.log(error);
    }
})

//GET Request By ID
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

//UPDATE BOOKS BY ID
router.put("/updateBook/:id", async (req,res) => {
    let book;
    const id = req.params.id;
    const {title,author,image} = req.body;
    try{
        book = await bookModel.findByIdAndUpdate(id,{
            title,
            author,
            image
        });
        await book.save().then(() => res.json({message:"Data Updated Successfully"}));
    }catch(error) {
        console.log(error);
    }
})

//DELETE Book
router.delete("/deleteBook/:id", async (req,res) => {
    const id = req.params.id;
    try{
        await bookModel.findByIdAndDelete(id).then(() => res.status(201).json({message:"Book Deleted Successfully"}));
    }catch(error){
        console.log(error);
    }
})

module.exports = router;