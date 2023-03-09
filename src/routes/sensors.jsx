import React, { useState, useEffect } from "react";
import { Await } from "react-router-dom";

function Sensors() {
  const [accel, setAccel] = useState({ x: 0, y: 0, z: 0 });
  const [gscope, setGscope] = useState({ x: 0, y: 0, z: 0 });
  const [magnet, setMagnet] = useState({ x: 0, y: 0, z: 0 });
  let accelerometer = null;
  let lightSensor = null;

  const startSensors = () => {
    try {
      accelerometer = new Accelerometer({ referenceFrame: "device" });
      gyro = new Gyroscope();
      mag = new Magnetometer();

      accelerometer.addEventListener("error", (event) => {
        console.log(event.error.name, event.error.message);
      });
      accelerometer.addEventListener("reading", () => {
        console.log("is work");
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

      mag.addEventListener("reading", (e) => {
        setGscope({
          x: gyro.x,
          y: gyro.y,
          z: gyro.z
        });
      });

      gyro.addEventListener("reading", (e) => {
        setMagnet({
          x: mag.x,
          y: mag.y,
          z: mag.z
        });
      });

      accelerometer.start();
      gyro.start();
      mag.start();
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

  async function runPermissions() {
    console.log("is run");
    Promise.all([
      navigator.permissions.query({ name: "accelerometer" }),
      navigator.permissions.query({ name: "magnetometer" }),
      navigator.permissions.query({ name: "gyroscope" })
    ]).then((results) => {
      if (results.every((result) => result.state === "granted")) {
        startSensors();
      }
    });
  }

  //   useEffect(() => {
  //     startSensor();
  //   }, []);

  return (
    <div className="container flex-grow flex flex-col items-center mx-auto px-5">
      <div>
        <button onClick={runPermissions}>launch</button>
        <h1>Accelerometer</h1>
        <div>
          X: {accel.x} Y: {accel.y} Z: {accel.z}
        </div>
      </div>

      <div>
        <h1>Magnetometer</h1>
        <div>
          X: {magnet.x} Y: {magnet.y} Z: {magnet.z}
        </div>
      </div>
      <div>
        <h1>GyroScope</h1>
        <div>
          X: {gscope.x} Y: {gscope.y} Z: {gscope.z}
        </div>
      </div>
    </div>
  );
}

export default Sensors;
