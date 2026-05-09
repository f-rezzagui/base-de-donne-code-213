const moodObjects = require ("../modeles/productmodel")


exports.getMoods = (req, res) =>{
    res.json(moodObjects)
}

exports.filterMoods = (req, res) => {
    const letter = req.params.letter;
    
    const filteredMoods = moodObjects.filter((m) => 
        m.mood.toLowerCase().includes(letter)
    );
    console.log(filteredMoods)

    res.json( filteredMoods);
};

exports.deletMoode = (req, res) => {
    const delet = req.params.id;

   const moodObjects2 = moodObjects.filter((mood) => mood.id != delet);
    res.json(moodObjects2)
}