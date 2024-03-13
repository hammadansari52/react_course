import Header from "./Header.jsx";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {... CORE_CONCEPTS[1]}/>
            <CoreConcept {... CORE_CONCEPTS[2]}/>
            <CoreConcept {... CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
