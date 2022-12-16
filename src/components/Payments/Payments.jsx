import React from "react";
import "./style.css";
import "./Payments.css";
import Footer from "../../layouts/Footer";
import paymentBanner from '../../image/PaymentsBanner.png'

export default function Payments() {
  return (
    <div className="containerPaymentsAll">
      <img className="paymentsBanner" src={paymentBanner} alt="payments banner" />
    <div className="body-payments">
      <main>
        <section class="checkout-form">
          <form action="#!" method="get">
            <h6>Contact information</h6>
            <div class="form-control">
              <label for="checkout-name">Name</label>
              <div>
                <span class="fa fa-user-circle"></span>
                <input
                  type="text"
                  id="checkout-name"
                  name="checkout-name"
                  placeholder="Enter you name..."
                />
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-email">Last Name</label>
              <div>
                <span class="fa fa-envelope"></span>
                <input
                  type="email"
                  id="checkout-email"
                  name="checkout-email"
                  placeholder="Enter your last Name..."
                />
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-phone">Phone</label>
              <div>
                <span class="fa fa-phone"></span>
                <input
                  type="tel"
                  name="checkout-phone"
                  id="checkout-phone"
                  placeholder="Enter you phone..."
                />
              </div>
            </div>
            <br />
            <h6>Shipping address</h6>
            <div class="form-control">
              <label for="checkout-address">Address</label>
              <div>
                <span class="fa fa-home"></span>
                <input
                  type="text"
                  name="checkout-address"
                  id="checkout-address"
                  placeholder="Your address..."
                />
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-city">State</label>
              <div>
                <span class="fa fa-building"></span>
                <input
                  type="text"
                  name="checkout-city"
                  id="checkout-city"
                  placeholder="Your state..."
                />
              </div>
            </div>
            <div class="form-group">
              <div class="form-control">
                <label for="checkout-country">Country</label>
                <div>
                  <span class="fa fa-globe"></span>
                  <input
                    type="text"
                    name="checkout-country"
                    id="checkout-country"
                    placeholder="Your country..."
                    list="country-list"
                  />
                  <datalist id="country-list">
                    <option value="India"></option>
                    <option value="USA"></option>
                    <option value="Russia"></option>
                    <option value="Japan"></option>
                    <option value="Egypt"></option>
                  </datalist>
                </div>
              </div>
            </div>
            <div class="form-control-btn">
              <button>Continue</button>
            </div>
          </form>
        </section>

        <section class="checkout-details">
          <div class="checkout-details-inner">
            <div class="checkout-lists">
              <div class="card">
                <div class="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xyFiISEtiQ-qHleojzrFCHzTu2cfBA8xog&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="card-details">
                  <div class="card-name">Vintage Chair</div>
                  <div class="card-price">
                    $60
                  </div>
                  <div class="card-wheel">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-armchairarmchairarmchairsoffice-chairssofa-1701527920218mz7tp.png"
                    alt=""
                  />
                </div>
                <div class="card-details">
                  <div class="card-name">Vintage Armchair</div>
                  <div class="card-price">
                    $80
                  </div>
                  <div class="card-wheel">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="checkout-total">
              <h6>Total</h6>
              <p>$140</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
