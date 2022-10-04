import React, {useState} from 'react'
import "./mylistingagreement.css"

import { SmallCross } from '../../assets'
import Mylistingpayment from '../Mylistingpayment/mylistingpayment';

const Mylistingagreement = (props) => {
  const [isPayment, setIsPayment] = useState(false);
  if(window.innerWidth <= 1200){
    return (
      <>
        <div className="mylisting-prod-select-agreement-container">
          <div className="mylisting-prod-select-agreement-content">
            <p>
              Agreement{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem" }}
                onClick={props.onclick}
              />
            </p>
            <div className="mylisting-prod-select-agreement-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                At diam ut sagittis nunc sodales id cursus nisl integer.
                Laoreet tortor, nunc, vestibulum id non est a id.
                Imperdiet ante donec et semper nisi, ut rutrum ut
                viverra. Tellus a non amet sit nisl lacus laoreet. Donec
                eu viverra nibh elementum nunc non scelerisque. In
                turpis a sed volutpat. Eget facilisis condimentum lorem
                scelerisque. Est egestas condimentum elit blandit
                libero, sed amet, vel, maecenas. Cras bibendum gravida
                at quam est praesent turpis a. Consequat purus, eget
                tellus elit sagittis. Cras dignissim lectus vestibulum
                quis. Sed massa volutpat volutpat scelerisque lacus,
                aenean sed. Porttitor auctor consectetur quam pretium ut
                non, purus. Arcu vitae tortor, feugiat facilisis laoreet
                praesent. Varius fringilla Eget facilisis condimentum
                lorem scelerisque. Est egestas condimentum elit blandit
                libero Laoreet tortor, nunc, vestibulum id non est a id.
                Imperdiet ansa{" "}
              </p>
            </div>
            <label htmlFor="">
              <input
                type="checkbox"
                name=""
                id=""
                style={{
                  marginRight: "1rem",
                }}
              />
              <span>
                By selecting this checked box, I agree to the terms and
                conditions.{" "}
              </span>
            </label>

            <button onClick={() => setIsPayment(!isPayment)}>
              Proceed
            </button>
            {isPayment && <Mylistingpayment onclick={props.onclick}/>}
          </div>
        </div>
      </>
  )
  } else {
    return (
      <>
        <div className="mylisting-prod-select-agreement-container">
          <div className="mylisting-prod-select-agreement-content">
            <p>
              Agreement{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem" }}
                onClick={props.onclick}
              />
            </p>
            <div className="mylisting-prod-select-agreement-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                At diam ut sagittis nunc sodales id cursus nisl integer.
                Laoreet tortor, nunc, vestibulum id non est a id.
                Imperdiet ante donec et semper nisi, ut rutrum ut
                viverra. Tellus a non amet sit nisl lacus laoreet. Donec
                eu viverra nibh elementum nunc non scelerisque. In
                turpis a sed volutpat. Eget facilisis condimentum lorem
                scelerisque. Est egestas condimentum elit blandit
                libero, sed amet, vel, maecenas. Cras bibendum gravida
                at quam est praesent turpis a. Consequat purus, eget
                tellus elit sagittis. Cras dignissim lectus vestibulum
                quis. Sed massa volutpat volutpat scelerisque lacus,
                aenean sed. Porttitor auctor consectetur quam pretium ut
                non, purus. Arcu vitae tortor, feugiat facilisis laoreet
                praesent. Varius fringilla Eget facilisis condimentum
                lorem scelerisque. Est egestas condimentum elit blandit
                libero Laoreet tortor, nunc, vestibulum id non est a id.
                Imperdiet ansa{" "}
              </p>
            </div>
            <label htmlFor="">
              <input
                type="checkbox"
                name=""
                id=""
                style={{
                  width: "1.188rem",
                  height: "1.188rem",
                  marginRight: "1.25rem",
                }}
              />
              <span>
                By selecting this checked box, I agree to the terms and
                conditions.{" "}
              </span>
            </label>

            <button onClick={() => setIsPayment(!isPayment)}>
              Proceed
            </button>
            {isPayment && <Mylistingpayment onclick={props.onclick}/>}
          </div>
        </div>
      </>
  )
  }
}

export default Mylistingagreement