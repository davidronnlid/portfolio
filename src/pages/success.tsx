import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import {Link as RRDLink} from "react-router-dom";      

  interface SuccessPageProps {
        title: string;
        description?: string;
        };

  const SuccessPage = ({title, description}: SuccessPageProps):JSX.Element => <Box sx={{mt:5, width: "80%", mx: "auto", textAlign: "left"}}
      ><Typography variant="h4">{title}</Typography><Typography variant="body1" sx={{mb:2}}>{description}</Typography><RRDLink to="/" style={{textDecorationLine: "none"}}><Button variant='outlined' color="primary">Go back to portfolio page</Button></RRDLink></Box>
      

  export default SuccessPage;