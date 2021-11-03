import { auto } from '@popperjs/core'

import React from 'react'

export default function Modal(props) {
    return (
        <div >
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#exampleModal">
                    {props.buttonTitle ? props.buttonTitle : "Defaul Button Title"}
                </button>
            </div>


            <div className="modal fade" id="exampleModal" data-backdrop={props.persist == true ? "static" : true} data-keyboard="false" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ margin: auto, minWidth: props.width ? props.width : 500 }} >
                    <div className="modal-content">
                        <div className="modal-header" style={{
                            backgroundColor: "white"
                        }}>
                            <h5 className="modal-title" id="exampleModalLabel">
                                {props.title ? props.title : "Default Header"}
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{
                            backgroundColor: props.contentBG ? props.contentBG : "white"
                        }}>
                            {props.content ? props.content + props.target + "?" : "Nothing to see here."}
                        </div>
                        <div className="modal-footer" style={{ backgroundColor: props.footerBG ? props.footerBG : "white" }}>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                            <button type="button" data-dismiss="modal" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
