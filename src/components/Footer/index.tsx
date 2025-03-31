import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 text-sm">
      <p>© {new Date().getFullYear()} Evilxd. All Rights Reserved.</p>
    </footer>
  );
};