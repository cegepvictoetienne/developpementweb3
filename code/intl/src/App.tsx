import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import {
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedNumber,
} from 'react-intl';

function App() {
  const [count, setCount] = useState(0);
  const maintenant = new Date();
  const heure = maintenant.getTime();
  const prix = 12.35;
  const rabais = 15 / 100;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        <FormattedMessage id="app.titre" defaultMessage="Titre" />
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <FormattedMessage
            id="app.clics.label"
            defaultMessage="Titre"
            values={{ nombreclics: count }}
          />
        </button>
        <p>
          <FormattedMessage
            id="app.clics.pluriel.label"
            defaultMessage="Titre"
            values={{ nombreclics: count }}
          />
        </p>
        <p>
          <FormattedDate
            value={maintenant}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </p>
        <p>
          Victoriaville : <FormattedTime value={heure} />
          <br />
          Vancouver :{' '}
          <FormattedTime value={heure} timeZone="America/Vancouver" />
        </p>
        <p>
          <FormattedNumber
            value={prix}
            style="currency"
            currency="CAD"
            currencyDisplay="symbol"
          />
        </p>
        <p>
          <FormattedNumber value={rabais} style="percent" />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
