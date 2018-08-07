import React from 'react'

class DisplayUser extends React.Component {
    
    render() { 
        return ( 
            <div>
                
                {this.props.myId}, {this.props.myAge}, {this.props.myName},{this.props.myDept}
            </div>
         );
    }
}
 
export default DisplayUser;