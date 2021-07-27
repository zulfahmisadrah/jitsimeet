import React from 'react'
import './Reminder.css'


function Reminder(props) {
    return (
        <div>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                <div className={`content ${props.isOpen ? "is-open" : ""}`} style={{margin: '0'}}>
                                    <h6 className="category mb-1">Best cards</h6>
                                    <h4 className="title mb-3"><a href="#">Blue Card</a></h4>
                                    <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                <div className={`content ${props.isOpen ? "is-open" : ""}`} style={{margin: '0'}}>
                                    <h6 className="category mb-1">Best cards</h6>
                                    <h4 className="title mb-3"><a href="#">Green Card</a></h4>
                                    <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 content-card">
                        <div className="card-big-shadow">
                            <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                <div className={`content ${props.isOpen ? "is-open" : ""}`} style={{margin: '0'}}>
                                    <h6 className="category mb-1">Best cards</h6>
                                    <h4 className="title mb-3"><a href="#">Yellow Card</a></h4>
                                    <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Reminder
