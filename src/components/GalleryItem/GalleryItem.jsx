import { useState } from 'react';


function GalleryItem({photo}) {
    const [showImage, setShowImage] = useState(photo.image);
    const [showLikes, setShowLikes] = useState(photo.likes);

 

// Swaps the image/text and consoles the boolean value of photo.image
    const displayChange = () => {
        setShowImage(!showImage);
        console.log(showImage);
    }

// Adds a like to the photo
    const likeButton = () =>    {
        setShowLikes(showLikes + 1);
        console.log(showLikes);
    }
    

// Returns the individual photo blocks with like button and likes diplayed
    return (
        <p key={photo.id}>
            <button onClick={displayChange}>
                {showImage ? <img src={photo.path}></img> : <p>{photo.description}</p>}
            </button>
            <button onClick={likeButton}>Like</button>
            <span>{showLikes} people have liked this.</span>

        </p>
  )
}


export default GalleryItem;