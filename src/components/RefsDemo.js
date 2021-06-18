import React, { Component } from 'react';

class RefsDemo extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); //by creating this React Ref inside constructor, we make sure that it's availble throuhgout component.
        //above way is 1st way of creating Refs . 2nd way is by using callback way and thisis older way.
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef =element
        }
    }
    
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus();
        }
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <div>Enter your Name :</div>
                 <input type='text' ref={this.inputRef}/> {/*our goal is to focus on input field as soon as page loads. ref is reserved keyword */}
                 <input type='text' ref={this.setCbRef}/>
                 <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;