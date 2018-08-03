import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Emaily'
        description='$1 for 5 email credits'
        amount={100}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="waves-effect waves-light btn-small teal lighten-1"> Add Credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Payments);

