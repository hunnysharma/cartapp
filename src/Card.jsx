import React from "react";
const Card = (props) => {
  function ShowAndHide(e) {
    var i;
    var x = document.getElementsByClassName("mybutton");
    for (i = 0; i < x.length; i++) {
      if ((x[i].style.display = "none")) {
        e.target.parentElement.children[5].style.display = "block";
      } else {
        e.target.parentElement.children[5].style.display = "none";
      }
    }
  }

  return (
    <>
      <div className="card__collection ">
        <div className="cards cards--two">
          <img
            src={props.imgSrc}
            className="img-responsive"
            alt="Cards Image"
          />
          <h6>Select Size</h6>
          <div className="inline1">
            <a onClick={ShowAndHide} className="circle">
              38
            </a>
            <a onClick={ShowAndHide} className="circle">
              39
            </a>
            <a onClick={ShowAndHide} className="circle">
              40
            </a>
            <a onClick={ShowAndHide} className="circle">
              41
            </a>
            <a onClick={ShowAndHide} className="circle">
              42
            </a>

            <button id="cart" className="mybutton">
              ADD TO CART
            </button>
          </div>
          <div className="tags1">{props.vendor}</div>
          <br />
          <div className="tags2"> {props.name}</div>
          <br />
        </div>

        <div className="price">
          <span className="span1">
            ₹{props.price}&nbsp;&nbsp;
            <del>₹{props.cut}</del>&nbsp;&nbsp;
            <span className="span2">(50% OFF)</span>
          </span>
        </div>
      </div>
    </>
  );
};
export default Card;
