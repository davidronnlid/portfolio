import  PageSection from "../components/pageSection";
import  Portfolio from '../pageSections/portfolio';
import  WhoIAm from '../pageSections/whoIAm';
import  Contact from '../pageSections/contact';

interface HomePageProps {
        title?: string;
        };

  const HomePage = ({title}: HomePageProps):JSX.Element => (<>{title?title: ""}      <PageSection title="Portfolio" comp={<><Portfolio  id="Portfolio" /></>}/>
  <PageSection title="Who I Am" comp={<><WhoIAm  id="Who%20I%20am" /></>}/>
  <PageSection title="Contact" comp={<><Contact  id="Contact"/></>}/>
</>)
      

  export default HomePage;