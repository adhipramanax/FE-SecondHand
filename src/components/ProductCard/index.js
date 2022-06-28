import React from "react";

const Index = ({ optionCol, urlImage, title, category, price, urlLink }) => {
    return (
        <>
            <div class={`col-6 col-md-4 ${optionCol}`}>
                <a href={urlLink} class="text-dark text-decoration-none">
                    <div class="card catalog-card">
                        <img src={urlImage} class="card-img-top" alt="jam-tangan" />
                        <div class="card-body">
                            <h5 className="catalog-title">{title}</h5>
                            <p class="card-text text-muted">{category}</p>
                            <h5>Rp. {price}</h5>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Index;
