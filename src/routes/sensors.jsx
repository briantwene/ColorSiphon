import React, { useState, useEffect } from "react";
import { Await } from "react-router-dom";

function Sensors() {
  const [accel, setAccel] = useState({ x: 0, y: 0, z: 0 });
  const [light, setLight] = useState(0);
  let accelerometer = null;
  let lightSensor = null;

  const startAccel = () => {
    try {
      accelerometer = new Accelerometer({ referenceFrame: "device" });
      lightSensor = new AmbientLightSensor();
      mag = new Magnetometer();

      accelerometer.addEventListener("error", (event) => {
        console.log(event.error.name, event.error.message);
      });
      accelerometer.addEventListener("reading", () => {
        setAccel({
          x: accelerometer.x,
          y: accelerometer.y,
          z: accelerometer.z
        });
      });

      lightSensor.addEventListener("reading", (event) => {
        setLight(lightSensor.illuminance);
      });

      lightSensor.addEventListener("error", (event) => {
        console.log(event.error.name, event.error.message);
      });

      accelerometer.start();
      lightSensor.start();
    } catch (error) {
      // Handle construction errors.
      if (error.name === "SecurityError") {
        // See the note above about permissions policy.
        console.log("Sensor construction was blocked by a permissions policy.");
      } else if (error.name === "ReferenceError") {
        console.log("Sensor is not supported by the User Agent.");
      } else {
        throw error;
      }
    }
  };
  const startLight = () => {};
  const startOrientation = () => {};
  const startMagnet = () => {};

  async function startSensors() {
    console.log("is run");
    Promise.all([
      navigator.permissions.query({ name: "accelerometer" }),

      navigator.permissions.query({ name: "ambient-light-sensor" })
    ]).then((results) => {
      if (results.every((result) => result.state === "granted")) {
      }
    });
  }

  //   useEffect(() => {
  //     startSensor();
  //   }, []);

  return (
    <div className="container flex-grow flex flex-col items-center mx-auto px-5">
      <div>
        <button onClick={startSensors}>launch</button>
        <h1>Accelerometer</h1>
        <div>
          X: {accel.x} Y: {accel.y} Z: {accel.z}
        </div>
      </div>
      <div>
        <h1>Light Sensor</h1>
        <div>{light} lux</div>
      </div>
    </div>
  );
}

export default Sensors;
