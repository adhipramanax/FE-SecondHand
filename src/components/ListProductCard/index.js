import React from "react";
import ProductCard from "../ProductCard";


const Index = ({ data, action = false }) => {
  return (
    <>
      <div class="row mt-4">
        {action === true ? (

            <div class="col-6 col-md-4"> 
                <a href="/seller/create-product" class="btn-add-product text-decoration-none mb-4">
                    <div class="btn-add-product-icon">+</div>
                    <div class="btn-add-product-text">Tambah Produk</div>
                </a>
            </div>

        ) : (
          
            data.map((item, index) => {
              return (
                <ProductCard
                  urlImage={item.galleries[0].urlImage}
                  title={item.name}
                  category={item.categories.map((category) => category.name + ", ")}
                  price={item.price}
                  urlLink={""}
                />
              );
            })

        )}
      </div>
    </>
  );
};

export default Index;
