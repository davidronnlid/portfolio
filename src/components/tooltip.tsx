import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
      
interface TooltipLinkProps {
        icon: any;
        link: string;
        title: string;
      };

  const TooltipLink = ({icon, link, title }: TooltipLinkProps):JSX.Element => <Tooltip
        title={title}
        children={<IconButton><Link href={link}>{icon}</Link></IconButton>}
      />

  export default TooltipLink;