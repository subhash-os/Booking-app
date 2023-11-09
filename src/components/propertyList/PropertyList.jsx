import React from 'react'
import './PropertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBAAO1JxCBnqfYoxtVl4UM2la92-01NA-aa9YfSi7&s" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>hotels</h1>
            <h2>122 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/20/164/15/booking-best-hotels-bangkok-tourism-wallpaper-preview.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>AIR BNB</h1>
            <h2>528 AIR BNB</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9b/44/ca/nirali-resorts.jpg?w=700&h=-1&s=1" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>resorts</h1>
            <h2>922 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://ik.imagekit.io/bbhed67kj/wp-content/uploads/2022/10/Luxury-Sakleshpur-Homestay-Near-Waterfalls-3-500x300.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Home stay</h1>
            <h2>58 Home stay</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
