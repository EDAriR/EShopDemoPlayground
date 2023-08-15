const key = {
};

// save token in session storage
const setTokenSession = ( keyName: string, value: any): any => {
  sessionStorage.setItem(keyName, JSON.stringify(value));
};

// get token form session storage
const getTokenSession = (keyName: any): any => {
  return JSON.parse(sessionStorage.getItem(keyName)||'');
};

// get token form session storage
const getUserInfo = (keyName: any): any => {
  return JSON.parse(sessionStorage.getItem(keyName)||'');
};

const saveApiId =(value:any): any => {
  sessionStorage.setItem('apiId', JSON.stringify(value))
}

const getApiId = (): any => {
  return JSON.parse(sessionStorage.getItem('apiId')||'');
}

export {
  key,
  setTokenSession,
  getTokenSession,
  getUserInfo,
  saveApiId,
  getApiId
};
