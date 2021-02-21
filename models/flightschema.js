const db = require('../db/custom')

module.exports = class Flight {

    constructor(flight_number, leg_number, departure_airportcode, arrival_airportcode, scheduled_departuretime, scheduled_arrivaltime, mileages){
            this.flight_number = flight_number;
            this.leg_number = leg_number;
            this.departure_airportcode = departure_airportcode;
            this.arrival_airportcode = arrival_airportcode;
            this.scheduled_departuretime = scheduled_departuretime;
            this.scheduled_arrivaltime = scheduled_arrivaltime;
            this.mileages = mileages;
    }


}