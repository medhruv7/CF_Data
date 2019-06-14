import React from "react"

const Result = props => (
    <div>
        {
            props.handle && <p> Handle: 
            {props.handle} </p>
        }
        
        {
            props.contestName && <p> Contest: 
            {props.contestName} </p>
        }
        {
            props.rank && <p> Rank: 
            {props.rank} </p>
        }
        {
            props.error && <p>{props.handle} </p>
        }
    </div>
);

export default Result
