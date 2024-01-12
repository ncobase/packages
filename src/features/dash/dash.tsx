import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const Dash = () => {
  const navigate = useNavigate();
  //TODO: use api
  useEffect(() => {
    navigate('/dash/sales');
  }, [navigate]);
  return null;
};
