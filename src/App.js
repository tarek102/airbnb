import './App.css';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Card } from './components/Card';
// import swimmer from "./images/katie-zaferes.png"

import data from "./components/data"

function App() {
  const cards = data.map(card => {
    return <Card 
            key={card.id}
            card = {card}
          />
  })

  return (
    <div className="App">
      <Navigation /> 
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
