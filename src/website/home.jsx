import React from 'react'
import axios from 'axios'
class Home extends React.Component {
    
    constructor()
    {
        super()
        this.state=
        {
            name : '',
            dept : '',
            age : ''
        }
        this.captureFriendName=this.captureFriendName.bind(this)
        this.captureFriendUsername=this.captureFriendUsername.bind(this)
        this.captureFriendEmail=this.captureFriendEmail.bind(this)
        this.OnFriendSubmit=this.OnFriendSubmit.bind(this)
    }
    captureFriendName(eventObject)
    {
        console.log(eventObject.target.value)
        this.setState({name:eventObject.target.value})
    }
    captureFriendUsername(eventObject)
    {
        console.log(eventObject.target.value)
        this.setState({age:eventObject.target.value})
    }
    captureFriendEmail(eventObject)
    {
        console.log(eventObject.target.value)
        this.setState({dept:eventObject.target.value})
    }
    OnFriendSubmit(eventObject)
    {
        eventObject.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/employee",this.state).then(
            (Response=>
            {
                console.log("Post Success")
            })
    )
    }
    render() { 
        return ( 
                <div>

                    <h1>Home</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     
                    </p>
                    
                    <div>
                        <h3>AddFriends</h3>
                        <form onSubmit={this.OnFriendSubmit}>
                        Name:<input type="text" value={this.state.name} onChange={this.captureFriendName}/><br/>
                        Age:<input type="text" value={this.state.age} onChange={this.captureFriendUsername}></input><br/>
                        dept:<input type="text" value={this.state.dept} onChange={this.captureFriendEmail}></input><br/>
                        <button type="submit">Add Employee</button>
                        </form>
                    </div>
                </div>


         );
    }
}
 
export default Home;