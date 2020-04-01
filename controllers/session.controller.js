const spotify = require('../middlewares/spotifyController')
exports.hello =  function(req, res){
    res.send("Hello World");
    console.log("Hello World")
}

exports.createSession = (req, res) => {
    spotify.getToken().then((response) => {
        return spotify.createPlaylist(response.data.access_token);
    }).then((data) => {
        console.log('Playlist creada')
        console.log(data)
        return res.status(200).send({message:'Playlist created'})
    }).catch((err) => {
        console.log('Ha habido un error')
        console.log(err)
        return res.status(500).send({message:'Internal server error'})
    });
}
