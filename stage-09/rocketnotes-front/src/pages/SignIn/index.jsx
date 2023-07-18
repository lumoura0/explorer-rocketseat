import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Background, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  return (
    <Container>
      <div>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          <h2>Faça seu login</h2>
          <Input type="email" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />

          <Button title="Entrar" />

          <Link to="/register">
            <ButtonText title="Criar conta" isActive />
          </Link>
        </Form>
      </div>
      <Background />
    </Container>
  );
}
