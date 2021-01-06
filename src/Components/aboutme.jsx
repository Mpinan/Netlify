import Introduction from "./introduction"
import { Container} from "reactstrap"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Experience from "./experience"

const About = () => {

    return (
        <div>
            <Introduction />
            <div className="wrapper">
                <div className="content-area">
                    <Container>
                            <h1 className="display-5">
                                <br/>
                                    About me
                                <br/>
                            </h1>
                            <hr className="my-4"></hr>
                        <div className="text-left">
                            <p>
                                In early 2019, I made the decision to hang up my apron and change my life by learning how to code.
                                At the time, I did not even know about the existence of ‘GitHub’ and five months later, here I am, a full stack
                                junior developer.
                            <br/>
                                For years, I have had a strong interest in technology, its components and the way in which different parts work
                                together.
                                This has spurred an interest in coding, as I sought to understand the work behind the scenes, how to find the
                                source of a problem and fix it in a methodical way.
                                <br/>
                                As a Makers graduate, I am seeking an opportunity to begin an exciting career while furthering my knowledge of
                                computer programming.
                                <br/>
                            </p>
                        </div>
                        <Experience/>
                    </Container>
                </div>
            </div>
        </div>
      );
};
 
export default About;