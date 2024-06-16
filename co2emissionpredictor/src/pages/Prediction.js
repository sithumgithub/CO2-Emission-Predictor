import React from 'react';
import './Prediction.css';
import Header from '../components/header/header';

export default function Prediction() {
  return (
    <>
      <Header /> 
      <div className="home-background">
        <div className="overlay1">
          <div className="predict-main">
            <div className="signin1">
              <h2>CO2 Prediction</h2>
            </div>
            <div className="forms-container">
              <div className="form-column1">
                <form>
                  <div className="form-group1">
                    <label htmlFor="maker">Maker:</label>
                    <input type="text" id="maker" name="maker" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="vehicle-class">Vehicle Class:</label>
                    <input type="text" id="vehicle-class" name="vehicle-class" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="engine-type">Engine Type:</label>
                    <input type="text" id="engine-type" name="engine-type" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="cylinders">Cylinders:</label>
                    <input type="text" id="cylinders" name="cylinders" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="transmission">Transmission :</label>
                    <input type="text" id="transmission" name="transmission" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="fuel-type">Fuel Type :</label>
                    <input type="text" id="fuel-type" name="fuel-type" />
                  </div>
                </form>
              </div>
              <div className="form-column">
                <form>
                  <div className="form-group1">
                    <label htmlFor="fuel-road-city">Fuel Consumption <br></br>[City (L/100 Km)] :</label>
                    <input type="text" id="fuel-road-city" name="fuel-road-city" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="fuel-road-hwy">Fuel Consumption<br></br> [Hwy (L/100 Km)] :</label>
                    <input type="text" id="fuel-road-hwy" name="fuel-road-hwy" />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="fuel-road-comb">Fuel Consumption <br></br>[Comb (mpg)] :</label>
                    <input type="text" id="fuel-road-comb" name="fuel-road-comb" />
                  </div>

                  <div className="form-group1">
                    <label htmlFor="fuel-road-comb">Fuel Consumption <br></br>[Comb (mpg)] :</label>
                    <input type="text" id="fuel-road-comb" name="fuel-road-comb" />
                  </div>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
