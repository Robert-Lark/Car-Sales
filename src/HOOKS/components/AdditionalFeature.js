import React from 'react';
import { useDispatch } from "react-redux";
import {buyItem} from "../Actions/carActions";

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={() => dispatch(buyItem(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature
