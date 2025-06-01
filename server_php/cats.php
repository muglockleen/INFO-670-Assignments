<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On'); 

$db_info = "sqlite:../databases/katzelog.db";
$conn = new PDO($db_info);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql = NULL;

// Default to 'list' as the action if the request did not provide an action.
$action = "list";
if (isset($_GET['action'])) {
  $action = $_GET['action'];
}

switch ($action) {
  case "add":
    // Insert a new cat into the database.
    if (!isset($_GET['name'])) {
      show_error("Every kitteh needs a name!");
    } else {
      // Since we checked for the non null parameters already, we
      // know that we have at least one db field so we can proceed.
      $string_params = create_cat_params('string');
      $numeric_params = create_cat_params('numeric');
      
      $sql = "INSERT INTO cats";
      $keys = "";
      $values = "";
      $first = true;
      foreach ($string_params as $key => $value) {
        $first ? $keys .= "'$key'" : $keys .= ", '$key'";
        // Strings get quotes.
        $first ? $values .= "'$value'" : $values .= ", '$value'";
        $first = false;
      }
      foreach ($numeric_params as $key => $value) {
        $first ? $keys .= "'$key'" : $keys .= ", '$key'";
        // Numerics do not get quotes.
        $first ? $values .= "$value" : $values .= ", $value";
        $first = false;
      }
      // Now complete the query string.
      $sql .= " ($keys) VALUES ($values)";
      // echo "INSERT SQL: $sql";
      $result = $conn->exec($sql);

      // TODO(MPM): Send ack.
    }
  break;
  case "edit":
    // Update a cat's data in the database.
    $id = 0; // Set to an invalid id by default.
    if (!isset($_GET['id'])) {
      show_error("Can not update a kitteh with no id!");
    } else {
      $id = $_GET['id'];
      $string_params = create_cat_params('string');
      $numeric_params = create_cat_params('numeric');

      if (sizeof($string_params) > 0 || sizeof($numeric_params) > 0) {
        // We need at least one updateable parameter.
        $sql = "UPDATE cats SET";
        $key_value_pairs = "";
        $first = true;
        foreach ($string_params as $key => $value) {
          // Strings get quotes.
          $first ? $key_value_pairs .= "'$key' = '$value'" : $key_value_pairs .= ", '$key' = '$value'";
          $first = false;
        }
        foreach ($numeric_params as $key => $value) {
          $first ? $key_value_pairs .= "'$key' = $value" : $key_value_pairs .= ", '$key' = $value";
          // Numerics do not get quotes.
          $first = false;
        }
        // Now complete the query string.
        $sql .= " $key_value_pairs WHERE id == $id";
        // echo "UPDATE SQL: $sql";
        $result = $conn->exec($sql);

        // TODO(MPM): Send ack.
      }
    }
  break;
  case "remove":
    // Delete a cat's record from the database.
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql = "DELETE FROM cats WHERE id == $id";
      $result = $conn->exec($sql);
    }
  break;
  case "show":
    // Select all of a cat's fields for a profile view.
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql =
        "SELECT cats.*, genders.gender
         FROM cats, genders
         WHERE cats.id == $id
         AND cats.gender_id == genders.id";
      $data = $conn->query($sql);
      // foreach ($data as $kitteh) {
      //   echo "<p>[SHOW] Hello from "
      //     . $kitteh['name']
      //     . "! I am a "
      //     . $kitteh['age_years']
      //     . " year old "
      //     . $kitteh['color']
      //     . " "
      //     . $kitteh['breed']
      //     . " kitteh!</p>";
      // }
      header("Content-Type: application/json");
      echo json_encode($data->fetchAll(PDO::FETCH_ASSOC));
    }
  break;
  case "list":
  default: // In case the value is not valid.
    // Select all cats from the database to list or filter on an id.
    // TODO(MPM): Implement a filter in the GUI.
    //            E.g., gender, age, color, which organization, ready to
    //            adopt, need vax, have upcoming vet appointment etc.
    $sql = "SELECT cats.*, genders.gender FROM cats, genders";
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql .= " WHERE cats.id == $id AND cats.gender_id == genders.id";
    } else {
      $sql .= " WHERE cats.gender_id == genders.id";
    }
    // echo "LIST SQL:  $sql";
    $data = $conn->query($sql);
    // foreach ($data as $kitteh) {
    //    echo "<p> Hello from "
    //      . $kitteh['name']
    //      . "! I am a "
    //      . $kitteh['age_years']
    //      . " year old "
    //      . $kitteh['gender']
    //      . " "
    //      . $kitteh['color']
    //      . " "
    //      . $kitteh['breed']
    //      . " kitteh!</p>";
    // }
//    echo "<p>Hi!</p>";
    header("Content-Type: application/json");
    echo json_encode($data->fetchAll(PDO::FETCH_ASSOC));
  break;
}

function create_cat_params($param_type = 'string') {
  $params = [];
  foreach ($_GET as $key => $value) {
    if (is_valid_cat_parameter($key, $param_type)) {
      $params[$key] = $value;
    }
  }
  return $params;
}

// TODO(MPM):
// - Validate that each data type is correct
// - Convert anything that can be to an explicit type/format for db insertion.
// TODO(MPM): Perhaps define the database schema in an external file so we can
//            parse and validate the fields? 
function is_valid_cat_parameter($value, $param_type = 'string') {
  switch ($param_type) {
    case "string":
    default:
      switch ($value) {
        case "name": // TEXT NOT NULL
        case "color": // TEXT
        case "breed": // TEXT
        case "summary": // TEXT
        case "bio": // TEXT
          return true;
        default:
          return false;
      }
    break;
    case "numeric":
      switch ($value) {
        case "microchip_number": // INTEGER
        case "gender_id": // INTEGER
        case "age_years": // DECIMAL
        case "is_ear_tipped": // BOOLEAN (treated as NUMERIC in SQLite3?)
        case "weight_pounds": // DECIMAL
          return true;
        default:
          return false;
      }
    break;
  }
}

function show_error($error) {
  // TODO(MPM): Send a JSON object containing error info.
  // It may be good to just have a function that returns a
  // JSON object reporting information on the request, whatever
  // it was.
  echo "<p>$error</p>";
}
?>