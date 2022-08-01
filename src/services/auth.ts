import axios from 'axios';

interface auth {
  loggedIn(url: string): boolean;
}

export class AuthService implements auth {
  loggedIn(url: string): boolean {
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          return true;
        }
        return false;
      })
      .catch(() => {
        return false;
      });
    return false;
  }
}
