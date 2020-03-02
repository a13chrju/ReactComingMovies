import React from 'react'

export default function SliderTitle(props) {

    const pages = Math.ceil(props.amount / props.max);
    return (
        <div>
            <h2 className="grayT">{props.title}</h2>
            <div className="titleFlex">
                <span className="grayerT">{props.amount} movies</span>
                <span className="grayerT">Page {props.current} / {pages}</span>
            </div>
        </div>
    )
}
