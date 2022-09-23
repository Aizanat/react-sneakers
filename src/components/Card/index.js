import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img alt="unliked" src="/img/heart-unliked.svg" />
      </div>
      <img width={133} height={112} alt="sneakers" src={props.imageUrl} />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={() => alert(123)}>
          <img
            width={11}
            height={11}
            alt="button plus"
            src="/img/btn-unchecked.svg"
          />
        </button>
      </div>
    </div>
  )
}

export default Card
