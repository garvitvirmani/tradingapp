import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import "./copyright.css";

function CopyRight() {
  return (
    <Typography variant="h4" className="copy">
      Chart is updated live (Please be patient rate of change is slow)
    </Typography>
  );
}

export default CopyRight;
