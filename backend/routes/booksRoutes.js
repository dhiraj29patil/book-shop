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
        // const addedBook = await bookModel.create(data).then(() => {
        //     res.status(200).json({msg:"Added Successfully"}).catch((error) => res.status(400).json({msg:"error in request"}));
        // })
    }catch(error){
        console.log(error);
    }
})




module.exports = router;