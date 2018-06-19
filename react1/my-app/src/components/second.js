import React, { Component } from 'react';

 const Second=(props)=> {

        return (
            <p>Reverse String: {stringReversal(props.name)}</p>

        );
    
        function stringReversal(name){
            return name.split("").reverse().join("");
        }
}
export default Second;