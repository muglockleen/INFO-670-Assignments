# INFO-670-Assignment 4

**App Info**

Title: Katzelog
Group: Mike McLaughlin

**Purpose and Audience**

The purpose of this iteration of Katzelog is for a user to add very basic information about a cat into the database. It will list the cats as they are added. It can be used to track fosters. A use can add a cat, view the list of cats and delete a cat, if desired. No functionality for editing (updating) a cat or showing a highlighted profile of one cat exists in this app.

**Front End**

The front end is a bit icky due to the web translation. A user can add a cat in the top portion and click on the "+" to add the cat to the list. Due to the web translation, the user may have to refresh the page to see the changes.

To remove a cat, the user clicks on the "-" button next to a cat in the list.

[Screen Shot](./data/Main_Screen.png)

**APIs**

The proxy can be accessed at http://localhost:8081/

Adding a cat: "https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=add&name=[cat name]&gender_id=[gender id as exists in the SQL table genders]&summary=[cat summary]". Ids are automatically generated in the database.
Listing the cats: "https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=list". Adding an "id" parameter will filter the list to the cat represented by the id, if it exists.
Deleting a cat: "https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=remove&id=[cat id]"

**Database Schema**

Note: Not all tables and fields are used. This schema supplies one sample cat, Buddy Junior.

CREATE TABLE cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    gender_id INTEGER NOT NULL, /* Foreign key */
    /* TODO(MPM): Microchip numbers can be 9, 10 or 15 digits. */
    microchip_number INTEGER,
    color TEXT,
    breed TEXT,
    age_years DECIMAL(10, 1),
    is_ear_tipped BOOLEAN,
    weight_pounds DECIMAL(10, 5),
    summary TEXT,
    bio TEXT
);

CREATE TABLE genders (
    id INTEGER NOT NULL,
    gender TEXT
);

CREATE TABLE vaccinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    cat_id INTEGER, /* Foreign key */
    vax_type TEXT,
    vax_date TEXT,
    re_vax_date TEXT
);

CREATE TABLE organizations (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT,
    name_short TEXT
);

INSERT INTO cats (name, microchip_number, gender_id, color, breed, age_years, is_ear_tipped, weight_pounds, summary, bio) VALUES ('Buddy Junior', 933000321239928, 2, 'Orange and White', 'DSH', 3.0, 'true', 10.0, 'I am Buddy Junior! I am trying to find my courage to accept hoomans as my friends.', 'I am Buddy Junior! I am trying to find my courage to accept hoomans as my friends!!');

INSERT INTO genders (id, gender) VALUES (0, 'Unknown');
INSERT INTO genders (id, gender) VALUES (1, 'Female');
INSERT INTO genders (id, gender) VALUES (2, 'Male');

INSERT INTO vaccinations (cat_id, vax_type, vax_date, re_vax_date) VALUES (1, 'Rabies', '2025-02-17', '2026-02-17');
INSERT INTO vaccinations (cat_id, vax_type, vax_date, re_vax_date) VALUES (1, 'FeLV/FIV Combo', '2025-02-17', '2026-02-17');

INSERT INTO organizations (name, name_short) VALUES ('Community Cat Club', 'CCC');
INSERT INTO organizations (name, name_short) VALUES ('Pennsauken Community Cats', 'PCC');
