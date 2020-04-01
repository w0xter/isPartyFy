import React from 'react'
import Header from './Header'
export default function Layaout(props){
        return(
           <div>
              <Header />
                 {props.children }
           </div>
        );
}