const routes = require('express').Router();
const soap = require('soap');

routes.get('/consultaCEP/:CEP', (req, res) => {
    
    try {
        
        const { CEP } = req.params;   
                
        soap.createClient(process.env.CORREIOS_WSDL_URL, function(err, client) {    
            if (err) 
                return new Error(err);
        
            const args = {
                cep: CEP
            };
            
            client.consultaCEP(args, function(err, result) {

                if (err) {
                    return res.status(400).send({ error: 'Não foi possível consultar o CEP informado.' });
                }

                return res.send(result);
            });
        });
        
    } catch(err) {

        return res.status(400).send({ error: 'CEP não encontrado.' });

    }

});

module.exports = routes;