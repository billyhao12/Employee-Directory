import React from "react";
import API from "../utils/API";

class Directory extends React.Component {

    state = {
        name: "",
        role: "",
        manager: "",
        users: []
    }

    componentDidMount() {
        API
            .getUsers()
            .then(res => console.log(res.data));
    }

    render() {
        return <span>User Count: {this.state.users.length}</span>
    }
}

export default Directory;