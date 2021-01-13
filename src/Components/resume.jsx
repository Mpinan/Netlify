import { Container} from "reactstrap"

const Resume = () => {

    return ( 
        <div id="resume">
            <h1 className="display-5">
                <br/>
                    Resume
                 <br/>
            </h1>
            <hr className="my-4"></hr>
          <Container>
            <h4>
              <br/>
              Experience
              <br/>
            </h4>
            <section className="breweries" id="breweries">
              <ul>
                <li>
                  <figure>
                    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/02/11/kitchen-staff-chef.jpg?width=982&height=726" alt="Several hands holding beer glasses"/>
                    <figcaption>
                      <h2>
                        Kitchen Manager
                      </h2>
                      <h3>
                        Tempio Wine Bar, Greene king
                        <br/>
                        May 2014 - December 2020, London
                      </h3>
                    </figcaption>
                  </figure>
                    <p>
                      - Build and learn about electronic components in general hardware such as radios, and TVs.
                      <br/>
                      - Designing multi-wire schemes for houses and building them.
                      <br/>
                      - Install and learn about TV systems in a building.
                      <br/>
                      - As part of the course I fixed and also built various computers, through purchasing individual components and assembling them.
                    </p>
                </li>
                <li>
                  <figure>
                    <img src="https://www.cmalifts.com/wp-content/uploads/2018/11/art2img.jpg" alt="Several hands holding beer glasses"/>
                    <figcaption>
                      <h2>
                      Lift technician
                      </h2>
                      <h3>
                      IZA-Ascensores(Lift company)
                      <br/>
                      June 2012 - January 2013, Spain.
                      </h3>
                    </figcaption>
                  </figure>
                  <p>
                    - Assemble, install, maintain, and replace lifts.
                    <br/>
                    - Floor balance.
                    <br/>
                    - Precision, attention to detail and ability to work autonomously.
                  </p>
                </li>
                <li>
                  <figure>
                    <img src="https://www.careeraddict.com/uploads/article/30848/IT_support_technicians_c.jpg" alt="Several hands holding beer glasses"/>
                    <figcaption>
                      <h2>
                        IT support technician
                      </h2>
                      <h3>
                        A&M INFORMATICA
                        <br/>
                        August 2013 - January 2014, Spain.
                      </h3>
                    </figcaption>
                  </figure>
                  <p>
                    - Assemble, maintain, and repair computers.
                    <br/>
                    - Advice customers, given their needs, which hardware will suit them best.
                    <br/>
                    - Thorough and pay attention to detail.
                  </p>
                </li>
              </ul>
            </section>
          </Container>
          <Container>
            <h4>
              <br/>
              Educaction
              <br/>
            </h4>
            <section className="breweries" id="breweries">
              <ul>
                <li>
                  <figure>
                    <img src="https://lexgocode.files.wordpress.com/2016/05/img.png" alt="Several hands holding beer glasses"/>
                    <figcaption>
                      <h2>
                        Makers Academy 
                      </h2>
                      <h3>
                        Graduate Degree               
                        <br/>
                        June 2019 - October 2019, London.
                      </h3>
                    </figcaption>
                  </figure>
                  <p>
                  - A highly selective, 12-week intensive course that focuses on
                    full stack web development grounded in Ruby.
                    <br/>
                  - Emphasizes on TDD, OOP, software design and development.
                  <br/>
                  - Agile methodology, pair programming, team projects.
                  </p>
                </li>
                <li>
                  <figure>
                    <img src="https://www.nutsvolts.com/uploads/articles/NV_0704_Christopherson_Large.jpg" alt="Several hands holding beer glasses"/>
                    <figcaption>
                      <h2>
                        Electronic and electric systems
                      </h2>
                      <h3>
                        Certificate of Higher Education (HNC)
                        <br/>
                        September 2009 - June 2012, Spain.
                      </h3>
                    </figcaption>
                  </figure>
                  <p>
                    - Build and learn about electronic components in general hardware such as radios, and TVs.
                    <br/>
                    - Designing multi-wire schemes for houses and building them.
                    <br/>
                    - Install and learn about TV systems in a building.
                    <br/>
                    - As part of the course I fixed and also built various computers, through purchasing individual components and assembling them.
                  </p>
                </li>
              </ul>
            </section>
          </Container>
        </div>
    );
}
 
export default Resume;