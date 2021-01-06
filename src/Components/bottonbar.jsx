import { FaLinkedin, FaGithub } from 'react-icons/fa';

const BottonBar = () => {
    return ( 
        <div>
            <div className="buttonnavbar">

                <a>
                    
                    Find me on: 
                    </a>
            <h5>
                <a href="https://www.linkedin.com/in/mario-garcia-4491b316b/" rel="noopenr noreferrer" target="_blank">
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
 
export default BottonBar;