import React from 'react'

const usersList = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section user-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Helllo!
                    </span>
                    <p> Welcome your name is :{id}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div><b> Your email  : anonymous@mail.com </b> </div>
                    <div> <b> Your Name : Anonymous  </b></div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default usersList
 
