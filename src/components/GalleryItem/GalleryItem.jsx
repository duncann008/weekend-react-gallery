import { useState } from 'react';


function GalleryItem({photo}) {
    const [showImage, setShowImage] = useState(photo.image);
    const [showLikes, setShowLikes] = useState(photo.likes);

 

// Swaps the image/text and consoles the boolean value of photo.image
    const displayChange = () => {
        setShowImage(!showImage);
        console.log(showImage);
    }

    const likeButton = () =>    {
        setShowLikes(showLikes + 1);
        console.log(showLikes);
    }
    

// Returns the individual photo blocks
    return (
        <p key={photo.id}>
            <button onClick={displayChange}>
                {showImage ? <img src={photo.path}></img> : <p>{photo.description}</p>}
            </button>
            <button onClick={likeButton}></button>

        </p>
  )
}


export default GalleryItem;