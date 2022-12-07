import React, {useState} from 'react';
import './App.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

function App() {
  const [fullName, setFullName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label htmlFor="fullName">სრული სახელი</label>
          <br />
          <input name="fullName" type="text" onChange={e => setFullName(e.target.value)} />
        </div>
        <br />
        <br />
        <PDFDownloadLink document={<MyDocument fullName={fullName} />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : <button>დაკლიკე და ჩაირიცხე</button>
          }
        </PDFDownloadLink>
        
      </header>
    </div>
  );
}

export default App;
