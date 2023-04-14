import { memo } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const BasicAlert = ({ severity = "success", message }) => {
  return (
    <Stack
      sx={{
        width: ["50%", "40%", "30%", "25%"],
        position: "absolute",
        bottom: "4%",
        left: "50%",
        transform: "translateX(-50%)"
      }}
      spacing={2}
    >
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </Stack>
  );
};

export default memo(BasicAlert);
