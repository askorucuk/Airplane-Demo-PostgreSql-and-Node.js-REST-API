const { response } = require('express');
const Customer = require('../models/custschema');
const data = require('../db/custom');


module.exports.getCust = async (req, res, next) => {

    var customers = []

    data.query('SELECT * FROM customer order by customer_name asc', (error,results)=>{
        if(error) {console.log(err.stack)}
        else{
            
            this.customers = results.rows
            res.render('customer', {title: 'Customers', 
                            customers: results.rows,
                            path: '/customers'   
                            });
            //res.status(200).json({
            //msg:"succes",
            // data:results.rows
            //})
    }
    }) 
}

module.exports.getById = async (req, res, next) => {
    const passport_no = req.params.passport_no;
    const response = await data.query('SELECT * FROM CUSTOMER WHERE passport_no = $1' , [passport_no]);
    res.json(response.rows);
    console.log(passport_no);
}


module.exports.getAddCustomer = (req, res, next) => {
    res.render('admin', {title: 'Admin Panel',
                        path: '/admin/add'
                        });
}


module.exports.postAddCustomer  = async (req, res) => {
    const { customer_name, passport_no, email, adress, country, isffc, transaction_record} = req.body
    const response = await data.query('INSERT INTO customer (customer_name, passport_no, email, adress, country, isffc, transaction_record) VALUES ($1, $2, $3, $4, $5, $6, $7)', [customer_name, passport_no, email, adress, country, isffc, transaction_record]);
    console.log(response);
    res.redirect('/customers')

}

// module.exports.postDeleteCustomer = async (req, res, next) => {
//     const passport_no = req.params.passport_no;
//     const response = await data.query('DELETE FROM CUSTOMER WHERE passport_no = $1', [passport_no]);
//     console.log(response);
//     console.log(passport_no);
//     res.json(`Customer ${passport_no} deleted`)
// }


module.exports.deletecustompls = async (req, res) => {
    const passport_no = req.params.passport_no;
    const response = await data.query('DELETE FROM CUSTOMER WHERE passport_no = $1',[passport_no]);
    console.log(response);
    console.log(passport_no);
    res.json(`Customer ${passport_no} deleted`);
}
