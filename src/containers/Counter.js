import React , {Component} from 'react';
import { connect } from 'react-redux';
import '../containers/Counter.css';

class Counter extends Component{

    state = {
        counter: 0,
        data: null
    };
    callAPI() {
        fetch("http://localhost:8080/")
            .then(response => response.text())
            .then(response => console.log(response));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <div>
            <div className='headerStyle'> Counter Application</div>   
            <div className='topDiv'>
                
                <button className='buttonStyle' onClick = {this.props.onIncrementCounter}> + </button>
                <div className='Counter'> {this.props.ctr} </div>
                <button className='buttonStyle' onClick = {this.props.onDecrementCounter}> - </button>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.counter 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: ()  => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'})
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);