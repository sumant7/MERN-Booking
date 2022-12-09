import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css"
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"

export default function Header({type}) {
  const [openDate,setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions,setOpenOptions] = useState(false)
  const[options,setOptions]= useState({
    adult:1,
    children:0,
    room:1
  })
  const handleOption =(name,operation)=>{
    setOptions(prev=>{
      return{
        ...prev,[name]:operation==='i'?options[name]+1:options[name]-1
      }
    })
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
{ type!=="list" &&
<>      <h1 className="headerTitle">Find your next stay!</h1>
        <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
        <button className="headerBtn">Sign in /Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder="Where you going?" className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" onClick={()=>setOpenDate(!openDate)}/>
            <span className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date} className='date'
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" onClick={()=>setOpenOptions(!openOptions)} />
            <span className='headerSearchText'>{`${options.adult} Adult . ${options.children} Children . ${options.room} Room(s)`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button className="optionCounterButton" onClick={()=>handleOption("adult","d")} disabled={options.adult<=1}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button className="optionCounterButton" onClick={()=>handleOption("children","d")} disabled={options.children<=0}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className="optionCounterButton" onClick={()=>handleOption("room","d")} disabled={options.room<=1}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div></>}
      </div>
    </div>
  )
}
