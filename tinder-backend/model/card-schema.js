import mongoose from "mongoose";

const cardSchema=mongoose.Schema({
    name:String,
    imgUrl:String
});

const cardData=mongoose.model("cards",cardSchema);

export default cardData;