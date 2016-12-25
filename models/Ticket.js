var mongoose = require('mongoose');
var TicketSchema = new mongoose.Schema({
  name: String, 
  imgurl: String,
  price: Number,
  currency: String,
  startdate: String,
  enddate: String
});
module.exports = mongoose.model('Ticket', TicketSchema);