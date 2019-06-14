import React from 'react';
import Titles from './components/Titles'
import Result from './components/Result'
import Form from './components/Form'

const API_KEY = "d0c60883f4a9d5c47d9346011da1d4e06cfca55b"

class App extends React.Component
{
    state = {
        handle: undefined,
        contestName : undefined,
        rank : undefined,
        error : undefined
    }
    getSolves = async (e) =>
    {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const api_call = await fetch(`http://codeforces.com/api/user.rating?handle=${username}`);
        const data = await api_call.json();
        
        console.log(data.result[0].contestName)
        console.log(data.result[0].rank)
        if(username)
        {
            this.setState({
                handle: data.handle,
                contestName : data.contestName,
                rank : data.rank
            })
        }
        else
        {
                this.setState({
                    error : "Please enter a username"
                })
        }
    }
    
    render()
    {   return(
        <div>
            <Titles />
            <Result 
                handle = {this.state.handle}
                contestName = {this.state.contestName}
                rank = {this.state.rank}
                error = {this.state.error}
            />
            <Form getSolves = {this.getSolves}/>
        </div>
        );
    }
};
export default App;
