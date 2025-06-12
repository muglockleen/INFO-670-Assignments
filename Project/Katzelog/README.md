# INFO-670-Final Project

**App Info**

Title: Katzelog

Group: Mike McLaughlin

**Purpose and Audience**

The purpose of this iteration of Katzelog is for a user to add very basic information about a cat into the database. It will list the cats as they are added. It can be used to track fosters. A user can add a cat, view the list of cats, delete a cat or edit an existing cat if desired.

**Front End / App Use**

The front end is a bit icky due to the web translation. A user can add a cat by clicking on "New Kitteh" in the menu bar. This will launch a blank profile editor in which the user can add parameters for the new cat.

[Profile Editor](./data/New_Kitteh_1.png)

[Profile Editor Cont'd](./data/New_Kitteh_2.png)

The app comes up in the Kittehs list by default but at any time the user can access the list by clicking on "Kittehs." Clicking on a list item will launch the cat's profile view. To edit the cat's profile, the user clicks on the "Edit Profile" button at the bottom of the page.

To remove a cat, the user clicks on the "-" button next to a cat in the list.

[Kitteh List](./data/Kitteh_List.png)

[Profile View](./data/Profile_Edit.png)

[Profile Editor](./data/Profile_Edit.png)

**APIs**

The proxy can be accessed at http://localhost:8081/

The PHP APIs can be found in the INFO-670-Assignments/server_php folder. cats.php is the main file, with supporting functions coming from db_utils.php.

**Database Schema**

The database schema, katzelog.sql (in the repository), can be found in the INFO-670-Assignments/server_php folder. Note: Not all tables and fields are used. This schema supplies one sample cat, Buddy Junior.

**Code Stuff**

There is an app data JSON file in the assets folder, in which lives some rudimentory data for use in the code. Currently, it only has the cat genders and app title. In the future, it is planned to add as many text items in this file as possible such as button texts, page names, etc.

A custom date selector component was created to wrap a date picker. Currently, the date text inputs are read only but plans are to allow editing in the text inputs directly, if desired.

**Limitations / Known Bugs**

* User can not currently add or view profile pics due to running out of time.
* When editing a cat, if the user clicks on "New Kitteh," the editor reloads with no cat, as expected, however the components are not re-rendered and the previous cat data is displayed via the cache.

**Future Improvements**

* Add full image gallery upload/display capability.
* Replace regex function that converts underscore variables to camel case with a mapping dictionary.
* Add ability to go back to profile view from the editor page.
* Add ability to delete a cat from the profile editor.
* Add many more parameters to the cat profile, such as medications, rescue group, adoptability ratings, etc.
* Spin up either a SQL or NoSQL database at a remote site either on AWS, Google Firebase or other source.
