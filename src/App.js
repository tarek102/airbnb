import './App.css';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Card } from './components/Card';
import swimmer from "./images/swimmer.png"

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Hero />
      <Card 
        img= {swimmer}
        rating= {5.0}
        reviewCount= {6}
        country= "Egypt"
        title= "Life lessons with Katie Zaferes"
        price= {136}
      />
    </div>
  );
}

export default App;
