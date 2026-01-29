import { Schema, model, models } from "mongoose"

const ShowSchema = new Schema (
    {
        title: {type: String, required: true},
        type: {type: String, enum: ["movie", "series"], required: true},
        description: {type: String},
        genres: {type: [String]},
        seasons: {type: Number},
        episodes: {type: Number},
        duration: {type: Number},
        releaseYear: {type: Number, required: true},
        rating: {type: Number, required: true},
        poster: {type: String, required: true},
    },
    
    {timestamps: true}
)

export default models.Shows || model("Show", ShowSchema)