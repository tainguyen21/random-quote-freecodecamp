import { useEffect, useState } from "react";
import "./App.css";

const quotes = [
  {
    quote:
      "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
    author: "Magdalen Harpur",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    quote: "sed accumsan felis ut at dolor quis odio consequat varius",
    author: "Thomasine Veart",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,65,9,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    quote:
      "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
    author: "Nicolai McDiarmid",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(115,121,9,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    quote: "est donec odio justo sollicitudin ut suscipit a feugiat et eros",
    author: "Lesli Seawell",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(56,121,9,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    quote:
      "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
    author: "Sherri Pamment",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,80,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    quote:
      "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
    author: "Lezlie Ebi",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,54,121,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    quote: "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
    author: "Flemming Burwin",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,17,121,1) 100%, rgba(0,212,255,1) 100%)",
  },
];

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote({
      ...quotes[randomIndex],
      index: randomIndex,
    });
  }, []);

  const handleClick = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === quote.randomIndex);

    setQuote({
      ...quotes[randomIndex],
      index: randomIndex,
    });
  };

  return (
    <div className="container" style={{ background: quote.background }}>
      <div id="quote-box">
        <p id="text">{quote.quote}</p>
        <span id="author">- {quote.author}</span>
        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
