# Project Name

Weekend React Gallery

## Description

A photo gallery that allows a user to see the description of each photo by clicking on them.  A user can also decide to "like" the image and have that information displayed below the image.

### Creation Process

1. Basic set up.  Install NPM.  Add folders and files for the GalleryItem and GalleryList components.

2. To make an app, especially a photo gallery app, I wanted to make sure my data was rendering in the browser.
    - Made a GET request to the server to render my gallery on the page.
    - Preemptively built a component called GalleryList to return each object of the array as a GalleryItem.
    - To test its functionality I made a GalleryItem component to return the image of the goat provided to us.

3. After I had the GalleryList rendering on the DOM as GalleryItems, I had to make the photo become the description and vice versa upon click.
    - Imported Usestate and made a state using the new image boolean property I created as the default state.
    - Made a function that swaps the usestate to its opposite, in this case true > false or false > true, and also console.logs the state to confirm it's working properly.
    - Used a ternary operator to determine what gets displayed: the image(via html img srcing with the path property) or the description property as a string.

4. The last requirement was the "like" button.
    - Added a state to show the likes.
    - Made a function that just adds 1 each time the button is clicked.
    - 

5. As with all of my projects thus far, the final step is to make it pretty.
    - First I copy pasted the same goat photo a few times for testing of my styling.
    - Styled the divs to appear side by side vertically and added padding to the bottoms.
    - Added a new conditional to fix the grammar on my like count.
