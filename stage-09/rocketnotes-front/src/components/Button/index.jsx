import { Container } from './styles';

export function Button({ title, isLoading = false }) {
  return (
    <Container type="button" disabled={isLoading}>
      {isLoading ? 'Carregando...' : title}
    </Container>
  );
}
