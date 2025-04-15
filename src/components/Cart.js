import React from "react";
import { Link } from "react-router-dom";
import { number } from "./Numbers";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cart({ cartItems, removeFromCart }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {cartItems.length === 0 ? (
        <p>No product in your cart!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>
                  ${item.price} x {item.quantity}
                </p>

                <select id="country" className="number" name="country">
                  <option value="" disabled></option>
                  {number.map((number, index) => (
                    <option key={index} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
                <RiDeleteBin6Line
                  onClick={() => removeFromCart(item)}
                  className="delete"
                />
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <table>
              <tr>
                <td>Subtotal:</td>
                <td className="num">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Taxes:</td>
                <td className="num">${taxes.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td className="num">${total.toFixed(3)}</td>
              </tr>
            </table>
          </div>
          <Link to="/checkout">
            <button className="checkout">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
