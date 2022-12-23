import Button from '@components/ui/button';
import { StyledSection } from "@styles/global";
import Link from 'next/link';
import styled from 'styled-components';

const Section = styled(StyledSection)`
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const NotFound = () => {
  return (
    <Section>
      <Title>404</Title>
      <Text>Oops! The page you are looking for was not found.</Text>
      <Link href="/">
        <Button>Go Back Home</Button>
      </Link>
    </Section>
  );
};

export default NotFound;
