import React, { useState } from "react";
import ApodInfo from "../ApodInfo/ApodInfo";

const ApodByDate = () => {
  const [data, setData] = useState(null);

  const [failed, setFailed] = useState(false);

  const [serverError, setServerError] = useState(false);

  let year = 0;
  let month = 0;
  let day = 0;

  const searchAPOD = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=e2mk3phgQctL3UaM4BHd3lkfm0vSfWNSjtUTBas3&date=${year}-${month}-${day}`
    )
      .then((res) => res.json())
      .then(
        (apiData) => {
          switch (apiData.code) {
            case 400:
              setFailed(true);
              setServerError(false);
              break;

            case 500:
              setFailed(false);
              setServerError(true);
              break;

            default:
              setFailed(false);
              setServerError(false);
              setData(apiData);
          }
        },
        (error) => {
          console.log(`error: ${error}`);
        }
      );
  };

  return (
    <div className="container text-center">
      <h4 className="title">Astronomy Picture of the Day by Date</h4>
      <h5 className="title">Enter a date</h5>
      <div className="container">
        <div className="row g-1">
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Year"
              aria-label="Year"
              onChange={(e) => (year = e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Month"
              aria-label="Month"
              onChange={(e) => (month = e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Day"
              aria-label="Day"
              onChange={(e) => (day = e.target.value)}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-dark "
              onClick={searchAPOD}
            >
              Search APOD of that day
            </button>
          </div>
        </div>
      </div>
      {failed ? (
        <div className="alert alert-danger mt-3" role="alert">
          Incorrect date format.
        </div>
      ) : (
        <></>
      )}
      {serverError ? (
        <div className="alert alert-danger mt-3" role="alert">
          Service unavailable, try again later.
        </div>
      ) : (
        <></>
      )}
      {data ? <ApodInfo data={data} /> : <></>}
    </div>
  );
};

export default ApodByDate;
