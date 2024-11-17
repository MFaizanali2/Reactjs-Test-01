import { useEffect, useState } from 'react'
// import Slider from "react-slick";
import axios from "axios";

const Feature = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [product, setProduct] = useState([])
    const getData = async () => {
        try {
            const data = await axios.get('https://fakestoreapi.com/products')
            const res = data?.data;
            setProduct(res)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    // console.log(product)
    return (
        <>
        <h1 className='feature'>Featue Product</h1>
            <div className='fix'>             
                {product.map((item) => {
                    const { image, category, price, title } = item;
                    return (
                        <div className="flex">
                            <div className="feature-div">
                                <img alt="bg-image" src={image} className="bg-gray-100 feature-img" />
                                <p></p>
                                <p>{category}</p>
                                <p>${price}</p>
                                <button>ADD TO CART</button>
                            </div>

                        </div>
                    )
                })}

            </div>
        </>
    )
}


export default Feature
