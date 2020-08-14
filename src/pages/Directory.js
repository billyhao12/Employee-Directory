import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";

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
            .then(res => {
                console.log( res.data.results[0] );
                this.setState({ users: res.data.results });
            });
    }

    render() {
        return <UserTable users={this.state.users} />
    }
}

export default Directory;