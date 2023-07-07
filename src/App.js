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
            id = {card.id}
            title = {card.title}
            description= {card.description}
            price = {card.price}
            coverImg= {card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            openSpots= {card.openSpots}
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
