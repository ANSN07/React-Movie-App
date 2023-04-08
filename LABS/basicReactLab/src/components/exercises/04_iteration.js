import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  const rows = props.modules.map((module, index) => {
    return (
      <tr key={index}>
        <td>{module.name}</td>
        <td>{module.noLectures}</td>
        <td>{module.noPracticals}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>{props.course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Demo;
