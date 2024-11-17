import axios from 'axios'
import { useEffect, useState } from 'react'

const NewArrival = () => {

    const [arrival, SetArrival] = useState([])
    const getArrival = async () => {
        try {
            const data = await axios.get('https://api.escuelajs.co/api/v1/products');
            const res = data?.data
            SetArrival(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getArrival()
    }, [])
    console.log(arrival)
    return (
        <div >
            <h1 className='feature'>New Arrival</h1>
            <div className='fix'>
                {arrival.slice(0, 44).map((items) => {
                    const {title, price, name, images} = items;
                    return (
                        <div className="flex arrive">
                            <div className="feature-div">
                                <img alt="bg-image" src={images} className="bg-gray-100 feature-img" />
                                <p>{title.slice(0, 20)}</p>
                                <p>${price}</p>
                                <button>COMING SOON</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewArrival
