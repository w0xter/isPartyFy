const spotify = require('../middlewares/spotifyController')
exports.hello =  function(req, res){
    res.send("Hello World");
    console.log("Hello World")
}

exports.createSession = async (req, res) => {
    let token = "NO RESPONDIDO"
    try{
        token = await spotify.getToken()
    }catch(err){
        console.log(err)
        token ="ERROR GRANDE"
    }
    res.send(token)
}
