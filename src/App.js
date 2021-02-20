import './App.css';
import Break from './Break'
import Length from './Length'
import Grid from '@material-ui/core/Grid'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Productive Pomodoro</h1>
      <Grid>
        <Break/>
        <Length/>
      </Grid>
      </header>
    </div>
  );
}

