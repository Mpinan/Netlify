const NavigationBar = (props) => {
  return (
    <div >
        <header>
			<div className="wrapper">
				<div className="logo">
					<a href="#">Welcome!</a>
				</div>
				<nav>
					<a href="#">home</a> 
          <a href="#">about</a> 
          <a href="#">experience</a> 
          <a href="#">projects</a> 
          <a href="#">contact</a>
				</nav>
			</div>
		</header>
        
    </div>
  );
}

export default NavigationBar;