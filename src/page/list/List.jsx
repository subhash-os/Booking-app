import {React, useState,} from 'react'
import './List.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
const List = () => {

  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options)
  console.log(date,options);

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="liTitile">Search</h1>
            <div className="lsItem">
              <label>destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
            <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                min price<small>per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                max price<small>per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                adult
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
            </div>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                childran
              </span>
              <input type="number"  min={0} className="lsOptionInput" placeholder={options.children} />
            </div>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">
                room
              </span>
              <input type="number"  min={1} className="lsOptionInput" placeholder={options.room}/>
            </div>
            <button>Search</button>
          </div>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        
      </div>
    </div>
  </div>
  )
}

export default List
