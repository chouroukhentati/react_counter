import React,{ Component }from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";
class App extends Component {
  render() {
  return (
    <div className="App">
     
     <div className="label">
          your counter: <span>{this.props.count}</span>
        </div>
        <button class="btn"onClick={this.props.onCountUp}>Count UP</button>
        <button class="btn" onClick={this.props.onCountDown}>Count Down</button>
       
      </div>
    
  );
}
}
const mapStateToProps = state => {
  return {
    count: state.count
   
  };
};
const mapDispachToProps=dispatch =>
{ return{onCountUp:()=>dispatch(actionCreator.countUP(1)),
onCountDown:()=>dispatch(actionCreator.countDOWN(1))};};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

