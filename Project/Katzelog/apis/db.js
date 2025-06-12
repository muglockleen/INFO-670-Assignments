import { camelizeKeys } from "../utilites/utils";

export const getCatsFromRepository = async () => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=list`;
    console.log(`URL: ${url}`);
    const response = await fetch(
        url,
        { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error(`Get Kittehs HTTP Error! Status: ${response.status}`);
    } else {
      console.log(`Got response. Getting response.json...`);
    }
    var data = await response.json();
    // console.log(`Got response.json: ${data}`);
    // console.log(`REST data size is ${data.length}`);
    return camelizeKeys(data);
  } catch (error) {
    console.error("Get Kitteh(s) Network Error:", error);
  }
}

export const getCatFromRepository = async (id) => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=show&id=${id}`;
    console.log(`URL: ${url}`);
    const response = await fetch(
        url,
        { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error(`Get Kitteh HTTP Error! Status: ${response.status}`);
    } else {
      console.log(`Got response. Getting response.json...`);
    }
    var data = await response.json();
    // console.log(`Got response.json: ${data}`);
    // console.log(`REST data size is ${data.length}`);
    return camelizeKeys(data);
  } catch (error) {
    console.error("Get Kitteh Network Error:", error);
  }
}

export const addCatToRepository = async ( kitteh ) => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=add`;
    const query = `&name=${encodeURIComponent(kitteh.name)}&summary=${encodeURIComponent(kitteh.summary)}&bio=${encodeURIComponent(kitteh.bio)}&gender=${kitteh.gender}&color=${encodeURIComponent(kitteh.color)}&breed=${encodeURIComponent(kitteh.breed)}&microchip_number=${kitteh.microchipNumber}&age_years=${kitteh.ageYears}&weight_pounds=${kitteh.weightPounds}&is_ear_tipped=${kitteh.isEarTipped}&date_found=${kitteh.dateFound}&rabies_vax_date=${kitteh.rabiesVaxDate}&combo_vax_date=${kitteh.comboVaxDate}`;
    console.log(`URL: ${url}${query}`);
    const response = await fetch(
        `${url}${query}`,
        { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error(`Add Kitteh HTTP Error! Status: ${response.status}`);
    } else {
      console.log(`Got response.`);

      // TODO(MPM): Send response from PHP.
      //const data = await response.text();
      //console.log(`Got response. text: ${data}`);
      //return data;
    }
  } catch (error) {
    console.error("Add Kitteh Network Error:", error);
  }
}

export const updateCatInRepository = async ( kitteh ) => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=edit`;
    const query = `&id=${kitteh.id}&name=${encodeURIComponent(kitteh.name)}&summary=${encodeURIComponent(kitteh.summary)}&bio=${encodeURIComponent(kitteh.bio)}&gender=${kitteh.gender}&color=${encodeURIComponent(kitteh.color)}&breed=${encodeURIComponent(kitteh.breed)}&microchip_number=${kitteh.microchipNumber}&age_years=${kitteh.ageYears}&weight_pounds=${kitteh.weightPounds}&is_ear_tipped=${kitteh.isEarTipped}&date_found=${kitteh.dateFound}&rabies_vax_date=${kitteh.rabiesVaxDate}&combo_vax_date=${kitteh.comboVaxDate}`;
    console.log(`URL: ${url}${query}`);
    const response = await fetch(
        `${url}${query}`,
        { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error(`Add Kitteh HTTP Error! Status: ${response.status}`);
    } else {
      console.log(`Got response.`);

      // TODO(MPM): Send response from PHP.
      //const data = await response.text();
      //console.log(`Got response. text: ${data}`);
      //return data;
    }
  } catch (error) {
    console.error("Add Kitteh Network Error:", error);
  }
}

export const removeKitteh = async ( id ) => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=remove`;
    const query = `&id=${id}`;
    console.log(`URL: ${url}${query}`);
    const response = await fetch(
        `${url}${query}`,
        { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error(`Remove Kitteh HTTP Error! Status: ${response.status}`);
    } else {
      console.log(`Got response.`);

      // TODO(MPM): Send response from PHP.
      //const data = await response.text();
      //console.log(`Got response. text: ${data}`);
      //return data;
    }
  } catch (error) {
    console.error("Remove Kitteh Network Error:", error);
  }
}
