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
        console.log(showLikes);  // Technically displays the previous state but that's okay for testing.
    }
    
// Better grammar for our like count.
    const personOrPeople = () =>    {
        if (showLikes === 0)    {
            return <span>Nobody has liked this yet.</span>
        }
        else if (showLikes === 1)    {
            return <span>{showLikes} person has liked this.</span>
        }
        else    {
            return <span>{showLikes} people have liked this.</span>;
        }
    }


// Returns the individual photo blocks with like button and likes diplayed
    return (
        <div key={photo.id} className="galleryDiv">
            <div>
            <button onClick={displayChange} className="image">
                {showImage ? <img src={photo.path}></img> : <p>{photo.description}</p>}
            </button>
            </div>
            <button onClick={likeButton}>Like</button>
            <div>
            {personOrPeople()}
            </div>
        
        </div>
  )
}


export default GalleryItem;