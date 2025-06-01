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