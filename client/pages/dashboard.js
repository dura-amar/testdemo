import React from "react";
import StudentDashboard from "../components/dashboard/student/StudentDashboard";
import IssuerDashboard from "../components/dashboard/issuer/IssuerDashboard";

export default function dashboard() {
  return (
    <div className="section" style={{ backgroundColor: "#343a40" }}>
      <div
        style={{
          height: "130px",
        }}
      />
      <div className="container">
        <div className="content wow ">
          {/* Check the type of the current user and render the appropriate dashboard */}
          {/* <StudentDashboard /> */}
          <IssuerDashboard />
        </div>
      </div>
      <div
        style={{
          height: "50px",
        }}
      />
    </div>
  );
}

export async function getStaticProps() {
  return { props: { header: "dashboard", footer: "three" } };
}
