const CREDS = 'NzkwMzc2ZmU1Njg4NGI1N2E5OGRmNjE0ODVkOTExMGU6N2M2N2YyMjRkZjdlNGY3ZjgwMjEwZTUxYzMxNjBhZDU='
const axios = require('axios')
const API = 'https://api.spotify.com/v1/'
const APIplaylists = API + 'playlists/'
const APIsearch = API + 'search/'

/*
 * MANAGING AUTH
 */
exports.getToken = async () => {
    let result= null
    try{
        result = await axios.post(
            'https://accounts.spotify.com/api/token',
            {'grant_type':'client_credentials'},
            {'Authoritation': `Basic ${CREDS}`,
            'Content-Type': 'application/x-www-form-urlencoded'}
        )
    }
    catch(err){
        console.log(err)
        result = 'FALLO'
    }
    return result
}

/*
 * MANAGING TRACKS OF A PLAYLIST 
 */
exports.reorderPlaylist = (pId, tId, uId) => {
    axios({
        method:'put',
        url:`${APIplaylists}${pId}/tracks`
    })
}
exports.removeTrack = (pId, tId, uId) => {
    axios({
        method:'delete',
        url:`${APIplaylists}${pId}/tracks`
    })
}
exports.addTrack = (pId, tId, uId) => {
    axios({
        method:'post',
        url:`${APIplaylists}${pId}/tracks`
    })
}
exports.getPlaylistTracks = async (pId) => {
    axios({
        method:'get',
        url:`${APIplaylists}${pId}/tracks`
    })
}
/*
 * MANAGING PLAYLIST
 */
exports.getPlaylist = async (pId) => {
    axios({
        method:'get', 
        url:`${APIplaylists}${pId}`
    })
}
exports.createPlaylist = async (token) => {
    axios({
        method: 'post',
        url: `${API}user/${uId}/playlists`,
        data: {
        }
    });
}

/*
 * MANAGING SEARCH
 */

 exports.sendQuery = (query) => {
    axios({
        method:'get',
        url:`${APIsearch}?${query}`
    })
 }