
import './App.css'



function App() {

  fetchFact();

  return (
    <>

    </>
  )
}

async function fetchFact() {

  const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

  const response = await fetch(URL);
  const json = await response.json();

  const randomFact = json.text;

  console.log(randomFact);

}

export default App
