import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { buyItem } from "../Actions/carActions";
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
	return {features: state.additionalFeatures};
};
const mapDispatchToProps = { buyItem };
export default connect(mapStateToProps, null)(AdditionalFeature);


