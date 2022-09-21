function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img alt="unliked" src="/img/heart-unliked.svg" />
      </div>
      <img width={133} height={112} alt="sneakers" src="/img/sneakers/1.jpg" />
      <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>26 $</b>
        </div>
        <button className="button">
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
