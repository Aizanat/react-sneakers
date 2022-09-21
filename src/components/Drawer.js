function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart <img className="cu-p" alt="remove" src="/img/btn-remove.svg" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Men`s sneakers Nike Blazer Mid Suede</p>
              <b>26 $</b>
            </div>
            <img className="removeBtn" alt="remove" src="/img/btn-remove.svg" />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/4.jpg)' }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">
                Men`s sneakers Puma X Aka Boku Future Rider
              </p>
              <b>18 $</b>
            </div>
            <img className="removeBtn" alt="remove" src="/img/btn-remove.svg" />
          </div>
        </div>

        <div className="cartTotalBlock">
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
          <button className="greenButton">
            Make an order <img alt="arrow" src="/img/arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
