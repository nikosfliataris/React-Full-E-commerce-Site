import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { Button } from "react-bootstrap";
import { useStateValue } from "../ComponentAPI/StateProvider";
import { useHistory } from "react-router-dom";
import { getBasketTotal, Count } from "../ComponentAPI/reducer";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({Count(basket)}items):<strong>{value}</strong>
            </p>
            <small className="subtotal_invoice">
              <input type="checkbox" />
              Bussiness Order (Invoice)
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button onClick={(e) => history.push("/payment")}>
        Procced to Checkout
      </Button>
    </div>
  );
}

export default Subtotal;
