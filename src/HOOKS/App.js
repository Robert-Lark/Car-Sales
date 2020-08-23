import React, { useReducer} from 'react';
import carReducer, {initialState} from './Reducers/Reducer';
import Header from './components/Header';
import {connect} from 'react-redux'
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';



const App = (props) => {



  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={props.buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


export default (App);
