import styles from './Drawer.module.scss'

function Drawer({ onCLose, onRemove, items = [] }) {
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
          <div>
            {' '}
            <div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
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
                  <b>44 $</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>2.2 $</b>
                </li>
              </ul>
              <button className={styles.greenButton}>
                Make an order <img alt="arrow" src="/img/arrow.svg" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty cart"
            />
            <h2>Empty cart</h2>
            <p>Add at least one pair of sneakers to your cart</p>
            <button onClick={onCLose} className={styles.greenButton}>
              <img src="/img/arrow.svg" alt="Arrow" />
              Come back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
