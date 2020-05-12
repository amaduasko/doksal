import { useState, useEffect } from 'react';
import { geolocated } from "react-geolocated";
import fetch from 'isomorphic-unfetch'

export const SearchInput = ({ coords, isGeolocationAvailable, isGeolocationEnabled }) => {
  const [city, setCity] = useState("")
  const [isFound, setIsFound] = useState(false)
  const [citiesListSearch, setCitiesListSearch] = useState([])

  useEffect(() => {
    const getCity = async () => {
      if (coords == null) return

      const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${
        process.env.YMAPS_API
        }&geocode=${coords.longitude},${coords.latitude}&format=json&kind=locality&results=1`

      const res = await fetch(url)
      const data = await res.json()

      if (+data.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.found == 0) {
        setIsFound(false)
      } else {
        setIsFound(true)
        setCity(data.response.GeoObjectCollection.featureMember[0].GeoObject.name)
      }
    }
    getCity()
  }, [coords])

  useEffect(() => {
    if (!isGeolocationEnabled) {
      setIsFound(false)
    }
  }, [isGeolocationEnabled])

  useEffect(() => {
    if (!isGeolocationAvailable) {
      setIsFound(false)
    }
  }, [isGeolocationAvailable])

  const citiesList = () => {
    setCity("")
  }

  const cities = (city) => {
    setCity(city)
    setCitiesListSearch([])
  }

  const searchCity = async (e) => {
    const cityName = e.target.value
    setCity(cityName)
    if (cityName.length > 2) {
      const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${
        process.env.YMAPS_API
        }&geocode=Россия+город+${cityName}&format=json&results=10`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      if (+data.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.found == 0) {
        setIsFound(false)
      } else {
        setIsFound(true)
        const q = (data.response.GeoObjectCollection.featureMember.map(member => member.GeoObject.name))

        setCitiesListSearch(q)
      }

    }
  }
  return (
    <div className="searchinput">
      <input placeholder="Введите город" value={city} onClick={citiesList} onChange={searchCity} className="searchinput__input"></input>
      {citiesListSearch && citiesListSearch.length > 0 && (
        <div className="searchinput__list">
          {citiesListSearch.map(((city, i) =>
            <span className="searchinput__list__item" onClick={() => cities(city)} key={i}>{city}</span>
          ))}
        </div>
      )}
      <style jsx>{`
              .searchinput__list{
                position:absolute;
                top:43px;
                left:0px;
                background-color: #fff;
                display:flex;
                flex-direction: column; 
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                padding:1rem;
                padding-bottom:unset;
              }
              .searchinput__list__item{
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 21px;
                padding-bottom:1rem;
                cursor: pointer;
              }
              .searchinput {
                position: relative;
                margin-left: auto;
              }
              .searchinput__input {
                position:relative;
                max-width: 140px;
                wdith: 100%;
                font: inherit;
                border: 1px solid #e6e6e6;
                border-radius: 20px;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 21px;
                color: #414141;
                padding: 9px 40px;
              }
              .searchinput::before {
                content: url(/static/img/map-logo.png);
                position: absolute;
                left: 0;
                top: 3px;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.5;
                transition: opacity 0.5s ease;
                cursor: pointer;
                z-index: 1;
              }
              .searchinput:hover::before {
                opacity: 1;
                
              }
              @media (max-width: 920px) {
                .searchinput {
                  display: none;
                }
              }
            `}</style>
    </div>
  )
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(SearchInput);