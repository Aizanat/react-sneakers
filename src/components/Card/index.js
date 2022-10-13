import React from 'react'
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'
import styles from './Card.module.scss'

function Card({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const obj = { id, parentId: id, imageUrl, title, price }

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          {/* <rect x="71" y="36" rx="0" ry="0" width="1" height="0" />  */}
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                alt="unliked"
                src={
                  isFavorite ? '/img/heart-liked.png' : '/img/heart-unliked.svg'
                }
              />
            </div>
          )}
          <img width={133} height={112} alt="sneakers" src={imageUrl} />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} $</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                alt="button plus"
                src={
                  isItemAdded(id)
                    ? '/img/btn-checked.svg'
                    : '/img/btn-unchecked.svg'
                }
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
