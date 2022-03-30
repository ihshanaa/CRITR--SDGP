import React from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

import "./InputFields.css";

const InputFields = () => {
  return (
    <>
      <div className="padding-top" />
      <div className="input-fields">
        <div className="left-field">
          <div className="field-header">Sinhala</div>
          {/* <div className="border"> */}
          <input
            type="text"
            id="leftInput"
            placeholder="Paste Text here"
            className="field"
          />
          {/* </div> */}
        </div>
        <div className="icon-middle">
          <button
            className="button"
            //   onClick={alert("Translate Started")}
          >
            <ChangeCircleIcon fontSize="large" />
          </button>
        </div>
        <div className="right-field">
          <div className="field-header">English</div>
          {/* <div className="border"> */}
          <div className="field" id="translated"></div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default InputFields;
