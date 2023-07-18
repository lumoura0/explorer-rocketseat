export class GithubUser {
  static async search(username) {
    const endpoint = `https://api.github.com/users/${username}`;

    return await fetch(endpoint)
      .then((res) => res.json())
      .then(({ name, login, public_repos, followers }) => ({
        name,
        login,
        public_repos,
        followers,
      }));
  }
}
