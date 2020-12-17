import React from "react";
const Header = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="refer-style ">
          <span className="refer-text-style">
            <span className="my-5">
              Invite friends to Big Fashion Festival & get up to $150 MynCash
              for every person who visits
            </span>
          </span>

          <div className="invitebutton">Invite Now</div>
        </div>
      </div>

      <div className="header1">
        <h6> Home / Clothing / Mens Clothing / All Mens Clothing </h6>
      </div>
      <div>
        <span className="h5">All Product</span>(25 Products)
      </div>

      <div className="inline  row col">
        <div className="col-10">
          <b>FILTERS:</b>
          <button className=" button2 my-2">
            <b>All Products</b>
          </button>
          <button className=" button3">Tee Shirt</button>
          <button className=" button3">Denim</button>
          <button className=" button3">SweatShirt</button>
          <button className=" button3">Polo Tee Shirt</button>
          <button className=" button3">Shirt</button>
        </div>
        <div className="col-0 ">
          <button className=" button2">
            Sort By: <b>Price Low to High</b>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
