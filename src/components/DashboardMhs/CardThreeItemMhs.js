import React from 'react'
import { Link } from 'react-router-dom';

function CardThreeItemMhs(props) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link'>
                <Link to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img
                        className='cards__item__img'
                        alt=''
                        src={props.src}
                    />
                    </figure>
                </Link>
                <div className='cards__item__info'>
                    <h4 className='cards__item__text'><i className="fa fa-home"></i> {props.text}</h4>
                    <h4 className='cards__item__text'><i className="fa fa-calendar"></i> {props.text2}</h4>
                    <hr/>
                </div>
                </div>
            </li>
        </>
    )
}

export default CardThreeItemMhs
