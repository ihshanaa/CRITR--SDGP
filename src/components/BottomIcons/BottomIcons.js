import React from "react";
import {
  Article,
  FileCopy,
  Link,
  Print,
  Save,
  Share,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

import "./BottomIcons.css";

const BottomIcons = () => {
  return (
    <div className="bottom-icons">
      <Tooltip title="Copy">
        <FileCopy fontSize="large" />
      </Tooltip>

      <Tooltip title="Save">
        <Save fontSize="large" />
      </Tooltip>

      <Tooltip title="Share">
        <Share fontSize="large" />
      </Tooltip>

      <Tooltip title="Print">
        <Print fontSize="large" />
      </Tooltip>

      <Tooltip title="Dictionary">
        <Article fontSize="large" />
      </Tooltip>

      <Tooltip title="Link">
        <Link fontSize="large" />
      </Tooltip>
    </div>
  );
};

export default BottomIcons;
