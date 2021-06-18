import React from 'react';

const withHocCounter = (WrappedComponent, incrementNumber) => {
    class WithHocCounter extends React.Component{
        constructor(props) {
            super(props);
             this.state ={
                 count:0
             }
        }
        incrementCount = () =>{
            this.setState( prevState =>{
                return {count: prevState.count+incrementNumber}
            }
           )
        }
        render(){
            console.log(this.props.name)
            // return (<OriginalComponent name='Viswas' />)
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
                
        }
    }
    return WithHocCounter;
};

export default withHocCounter