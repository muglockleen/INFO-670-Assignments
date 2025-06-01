export const getCatsFromRepository = async () => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=list`;
    console.log(`URL: ${url}`);
    const response = await fetch(
        url,
        { method: 'GET' }
    );
    console.log(`Got response. Getting response.json...`);
    const data = await response.json();
    console.log(`Got response.json: ${data}`);
    return data;
  } catch (error) {
    console.error("Get Kitteh(s) Network Error:", error);
  }
}

export const addCatToRepository = async ( kitteh ) => {
  try {
    const url = `https://www.cs.drexel.edu/~mpm88/server_php/cats.php?action=add`;
    // TODO(MPM): Expand on the parameters later.
    // const query = `&name=${kitteh.name}&gender_id=${kitteh.genderId}&microchip_number=${kitteh.microchipNumber}&age_years=${kitteh.ageYears}&weightPounds=${kitteh.weightPounds}&is_ear_tipped=${kitteh.isEarTipped}&color=${kitteh.color}&breed=${kitteh.breed}&summary=${kitteh.summary}&bio=${kitteh.bio}`;
    const query =
      `&name=${encodeURIComponent(kitteh.name)}&gender_id=${kitteh.genderId}&summary=${encodeURIComponent(kitteh.summary)}`;
    console.log(`URL: ${url}${query}`);
    const response = await fetch(
        `${url}${query}`,
        { method: 'GET' }
    );
    console.log(`Got response. Getting text...`);

    // TODO(MPM): Send response from PHP.
    //const data = await response.text();
    //console.log(`Got response. text: ${data}`);
    //return data;
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
    console.log(`Got response. Getting text...`);

    // TODO(MPM): Send response from PHP.
    //const data = await response.text();
    //console.log(`Got response. text: ${data}`);
    //return data;
  } catch (error) {
    console.error("Remove Kitteh Network Error:", error);
  }
}
