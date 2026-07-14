import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAll = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-data")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">View Vehicle Bookings</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Owner Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Vehicle Reg. No.</th>
              <th>Vehicle Brand</th>
              <th>Vehicle Model</th>
              <th>Battery Capacity</th>
              <th>Connector Type</th>
              <th>Charging Date</th>
              <th>Time Slot</th>
              <th>Estimated Units</th>
              <th>Charging Bay No.</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value) => (
              <tr key={value._id}>
                <td>{value.bookingId}</td>
                <td>{value.ownerName}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.vehicleRegistrationNumber}</td>
                <td>{value.vehicleBrand}</td>
                <td>{value.vehicleModel}</td>
                <td>{value.batteryCapacity}</td>
                <td>{value.connectorType}</td>
                <td>{value.chargingDate}</td>
                <td>{value.timeSlot}</td>
                <td>{value.estimatedUnits}</td>
                <td>{value.chargingBayNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAll;