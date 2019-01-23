import React from "react";
import {Container} from "../Grid";
import "../../styles.css"
import Google from "../Signin";

const LandingPage = () => (
    <Container>
    <div className="landing">
    <h1>Perfect Partner</h1>
    <h6>Outsource Your Thoughtfulness</h6>
    <div className="googleBox"><Google/></div>
    </div>
    
    </Container>
)

export default LandingPage;