# INFO-670-Assignment 3

**Design and Purpose**

This app serves to show a gallery of thumbnail pictures of cats, view full size pictures of the cats and maintain a simple profile for the cat. It can be used by a foster parent to track his cats.
This app will likely serve as a component piece in my final project, Katzelog, as well as a starting point for editing profiles in the Katzelog app that I continue to develop outside of classes.

**Basic Functionality**

The app has three main functions, implemented as three separate screens.

* **Profile Screen** - This screen displays basic profile information for the cat. It is accessed by clicking on the *Profile* button in the top menu bar. Editing values will toggle the *Save* button to an enabled state so the user can save the data to disk. Well, it would if it worked. The save functionality is not implemented. The ability to save data on a local file system in an Expo project still eludes me.
There are a few features I did not have time to research/implement:
** ***Date Picker*** - Ideally, a date picker will be added to allow easier selection of dates, along with the input fields. There is basic validation using the Javascript Date class but that's it.
** ***Scanner Input*** - The text inputs probably need to be adjusted not to handle every change in text because scanning the microchip number directly into the text input from a USB scanner does not work. It is likely a throttling issue with the scanner sending too many digits too fast.
** ***Save Data*** - As stated above, the profile data can not be persisted.
** ***Easier Data Input*** - Currently, the keyboard blocks parts of the GUI. A manner of focusing the input being typed needs to be realized.

[Profile Screen](./data/images/Profile_Screen.png)

* **Image Gallery** - The image gallery displays thumbnail images of the cat. Due to the inability to dynamically construct image paths and filenames and laod them via calls to *require(...)*, a hack was used to list the filenames in an object. Ultimately, images will need to be uploaded to a server and stored along with a database. Clicking on an image brings up the full sized picture. Accessing the gallery is accomplished by clicking on the *Gallery* button in the top menu bar.

[Image Gallery](./data/images/Gallery.png)

* **Full Picture Viewer** - To view a full sized picture, the user simply clicks on a thumbnail image in the gallery.

[Picture Viewer](./data/images/Full_Pic.png)
