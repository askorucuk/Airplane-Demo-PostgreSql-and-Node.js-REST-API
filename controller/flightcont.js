const fdata = require('../db/custom');


module.exports.getFlights = async (req, res, next) => {

    var flights = []

    fdata.query('SELECT * FROM flight_leg', (error,results)=>{
        if(error) {console.log(err.stack)}
        else{
            
            this.flights = results.rows
            res.render('flight', {title: 'Flight', 
                            flights: results.rows,
                            path: '/flights'   
                            });
            //res.status(200).json({
            //msg:"succes",
            // data:results.rows
            //})
    }
    }) 
}