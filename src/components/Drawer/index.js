import styles from './Drawer.module.scss'
import Info from '../Info/Info'
import React from 'react'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onCLose, onRemove, items = [] }) {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = React.useState(null)
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        'https://6331d6b9cff0e7bf70f791c5.mockapi.io/orders',
        { items: cartItems }
      )
      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          'https://6331d6b9cff0e7bf70f791c5.mockapi.io/cart/' + item.id
        )
        await delay(1000)
      }
    } catch (error) {
      alert('Error creating order')
    }
    setIsLoading(false)
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart{' '}
          <img
            onClick={onCLose}
            className="cu-p"
            alt="close"
            src="/img/btn-remove.svg"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={styles.cartItemImg}
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className={styles.removeBtn}
                    alt="remove"
                    src="/img/btn-remove.svg"
                  />
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} $</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} $</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={styles.greenButton}
              >
                Make an order <img alt="arrow" src="/img/arrow.svg" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Order complete!' : 'Empty cart'}
            description={
              isOrderComplete
                ? `Your order №${orderId} will soon be transferred to the courier service`
                : 'Add at least one pair of sneakers to your cart'
            }
            image={
              isOrderComplete
                ? '/img/complete-order.jpg'
                : '/img/empty-cart.jpg'
            }
          />
        )}
      </div>
    </div>
  )
}

export default Drawer
