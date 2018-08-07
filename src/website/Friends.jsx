import React from 'react'
import axios from 'axios'
import DisplayUser from './DisplayUser'
class Friends extends React.Component {
    
    constructor(){
        super()
        this.state=
        {
             remoteUsers:[]
        }
        this.getRemoteUsers=this.getRemoteUsers.bind(this)
    }
    componentDidMount()
    {
        console.log()
        this.getRemoteUsers()
    }
    getRemoteUsers()
    {
        axios.get("http://localhost:8080/employee").then((res)=>{
            console.log("Axios call was success")
            console.log(res.data)
            this.setState({remoteUsers:res.data})
            console.log("value of state:")
            console.log(this.state.remoteUsers)
        })

    }
    render() { 
        const allusers=this.state.remoteUsers.map((employee)=>(
            <DisplayUser
            key={'user-'+employee.id}
            myId={employee.id}
            myName={employee.name}
            myAge={employee.age}
            myDept={employee.dept}
            ></DisplayUser>
        ))
        return ( 
            <div>            
                <h1>Friends</h1>
                
                    {allusers}
                    
                
            </div>
         );
    }
}
 
export default Friends;