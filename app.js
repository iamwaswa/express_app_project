const express = require(`express`);
const app = express();

app.get(`/`, function (req, res) {
    res.send(`Hi there, welcome to my assignment!`);
});

app.get(`/speak/:animal`, function (req, res) {
    const animal = req.params.animal;
    
    if (hasAnimal(animal)){
        res.send(`The ${animal} says ${animalSounds()[animal]}`);
    } else {
        res.send(`The animal does not exist!`);
    }
});

function hasAnimal(animal){
    return animalSounds().hasOwnProperty(animal);
}

function animalSounds() {
    return {
        pig: `\'Oink\'`,
        cow: `\'Moo\'`,
        dog: `\'Woof\'`
    };
}

app.get(`/repeat/:word/:numRepeats`, function (req, res) {
    const word = `${req.params.word} `;
    const numRepeats = Number(req.params.numRepeats);
    res.send(`${repeatWord(word, numRepeats)}`);
});

function repeatWord(word, numRepeats){

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