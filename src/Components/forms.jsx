import Mail from "./mail"
import Review from "./reviewForm"


const Forms = () => {
    return ( 
    <div id="contact">
      <h1 className="display-5">
        <br/>
          Contact
        <br/>
      </h1>
      <hr className="my-4"></hr>

        <section className="form" id="form">
          <ul>
            <li>
              <h4 className="display-5">
                <br/>
                  Send me an email!
                <br/>
              </h4>
              <Mail/>
            </li>
            <li>
              <h4 className="display-5">
                <br/>
                  Write me a review!
                <br/>
              </h4>
            <Review/>
            </li>
          </ul>
        </section>

    </div> 
    );
}
 
export default Forms;