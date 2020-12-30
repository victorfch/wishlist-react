import React from "react";

const WishInput = () => (
  <fieldset className="wish-input">
    <legend className="wish-input__label">New wish</legend>
    <input
      className="wish-input__field"
      type="text"
      placeholder="Enter your wish here"
    />
  </fieldset>
);

export default WishInput;
