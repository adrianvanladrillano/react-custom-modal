import React from 'react';
import Modal from '../components/Modal';

const Welcome = (props) => {
    return (
        <div className="m-5">
            <h1>{props.title}</h1>
            <Modal
                width={800}
                title="Registration"
                content="Are you sure you want to delete "
                target="Adrian"
                headerBG="red"
                contentBG="#F1F3F4"
                footerBG="white"
                buttonTitle="Click me"
                persist={true}
            />
        </div>
    );
}

export default Welcome;
