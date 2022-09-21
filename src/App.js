import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img alt="search" src="/img/search.svg" />
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <div className="card">
            <div className="favorite">
              <img alt="unliked" src="/img/heart-unliked.svg" />
            </div>
            <img
              width={133}
              height={112}
              alt="sneakers"
              src="/img/sneakers/2.jpg"
            />
            <h5>Men`s sneakers Nike Air Max 270</h5>
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
          <div className="card">
            <div className="favorite">
              <img alt="unliked" src="/img/heart-unliked.svg" />
            </div>
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
                <b>18 $</b>
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
          <div className="card">
            <div className="favorite">
              <img alt="unliked" src="/img/heart-unliked.svg" />
            </div>
            <img
              width={133}
              height={112}
              alt="sneakers"
              src="/img/sneakers/4.jpg"
            />
            <h5>Men`s sneakers Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>18 $</b>
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
        </div>
      </div>
    </div>
  )
}

export default App
