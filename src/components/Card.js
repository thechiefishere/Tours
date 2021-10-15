import { useState } from "react";
import ShowMoreBtn from "./showMoreBtn";

const Card = ({ location }) => {
  const [show, setShow] = useState(false);

  function setText(text) {
    let newText = "";
    for (let i = 0; i < 200; i++) {
      newText += text.charAt(i);
    }
    return newText;
  }

  return (
    <div className="card">
      <img src={location.image} alt={location.name} className="card-img" />
      <div className="card-title">
        <h5 className="card-name">{location.name}</h5>
        <p className="card-price">{`$${location.price}`}</p>
      </div>
      <p className="card-details">
        {!show ? setText(location.info) : location.info}
        {!show ? (
          <ShowMoreBtn text="... Read More" show={show} setShow={setShow} />
        ) : (
          <ShowMoreBtn text=" Show Less" show={show} setShow={setShow} />
        )}
      </p>
    </div>
  );
};

export default Card;
