import React from "react";
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import './index.css'

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar />
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
        )
    }
}