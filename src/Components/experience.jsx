import { Container} from "reactstrap"
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Experience = () => {

    return ( 
        <div>
            <h1 className="display-5">
                <br/>
                    Experience
                 <br/>
            </h1>
            <hr className="my-4"/>
            <Container className="experience">
                <Container>
                    <h4>
                        Makers Academy
                        <br/>
                        Graduate Degree
                        <br/>
                        London, May 2019 - September 2019
                    </h4>
                <hr className="my-4"/>
                <ul>
                <li>
                    Test-Driven Development (TDD), Object-Oriented Design (OOD)
                    </li>
                    <li>
                    Agile, XP, Pair Programming
                    </li>
                    <li>
                    Full-stack development
                    </li>
                    <li>
                    Frontend: HTML, CSS, Javascript, JQuery, Angular, React
                    </li>
                    <li>
                    Backend: Ruby, Rails, Sinatra
                    </li>
                    <li>
                    Testing frameworks: RSpec, Jasmine, Capybara
                    </li>
                </ul>
                </Container>

                <Container>
                    <h4>
                        Certificate of Higher Education (HNC) 
                        <br/>
                        Electronics & Electricity.
                        <br/>
                        September 2010- June 2013
                    </h4>
                <hr className="my-4"/>
                <ul>
                <li>
                    Build and learn about electronic components in general hardware such as radios, and TVs.
                </li>
                <li>
                Designing multi-wire schemes for houses and building them.
                </li>
                <li>
                    Install and learn about TV systems in a building.
                </li>
                <li>
                    As part of the course I fixed and also built various computers, through purchasing individual components and assembling them.
                </li>
                </ul>
                </Container>
                <Container>
                    <h4>
                        Kitchen Manager
                        <br/>
                        Tempio Wine Bar, Greene king
                        <br/>
                        London, May 2014 - December 2020
                    </h4>
                <hr className="my-4"></hr>
                <ul>
                    <li>
                        Working as I chef, I learnt the importance of each individual when working in a team. 
                    </li>
                    <li>
                        In addition, I have learnt that resilience is the key to success.
                    </li>
                </ul>
                </Container>
            </Container>
                <div id="icons" className="text-left" >
                            <h5>
                                Find me on: 
                                <a href="https://www.linkedin.com/in/jia-tian-leo-xia" rel="noopenr noreferrer" target="_blank">
                                    <FaLinkedin />
                                </a>    
                                <a href="https://github.com/jaitone" rel="noopenr noreferrer" target="_blank">
                                    <FaGithub />
                                </a> 
                            </h5>
                </div>
    </div> 
    );
}
 
export default Experience;