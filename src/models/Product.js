import {Schema, model} from "mongoose"

const productSchema = new Schema({
    name: String,
    caterogy: String,
    imgURL: String,
    price: Number,
    description: String
},{
    timeseries: true,
    versionKey: false
})

export default model('Product', productSchema)