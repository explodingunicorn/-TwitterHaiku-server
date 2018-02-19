import React, { Component } from 'react';
import Haiku from '../haiku';
import request from '../../requests';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        console.log('getting data');
        request.user.get.all(this.props.match.params.id).then((res) => {
            this.setState({data: res.data});
        })
        .catch((err) => {
            console.log('There was an error retrieving the data');
        })
    }

    renderHaikus() {
        return this.state.data.tweets.map((tweet) => {
            return <Haiku key={tweet} haikuObj={tweet}/>
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>User Page id: { this.props.match.params.id }</h1>
                <div className="main-container">
                    <div className="haiku-grid">
                        {
                            this.state.data ? 
                                this.renderHaikus()
                            :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default User;