import Mail from "./mail"
import Review from "./review"


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
              <Mail/>
            </li>
            <li>
              <Review/>
            </li>
          </ul>
        </section>

    </div> 
    );
}
 
export default Forms;