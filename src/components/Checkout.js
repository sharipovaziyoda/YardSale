import React, { useState } from "react";
import { country } from "./Country";

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    cardNumber: "",
    zipCode: "",
    email: "",
    address: "",
    expirationDate: "",
  });

  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [num, setNum] = useState();
  const handleChangeInput = (e) => {
    setNum(e.target.num);
  };
  const [month, setMonth] = useState();
  const handleChangeMonth = (e) => {
    setMonth(e.target.month);
  };
  const [formError, setFormError] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field)) {
      setFormError("Please fill all the text boxes above");
      return;
    }

    alert(`Payment successful! Total: $${total.toFixed(2)}`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <form onSubmit={handleSubmit}>
        <div className="chek">
          <p className="text">Full Name</p>
          <input
            className="register"
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <br />
          <p className="text">Country</p>
          <select
            className="register"
            id="country"
            name=" choose a country"
            placeholder="choose a country"
            value={formData.country}
            onChange={handleInputChange}
          >
            <option value="choose a country" disabled></option>
            {country.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <br />
          <p className="text">Card Number</p>

          <input
            className="register"
            id="quantity"
            type="number"
            placeholder="1234 1234 1234 1234"
            value={value}
            onChange={handleChange}
            step="1"
            min="-1000"
          />

          <br />
          <p className="text">Zip Code</p>
          <input
            className="register"
            id="quantity"
            type="number"
            placeholder="11655"
            value={num}
            onChange={handleChangeInput}
            step="1"
            min="-11655"
          />
          <br />
          <p className="text">Email</p>
          <input
            className="register"
            type="email"
            name="email"
            placeholder="John@doe.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <p className="text">Address</p>
          <input
            className="register"
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <br />
          <p className="text">Expiration Date</p>
          <input
            className="register"
            id="quantity"
            type="number"
            placeholder="MM/YY"
            value={month}
            onChange={handleChangeMonth}
            step="1"
            min="-1000"
          />
          <br />
          {formError && <p style={{ color: "red" }}>{formError}</p>}
        </div>
        <button type="submit" className="submit">
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
}

export default Checkout;
