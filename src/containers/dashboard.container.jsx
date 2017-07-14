import React, { Component } from 'react';
import {increment, decrement} from '../actions/demo.actions';
import { connect } from 'react-redux';

class DashboardContainer extends Component {

  constructor() {
    super();
    
    this.increment10 = this.increment10.bind(this);
    this.increment20 = this.increment20.bind(this);
    this.decrement5 = this.decrement5.bind(this);
  }

  increment10() {
    return this.props.increment(10);
  }

  increment20() {
    return this.props.increment(20);
  }

  decrement5() {
    return this.props.decrement(5);
  }

  render() {
    return (
      <div className="dashboard">
        <p>
          Dashboard, counter: {this.props.counter}
        </p>
        <button onClick={this.increment10}>+10</button>
        <button onClick={this.increment20}>+20</button>
        <button onClick={this.decrement5}>-5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.demoReducer.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(increment(value));
    },
    decrement: (value) => {
      dispatch(decrement(value));
    }
  };
};

const ViertualDashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);

export default ViertualDashboardContainer;
