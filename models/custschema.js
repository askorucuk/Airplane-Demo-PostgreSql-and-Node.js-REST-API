const db = require('../db/custom')

module.exports = class Customer {

    constructor(customer_name, passport_no, email, adress, country, isffc, transaction_record){
            this.customer_name = customer_name;
            this.passport_no = passport_no;
            this.email = email;
            this.adress = adress;
            this.country = country;
            this.isffc = isffc;
            this.transaction_record = transaction_record;
    }


}

