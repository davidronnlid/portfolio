import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import TooltipLink from "./tooltip";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "100%",
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
    icon: JSX.Element;
    link: string; 
}

export default function ProgressBar({title, percentage, icon, link}: progressAmount) {
  return (<><Typography textAlign="left"
  variant='h6' children={<><TooltipLink icon={icon} title={title} link={link}/>

  <BorderLinearProgress variant="determinate" value={percentage} sx={{mb:3}}/>
  </>} /></>);
}