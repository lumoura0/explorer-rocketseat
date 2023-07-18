import { FiPlus } from 'react-icons/fi';

import { Container, Search, Content, Menu, Brand, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Notes } from '../../components/Notes';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>
          R<span>ocketnotes</span>
        </h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Frontend" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
      </Menu>

      <Search>
        <Input type="search" placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Notes
            note={{
              title: 'React Modal',
              tags: [{ name: 'React', id: 1 }],
            }}
          />
          <Notes
            note={{
              title: 'Node.js',
              tags: [{ name: 'Node', id: 1 }],
            }}
          />

          <Notes
            note={{
              title: 'Exemplo de Middleware',
              tags: [
                { name: 'express', id: 1 },
                { name: 'nodejs', id: 2 },
                { name: 'React', id: 3 }
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        <span>Criar nota</span>
      </NewNote>
    </Container>
  );
}
