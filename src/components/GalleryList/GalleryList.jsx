function GalleryList({galleryList}) {


    return  (
        <div>
            {galleryList.map(photo => (
                <ul key={photo.id}>
                    <li>{photo.path}</li>
                    <li>{photo.description}</li>
                    <li>{photo.likes}</li>
                </ul>
            ))}
        </div>
    )
}

export default GalleryList;