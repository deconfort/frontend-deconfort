import "./style.css";
import "./Payments.css";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import apiUrl from "../../api/url";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../redux/actions/cartActions";
import userActions from "../../redux/actions/usersActions"
import Footer from "../../layouts/Footer";
import paymentBanner from '../../image/PaymentsBanner.png'


export default function Payments() {
  const { changeAmount } = cartActions;
  const {getUser}= userActions
  const [reload, setReload] = useState(false);
  const [products, setProducts] = useState([]);

  const { idUser, token, user } = useSelector((state) => state.user);
  let dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    dispatch(getUser(idUser));

    // eslint-disable-next-line
  }, [reload]);

  async function getProducts() {
    await axios
      .get(`${apiUrl}api/shopping?userId=${idUser}`)
      .then((res) => setProducts(res.data.productsCart));
    setReload(!reload);
  }

  async function deleteProduct(id) {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.delete(`${apiUrl}api/shopping/${id}`, headers);
    } catch (error) {
      console.log(error);
    }
  }
  let information = useRef();
  let name = useRef();
  let lastName = useRef();
  let adress = useRef();
  let state = useRef();
  let country = useRef();
  let phone = useRef();
  const nameAllProducts = products.map((product) => {
    return product.name;
  });

  let totalPrice = products.map((product) => product.price * product.amount);

  const initialprice = 0;
  const sumWithInitial = totalPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialprice
  );

  function add(info) {
    dispatch(changeAmount(info));
    getProducts();
    setReload(!reload);
  }
  function del(info) {
    dispatch(changeAmount(info));
    getProducts();
    setReload(!reload);
  }
  async function sendForm(event) {
    event.preventDefault();
    let form = {
      name: name.current.value,
      lastName: lastName.current.value,
      adress: adress.current.value,
      state: state.current.value,
      phone: phone.current.value,
      country: country.current.value,
      productName: nameAllProducts ,
      productPrice: sumWithInitial,
      mail: user.mail,
     
    
    };

    try {
      let res = await axios.post(`${apiUrl}purchases`, form);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="containerPaymentsAll">
      <img className="paymentsBanner" src={paymentBanner} alt="payments banner" />
    <div className="body-payments">
      <main>
        <section class="checkout-form">
          <form onSubmit={sendForm} ref={information}>
            <h6>Contact information</h6>
            <div class="form-control">
              <label for="checkout-name">Name</label>
              <div>
                <span class="fa fa-user-circle"></span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter you name..."
                  ref={name}
                />
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-email">Last Name</label>
              <div>
                <span class="fa fa-envelope"></span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last Name..."
                  ref={lastName}
                />
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-phone">Phone</label>
              <div>
                <span class="fa fa-phone"></span>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter you phone..."
                  ref={phone}
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
                  name="adress"
                  id="adress"
                  placeholder="Your address..."
                  ref={adress}
                />
              </div>
            </div>
            <div class="form-control">
              <label for="checkout-city">State</label>
              <div>
                <span class="fa fa-building"></span>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter your state..."
                  ref={state}
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
                    name="country"
                    id="country"
                    placeholder="Enter your country..."
                    ref={country}
                  />
                </div>
              </div>
            </div>
            <div class="form-control-btn">
            <button
              onClick={async () => {
                const preference = {
                  items: products.map((item) => {
                    return {
                      title: item.name,
                      unit_price: item.price,
                      description: item.description,
                      picture_url: item.photo[0],
                      quantity: item.amount,
                      currency_id: "ARS",
                      id: item._id,
                    };
                  }),
                };
                let response = await axios.post(
                  "https://api.mercadopago.com/checkout/preferences",
                  preference,
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer APP_USR-537691465530679-121318-8bbc230b0af6d8f1705e1a22a96b0d63-1262875102`,
                    },
                  }
                );
                window.open(response.data.init_point, "_blank");
              }}
            >
              Continue
            </button>
            </div>
          </form>
        </section>

        <section class="checkout-details">
          <div class="checkout-details-inner">
            <div class="checkout-lists">
              {products?.map((item) => {
                return (
                  <div class="card">
                    <div class="card-image">
                      <img src={item.photo} alt="" />
                    </div>
                    <div class="card-details">
                      <div class="card-name">{item.name}</div>
                      <div class="card-price">${item.price * item.amount}</div>
                      <div class="card-wheel">
                        <button
                          onClick={() => {
                            let info = {
                              id: item._id,
                              amount: item.amount,
                              productId: item.productId,
                              change: "del",
                              token,
                            };
                            del(info);
                          }}
                        >
                          -
                        </button>
                        <span>{item.amount}</span>
                        <button
                          onClick={() => {
                            let info = {
                              id: item._id,
                              amount: item.amount,
                              productId: item.productId,
                              change: "add",
                              token,
                            };
                            add(info);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button className="buttonDeletePayments"
                        onClick={() => {
                          deleteProduct(item._id);
                        }}
                      >
                       Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="checkout-total">
              <h6>Total</h6>
              <p>${sumWithInitial}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
