import React, { Component } from "react";
import axios from "axios";
import dateformat from 'dateformat';

import logo from "../icons/weather.svg";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {
    days: []
  };

  componentDidMount() {
    axios
      .get(
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/271669?apikey=jtsCwGsKh0H9RPPLDWIIWzkwZBNBosmH&details=true"
      )
      .then(res => {
        this.setState({
          days: res.data.DailyForecasts
        });
      });
  }

  handleDayClick = (e) => {
    console.log(e.target)
    //this.props.history.push('/day/' + e.);
  }

  render() {
    const daysList = this.state.days.length ? (
      this.state.days.map(day => {

        //console.log(day);
        const date = new Date(day.Date);
        const todayDate = new Date(Date.now());

        //Params
        const className = (date.getDate ()=== todayDate.getDate()) ? ("macard col-sm col-md today") : ("macard col-sm col-md");
        const dateFormat = dateformat(date, 'fullDate');
        const phrase = day.Day.IconPhrase
        const minTemp = Math.floor((day.Temperature.Minimum.Value - 32) * 5/9) + " C";
        const maxTemp = Math.floor((day.Temperature.Maximum.Value - 32) * 5/9) + " C";
        const precipitation = day.Day.HasPrecipitation ? (day.Day.PrecipitationProbability + "%") : ("0%");
        const icon = require(`../icons/${day.Day.Icon}.png`);
        
        return (
          <div  className={className} key={date.getDate()}>
            <div className="macard-header">
              <h3>{dateFormat}</h3>
            </div>
            <div className="macard-body">
              <p>
              <img
                src={icon}
                className="img-fluid"
                alt= {day.Day.Icon}
              />
              </p>
              {phrase}
              <p>
                <span className="badge badge-primary mr-2">{minTemp}</span>
                <span className="badge badge-danger">{maxTemp}</span>
              </p>
              <p>
                <span className="fas fa-tint"> Precipitation: {precipitation}</span>
              </p>
              <p>
                <Link to={`/day/${date.getDate()}`}>Get Detailes</Link>
              </p>
            </div>
          </div>
        );

      })
    ) : (
      <div>Loading...</div>
    );

    return (
      <div className="Main">
        <section className="content">
          <h1 className="content-head">
            <img src={logo} className="img-fluid" alt="weather icon" />
            Ma Weather
          </h1>

          <h4 className="content-subhead">
            Just a simple weather web app to showcase basic skills in MERN
            development
          </h4>

          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Hey Random Dude!</strong> I just wanna tell you that this
            only works at Qatar.... For now maybe.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          {/* <form action="/">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select className="form-control" name="country" id="country">
                <option>Qatar</option>
              </select>
            </div>
          </form> */}

          <div className="row">
            {daysList}
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
