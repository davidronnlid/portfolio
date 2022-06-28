import Box from '@mui/material/Box';
      
  interface SuccessPageProps {
        title: string;
        };

  const SuccessPage = ({title}: SuccessPageProps):JSX.Element => <Box
      >{title}</Box>
      

  export default SuccessPage;