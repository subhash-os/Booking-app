import React from 'react'
import './Featured.css'
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg" alt="" className='featuredImg' />
        <div className="featuredTitles">
            <h1>dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://blog.thomascook.in/wp-content/uploads/2018/05/img-7-3-e1526876027464.jpg" alt="" className='featuredImg' />
        <div className="featuredTitles">
            <h1>kerala</h1>
            <h2>823 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.abhibus.com/blog/wp-content/uploads/2023/03/charminar-hyderabad-entryfee-timings-tour-package-header-1-1024x512.jpg" alt="" className='featuredImg' />
        <div className="featuredTitles">
            <h1>tamilnadu</h1>
            <h2>523 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
