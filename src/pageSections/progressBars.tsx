import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressBar from "../components/progressBar";

interface ProgressBarsProps {
  metaTitle?: string;
  progBarsData: any;
}
interface progBarProps {
  title: string;
  percentage: number;
  icon: any;
  link: string;
}

const ProgressBars = ({
  metaTitle,
  progBarsData,
}: ProgressBarsProps): JSX.Element => (
  <Box
    sx={{  my: 1 }}
    >
      <>
        {metaTitle ? (
          <Typography textAlign="left" variant="h6">
            {metaTitle}
          </Typography>
        ) : (
          ""
        )}
<Box sx={{display: { xs: "flex", md: "flex" }, flexDirection: "column"}}>{progBarsData.map(
          (progBarData: progBarProps) =>
            (
              <ProgressBar
                title={progBarData.title}
                percentage={progBarData.percentage}
                icon={progBarData.icon}
                link={progBarData.link}
              />
            ) as JSX.Element
        )}
        </Box>
</>
</Box> 
);

export default ProgressBars;
