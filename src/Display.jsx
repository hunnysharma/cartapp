import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="container-fluid mb-5 my-3">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, index) => {
                return (
                  <Card
                    key={index + val.name}
                    imgSrc={val.image_src}
                    name={val.name}
                    vendor={val.vendor}
                    price={val.price}
                    cut={val.compare_at_price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
