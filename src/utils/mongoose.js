module.exports = {
    multipleMgToObj: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },

    mgToObj: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}