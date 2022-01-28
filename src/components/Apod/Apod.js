import React, { useState, useEffect } from "react";
import ApodInfo from "../ApodInfo/ApodInfo";

const Apod = () => {
  const [data, setData] = useState({});

  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=e2mk3phgQctL3UaM4BHd3lkfm0vSfWNSjtUTBas3&date"
    )
      .then((res) => res.json())
      .then(
        (apiData) => {
          apiData.code === 500 ? setFailed(true) : setData(apiData);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="container text-center">
      <h4 className="title">Astronomy Picture of the Day</h4>
      {failed ? (
        <div className="alert alert-danger" role="alert">
          Service currently unavailable. Try again later.
        </div>
      ) : (
        <ApodInfo data={data} />
      )}
    </div>
  );
};

export default Apod;
