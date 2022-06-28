import Box from '@mui/material/Box';
      
  type SAProps = {
        SATitle: string;
      };

  const SA = ({SATitle}: SAProps):JSX.Element => <Box>{SATitle}</Box>

  export default SA;