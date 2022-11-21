import { useMatch } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const isRouteQueue = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMatch('/queue');
};
