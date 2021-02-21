const db = require('../db/custom')

module.exports = class Airport {

    constructor(airport_code, name_, city, country){
            this.airport_code = airport_code;
            this.name_ = name_;
            this.city = city;
            this.country = country;
    
    }


}