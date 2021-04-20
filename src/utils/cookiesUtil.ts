export const setCookie = (cKey: string, cVal: string, exDays = 30): void => {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cKey + '=' + cVal + ';' + expires + ';path=/';
};

export const getCookie = (cKey: string): string | void => {
  const key = cKey + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(key) === 0) {
      return c.substring(key.length, c.length);
    }
  }
};
