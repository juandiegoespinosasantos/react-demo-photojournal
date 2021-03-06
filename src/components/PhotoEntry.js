import React from 'react';
import './main.css';

class PhotoEntry extends React.Component {

    render() {
        const image_path = "imgs/" + this.props.src;

        return (
            <div className="photo-entry-block">
                <a href={image_path}>
                    <img className="photo-img" src={image_path} alt={image_path} />
                </a>

                <h5>{this.props.title}</h5>
                <h6>{this.props.caption}</h6>
            </div>
        );
    }
}

export default PhotoEntry;