import { Container} from "reactstrap"

const Experience = () => {

    return ( 
        <div>
            <h1 className="display-5">
                <br/>
                    Experience
                 <br/>
            </h1>
            <hr className="my-4"></hr>
            <Container className="experience">
                <Container>
                Makers Academy
                <br/>
                Graduate Degree
                <br/>
                London, May 2019 - September 2019
                <hr className="my-4"></hr>
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
                Kitchen Manager
                <br/>
                Tempio Wine Bar, Greene king
                <br/>
                <hr className="my-4"></hr>
                <ul>
                    <li>
                    Working as I chef, I learnt the importance of each individual when working in a team. In addition, I have learnt that resilience is the key to success.
                    </li>
                </ul>
                </Container>
                <Container>
                Certificate of Higher Education (HNC) 
                <br/>
                Electronics, Microelectronics, Logic, Electricity.
                <br/>
                September 2010- June 2013
                <hr className="my-4"></hr>
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
            </Container>
    </div> 
    );
}
 
export default Experience;