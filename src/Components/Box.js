import React from "react";
import './Box.css';

function CourseItem({ title, startDate }) {
  return (
    <div className="ag-courses_item">
      <a href="https://werqlabs.com/" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          {title}
        </div>

        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">
            {startDate}
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Box() {
  return (
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <CourseItem
          title="UI/Web &amp; Graph design for teenagers 11-17 years old"
          startDate="04.11.2022"
        />
        <CourseItem
          title="UX/UI Web-Design + Mobile Design"
          startDate="04.11.2022"
        />
        <CourseItem
          title="Annual package &quot;Product+UX/UI+Graph designer 2022&quot;"
          startDate="04.11.2022"
        />
        {/* Add more CourseItem components as needed */}
        <CourseItem
          title="Motion Design"
          startDate="30.11.2022"
        />
      </div>
    </div>
  );
}
