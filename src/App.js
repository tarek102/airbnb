import './App.css';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Hero />
      <Card />
    </div>
  );
}

export default App;
