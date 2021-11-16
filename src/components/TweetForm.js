import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTweet} from '../redux/actionCreators'

class TweetForm extends Component {

    state = {
       imageUrl: '',
       description: '' ,
       userID: localStorage.token
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTweet(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea type='text' value={this.state.description} onChange={this.handleChange} placeholder="What's happening?" name="description"></textarea>
                <br/>
                <label>Add URL </label>
                <input type="text" value={this.state.imageUrl} name="imageUrl" />
                <br/>
                <input type="submit" value="Post Tweet" />
             </form>
        )
    }
}


export default connect(null, {addTweet})(TweetForm);