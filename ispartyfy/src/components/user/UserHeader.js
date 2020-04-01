import React from 'react'
import {FaCompactDisc} from "react-icons/fa";
import {IoIosPeople,IoMdShare} from "react-icons/io";
import {MdSpeakerGroup, } from 'react-icons/md'
export default class UserHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-1 text-center mx-auto">
                        <img className="rounded img-fluid mx-auto" src={this.props.parentData.imgLink} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-4 mx-auto mt-2">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="text-center">{this.props.parentData.name} || @{this.props.parentData.username}</h5>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-3"><h5><IoIosPeople/><span className="badge">0</span></h5></div>
                            <div className="col-3"><h5><FaCompactDisc/><span className="badge">{this.props.parentData.ownedParties}</span></h5></div>
                            <div className="col-3"><h5><MdSpeakerGroup/><span className="badge">{this.props.parentData.parties}</span></h5></div>
                            <div className="col-3"><h5><IoMdShare/></h5></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}