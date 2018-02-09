import React, { Component } from 'react';

class SearchBar extends Component {
    submitFilter = (event) => {
        const criterion = this.input.value;
        this.props.filterPosts(criterion);
    }

    render() {
        console.log('vvv TAKE A LOOK IN HERE vvv');
        console.log(this.props);
        console.log('Does filterPosts even exist?');
        console.log(this.props.filterPosts);
        return (
            <div className='SearchBar'>
                <input className='SearchBar-field' 
                type='text' onChange={this.submitFilter} 
                ref={input => this.input = input} 
                placeholder='Search'
                style={{
                    height: '28px',
                    borderRadius: '4px',
                    outline: 'none',
                    border: '1px solid white'
                }}
                ></input>
            </div>
        );
    }
};

export default SearchBar;
