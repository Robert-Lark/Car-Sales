import React from 'react';
import { connect } from "react-redux";
import {buyItem} from "../Actions/carActions";

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={() => props.buyItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect (null, { buyItem })(AdditionalFeature)
