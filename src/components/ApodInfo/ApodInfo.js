import React from "react";

const ApodInfo = ({ data }) => {
  return (
    <div className="container mt-3">
      {!data ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="container text-center">
            <h5 className="subtitle">Date: {data.date}</h5>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="container">
                {data.hdurl ? (
                  <img
                    src={data.hdurl}
                    className="img-thumbnail"
                    width={"100%"}
                  />
                ) : (
                  <img
                    src={data.url}
                    className="img-thumbnail"
                    width={"100%"}
                  />
                )}
                {data.copyright ? (
                  <p>
                    Copyright: <em>{data.copyright}</em>
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="container">
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ApodInfo;
