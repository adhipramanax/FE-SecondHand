import React from "react";

import OfferCard from "../OfferCard";

const Index = ({ data, onClick }) => {
  return (
    <>
      <div class="row mb-5">
        {data.map((offer, index) => {
          return (
              <>
                <OfferCard data={offer} onClick={onClick} index={index}/>
              </>
          );
        })}
      </div>
    </>
  );
};

export default Index;
