const db = require('../db/')
const { Airport, Flight } = require(`../models`)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ORD = await Airport.find({code: 'ORD'})
    const MCO = await Airport.find({code: 'MCO'})
    const JFK = await Airport.find({code: 'JFK'})
    const CLE = await Airport.find({code: 'CLE'})

    const flights = [
        {
            airline: 'Jetblue',
            price: 123,
            numberOfSeats: 190,
            flightNumber: 32,
            departingAirport: ORD[0]._id,
            arrivingAirport: JFK[0]._id
        },
        {
            airline: 'Jetblue',
            price: 143,
            numberOfSeats: 190,
            flightNumber: 53,
            departingAirport: CLE[0]._id,
            arrivingAirport: MCO[0]._id
        }, 
        {
            airline: 'American Airlines',
            price: 75,
            numberOfSeats: 145,
            flightNumber: 32,
            departingAirport: MCO[0]._id,
            arrivingAirport: ORD[0]._id
        }, 
        {
            airline: 'Spirit',
            price: 93,
            numberOfSeats: 100,
            flightNumber: 24,
            departingAirport: ORD[0]._id,
            arrivingAirport: CLE[0]._id
        }, 
        {
            airline: 'American Airlines',
            price: 110,
            numberOfSeats: 122,
            flightNumber: 12,
            departingAirport: JFK[0]._id,
            arrivingAirport: CLE[0]._id
        }, 
        {
            airline: 'Delta',
            price: 250,
            numberOfSeats: 300,
            flightNumber: 71,
            departingAirport: ORD[0]._id,
            arrivingAirport: CLE[0]._id
        }, 
        {
            airline: 'Delta',
            price: 200,
            numberOfSeats: 240,
            flightNumber: 92,
            departingAirport: JFK[0]._id,
            arrivingAirport: ORD[0]._id
        }, 

    ]

    await Flight.insertMany(flights)
    console.log(`Created airlines with flights`)
}

const run = async () => {
    await main()
    db.close()
}

run()
