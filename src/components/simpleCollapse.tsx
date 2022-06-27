import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";

interface contentToShow {
  toShow: ReactNode | string;
}

export default function SimpleCollapse({ toShow }: contentToShow) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show more about David"
      />
      <Collapse in={checked}>{toShow}</Collapse>
    </Box>
  );
}
