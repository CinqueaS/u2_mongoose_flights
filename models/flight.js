const { Schema } = require(`mongoose`)

const flight = new Schema(
    {
        airline: {type: String, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        flightNumber: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref: `airport_id`},
        arrivingAirport: {type: Schema.Types.ObjectId, ref: `airport_id`}
        
    },
    {timestamps: true}
)

module.exports = flight