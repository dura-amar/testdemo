import React, { useState, useEffect } from "react";
import VerifierCard from "./VerifierCard";
import StudentList from "./StudentList";

const VerifierDashboard = () => {
  //   const [verifier, setVerifier] = useState(null);
  //   const [students, setStudents] = useState([]);

  // Fetch the verifier and students data

  // test data
  const verifier = {
    name: "John Doe",
    organization: "XYZ Verifier Inc",
  };

  const students = [
    {
      id: 1,
      name: "Alice Smith",
      certificates: [
        {
          id: 101,
          name: "Certificate of Achievement",
        },
      ],
    },
    {
      id: 2,
      name: "Bob Johnson",
      certificates: [
        {
          id: 201,
          name: "Certificate of Excellence",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container"></div>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            {verifier && <VerifierCard verifier={verifier} />}
          </div>
          <div className="col-md-8">
            {students.length > 0 && (
              <StudentList students={students} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifierDashboard;
