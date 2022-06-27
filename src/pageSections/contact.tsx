import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';
import {FaLinkedinIn, FaGithub} from "react-icons/fa"
import TooltipLink from "../components/tooltip"

  interface ContactProps {
        title?: string;
        id: string;
      };

  const Contact = ({title, id}: ContactProps):JSX.Element => <Box
        sx={{ display: { xs: 'flex', md: 'flex' }, my: 1,
                  }}
        children={
        <Box sx={{width: "80%", mx: "auto"}} id={id}>


{title ? <Typography variant="h5">{title}</Typography> : ""}

<Typography variant="subtitle1">Contact form coming soon...</Typography>
<br/>
<Typography variant="h6" sx={{mb:1}}>Connect via LinkedIn or view my code on GitHub</Typography>

<TooltipLink title="Davids LinkedIn page" link="https://linkedin.com/in/davidronnlid/" icon={<FaLinkedinIn style={{height: "50px", width: "50px", marginRight: "20%"}}/>}/>
<TooltipLink title="Davids GitHub page" link="https://github.com/davidronnlid/" icon={<FaGithub style={{height: "50px", width: "50px", marginLeft: "20%"}}/>}/>

</Box>
        }/>
  export default Contact;