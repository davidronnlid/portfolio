import Box from '@mui/material/Box';
  import { useState } from "react";
      
  interface ContactFormProps {
        title: string;
        FORM_ENDPOINT: string;
      };

  const ContactForm = ({title, FORM_ENDPOINT}: ContactFormProps):JSX.Element => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };

    
    return (<Box
        >{submitted ?
              <>
                <h2>Thank you!</h2>
#Contact                <div>We'll be in touch soon.</div>
              </>
            :
        
        
<form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>        }{title}
      </Box>);
  }
  
  

  export default ContactForm;