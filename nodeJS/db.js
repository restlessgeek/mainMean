const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudDB',(err) =>
{
    if(!err)
    {
        console.log('connection made');
    }
    else
    {
        console.log('Err in Connection' + JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;