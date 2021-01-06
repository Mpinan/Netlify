import { FaLinkedin, FaGithub } from 'react-icons/fa';

const BottonBar = () => {
    return ( 
        <div className="buttonnavbar">
            <div id="textleft">
                <span>
                    Find me on: 
                </span>
            </div>
            <div className="hover">
                <a href="https://www.linkedin.com/in/mario-garcia-4491b316b/" rel="noopenr noreferrer" target="_blank">
                    <FaLinkedin />
                </a>    
                <a href="https://github.com/jaitone" rel="noopenr noreferrer" target="_blank">
                    <FaGithub />
                </a> 
            </div>
            <div id="textright">
                <span>
                    Contact: 
                </span>
                <span>
                    mgpinan1990@gmail.com
                </span>
            </div>
        </div>

);
}
 
export default BottonBar;