import React, {Component} from 'react';
import Google from './Signin/Google';
// import RegistrationWizard from './RegistrationWizard/RegistrationWizard';

class MainBody extends Component {
    state ={};
    render(){
        return(
            <div className="container-fluid">
                <Google/>
            </div>
        )
    }
}
export default MainBody