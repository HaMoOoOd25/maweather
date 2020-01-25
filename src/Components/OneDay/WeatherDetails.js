import React from "react";
import dateformat from "dateformat";

const WeatherDetails = (props) => {
    const day = props.day;
    const date = new Date(day.Date);
    const formattedDate = dateformat(date, "fullDate")

    const phrase = day.Day.IconPhrase
    const minTemp = Math.floor((day.Temperature.Minimum.Value - 32) * 5/9) + " C";
    const maxTemp = Math.floor((day.Temperature.Maximum.Value - 32) * 5/9) + " C";
    const precipitation = day.Day.HasPrecipitation ? (day.Day.PrecipitationProbability + "%") : ("0%");
    const wind = Math.floor(day.Day.Wind.Speed.Value * 1.609) + " kph"
    const icon = require(`../icons/${day.Day.Icon}.png`);
  return (
    <div>
      <div className="macard-header">
        <h2>Weather</h2>
      </div>

      <div className="macard-body">

        <p>
          <img src={icon} alt="icon" className="img-fluid" />
          {phrase}
        </p>

        <p>
          <span className="fas fa-temperature-high">
            Highest Temperature: {maxTemp}
          </span>
        </p>

        <p>
          <span className="fas fa-temperature-low">
            Lowest Temperature: {minTemp}
          </span>
        </p>

        <p>
          <span className="fas fa-tint"> Precipitation: {precipitation}</span>
        </p>

        <p>
          <span className="fas fa-wind"> Wind: {wind}</span>
        </p>

      </div>
    </div>
  );
};

export default WeatherDetails;
