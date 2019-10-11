import React, {useEffect} from "react";
import { connect } from "react-redux";
import Smurf from '../components/Smurf'
import {fetchSmurfs} from '../actions'

const SmurfDepot = props => {
console.log('SmurfDepot.js -> %cprops:', 'color:peru', props)


    useEffect(() => {
        props.fetchSmurfs()
        // fetchSmurfs()
       
    },[])
    if (props.isFetching) {
    return <h2>Loading Smurfs...</h2>
    }
	return (
    <div>
            {props.error && <p>props.error</p>}
            {props.smurfDepot.map(smurf =>(
                <Smurf key = {smurf._id} smurf = {smurf}/>
            ))}
    
    
        </div>
        )
    };
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
    )(SmurfDepot);
    
     