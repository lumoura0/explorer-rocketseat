import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Background, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  return (
    <Container>
      <Background />

      <div>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          <h2>Crie sua conta</h2>
          <Input type="text" icon={FiUser} placeholder="Nome" />
          <Input type="email" icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />

          <Button title="Cadastrar" />
          <Link to={-1}>
            <ButtonText title="Voltar para o login" isActive />
          </Link>
        </Form>
      </div>
    </Container>
  );
}
