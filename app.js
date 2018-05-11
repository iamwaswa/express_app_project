const express = require(`express`);
const app = express();

app.get(`/`, function (req, res) {
    res.send(`Hi there, welcome to my assignment!`);
});

app.get(`/speak/:animal`, function (req, res) {
    const animal = req.params.animal;
    res.send(`The pig says ${produceAnimalSound(animal)}`);
});

function produceAnimalSound(animal) {

    if (animal === `pig`) {
        return `\'Oink\'`;
    } else if (animal === `cow`) {
        return `\'Moo\'`;
    } else if (animal === `dog`) {
        return `\'Moo\'`;
    }

}

app.get(`/repeat/:word/:numRepeats`, function (req, res) {
    const word = `${req.params.word} `;
    const numRepeats = req.params.numRepeats;
    res.send(`${repeatHello(word, numRepeats)}`);
});

function repeatHello(word, numRepeats){

    const result = ``;
    const targetLength = word.length * numRepeats;

    return result.padEnd(targetLength, word).trim();
}

app.get(`*`, function (req, res) {
    res.send(`Sorry, page not found...What are you doing with your life?`);
});

app.listen(8080, function(){
    console.log(`Server is running on port 8080`);
})