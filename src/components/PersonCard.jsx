import React from 'react';
import { Button } from 'reactstrap';

export const PersonCard = props => {
    return (
        <div className="swipe-container mx-auto">
            <div className="swipe-card mx-auto">
                <img width="100%" height="300" className="swipe-image" src={props.src} alt="person" />
                <h3 className="swipe-card-header">{props.name}</h3>
            </div>
            <div className="row swipe-buttons-container">
                <div className="col-xs-6 mx-auto">
                    <Button color="danger" className="swipe-button" onClick={() => props.handleSwipe({ direction: 2 })}>
                        <i className="fa fa-frown-o fa-2x" aria-hidden="true"></i>
                    </Button>
                </div>
                <div className="col-xs-6 mx-auto">
                    <Button color="success" className="swipe-button" onClick={() => props.handleSwipe({ direction: 4 })}>
                        <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}