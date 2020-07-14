const model = require('../config/modelLoader');

class midiaSocialRepositorio{

    constructor(){}


    async update(id, data) {
        await model.MidiaSocial.update(data,{
            where: { id: id }   
        });
    }

    async create(data){  
        await model.MidiaSocial.create(data);
     }

}

module.exports = midiaSocialRepositorio;