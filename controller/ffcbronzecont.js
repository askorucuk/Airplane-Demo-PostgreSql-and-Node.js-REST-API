const ffcd = require('../db/custom');

module.exports.getFfcbronze = async (req, res, next) => {

    var ffcbronze = []

    ffcd.query('SELECT * FROM customer WHERE isffc = true AND transaction_record BETWEEN 999 AND 2999', (error,results)=>{
        if(error) {console.log(err.stack)}
        else{
            
            this.ffcbronze = results.rows
            res.render('ffcbronze', {title: 'FFC/Bronze', 
                            ffcbronze: results.rows,
                            path: '/bronzeclass'   
                            });
            //res.status(200).json({
            //msg:"succes",
            // data:results.rows
            //})
    }
    }) 
}