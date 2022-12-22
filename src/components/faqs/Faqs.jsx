import React from "react";
import "./Faqs.css";
import FaqsBanner from "../../image/FaqsBanner.png";

export default function Faqs() {
  return (
    <div className="Container-Faqs">
      <img className="faqsBanner" src={FaqsBanner} alt="FaqsBanner" />
      <div className="text-and-img-faqs">
        <h2 className="Titles-color-faqs">Your online furniture and decoration store</h2>
        <p>
          Save time and money shopping at Deconfort. We have the largest stock
          of products, the best offers, and order without leaving the comfort of
          your home.
        </p>
        <h4 className="Titles-color-faqs">NEED HELP TO BUY?</h4>
        <div>
          <ol>
            <li>
              Choose the product you want to buy. Use the top menu to see the
              different categories.
            </li>
            <li>
              Click on the "Add to Cart" button. This will add the product to
              your cart and will take you to your cart.
            </li>
            <li>
              You can continue adding other products to the cart or click on
              "Start Shopping".
            </li>
            <li>
              Fill in your contact information. If you already have an account,
              you can login with the same account.
            </li>
            <li>
              Select if you want us to send you the order or if you want to pick
              it up personally at one of our stores. In both options you must
              complete the corresponding data and click on "Continue".
              "Continue".
            </li>
            <li>
              Select the shipping method of your choice:
              <ul>
                <li>
                  Deliveries up to 10km are free of charge and are carried out
                  by us.
                </li>
                <li>
                  We ship to more than 10km and the rest of the country by
                  courier.
                </li>
              </ul>
            </li>
            <li>
              Choose the payment method:
              <ul>
                <li>
                  You can select the "bank transfer" option and get an extra
                  discount, or pay by credit or debit card.
                </li>
                <li>
                  Once you have chosen the payment method, click on. "Pay
                  through..."
                </li>
              </ul>
            </li>
            <li>
              Finally, on the Purchase Confirmation page you can review all the
              information of the all the information about your purchase.
            </li>
            <li>
              You will receive an email from us, this will not be a proof of
              payment. of payment.
            </li>
            <li>
              Finally, we will contact you by phone or by Whatsapp to coordinate
              the Whatsapp to coordinate delivery or pick up details. You can
              contact us at we remind you that the contact hours are Monday to
              Friday from 9:00 am to 8:00 pm and 9 to 20 Hs and Saturdays from 9
              to 14 Hs. Purchases made outside these out of these time slots
              will be contacted in the next available timetable. available.
            </li>
          </ol>
        </div>
      </div>
      <div>
        <h4 className="Titles-color-faqs">IF YOU STILL HAVE ANY DOUBTS, DON'T WORRY!</h4>
        <h5 className="Titles-color-faqs">
          YOU CAN CALL US AT <a href="tel:+54 9 3516532314">3516532314</a> SO WE
          CAN HELP YOU
        </h5>
      </div>
    </div>
  );
}
