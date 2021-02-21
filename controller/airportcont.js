const airdata = require('../db/custom');


module.exports.getAirports = async (req, res, next) => {

    var airports = []

    airdata.query('SELECT * FROM airport', (error,results)=>{
        if(error) {console.log(err.stack)}
        else{
            
            this.airports = results.rows
            res.render('airport', {title: 'Airport', 
                            airports: results.rows,
                            path: '/airports'   
                            });
            //res.status(200).json({
            //msg:"succes",
            // data:results.rows
            //})
    }
    }) 
}