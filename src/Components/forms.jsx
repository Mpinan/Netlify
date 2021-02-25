import Mail from "./mail"
import { Container } from "reactstrap"


const Forms = () => {
  return (
    <div id="contact">
      <h1 className="display-5">
        <br />
          Contact
        <br />
      </h1>
      <hr className="my-4"></hr>
      <Container>

        <section className="form" id="form">
          <ul>
            <li>
              <h4 className="display-5">
                <br />
                  Send me an email!
                <br />
              </h4>
              <Mail />
            </li>

          </ul>
        </section>
      </Container>

    </div>
  );
}

export default Forms;