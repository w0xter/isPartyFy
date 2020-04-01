const CREDS = 'NzkwMzc2ZmU1Njg4NGI1N2E5OGRmNjE0ODVkOTExMGU6N2M2N2YyMjRkZjdlNGY3ZjgwMjEwZTUxYzMxNjBhZDU='
const axios = require('axios')
const qs = require('querystring')
const API = 'https://api.spotify.com/v1/'
const APIplaylists = API + 'playlists/'
const APIsearch = API + 'search/'
const uId = 'luispozo_'

/*
 * MANAGING AUTH
 */
exports.getToken = () => {
    return new Promise((resolve, reject) => {
        let data = {
            grant_type:'client_credentials'
        }
        let options = {
            headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': ' Basic ' + CREDS,
            }
        }
        axios.post(
                'https://accounts.spotify.com/api/token',
                qs.stringify(data),
                options
            ).then((data) => {
                resolve(data)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    });

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
exports.createPlaylist = (token) => {
    return new Promise((resolve, reject) => {
        let data = {
            name:'isPartiFyPOSTMAN',
            public:true
        }
        let options = {
            headers:{
                'Authorization': `Bearer {${token}}`,
                'Content-Type':'application/json'
            }
        }
        return axios.post(
        `${API}users/{${uId}}/playlists`,
            qs.stringify(data),
            options
        ).then((data) => {
            resolve(data);
        }).catch((err) => {
            console.log(err)
            reject(err)
        });
    })

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