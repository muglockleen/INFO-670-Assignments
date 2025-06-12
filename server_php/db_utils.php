<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On'); 

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
        case "gender": // TEXT
        case "bio": // TEXT
        case "date_found": // TEXT
        case "rabies_vax_date": // TEXT
        case "combo_vax_date": // TEXT
          return true;
        default:
          return false;
      }
    break;
    case "numeric":
      switch ($value) {
        case "microchip_number": // INTEGER
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