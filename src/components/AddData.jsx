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
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
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
        <h2 className="text-center mb-4">Add Vehicle Booking</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Booking ID</label>
            <input
              type="text"
              className="form-control"
              name="bookingId"
              value={input.bookingId}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              name="ownerName"
              value={input.ownerName}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={input.email}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={input.phone}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Vehicle Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="vehicleRegistrationNumber"
              value={input.vehicleRegistrationNumber}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Vehicle Brand</label>
            <input
              type="text"
              className="form-control"
              name="vehicleBrand"
              value={input.vehicleBrand}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Vehicle Model</label>
            <input
              type="text"
              className="form-control"
              name="vehicleModel"
              value={input.vehicleModel}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Battery Capacity (kWh)</label>
            <input
              type="text"
              className="form-control"
              name="batteryCapacity"
              value={input.batteryCapacity}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Connector Type</label>
            <input
              type="text"
              className="form-control"
              name="connectorType"
              value={input.connectorType}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Charging Date</label>
            <input
              type="date"
              className="form-control"
              name="chargingDate"
              value={input.chargingDate}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Time Slot</label>
            <input
              type="text"
              className="form-control"
              name="timeSlot"
              value={input.timeSlot}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Estimated Units (kWh)</label>
            <input
              type="text"
              className="form-control"
              name="estimatedUnits"
              value={input.estimatedUnits}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Charging Bay Number</label>
            <input
              type="text"
              className="form-control"
              name="chargingBayNumber"
              value={input.chargingBayNumber}
              onChange={inputHandler}
            />
          </div>

          <div className="col-12 text-center">
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