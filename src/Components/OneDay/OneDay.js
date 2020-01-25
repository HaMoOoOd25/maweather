import React, { Component } from "react";
import axios from 'axios';
import dateformat from 'dateformat';
import WeatherDetails from './WeatherDetails';
//import "react-vis/dist/styles"

class Day extends Component {

  state = {
    day: null
  }

  componentDidMount(){
    axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/271669?apikey=jtsCwGsKh0H9RPPLDWIIWzkwZBNBosmH&details=true')
      .then(async res => {

        //Get the requested date
        const day = res.data.DailyForecasts.find(d => {
          const date = new Date(d.Date)
          return date.getDate().toString() === this.props.match.params.date
        });

        //Get min and max date 
        const days = res.data.DailyForecasts;
        const maxDate = new Date(days[days.length - 1].Date);
        const maxDay = maxDate.getDate();
        const minDate = new Date(days[0].Date);
        const minDay = minDate.getDate();
        
        this.setState({
          day: day,
          maxDay: maxDay,
          minDay: minDay
        })
      });
  }

  render() {

    //Get weather detailes
    const getDetails = this.state.day ? (() => {      
      return (
        <WeatherDetails day={this.state.day}/>
      );
    }) : (() => {
      return (
        <div>Loading..</div>
      )
    });

      const today = new Date(Date.now());

      const nextDay = parseInt(this.props.match.params.date) + 1;
      const prevDay = parseInt(this.props.match.params.date) - 1;
      console.log("h")

      const maxDay = (today.getDate() + 4).toString();
      const minDay = (today.getDate()).toString();
      console.log(maxDay)

      const nextButton = (this.props.match.params.date === maxDay) ? ("") : (<a href={`/day/${nextDay}`}><i className="fas fa-arrow-alt-circle-right ml-3"></i></a>)
      const prevButton = (this.props.match.params.date === minDay) ? ("") : (<a href={`/day/${prevDay}`} ><i className="fas fa-arrow-alt-circle-left mr-3"></i></a>)
  
    const dateController = this.state.day ? (

        <div>
          {prevButton}
          {dateformat(this.state.day.Date, "fullDate")}
          {nextButton}
        </div>
      
    ) : (null)


    //Main Return
    return (
      <div className="Main">
        <section className="content">
        
        <h1 className="content-head">
        {dateController}
        </h1>

        <div className="row">
          <div className="macard col-sm">
          {getDetails()}
          </div>
        </div>
      </section>

      </div>
    );
  }
}

export default Day;
