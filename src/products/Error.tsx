import { FC } from 'react';

interface Props {
  error: Error;
}

export const Error: FC<Props> = ({ error }) => <p style={{ color: 'red' }}>Error: {JSON.stringify(error)}</p>;
