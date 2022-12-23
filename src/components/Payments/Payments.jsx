import "./style.css";
import "./Payments.css";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import apiUrl from "../../url";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../redux/actions/cartActions";
import userActions from "../../redux/actions/usersActions";
import paymentBanner from "../../image/PaymentsBanner.png";
import Swal from "sweetalert2";

export default function Payments() {
  const { changeAmount } = cartActions;
  const { getUser } = userActions;
  const [products, setProducts] = useState([]);

  const { idUser, token, user } = useSelector((state) => state.user);
  let dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    dispatch(getUser(idUser));

    // eslint-disable-next-line
  }, []);

  async function getProducts() {
    try {
      let res = await axios.get(`${apiUrl}api/shopping?userId=${idUser}`);
      setProducts(res.data.productsCart);
    } catch (error) { }
  }

  async function deleteProduct(id) {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.delete(`${apiUrl}api/shopping/${id}`, headers);
      getProducts();
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

  async function add(info, stock) {
    console.log(info, stock)
    if (stock > 0) {
      try {
        await dispatch(changeAmount(info));
        getProducts();
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "warning",
        confirmButtonColor: "#5c195d",
        iconColor: "#5c195d",
        title: "At the moment we do not have stock of this product",
        showConfirmButton: true,
      });
    }
  }

  async function del(info) {
    try {
      await dispatch(changeAmount(info));
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  async function sendForm(event) {
    event.preventDefault();
    let form = {
      mail: user.mail,
      name: name.current.value,
      lastName: lastName.current.value,
      country: country.current.value,
      state: state.current.value,
      adress: adress.current.value,
      phone: phone.current.value,
      productName: nameAllProducts,
      productPrice: sumWithInitial,
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
      <img
        className="paymentsBanner"
        src={paymentBanner}
        alt="payments banner"
      />
      <div className="body-payments">
        <main>
          <section class="checkout-form">
            <form onSubmit={sendForm} ref={information}>
              <div class="form-control">
                <h6>Contact information</h6>
                <label for="checkout-name">Name</label>
                <div>
                  <span class="fa fa-user-circle"></span>
                  <input
                    type="text"
                    id="checkout-name"
                    name="name"
                    placeholder="Enter you name..."
                    ref={name}
                  />
                </div>
                {/*  </div> */}
                {/*  <div class="form-control"> */}
                <label for="checkout-lastName">Last Name</label>
                <div>
                  <span class="fa fa-envelope"></span>
                  <input
                    type="text"
                    id="checkout-lastName"
                    name="lastName"
                    placeholder="Enter your last Name..."
                    ref={lastName}
                  />
                </div>
                {/*  </div> */}
                {/*  <div class="form-control"> */}
                <label for="checkout-phone">Phone</label>
                <div>
                  <span class="fa fa-phone"></span>
                  <input
                    type="tel"
                    name="phone"
                    id="checkout-phone"
                    placeholder="Enter you phone..."
                    ref={phone}
                  />
                </div>
                {/* </div> */}
                <br />
                <h6>Shipping address</h6>
                {/* <div class="form-control"> */}
                <label for="checkout-address">Address</label>
                <div>
                  <span class="fa fa-home"></span>
                  <input
                    type="text"
                    name="adress"
                    id="checkout-address"
                    placeholder="Your address..."
                    ref={adress}
                  />
                </div>
                {/* </div> */}
                {/* <div class="form-control"> */}
                <label for="checkout-city">State</label>
                <div>
                  <span class="fa fa-building"></span>
                  <input
                    type="text"
                    name="state"
                    id="checkout-city"
                    placeholder="Enter your state..."
                    ref={state}
                  />
                </div>
                {/*  </div> */}
                {/*  <div class="form-group"> */}
                {/* <div class="form-control"> */}
                <label for="checkout-country">Country</label>
                <div>
                  <span class="fa fa-globe"></span>
                  <input
                    type="text"
                    name="country"
                    id="checkout-country"
                    placeholder="Enter your country..."
                    ref={country}
                  />
                </div>
                {/*   </div> */}
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
                  CHECKOUT
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
                        <img src={item.photo} alt="Photo Product" />
                      </div>
                      <div class="card-details">
                        <button
                          className="buttonDeletePayments"
                          onClick={() => {
                            deleteProduct(item._id);
                          }}
                        >
                          <img
                            className="imgDeletePayments"
                            src="https://cdn-icons-png.flaticon.com/128/665/665304.png"
                            alt="delete"
                          />
                        </button>
                        <div class="card-name">{item.name}</div>
                        <div class="card-price">
                          ${item.price * item.amount}
                        </div>
                        <div class="card-wheel">
                          <button
                            onClick={() => {
                              let info = {
                                id: item._id,
                                amount: item.amount,
                                productId: item.productId._id,
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
                              let stock = item.productId.stock;
                              let info = {
                                id: item._id,
                                amount: item.amount,
                                productId: item.productId._id,
                                change: "add",
                                token,
                              };
                              add(info, stock);
                            }}
                          >
                            +
                          </button>
                        </div>
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
