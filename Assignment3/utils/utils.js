import { createNavigationContainerRef } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

// Hack to load image data as an object so we can load them later.
import ImageData from '../data/db/BuddyImages';
const filePath = 'cats/cats.json';
const dbFileUri = `${FileSystem.documentDirectory}${filePath}`;

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function getImageSrcFor(image) {
  for (var data of ImageData) {
    if (image.id === data.id) {
      return data.source;
    }
  }
  return '';
}

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

export function getKittehWithId( kittehs, id ) {
  for (var kitteh of kittehs) {
    if (kitteh.id === id) {
      return kitteh;
    }
  }
  return {};
}

export const saveJsonData = async (jsonString) => {
  try {
    await FileSystem.writeAsStringAsync(dbFileUri, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    console.log(`JSON data saved to ${dbFileUri}`);
  } catch (error) {
    console.error("Error saving JSON data:", error);
  }
};

export const readJsonData = async () => {
  try {
    const content = await FileSystem.readAsStringAsync(dbFileUri, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    const parsedData = JSON.parse(content);
    console.log("JSON data read:", parsedData);
    return parsedData;
  } catch (error) {
    console.error("Error reading JSON data:", error);
    return null;
  }
};
