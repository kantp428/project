import Table_enchage from "@/components/Table/Table_enchage";
import { Grid } from "@mui/material";

import React from "react";
const page = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ marginBottom: 3 }}>
        <Table_enchage />
      </Grid>
    </Grid>
  );
};

export default page;
