import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/homeAction';
import { Wrapper } from './styles';

class Home extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  render() {
    return (
      <Wrapper>
        <button onClick={this.simpleAction}>Test redux action</button>
        <p> {this.props.homeReducer.data.title} </p>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
