import { FiPower } from 'react-icons/fi';

import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/eduardonobrega.png"
          alt="Foto perfil de Eduardo"
        />
        <div>
          <span>Bem vindo</span>
          <p>Eduardo Nóbrega</p>
        </div>
      </Profile>

      <Logout>
        <FiPower />
      </Logout>
    </Container>
  );
}
