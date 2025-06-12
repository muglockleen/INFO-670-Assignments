<?php

require("./db_utils.php");

error_reporting(E_ALL);
ini_set('display_errors', 'On'); 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

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
          $first ? $key_value_pairs .= "$key = '$value'" : $key_value_pairs .= ", $key = '$value'";
          $first = false;
        }
        foreach ($numeric_params as $key => $value) {
          $first ? $key_value_pairs .= "$key = $value" : $key_value_pairs .= ", $key = $value";
          // Numerics do not get quotes.
          $first = false;
        }
        // Now complete the query string.
        $sql .= " $key_value_pairs WHERE id = $id";
        $result = $conn->exec($sql);

        // TODO(MPM): Send ack.
        echo "$result - UPDATE SQL: $sql";
      }
    }
  break;
  case "remove":
    // Delete a cat's record from the database.
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql = "DELETE FROM cats WHERE id = $id";
      $result = $conn->exec($sql);

      // TODO(MPM): Send ack.
    }
  break;
  case "show":
    // Select all of a cat's fields for a profile view.
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql = "SELECT * FROM cats WHERE cats.id = $id";
      $data = $conn->query($sql);
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
    $sql = "SELECT * FROM cats";
    if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $sql .= " WHERE cats.id = $id";
    }
    // echo "LIST SQL:  $sql";
    $data = $conn->query($sql);
    header("Content-Type: application/json");
    echo json_encode($data->fetchAll(PDO::FETCH_ASSOC));
  break;
}
?>