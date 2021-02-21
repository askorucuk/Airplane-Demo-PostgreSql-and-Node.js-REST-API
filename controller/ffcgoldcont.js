const ffcd = require('../db/custom');


module.exports.getFfcgold = async (req, res, next) => {

    var ffcgold = []

    ffcd.query('SELECT * FROM customer WHERE isffc = true AND transaction_record>4999 ', (error,results)=>{
        if(error) {console.log(err.stack)}
        else{
            
            this.ffcgold = results.rows
            res.render('ffcgold', {title: 'FFC/Gold', 
                            ffcgold: results.rows,
                            path: '/goldclass'   
                            });
            //res.status(200).json({
            //msg:"succes",
            // data:results.rows
            //})
    }
    }) 
}

