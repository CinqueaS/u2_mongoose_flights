const db = require('./db/')
const { Airport, Flight} = require(`./models`)

const findFlights = async () => {
    const Flights = await Flight.find()
    console.log(Flights)
  }
  
  const findFlightById = async () => {
    const Flights = await Flight.find({_id })
    console.log(Flights)

  }
  
  const createFlight = async () => {
    const airport = await Airport.findMany()
    
    let newFlight = await Flight.create(
       {airline: 'Jetblue',
            price: 90,
            numberOfSeats: 100,
            flightNumber: 17,
            departingAirport: JFK[0]._id,
            arrivingAirport: MCO[0]._id
       }
    )

    console.log(newFlight)
  }
  
  const updateFlight = async () => {
    const updatedFlight = await Flight.updateOne(
        {  airline: 'Jetblue',
            price: 143,
            numberOfSeats: 190,
            flightNumber: 53,
            departingAirport: CLE[0]._id,
            arrivingAirport: MCO[0]._id},
        {  airline: 'Jetblue',
            price: 110,
            numberOfSeats: 190,
            flightNumber: 53,
            departingAirport: CLE[0]._id,
            arrivingAirport: MCO[0]._id}
    )
    console.log(updatedFlight)
  }
  
  const deleteFlight = async () => {
    const deletedFlight = await Flight.deleteOne({   airline: 'Spirit',
        price: 93,
        numberOfSeats: 100,
        flightNumber: 24,
        departingAirport: ORD[0]._id,
        arrivingAirport: CLE[0]._id})
    console.log(deletedFlight)
  }

  const deleteAirport = async () => {
    const deletedAirport= await Airport.deleteOne(
        {   name:  `Cleveland Hopkins International Airport`,
            location: `Cuyahoga County, Ohio`,
            code: `CLE`
        }
    )
    console.log(deletedAirport)
  }



  async function main() {
    try {
        await findFlights()
        await findFlightById()
        await updateFlight()
        await createFlight()
        await deleteFlight()
        await deleteAirport()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
  }
  
  main()