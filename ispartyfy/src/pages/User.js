import UserHeader from '../components/user/UserHeader'
import UserContent from '../components/user/UserContent'

import React from 'react'
export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Luis Pozo',
            username:'w0xter',
            parties:0,
            ownedParties:0,
            imgLink:'https://i.picsum.photos/id/986/100/100.jpg'
        }
    }
    render(){
        return(
            <div className="secBg prin fullScreenSection">
                <UserHeader parentData={this.state}></UserHeader>
                <UserContent></UserContent>
            </div>
        );
    }
}