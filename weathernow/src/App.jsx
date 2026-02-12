import { useState, useEffect } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import CurrentWeather from "./components/CurrentWeather"
import Metrics from "./components/Metrics"
import DailyForecast from "./components/DailyForecast"
import HourlyFocast from "./components/HourlyFocast"
import LoadingState from "./components/LoadingState"

import {fetchWeatherData} from "./lib/utils"
import error from "./assets/images/icon-error.svg"
import retry from "./assets/images/icon-retry.svg"




export default function App() {
const[wetherData, setWeatherData] = useState(null)

const[location, setLocation] =useState({
  name: "Berlin, Germany",
  lat: 52.52,
  lon:13.405
})

const [units,setUnits] = useState("metric")
const [loading,setLoading] = useState(false)
const [initialLoading,setInitialLoading] = useState(true)
const [selectedDay, setSelectedDay] = useState(0)
const [searchResults, setSearchResults] = useState([])
const [showSearchResults, setShowSearchResults] = useState(false)

const handleSearch =async(searchTerm) => {}

const loadWeatherData = async() => {}

useEffect (() => {
  loadWeatherData()
},[location,units])

const toggleUnits = () => {
  setUnits(units === "metric" ? "imperial":"metric")
}

if (initialLoading){
  return <LoadingState/>
}


const handleLocationSelect = (locationData) => {}




  return <div className="min-h-screen text-white ">
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <Header units={units} onToggleUnits={toggleUnits}/>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-16 text-shadow">
          How's the sky looking today?
        </h1>


      <Search onSearch={handleSearch} loading={loading} searchResults = {searchResults} showSearchResults={showSearchResults} 
      onLocationSelect = {handleLocationSelect} onCloseResults={()=>setShowSearchResults(false)}/>
      </div>


    

    </div>
  </div>
}