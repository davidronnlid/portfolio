import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "20vw",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

interface progressAmount {
    title: string;
    percentage: number;
}

export default function ProgressBar({title, percentage}: progressAmount) {
  return (<><Typography textAlign="left"
  variant='h6'>{title}</Typography>
      <BorderLinearProgress variant="determinate" value={percentage} />
  </>);
}
