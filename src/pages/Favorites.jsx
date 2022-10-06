import Card from '../components/Card'

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <Card favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Favorites