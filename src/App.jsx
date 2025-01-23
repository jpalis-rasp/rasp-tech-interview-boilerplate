import rasLogo from '../public/rasLogo.png';
import './App.css'
import Button from '@mui/material/Button';

function App() {

  return (
    <>
      <div>
          <a href="https://ringieraxelspringer.pl/tech.html" target="_blank">
              <img src={rasLogo} className="logo" alt="RAS Tech logo"/>
          </a>
      </div>
        <h3>Link to recrutation task you will get during the interview.</h3>
        <div className="card">
        <p>
          Please download the PDF instruction file before starting.
        </p>
      </div>
    </>
  )
}

export default App
