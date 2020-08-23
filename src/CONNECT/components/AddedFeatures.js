import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import { removeFeature } from "../Actions/carActions";


const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
//COULD BE DONE THIS WAY
const mapDispatchToProps = {
  removeFeature
}

const mapStateToProps = state => {
  return { 
    features: state.car.features
  }
}

export default connect(mapStateToProps)(mapDispatchToProps)(AddedFeatures);

// OR THIS WAY
// export default connect(state => {features: state.car.features}, null) (AddedFeatures);
