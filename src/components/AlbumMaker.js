import React from 'react';
import PhotoEntry from './PhotoEntry';
import photos from './data/photo-entries.json';

class AlbumMaker extends React.Component {
    render() {
        return (
            <div className="flex-container">
                {
                    photos.itemList.map((photo) => {
                        return <PhotoEntry key={photo.src} src={photo.src} title={photo.title} caption={photo.caption} />
                    })
                }
            </div>
        );
    }
}

export default AlbumMaker;