import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/weather_chart'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name

    const temp = cityData.list.map(item => item.main.temp - 273)
    const humidity = cityData.list.map(item => item.main.humidity)
    const pressure = cityData.list.map(item => item.main.pressure)

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart data={temp} color="red" units="C" />
        </td>
        <td>
          <Chart data={humidity} color="grey" units="hPa"/>
        </td>
        <td>
          <Chart data={pressure} color="green" units="%" />
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather } // { weather } == { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
