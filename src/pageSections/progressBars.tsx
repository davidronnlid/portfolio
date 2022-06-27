import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressBar from "../components/progressBar";

// Should have flexbox item props so that tech stack will take up 50% of horizontal page. Letting something else (contact?) take the space in the other half of the page

{
  /* <Box sx={{ justifyContent: 'space-between' }}>… */
}

interface ProgressBarsProps {
  metaTitle?: string;
  progBarsData: any;
}
interface progBarProps {
  title: string;
  percentage: number;
}

const ProgressBars = ({
  metaTitle,
  progBarsData,
}: ProgressBarsProps): JSX.Element => (
  <Box
    sx={{ display: { xs: "flex", md: "flex" }, my: 1 }}
    children={
      <>
        {metaTitle ? (
          <Typography textAlign="left" variant="h5">
            {metaTitle}
          </Typography>
        ) : (
          ""
        )}

        {progBarsData.map(
          (progBarData: progBarProps) =>
            (
              <ProgressBar
                title={progBarData.title}
                percentage={progBarData.percentage}
              />
            ) as JSX.Element
        )}

        {/* 
<ProgressBar title="React" percentage={80} />
<ProgressBar title="HTML5" percentage={80}/>
<ProgressBar title="JavaScript (ES6)" percentage={80}/>
<ProgressBar title="Netlify" percentage={30}/>
<ProgressBar title="Git" percentage={70}/>
<ProgressBar title="CSS3" percentage={70}/>
<ProgressBar title="Redux" percentage={55}/>
<ProgressBar title="TypeScript" percentage={40}/>
<ProgressBar title="NodeJS" percentage={30}/> */}
      </>
    }
  />
);

export default ProgressBars;
