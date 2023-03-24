import { Wrapper } from './styles';

export type CloneMeProps = {
  title?: string;
}

export function CloneMe({ title = 'Change me'}: CloneMeProps) {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
}
