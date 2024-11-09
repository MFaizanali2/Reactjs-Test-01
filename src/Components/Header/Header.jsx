import Button from '../Common/Button'
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <img src="/assets/img/logo.svg" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="btn_wrapper">
                <Button />


            </div>
        </div>
    )
}

export default Header