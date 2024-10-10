const db = require('../db/')
const { Airport } = require(`../models`)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name:  `Chicago O'Hare International Airport `,
            location: `Chicago, Illinois`,
            code: `ORD`
        }, 
        {
            name:  `Orlando International Airport`,
            location: `Orlando, Florida`,
            code: `MCO`
        }, 
        {
            name:  `John F. Kennedy International Airport`,
            location: `Queens, New York`,
            code: `JFK`
        }, 
        {
            name:  `Cleveland Hopkins International Airport`,
            location: `Cuyahoga County, Ohio`,
            code: `CLE`
        }
    ]

    await Airport.insertMany(airports)
    console.log(`Created airports`)
}

const run = async () => {
    await main()
    db.close()
}

run()