const cookieHandler = {
  getAll() {
    const cookies = document.cookie.split('; ');
    const keyValueCookiesObj = {};
    cookies.forEach((cookie) => {
      const keyAndValue = cookie.split('=');
      keyValueCookiesObj[keyAndValue[0]] = keyAndValue[1];
    });
    return keyValueCookiesObj;
  },
  toSessionStorage() {
    const cookies = this.getAll();
    for (const prop in cookies) {
      sessionStorage.setItem(prop, cookies[prop]);
    }
  },
  flush() {
    const cookies = this.getAll();
    for (const prop in cookies) {
      document.cookie = `${prop}=${cookies[prop]}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
  },
};

export { cookieHandler };
