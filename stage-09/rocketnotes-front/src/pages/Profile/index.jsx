import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to={-1}>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/eduardonobrega.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha atual" />
        <Input type="password" icon={FiLock} placeholder="Nova senha" />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
