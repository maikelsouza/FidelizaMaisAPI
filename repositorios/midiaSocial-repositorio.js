const model = require('../config/modelLoader');

class midiaSocialRepositorio{

    constructor(){}


    async update(id, data) {
        model.MidiaSocial.update(data,{
            where: { id: id }   
        });
    }

    async create(data){  
        model.MidiaSocial.create(data);
     }

}

module.exports = midiaSocialRepositorio;