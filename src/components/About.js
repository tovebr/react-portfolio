import React from "react";
import { Link} from 'react-router-dom';


const About = () => {
    return (
        <div>
            <h3>About me</h3>
            
                <Link style={ {color:'black'}} to='/about/code'>Kod</Link>
                <Link style={ {color:'black'}}to='/about/music'>Musik</Link>
                <Link style={ {color:'black'}} to='/about/photo'>Foto</Link>
            
        </div>
        
    )
}

export default About;