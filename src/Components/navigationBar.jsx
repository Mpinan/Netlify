import { FaBars } from 'react-icons/fa';

const NavigationBar = (props) => {
  return (
    <div>
      <header>
				<div className="logo">
					<a href="/#">Welcome!</a>
				</div>
				<nav className="nav">
				  	<a href="/#">home</a> 
            <a href="/#">about</a> 
            <a href="/#">experience</a> 
            <a href="/#">projects</a> 
            <a href="/#">contact</a>
            {/* <--------------> */}

  {/* <---------------> */}
          <div className="icon">
              <FaBars />
          </div>
				</nav>
		  </header>
    </div>
  );
}

export default NavigationBar;