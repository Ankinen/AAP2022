import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";

const Wrapper = styled.div`
    height: 100%
`;

const Form = styled.form`
    height: 100%
`;

const TextArea = styled.textarea`
    width: 100%
    height: 90%
`;

const NoteForm = () => {
    // set the default state of the form
    const [value, setValue] = useState({ content: printIntrospectionSchema.content || ''});

    // update the state when a user types in the form
    const onChange = event => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Wrapper>
            <Form
                onsubmit={e => {
                    e.prevemtDefault();
                    props.action({
                        variables: {
                            ...values
                        }
                    });
                }}
            >
                <TextArea
                    requiredtype="text"
                    name="content"
                    placeholder="Note content"
                    value={value.content}
                    onChange={onChange}
                />
                <Button type="submit">Save</Button>
            </Form>
        </Wrapper>
    );
};

export default NoteForm;