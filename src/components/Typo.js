import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: var(--text-color, --default-text-color);
  margin-bottom: var(--margin-bottom, 20px);
  line-height: 1.2rem;
`;

const SmallText = styled(Text)`
  font-size: 0.8rem;
`;

const Heading1 = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: var( --heading-color, --default-text-color);
  font-size: 2.2rem;
  margin-bottom: var(--margin-bottom, 20px);
`;

const Heading2 = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: var( --heading-color, --default-text-color);
  font-size: 1.8rem;
  margin-bottom: var(--margin-bottom, 20px);
`;

const Heading4 = styled.h4`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: var( --heading-color, --default-text-color);
  font-size: 1.2rem;
  margin-bottom: var(--margin-bottom, 20px);
`;

const Heading6 = styled.h4`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: var( --heading-color, --default-text-color);
  font-size: 1.2rem;
  margin-bottom: var(--margin-bottom, 20px);
`;

export { Text, SmallText, Heading1, Heading2, Heading4, Heading6 };
