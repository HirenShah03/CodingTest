import React, { Component } from 'react';

class First extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="first">
                    <label for="name">Enter String</label>
                <input type='text' id='name'
                   value={this.state.term} onChange={(event)=> this.changeName(event.target.value)} />
            </div>
        );
    }
    changeName(term) {
        this.setState({term});
        // console.log(term);
        this.props.onChange(term);
    }
}
export default First;