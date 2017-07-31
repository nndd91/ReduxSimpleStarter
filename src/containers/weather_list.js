import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name

    const temp = cityData.list.map(item => {
      return item.main.temp
    })
    const humidity = cityData.list.map(item => {
      return item.main.humidity
    })
    const pressure = cityData.list.map(item => {
      return item.main.pressure
    })
    
    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          {cityData.city.temperature}
        </td>
        <td>
          {cityData.city.pressure}
        </td>
        <td>
          {cityData.city.humidity}
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
