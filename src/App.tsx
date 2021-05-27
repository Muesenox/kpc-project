import React from 'react';
import UserForm from "./components/UserForm";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-4">Single Page Application</h1> 
      <UserForm />
    </div>
  );
}

export default App;
