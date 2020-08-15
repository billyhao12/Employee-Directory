import React from "react";
import {Form} from "react-bootstrap";

function SearchForm(props) {
    return(
        <Form onSubmit={e => e.preventDefault()}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search By Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={e => props.updateSearch(e.target.value)} />
            </Form.Group>
        </Form>
    )
}

export default SearchForm;