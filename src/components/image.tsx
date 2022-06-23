import Box from '@mui/material/Box';
      
  type ImageProps = {
        imgSrcUrl: string;
        imgAlt: string;
      };

  const MUIImg = ({imgSrcUrl, imgAlt}: ImageProps):JSX.Element => <Box
        component="img"
        sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, my: 1,
          height: 100,
          width: "auto",
          boxShadow: 3,

          // maxWidth: { xs: 80, md: 80 },
          // maxHeight: { xs: 110, md: 110 },
        }}
        alt={imgAlt}
        src={imgSrcUrl}
      />

  export default MUIImg;