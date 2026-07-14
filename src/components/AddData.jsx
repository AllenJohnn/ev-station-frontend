import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const AddData = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    ownerName: "",
    email: "",
    phone: "",
    vehicleRegistrationNumber: "",
    vehicleBrand: "",
    vehicleModel: "",
    batteryCapacity: "",
    connectorType: "",
    chargingDate: "",
    timeSlot: "",
    estimatedUnits: "",
    chargingBayNumber: "",
  });

  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    axios
      .post("http://localhost:3000/add-data", input)
      .then((response) => {
        alert(response.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row g-3">

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Booking ID"
              name="bookingId"
              value={input.bookingId}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Owner Name"
              name="ownerName"
              value={input.ownerName}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone"
              value={input.phone}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle Registration Number"
              name="vehicleRegistrationNumber"
              value={input.vehicleRegistrationNumber}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle Brand"
              name="vehicleBrand"
              value={input.vehicleBrand}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle Model"
              name="vehicleModel"
              value={input.vehicleModel}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Battery Capacity"
              name="batteryCapacity"
              value={input.batteryCapacity}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Connector Type"
              name="connectorType"
              value={input.connectorType}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              name="chargingDate"
              value={input.chargingDate}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Time Slot"
              name="timeSlot"
              value={input.timeSlot}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Estimated Units"
              name="estimatedUnits"
              value={input.estimatedUnits}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Charging Bay Number"
              name="chargingBayNumber"
              value={input.chargingBayNumber}
              onChange={inputHandler}
            />
          </div>

          <div className="col-12">
            <button className="btn btn-primary" onClick={readValue}>
              Add Booking
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddData;