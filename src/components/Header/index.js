import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header(props) {
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
          <span>15 $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img alt="like" width={18} height={18} src="/img/like.png" />
          </Link>
        </li>
        <li>
          <img alt="user" width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  )
}

export default Header
