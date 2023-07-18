class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  selected(route) {
    document.querySelectorAll('a').forEach((link) => {
      link.pathname === route
        ? link.classList.add('selected')
        : link.classList.remove('selected');
    });

    let bg;
    switch (route) {
      case '/universe':
        bg = `url('./assets/mountains-universe-2.png')`;
        break;

      case '/exploration':
        bg = `url('./assets/mountains-universe-3.png')`;
        break;

      default:
        bg = `url('./assets/mountains-universe-1.png')`;
        break;
    }

    document.body.style.backgroundImage = bg;
  }

  route(event) {
    event?.preventDefault();

    const link = event?.target.href || '/universe';

    window.history.pushState({}, '', link);

    this.handle();
  }

  async handle() {
    const { pathname } = window.location;


    const page = this.routes[pathname] || this.routes[404];

    this.selected(pathname);
    const response = await axios.get(page);

    document.querySelector('#app').innerHTML = response.data;
  }
}

export { Router };
