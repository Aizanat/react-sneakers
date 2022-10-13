import React from 'react'
import axios from 'axios'
import Card from '../components/Card'

function Orders() {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://6331d6b9cff0e7bf70f791c5.mockapi.io/orders'
        )
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (err) {
        alert('Error while requesting orders')
        console.error(err)
      }
    })()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Orders
