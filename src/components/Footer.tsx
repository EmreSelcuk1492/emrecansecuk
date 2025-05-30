import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Emre Selcuk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 