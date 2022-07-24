import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// All you have to do to implement scroll to top with this component is:
// 1. Add #back-to-top-anchor to a span (<span style={{ display: 'hidden' }} id="back-to-top-anchor"></span>)
// 2. npm i -s for:
// "@material-ui/core": "^4.12.3",
// "@material-ui/icons": "^4.11.2",
// "@mui/icons-material": "^5.8.4",
// "@mui/material": "^5.1.0",
// 3. Render this component in your app

interface ScrollTopProps {
    children: React.ReactElement
}
function ScrollTop(props: ScrollTopProps) {
    const { children } = props
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor')

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            })
        }
    }
    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 10000 }}
            >
                {children}
            </Box>
        </Fade>
    )
}

export default function BackToTop(props: ScrollTopProps) {
    return (
        <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    )
}
