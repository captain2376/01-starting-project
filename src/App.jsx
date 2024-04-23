import Footer from "./components/Footer";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts.jsx";
import componentsIamge from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
/*
function Header() {
  return (
    <header>
      <image src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
 */



function App() {
  return (
    <div>
       <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcepts title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>
          <CoreConcepts {...CORE_CONCEPTS[1]} />
         <CoreConcepts title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}/>
          <CoreConcepts title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}/>
        </ul>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
