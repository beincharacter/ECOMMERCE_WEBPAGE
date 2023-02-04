import React, { useState } from 'react';
import { IoIosCart } from 'react-icons/io';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import './header.css';

let images = [
    'http://res.cloudinary.com/doh91aq3h/image/upload/v1675537904/reztkvuovqpjzg5ufjre.jpg',
    'https://res.cloudinary.com/doh91aq3h/image/upload/v1675538166/gvrbvps4tx941vckbeb5.jpg',
    'https://res.cloudinary.com/doh91aq3h/image/upload/v1675538143/b9ivvyiovfr6rq9oejhw.jpg',
    'https://res.cloudinary.com/doh91aq3h/image/upload/v1675538570/x1eummo17at73ojq8ynm.jpg',
    'https://res.cloudinary.com/doh91aq3h/image/upload/v1675538615/zomvb8izlcjqblwjxkzl.jpg',
    'https://res.cloudinary.com/doh91aq3h/image/upload/v1675538645/zmvg0lc5hkqdj0hhzrqr.jpg'
];

let color = [
    { name: "Blue", color: 'blue' },
    { name: "green", color: 'green' },
    { name: "lightgreen", color: 'lightgreen' }
]

const Header = () => {
    const [display_item, setDisplay_item] = useState([images[0]]);
    const [selectedColor, setColor] = useState(color[0].color);
    const [rom, setRom] = useState('64GB');
    const [ram, setRam] = useState("2GB");
    const [activeRom, setActiveRom] = useState('64GB');
    const [activeRam, setActiveRam] = useState('2GB');

    const handleChange = (e, imag) => {
        e.preventDefault();
        console.log(imag)
        setDisplay_item(imag)
    }

    const handelChangeColor = (e, col) => {
        e.preventDefault();
        setColor(col.color)
    }


    const handleClick = (value, type) => {
        if (type === 'ROM') {
            setActiveRom(value);
            setRom(value);
        } else {
            setActiveRam(value);
            setRam(value)
        }
    };


    return (
        <>
            <div className='header'>
                <div className="header_part1">
                    <div className="right">
                        <span className="wishlist">Wishlist <AiOutlineHeart /> </span> |
                        <span className="cart">Cart <IoIosCart /> </span>|
                        <span className="user"><AiOutlineUser /> Shubham Pal <RiArrowDropDownLine /></span>
                    </div>
                </div>
                <div className="header_part2">
                    <div className="logo">
                        <svg id="Group_10399" data-name="Group 10399" xmlns="http://www.w3.org/2000/svg" width="124.102" height="40" viewBox="0 0 124.102 40">
                            <g id="Group_10301" data-name="Group 10301">
                                <path id="Path_10802" data-name="Path 10802" d="M121.282,2.857V37.143H2.821V2.857H121.282M124.1,0H0V40H124.1V0Z" fill="#463f5f" />
                            </g>
                            <g id="Group_10302" data-name="Group 10302" transform="translate(14.103 11.071)">
                                <path id="Path_10803" data-name="Path 10803" d="M26.417,25.214l-2.045,2.5V32.5H20v-17h4.372V23l5.994-7.5h4.865l-5.712,6.857L35.513,32.5H30.577Z" transform="translate(-20 -15.5)" fill="#463f5f" />
                                <path id="Path_10804" data-name="Path 10804" d="M54.71,26.286H52.1V32.5H47.8v-17h7.968a6.856,6.856,0,0,1,4.654,1.357,5.094,5.094,0,0,1,1.622,4,5.249,5.249,0,0,1-.846,3.071,5.193,5.193,0,0,1-2.468,1.857l4.231,6.643H58.165ZM52.1,23.143h2.962a3.21,3.21,0,0,0,2.045-.5A1.967,1.967,0,0,0,57.742,21a2.063,2.063,0,0,0-.635-1.643,3.21,3.21,0,0,0-2.045-.5H52.1Z" transform="translate(-28.197 -15.5)" fill="#463f5f" />
                                <path id="Path_10805" data-name="Path 10805" d="M84.353,28.643H78.571l-1.2,3.857H73l5.923-17h5.218l5.853,17H85.481Zm-.917-3-1.2-4.071-.705-2.643h-.071l-.705,2.643-1.269,4.071Z" transform="translate(-35.628 -15.5)" fill="#463f5f" />
                                <path id="Path_10806" data-name="Path 10806" d="M106.995,26.286V32.5h-4.372V26.286L96.7,15.5h4.513l2.327,4.643L104.809,23l1.269-2.857,2.327-4.643h4.442Z" transform="translate(-42.617 -15.5)" fill="#463f5f" />
                                <path id="Path_10807" data-name="Path 10807" d="M130.653,28.643H124.87l-1.2,3.857H119.3l5.923-17h5.218l5.853,17h-4.513Zm-.917-3-1.2-4.071-.705-2.643h-.071l-.705,2.643-1.269,4.071Z" transform="translate(-49.281 -15.5)" fill="#463f5f" />
                                <path id="Path_10808" data-name="Path 10808" d="M153.272,33.743a2.381,2.381,0,0,1,.705,1.714,2.131,2.131,0,0,1-.705,1.714,2.936,2.936,0,0,1-3.667,0,2.381,2.381,0,0,1-.705-1.714,2.131,2.131,0,0,1,.705-1.714,2.5,2.5,0,0,1,1.833-.643A2.616,2.616,0,0,1,153.272,33.743Z" transform="translate(-58.009 -20.529)" fill="#463f5f" />
                            </g>
                        </svg>
                    </div>
                    <nav className="navbar">
                        <span>Phone</span>
                        <span>Television</span>
                        <span>Refridgerator</span>
                        <span>Laptop</span>
                        <span>Washing Machine</span>
                        <span>Downloads</span>
                    </nav>
                    <span className="input">
                        <BiSearch className='search' />
                        <input type="text" />
                        <RxCross2 className='cross' />
                    </span>

                </div>
            </div>

            <div className="main_body">
                <div className="item_area">
                    <div className="photos">
                        {images.map((imag, i) => (
                            <img
                                src={imag} alt='images'
                                key={`image_${i}`}
                                onClick={(e) => handleChange(e, imag)} />
                        ))}
                    </div>
                    <div className="item_view">
                        <div className="item_photo">
                            <img src={display_item} alt="" />
                        </div>
                        <div className="btns">
                            <button>Buy Now</button>
                            <button className='add-cart'>Add to Cart</button>
                        </div>

                    </div>
                </div>

                <div className="details_area">
                    <div className="product_code"><span className="light">product code </span><span className="code">ODE346759</span></div>
                    <p>Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers</p>
                    <div className="stars">⭐⭐⭐⭐  (9303)</div>
                    <div className="price"><span className="curr-pp">$99.99 </span> <span className="off-price">$149.99</span><span className="off-percentage">30% off</span></div>
                    <p className="in-stocks">In stock</p>
                    <hr />
                    <div className="colors">
                        <div className="color_name">Color: {selectedColor}</div>
                        <div className="color">
                            {color.map((col, i) => (
                                <span
                                    onClick={(e) => handelChangeColor(e, col)}
                                    className='individual_clr' style={{ backgroundColor: `${col.color}`, color: `${col.color}` }}>hey</span>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="storage">
                        <span className="rom">{rom}</span>
                        <span className="ram">{ram}</span>
                    </div>
                    <div className="item_size">
                        <button
                            className={activeRom === '64GB' ? 'active' : ''}
                            onClick={() => handleClick('64GB', 'ROM')}
                        >
                            64GB
                        </button>
                        <button
                            className={activeRom === '128GB' ? 'active' : ''}
                            onClick={() => handleClick('128GB', 'ROM')}
                        >
                            128GB
                        </button>
                        <button
                            className={activeRam === '2GB' ? 'active' : ''}
                            onClick={() => handleClick('2GB', 'RAM')}
                        >
                            2GB
                        </button>
                        <button
                            className={activeRam === '4GB' ? 'active' : ''}
                            onClick={() => handleClick('4GB', 'RAM')}
                        >
                            4GB
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;