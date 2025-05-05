export function removeKitteh( kittehs, id ) {
  for (var kitteh of kittehs) {
    if (kitteh.id == id) {
      const index = kittehs.indexOf(kitteh);
      const removedKitteh = kittehs.splice(index, 1);
    }
  }
}

export function createNewIdFrom( kittehs ) {
  var highestIdValue = 1;
  for (var kitteh of kittehs) {
    if (kitteh.id > highestIdValue) {
      highestIdValue = kitteh.id;
    }
  }
  return highestIdValue + 1;
}