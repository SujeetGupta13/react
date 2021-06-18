import React, { Component } from 'react';

class ConditionalRendering extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn:true
        }
    }
    
    render() {

        //4th approach Short circuit operator
        return this.state.isLoggedIn && <div>Welcome Sujeet</div>
        //3rd approach
        // return this.state.isLoggedIn ? (
        //    <div>Welcome Guest</div>
        // ) : (
        //    <div>Welcome Sujeet</div>
        // )

        //2nd approach
        // let message
        // if(this.state.isLoggedIn){
        //     message =  <div>Welcome Guest</div>
        // }
        // else{
        //     message =  <div>Welcome Sujeet</div>
        // }
        //   return <div>{message}</div>;
        //1st approach
        // if(this.state.isLoggedIn){
        //   return  <div>Welcome Guest</div>
        // }
        // else{
        //   return  <div>Welcome Sujeet</div>
        // }
    }
}

export default ConditionalRendering;