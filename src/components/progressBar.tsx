import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

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
    title?: string;
    percentage: number;
    icon?: JSX.Element;
    link?: string; 
}

export default function ProgressBar({title, percentage, icon, link}: progressAmount) {
  return (<><Typography textAlign="left"
  variant='h6' children={<>{icon ? <Tooltip title={title ? title : "Nope"}><IconButton><Link href={link}>{icon}</Link></IconButton></Tooltip> : title ? title : "No icon or title available"} 

  <BorderLinearProgress variant="determinate" value={percentage} sx={{mb:3}}/>
  </>} /></>);
}

