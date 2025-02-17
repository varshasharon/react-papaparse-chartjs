import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Papa from 'papaparse';


const PatientData = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    // Fetch CSV file
    fetch('/assets/patient_dataset.csv') // Replace with actual file path
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setPatientData(result.data);
          },
        });
      });
  }, []);

  return (
    <div className="con">
      <div className="side"></div>
      <div className="detail">
        <h1>Patient Details</h1>
        <p>This page provides a comprehensive list of patient details. <br/> You can also download the data as a CSV file for further analysis and record management.</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Patient Name</th>
              <th>Blood Pressure</th>
              <th>Cholesterol</th>
              <th>Age</th>
              <th>BMI</th>
              <th>Heart Rate</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patient["Patient"]}</td>
                <td>{patient["BP"]}</td>
                <td>{patient["Cholesterol"]}</td>
                <td>{patient["Age"]}</td>
                <td>{patient["BMI"]}</td>
                <td>{patient["Heart_Rate"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="bn"><button className='b'><a href="/assets/patient_dataset.csv" download="test">download csv</a></button></div>

      </div>
    </div>
  );
};

export default PatientData;
