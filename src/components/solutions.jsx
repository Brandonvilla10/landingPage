import React from "react";
import "../css/solutions.css"

function Solutions(props) {
  return (
    <>
    <div className="mainSolutionsDiv">
      <div className="divN">
        <p className="n">{props.numero}</p>
      </div>

      <div className="solutionsTopics">
        <h1 style={{margin:"unset"}}>{props.tittle}</h1>
        <p className="description" style={{margin:"unset", color:"grey"}}>{props.description}</p>
      </div>
    </div>
    </>
  );
}

export default Solutions;
