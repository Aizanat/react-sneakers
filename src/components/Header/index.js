import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

function Header(props) {
  const { totalPrice } = useCart()

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="logo" width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Best sneaker store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img alt="cart" width={19} height={18} src="/img/cart.svg" />
          <span>{totalPrice} $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img alt="like" width={18} height={18} src="/img/like.png" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img alt="user" width={18} height={18} src="/img/user.svg" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
