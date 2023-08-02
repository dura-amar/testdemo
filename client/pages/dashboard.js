import React from "react";
import StudentDashboard from "../components/dashboard/student/StudentDashboard";

export default function dashboard() {
  return (
    <div className="section" style={{ backgroundColor: "#343a40" }}>
      <div className="container">
        <div className="fugu-error-content wow ">
          <StudentDashboard />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { header: "dashboard", footer: "three" } };
}
