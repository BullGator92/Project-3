import React from "react";

const Profile = () => (
    <div className="widget">
        <form onSubmit={this.handleSubmit}>
            <ul>
                <li> <label>What is your partner's name?</label>
                    <input type="text" onChange={this.handleChange} /> </li>
                <li><label>What is your partner's phone number</label>
                    <input type="text" onChange={this.handleChange} /></li>
                <button>Submit</button>
            </ul>
        </form>
    </div>
);

export default Profile;
