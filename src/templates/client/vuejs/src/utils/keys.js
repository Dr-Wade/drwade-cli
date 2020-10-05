const keys = {
  API_BASE_PATH: window.location.hostname == 'localhost' ? 'http://localhost:3030': window.location.origin,
};

export default keys;
