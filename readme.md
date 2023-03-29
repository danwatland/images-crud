# Image Viewer

### Running locally
```shell
npm i
npm start
```

I tested this on Mac and Windows with Node versions 18.12.0 and 16.16.0, respectively.

### Approximate time to finish
This was fairly straightforward and took about 4 hours to finish. 

### What improvements I'd make if I continued to work on this

##### This won't handle a large number of images well
I'd probably add pagination to handle this. Off the top of my head I'd limit the number of images displayed and `searchText` would be something passed when fetching the image list. 
This would likely need a debounce and some additional visual feedback, so it'd be a bit of work.

##### Similarly, huge images will cause issues
This is likely a tougher fix. My first thought goes to creating thumbnails for each of the images upon upload, so we're looking at a couple of things at the minimum:
- Backend process to create thumbnails
- Some means to connect the thumbnails to the images (thinking a table in a database)
- Display the thumbnail in the UI, maybe with an option to show the full picture when clicked on

##### Add better user feedback
I'm handling this decently now with a progress bar and refreshing the image list once changes are made, but I think that from a user perspective it'd be nice to have a toast to indicate successful upload/deletion, not to mention unsuccessful. 

##### Handle errors
Following along with the above, it'd make sense to have some sort of notification when things aren't successful.

##### Get this hosted somewhere
Pretty self-explanatory.