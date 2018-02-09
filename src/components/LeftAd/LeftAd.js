import React from 'react';
import './LeftAd.css';

class LeftAd extends React.Component {
    state = {
        displayFriends: false
    };

    render() {
        const showFriends = this.state.displayFriends;

        return (
            <div className='connections'>
                <div>100</div>
                <h4>Your connections</h4>
                <button 
                onMouseLeave={this.mouseLeaveHandler} 
                onMouseEnter={() => { console.log('entered') }}
                onClick={this.toggleFriends}>
                
                {showFriends === true ? 'Hide' : 'Show'} friends
                </button>
                {this.state.displayFriends === true ? (
                <ul>
                    {this.props.friends.map((friend) => {
                        return <li key={friend.id}>{friend.name}</li>
                    })}
                </ul>
                ) : null}
            </div>
        )
    }

    toggleFriends = () => {
        this.setState((currentState) => {
            return  {displayFriends: !currentState.displayFriends }});
    };

    mouseLeaveHandler = () => {
        console.log('left');
    };
}

export default LeftAd;




// function LeftAd(props) {
//     const ad = props.ad;
//     return (
//         <div className = 'LeftAd'>
//             <h3 className='number'></h3>
//             <p> Your connections</p>
//             <p> See all </p>
//         </div>
//     );
// };
