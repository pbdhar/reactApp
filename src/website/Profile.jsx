import React from 'react'

class Profile extends React.Component {
    
    render() { 
        return (
            <div>
                <h1>Profile</h1>
                <p>This is profile of the friend selected</p>
                <table border="1">
                <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Age</th>                                               
                            </tr>
                    </thead>
                    <tbody>
                    <tr>
                                <th>Purnendu</th>
                                <th>Kol</th>
                                <th>26</th>                                               
                            </tr>
                            <tr>
                                <th>Zahid</th>
                                <th>Kol</th>
                                <th>26</th>                                               
                            </tr>
                    </tbody>
                </table>
            </div>
          );
    }
}
 
export default Profile;