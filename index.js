// ---------------------------------------------------------------------------------------------------------------------
// Markov text generator for a PDF source
//
// ---------------------------------------------------------------------------------------------------------------------

const fs = require('fs');

const pdf = require('pdf-parse');
const markov = require('markov-text-generator').default;

// ---------------------------------------------------------------------------------------------------------------------

let response = fs.readFileSync('/home/todom/Downloads/Plf Response to MTD.pdf');
let petition = fs.readFileSync('/home/todom/Downloads/Plaintiff\'s Second Amended Petition.pdf');

return Promise.all([pdf(response, { max: 33 }), pdf(petition, { max: 28 })])
    .then(function(data)
    {
        const gen = new markov();
        let text = data[0].text + data[1].text;

        gen.setTrainingText(text);

        for(var i = 0; i < 10; i++)
        {
            console.log(gen.generateText(50));
            console.log();
        }
    });
// ---------------------------------------------------------------------------------------------------------------------
