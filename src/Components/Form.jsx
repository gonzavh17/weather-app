import React, { useState, useEffect } from "react";
import '../Assets/Css/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Form = ({newLocation}) => {
  const [city, setCity] = useState("");
  const [time, setTime] = useState(new Date());

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if(city === "" || !city) return

    newLocation(city)
  };

  return (

      <div className="form-container" data-aos="zoom-in">
        <form onSubmit={onSubmit}>
          <div className="form">
            <FontAwesomeIcon icon={faLocationDot}/>
            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="btn"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            <p className="date">{date}</p>
            <p className="hour">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </form>
      </div>


  );
};

export default Form