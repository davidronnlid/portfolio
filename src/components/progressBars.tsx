import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgBar, {ProgBarProps} from "./progressBar";

type ProgBarPropsTypes = ProgBarProps;

interface ProgBarsProps {
  metaTitle?: string;
  progBarsData: ProgBarPropsTypes[];
}

const ProgBars = ({
  metaTitle,
  progBarsData,
}: ProgBarsProps): JSX.Element => (
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
          (progBarData: ProgBarProps) =>
            (
              <ProgBar
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

export default ProgBars;
