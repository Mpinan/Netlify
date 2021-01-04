import { Container } from "reactstrap"

const About = () => {

    return (
    <Container>
        <h1 className="display-3">
            <br/>
                About me
            <br/>
        </h1>
            <hr className="my-4"></hr>
        <div className="text-left">
            <h4>
                In early 2019 I made the decision to hang up my apron and change my life by learning how to code.
            <br/>
                At the time, I did not even know about the existence of ‘GitHub’ and five months later, here I am, a full stack
                junior developer.
            <br/>
            <br/>
                For years I have had a strong interest in technology, its components and the way in which different parts work
                together.
                This has spurred an interest in coding, as I sought to understand the work behind the scenes, how to find the
                source of a problem and fix it in a methodical way.
                As a Makers graduate, I am seeking an opportunity to begin an exciting career while furthering my knowledge of
                computer programming.
                <br/>
            </h4>
        </div>
    </Container>
      );
};
 
export default About;