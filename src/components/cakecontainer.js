import React from 'react';
import { connect } from 'react-redux';
import { BuyCake } from './redux/CakeAction';

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Cake container : {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   dispatch action will be function only not a component
    buyCake: () => dispatch(BuyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
