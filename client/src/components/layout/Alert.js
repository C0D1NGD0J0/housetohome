import React from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux";

const styleAlert = {
	width: "40%",
	textAlign: 'center',
	marginBottom: 0,
	position: 'absolute',
	borderRadius: 0,
	top: "5rem",
	opacity: "0.5",
	right: "5rem",
	textTransform: 'uppercase'
};

const Alert = ({ alerts }) =>
	alerts !== null && alerts.length > 0 && alerts.map((alert, i) =>(
		<div className={`alert alert-${alert.type}`} key={alert.id} style={styleAlert}>
			{alert.msg}
		</div>
	));

Alert.displayName = 'Alert';

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state =>({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
