function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img alt="logo" width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Best sneaker store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img alt="basket" width={19} height={18} src="/img/basket.svg" />
            <span>15 $</span>
          </li>
          <li className="mr-30">
            <img alt="like" width={18} height={18} src="/img/like.png" />
          </li>
          <li>
            <img alt="user" width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              alt="sneakers"
              src="/img/sneakers/1.jpg"
            />
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
                  src="/img/button +.png"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              alt="sneakers"
              src="/img/sneakers/2.jpg"
            />
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
                  src="/img/button +.png"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              alt="sneakers"
              src="/img/sneakers/3.jpg"
            />
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
                  src="/img/button +.png"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              alt="sneakers"
              src="/img/sneakers/4.jpg"
            />
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
                  src="/img/button +.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
