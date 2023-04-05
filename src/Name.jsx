import React from "react";
import Prototypes from 'prop-types'

class Name extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render() { 
        return <p> Hey { this.props.name}</p>
    }
}

//define the default properties
// Name.defaultProps = {
//     name: "Default Name"
// }

Name.Prototypes = {
     name:Prototypes.string.isRequired
}
 export default Name;