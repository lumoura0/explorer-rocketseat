import { GithubUser } from './GithubUser.js';

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.tbody = this.root.querySelector('table tbody');
    this.buttonAdd = this.root.querySelector('#search button');
    this.load();
    this.onAdd();
    this.update();
  }

  onAdd() {
    this.buttonAdd.onclick = () => {
      const { value } = this.root.querySelector('#search input');
      if (value) {
        this.add(value);
      } else {
        alert('informe um usuário');
      }
    };

    window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        const { value } = this.root.querySelector('header input');
        if (value) {
          this.add(value);
        } else {
          alert('informe um usuário');
        }
      }
    });
  }

  async add(username) {
    try {
      const input = this.buttonAdd.previousElementSibling;
      input.value = '';
      input.focus();

      const alreadyAdded = this.users.some((user) => user.login === username);

      if (alreadyAdded) {
        throw new Error('Usuário já adicionado');
      }

      const user = await GithubUser.search(username);

      if (user.login == undefined) {
        throw new Error('Usuário não encontrado');
      }

      this.users = [user, ...this.users];
      this.save();
      this.update();
    } catch (error) {
      return alert(error.message);
    }
  }

  load() {
    this.users =
      JSON.parse(localStorage.getItem('@github-favorites:users')) || [];
  }

  save() {
    localStorage.setItem('@github-favorites:users', JSON.stringify(this.users));
  }

  remove(userRemoved) {
    const confirmation = confirm(
      `Certeza que dejseja remover ${userRemoved.name}?`
    );

    if (confirmation) {
      const filteredUsers = this.users.filter(
        (user) => user.login !== userRemoved.login
      );

      this.users = filteredUsers;

      this.save();
      this.update();
    }
  }

  update() {
    this.removeAllTr();

    const isEmpty = this.users.length === 0;
    
    if (isEmpty) {
      this.tbody.classList.add('isEmpty');
    } else {
      this.tbody.classList.remove('isEmpty');
    }

    this.users.forEach((user) => {
      const row = this.createRow();

      const img = row.querySelector('.user img');
      img.src = `https://github.com/${user.login}.png`;
      img.alt = `Foto do perfil de ${user.name}`;

      row.querySelector('a').href = `https://github.com/${user.login}`;
      row.querySelector('p').textContent = user.name;
      row.querySelector('span').textContent = `/${user.login}`;

      row.querySelector('.repositories').textContent = user.public_repos;
      row.querySelector('.followers').textContent = user.followers;

      row.querySelector('.remove').onclick = () => this.remove(user);

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="user">
      <a href="" target="_blank" rel="external">
        <img
          src="https://github.com/maykbrito.png"
          alt="Foto do perfil de Eduardo"
        />
        <div>
          <p>Mayk Brito</p>
          <span>/maykbrito</span>
        </div>
      </a>
    </td>
    <td class="repositories" >123</td>
    <td class="followers" >1234</td>
    <td>
      <button class="remove">
        <span>&times;</span><span>Remover</span>
      </button>
    </td>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr:not(tr#msg-empty)').forEach((tr) => {
      tr.remove();
    });
  }
}
