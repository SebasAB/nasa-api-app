import React, { useState } from "react";

import ApodInfo from "../ApodInfo/ApodInfo";

const RandomApod = () => {
  const [data, setData] = useState(null);

  const [failed, setFailed] = useState(false);

  const [serverError, setServerError] = useState(false);

  let apodsNumber = 0;

  const searchAPOD = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=e2mk3phgQctL3UaM4BHd3lkfm0vSfWNSjtUTBas3&count=${apodsNumber}`
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
      <h4 className="title">Random Astronomy Pictures of the Day</h4>
      <h5 className="title">
        Enter the number of APODs you want to see (Change the number for every
        request)
      </h5>
      <div className="container">
        <div className="container w-50 ">
          <input
            type="number"
            className="form-control"
            placeholder="Enter a number"
            aria-label="Enter a number"
            onChange={(e) => (apodsNumber = e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark mt-3 mb-2 "
            onClick={searchAPOD}
          >
            Search random APODS
          </button>
        </div>
      </div>
      {failed ? (
        <div className="alert alert-danger mt-3" role="alert">
          Incorrect number.
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
      {data ? data.map((apodData) => <ApodInfo data={apodData} />) : <></>}
    </div>
  );
};

export default RandomApod;
