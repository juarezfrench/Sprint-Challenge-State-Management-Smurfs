import React from 'react';
import {fetchSmurfs} from '../actions'
import { connect } from "react-redux";

const Smurf = props => {
console.log('Smurf.js -> %cprops:', 'color: darkMagenta', props)
    return (
        <div>
          
        <h3>{props.smurfDepot.name}</h3>
        <p>{props.smurfDepot.height}</p>
        
        
       
        </div>
    )
    
    }

    // export default Smurf;{name: "Brainey", age: 200, height: "5cm", id: 0}
    const mapStatetoProps = state => {
        return {
            smurfDepot: state.smurfDepot,
            isFetching: state.isFetching,
            error: state.error
        };
    };
    
    export default connect(
        mapStatetoProps,
        {fetchSmurfs}
    )(Smurf);