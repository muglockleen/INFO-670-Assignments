# INFO-670-Assignment 2

**Design and Purpose**
I implemented basic list functionality in INFO 655 for a web app called Katzelog, which is used to keep track of foster cats. I will likely follow through and convert it into my project for INFO 670. Assignment 1, this app,  serves as the prototype for my INFO 670 project, which in itself will serve as a prototype for Katzelog. The more I learn along the way, the more functionality the project will have and the closer I will be in creating Katzelog outside of class time.

Since this app was inspired by a previous project, I included some images of the cats in case I had time to implement the ability to upload thumbnails. I did not have time for that, though, but who knows what the next assignments hold in store?

Screenshot of the app when it first comes up:
[App Entry Screenshot](./Assignment2/data/images/Kitteh-List-Entry.png)

**Basic Functionality**
This list is simple. You add a cat by name and an optional short description of him or her. There is a starter JSON file in the data directory that is used to prepopulate the list. It is a copy of the file used in INFO 655's Katzelog app. There are many fields that are not used for this app. I was not able to figure out a way to save the JSON file. I am currently using Expo Go on my Pixel 5 as a test device.

The user can only add a cat, by clicking on the "+" button, if the name field has text in it.

Screenshot of adding a cat:
[Add Cat Screenshot](./Assignment2/data/images/Kitteh-Add-Cat.png)

And after the cat has been added:
[Cat Added Screenshot](./Assignment2/data/images/Kitteh-Cat-Added.png)

Removing a cat from the list is accomplished by clicking on the "-" button next to the cat to be removed. An alert box is displayed to confirm the deletion.

Screenshot of the alert box:
[Confirm Removal Screenshot](./Assignment2/data/images/Kitteh-Confirm-Removal.png)
