const moodObjects = require ("../modeles/productmodel")


exports.getMoods = (req, res) =>{
    res.render("moods",{moodObjects})
}

exports.filterMoods = (req, res) => {
    const letter = req.params.letter;
    console.log(letter)
    
    const filteredMoods = moodObjects.filter((m) => 
        m.mood.toLowerCase().includes(letter)
    );
    console.log(filteredMoods)

    res.render('moods', { 
        moodObjects: filteredMoods,
    });
};

