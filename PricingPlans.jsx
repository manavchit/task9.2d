import React, { Component } from 'react';
import "./PricingPlans.css";

export default class PricingPlans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      freePlanActivated: false
    };
  }

  handleFreePlanActivation = () => {
    this.setState({ freePlanActivated: true });
    // Show an alert when the free plan is activated
    window.alert("Free Plan Activated!");
  };

  render() {
    const { freePlanActivated } = this.state;

    return (
      <div className="pricing-plans">
        <div className="pricing-card">
          <h2>Free Plan</h2>
          <p>Get started with our basic features.</p>
          <button
            className="free-button"
            onClick={this.handleFreePlanActivation}
            disabled={freePlanActivated}
          >
            {freePlanActivated ? "Free Plan Activated" : "Free"}
          </button>
        </div>
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p>Unlock all premium features for maximum value.</p>
          <ul>
            {/* Premium plan features */}
          </ul>
          <p>Price: 1000/- rs/yearly</p>
          <a href='https://buy.stripe.com/test_bIY033cYiaJ7b3GdQQ'>
            <button className="premium-button">Get Premium</button>
          </a>
        </div>
      </div>
    );
  }
}