import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function camelizeKeys (obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [key.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''))]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

export function createDefaultKitteh() {
  return {
    'summary': '',
    'name': '',
    'bio': '',
    'gender': 'Unknown',
    'color': '',
    'breed': '',
    'microchipNumber': null,
    'ageYears': null,
    'weightPounds': null,
    'isEarTipped': false,
    'dateFound': '',
    'rabiesVaxDate': '',
    'comboVaxDate': ''
  }
}
