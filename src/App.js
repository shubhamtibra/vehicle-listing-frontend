import React from 'react';
import './App.css';
import VehicleForm from './components/VehicleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VinAudit Vehicle Listing</h1>
      </header>
      <main>
        <div className="vehicle-form-container">
          <VehicleForm />
        </div>
        {/* ... (other sections remain the same) */}
      </main>
      <footer>
        <p>&copy; 2023 VinAudit Take Home Project</p>
      </footer>
    </div>
  );
}

export default App;
