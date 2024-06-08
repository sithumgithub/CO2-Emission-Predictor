import React from 'react';
import './Prediction.css';
import Header from '../components/header/header';

export default function Prediction() {
  return (
    <>
      <Header />
      <div className="home-background">
        <div className="overlay">
          <div className="signin">
            <h2>CO2 Prediction</h2>
          </div>
          <div className="forms-container">
            <div className="form-column">
               <form>
                <div className="form-group">
                  <label htmlFor="maker">Maker:</label>
                  <input type="text" id="maker" name="maker" />
                </div>
                <div className="form-group">
                  <label htmlFor="vehicle-class">Vehicle Class:</label>
                  <input type="text" id="vehicle-class" name="vehicle-class" />
                </div>
                <div className="form-group">
                  <label htmlFor="engine-type">Engine Type:</label>
                  <input type="text" id="engine-type" name="engine-type" />
                </div>
              </form>
            </div>
            <div className="form-column">
              <form>
               <div className="form-group">
                  <label htmlFor="fuel-road">Fuel Consumption Road:</label>
                  <input type="text" id="fuel-road" name="fuel-road" />
                </div>
                <div className="form-group">
                  <label htmlFor="fuel-hwy">Fuel Consumption Hwy:</label>
                  <input type="text" id="fuel-hwy" name="fuel-hwy" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
