import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SimpleCollapse from '../components/simpleCollapse';
import ProgressBars from "../pageSections/progressBars"      

  type WhoIamProps = {
        title?: string;
        id: string;
      };

  const WhoIam = ({title, id}: WhoIamProps):JSX.Element => <Box
        id={id}
        sx={{ display: { xs: 'flex', md: 'flex' },my: 1
          }}
        children={<Box sx={{width: "80%", mx: "auto"}}>
            <ProgressBars progBarsData={[{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},{title: "React", percentage:80},]} metaTitle="Tech competencies" />
      {title ? <Typography variant="h5">{title}</Typography> : ""}
            <Typography variant="h6">Vision and how I spend my time</Typography>
            <Typography variant="body1" align='left'>I am a 21-year-old front-end developer from Sweden. ReactJS is what I am best at and I would love to work with challenging projects that involve ReactJS. Currently, I live in Uppsala and am studying to become a medical doctor. However, it is not intellectually stimulating enough and I find myself spending hours of my free time every week developing web apps to feel like I am learning as fast as I want to. Mainly for this reason, I would like to work with front-end development at the same time as studying at 100% pace (40h/week). During the spring term 2022 I studied both psychology and the medical doctor's programme and passed all courses by far. So I am not just hoping or speculating that I have it in me to work full time or part time at the same time as studying at this pace. There is historical evidence of my own work ethic during conditions of high workload and stressful exam weeks to back this idea.</Typography>
<br/>

<SimpleCollapse label="Read more about David" toShow={<>
            <Typography variant="body1" align='left'>The reason I want to work as a web developer at the same time that I study to become a medical doctor is because I have a long term vision. I want to, together with other people, enable the creation of medical technology that enables people to more deeply understand and change their conscious experience. Concretely this could mean for example making it super-easy for people to (1) see the effect of blood sugar on people's mood in general in the population as a whole, (2) enable people to read their own blood sugar super-easily and (3) make it incredibly simple to draw conclusions about the effects of variations in blood sugar on their personal mood and the effects of various behaviors on their blood sugar. In this example, a deep understanding of medical sciences and user interface technology would be crucial for its successful development. I believe that if it was super easy for people to understand how behaviors influence their personal biology and how variations in their biological state influences their personal well-being and performance, then people would feel better themselves and also have more empathy. I think such a world is worth working hard for.</Typography>

            <br/>
<Typography variant="h6">Development of the Nootralize web app</Typography>
<Typography variant="body1" align='left'>In 2019, I and two senior full-stack developers co-founded Nootralize. The company has a mission to help people improve their well-being and enhance their cognitive performance, and its "how" was to do this through educating people about the science behind the benefits and risks of mood-boosting and cognitive-enhancing supplements and drugs, called nootropics. I developed the company's main product <Link href="https://nootralize.com">nootralize.com</Link> from start to finished product over the course of 1.5 years with one of the senior full-stack developers who co-founded the company with me. In 2021, we decided to stop working full time on this web app because we felt we had other things we wanted to spend our time on. These 1.5 years were a great learning experience for me, specifically when it comes to project management and web app development. From general to specific, I got to learn how to plan development, prototype UI and UX, develop minimum viable products and eventually iterate upon feedback from users.</Typography> 

<br/>
<Typography variant="h6">Why you should hire me</Typography>
<Typography variant="body1" align='left'>I realize that I will need the help of other people to enable the creation of the medical technology I envision. So I have put the active pursuit of a concrete version of it on hold. I am instead now focusing on building deep relationships with warm and competent people, as well as improving my skills and level of understanding of relevant subjects for my eventual pursuit of this grand project.</Typography>
<br/>
<Typography variant="body1" align='left'>So I have a big long-term vision for what I want to do with my life, and it drives me to work. A lot. I don't see myself working/studying less than 80h/week anytime soon. I am passionate about learning and improving my soft and hard skills as a front-end developer because I can see a clear connection between how good I am as a developer and how successful my future pursuits will be in enabling the creation of this medical technology. But this may raise some doubts regarding whether you should hire me considering I have already decided to spend my time working on a medical technology? Not inspite of, but because of, this vision - you should. I currently believe that I will continue to focus on building skills and relationships at least for another five years before I start this med-tech project. I will not work for you forever, but I will put my heart, soul, and time into doing the best job I can for you while I am working for you. There is plenty of time for me to learn from and enjoy the company of your developer team, and for you to reap the benefits of a self-improving and hard working front-end developer.</Typography></>} />
</Box>          }      />

  export default WhoIam;