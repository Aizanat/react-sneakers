import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title: 'Men`s sneakers Nike Blazer Mid Suede',
    imageUrl: '/img/sneakers/1.jpg',
    price: 26 + '$',
  },
  {
    title: 'Men`s sneakers Nike Air Max 270',
    imageUrl: '/img/sneakers/2.jpg',
    price: 25 + '$',
  },
  {
    title: 'Men`s sneakers Nike Blazer Mid Suede',
    imageUrl: '/img/sneakers/3.jpg',
    price: 26 + '$',
  },
  {
    title: 'Men`s sneakers Puma X Aka Boku Future Rider',
    imageUrl: '/img/sneakers/4.jpg',
    price: 22 + '$',
  },
]

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
          {arr.map((obj) => (
            <Card title={obj.title} imageUrl={obj.imageUrl} price={obj.price} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
