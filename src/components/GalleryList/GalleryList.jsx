import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {


    return  (
        <div>
            {galleryList.map(photo => {
                
                return <GalleryItem photo={photo}/>
            
            })}
            
        </div>
    )
}

export default GalleryList;