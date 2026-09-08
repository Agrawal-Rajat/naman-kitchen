import React from 'react';
import { Helmet } from '../../utils/Helmet';
import NotFoundContent from './NotFoundContent';

export default function NotFound() {
  return (
    <>
      <Helmet
        title="Page Not Found | Naman Kitchen"
        description="The page you are looking for does not exist. Return to Naman Kitchen homepage."
      />
      <NotFoundContent />
    </>
  );
}
