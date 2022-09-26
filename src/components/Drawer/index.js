import styles from './Drawer.module.scss'

function Drawer({ onCLose, items = [] }) {
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
    </div>
  )
}

export default Drawer
