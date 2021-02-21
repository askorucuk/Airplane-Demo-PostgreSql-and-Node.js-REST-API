const ffcd = require('../db/custom');

module.exports.getFfcsilver = async (req, res, next) => {

    var ffcsilver = []

    ffcd.query('SELECT * FROM customer WHERE isffc = true AND transaction_record BETWEEN 2999 AND 4999', (error,results)=>{
        if(error) {console.log(err.stack)}
        else{
            
            this.ffcsilver = results.rows
            res.render('ffcsilver', {title: 'FFC/Silver', 
                            ffcsilver: results.rows,
                            path: '/silverclass'   
                            });
            //res.status(200).json({
            //msg:"succes",
            // data:results.rows
            //})
    }
    }) 
}