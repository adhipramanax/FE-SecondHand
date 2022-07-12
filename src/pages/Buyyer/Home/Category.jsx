import React, { useState, useEffect } from 'react';
import fiSearch from '../../../assets/images/fi_search.png';

// Service
import { getAllCategory } from '../../../services/categoryService';

//provider
import { productContext } from '../../../provider/productProvider';

// Component
import Carousel from '../../../components/OwlCarousel/CarouselSlider';
import { filterProduct } from '../../../services/productService';

const filter_btn = {
    display: "inline-block",
    width: "25px"
};

const Category = () => {
    const productsValue = React.useContext(productContext);

    const [categories, setCategories] = useState([]);
    const [filterValue, setFilterValue] = useState(['semua']);

    const handleFilter = (e) => {
        let index = filterValue.indexOf(e.target.getAttribute('data-slug'));

        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');
            if(index > -1){
                filterValue.splice(index, 1);
                setFilterValue(filterValue);
            }
            filterProduct(filterValue.join(',')).then(response => productsValue.setProducts(response.data.data));
        }else{
            e.target.classList.add('active');
            setFilterValue(filterValue => [...filterValue, e.target.getAttribute('data-slug')]);
            // filterProduct().then(response => productsValue.setProducts(response.data.data));
        }
    }

    useEffect(() => {
        getAllCategory().then(response => setCategories(response.data.data));
        filterProduct(filterValue.join(',')).then(response => productsValue.setProducts(response.data.data));
    }, [filterValue]);

    console.log(productsValue.products);


    return (
        <>
            <section className="filter">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <p className='fw-bold'>Telusuri Kategori</p>
                        </div>
                        <div className="col-12 mt-0">
                            {/* Desktop View */}
                            <Carousel>
                                <button class='item btn filter-btn active' data-slug="semua" onClick={e => handleFilter(e)}>
                                    <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Semua
                                </button>

                                {
                                    categories.map((category, index) => {
                                        return (
                                            <button class='item btn filter-btn' data-slug={category.slug} onClick={e => handleFilter(e)}>
                                                <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />{category.name}
                                            </button>
                                        )
                                    })
                                }
                            </Carousel>
                            
                            {/* Mobile View */}
                            <Carousel mobile={true}>
                                    <button class='item btn filter-btn active'>
                                        <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />Semua
                                    </button>

                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <button class='item btn filter-btn'>
                                                    <img src={fiSearch} class="pe-2 filter-btn__icon" style={filter_btn} alt="fi-search" />{category.name}
                                                </button>
                                            )
                                        })
                                    }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;
