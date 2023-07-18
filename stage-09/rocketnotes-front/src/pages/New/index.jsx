import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

import { Container, Form, Textarea } from './styles';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to={-1}>
              <ButtonText title="voltar" />
            </Link>
          </header>
          <Input type="text" placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="234" />
              <NoteItem value="234" />
              <NoteItem value="234" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
