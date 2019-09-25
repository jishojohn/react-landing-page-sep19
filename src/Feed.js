import React, { useContext }  from 'react';
import AppContext from './AppContext';

const FeedCard = (prop) => {
    return (
        <div className="card">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{prop.name}</h5>
                <p className="card-text">{prop.comment}</p>
                <a href="#" className="btn btn-primary">View profile</a>
            </div>
        </div>
    )
}

const Feed = () => {
    // AppContent is a component created in App.js
    // useContext will access the values of AppContext
    const [globalState, setGlobalState] = useContext(AppContext);

    if(globalState.loggedIn) {
    return (
        <div className="feed container">
            { 
                // {user: 'Jim', comment: 'This comment is from Jim'},
                // {user: 'Jane', comment: 'Going to tennis practice tonight'},
                // {user: 'Mohammad', comment: 'Big traffic near dubai'},
                // {user: 'Mary', comment: 'Graduating in 1 week! #exicted'}

                globalState.feed.map(
                    entry => <FeedCard 
                        name={entry.user} 
                        comment={entry.comment} />
                ) 
            }
            <div className="form-group">
                <textarea className="form-control" 
                placeholder="Enter your comment"/>
                <button className="btn btn-primary">Post Comment</button>
            </div>
        </div>
    )
    } else {
        return (
            <div />
        )
    }
}

export default Feed;