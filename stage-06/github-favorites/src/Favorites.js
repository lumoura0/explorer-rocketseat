import { GithubUser } from './GithubUser.js';

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.tbody = this.root.querySelector('table tbody');
    this.btnAdd = this.root.querySelector('header button');
    this.load();
    this.update();
    this.onadd();
  }

  load() {
    this.entries =
      JSON.parse(localStorage.getItem('@github-favorites:users')) || [];
  }

  async add(username) {
    try {
      const userExists = this.entries.some((entry) => entry.login === username);

      const input = this.btnAdd.previousElementSibling;
      input.value = '';
      input.focus();

      if (userExists) {
        throw new Error('Usuário já adicionado');
      }

      const user = await GithubUser.search(username);

      if (user.login == undefined) {
        throw new Error('Usuário não encontrado');
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      const img = row.querySelector('.user img');
      img.src = `https://github.com/${user.login}.png`;
      img.alt = `foto perfil de ${user.name}`;

      row.querySelector('.user a').href = `https://github.com/${user.login}`;
      row.querySelector('.user h2').textContent = user.name;
      row.querySelector('.user p').textContent = user.login;

      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;

      row.querySelector('.remove').onclick = () => {
        const confirmation = confirm(
          `Tem certeza que deseja remover ${user.name}?`
        );
        if (confirmation) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );
    this.entries = filteredEntries;
    this.update();
    this.save();
  }

  onadd() {
    this.btnAdd.onclick = () => {
      const { value } = this.root.querySelector('header input');
      this.add(value);
    };

    window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        const { value } = this.root.querySelector('header input');

        this.add(value);
      }
    });
  }

  save() {
    localStorage.setItem(
      '@github-favorites:users',
      JSON.stringify(this.entries)
    );
  }

  createRow() {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <tr>
        <td class="user">
          <img
            src="https://github.com/eduardonobrega.png"
            alt="foto perfil de ..."
          />
          <div>
            <a href="https://github.com/eduardonobrega" target="_blank">
              <h2>Eduardo Nóbrega</h2>
              <p>eduardonobrega</p>
            </a>
          </div>
        </td>

        <td class="repositories">53</td>

        <td class="followers">1500</td>

        <td>
          <button class="remove">✖</button>
        </td>
      </tr>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove();
    });
  }
}
