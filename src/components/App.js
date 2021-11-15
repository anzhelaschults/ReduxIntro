import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCounterValue} from "../store/actionCreator";

//redux - tool to manage state of app

// dispatch connects reducer with data

class App extends Component {


    render() {
        return (
            <div className="container">

                <h2>Class used</h2>

                <p>{this.props.counter}</p>
                <button
                    onClick={this.props.addOne}
                    className="btn btn-sm btn-info" >+1</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}

// mapDispatchToProps - input function dispatch (sends action to reducer) returns function addOne

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: () => dispatch( addCounterValue() )
    }
}
// function connect - we connect all our functions with app
export default connect( mapStateToProps, mapDispatchToProps )(App);