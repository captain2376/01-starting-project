import Footer from "./components/Footer";
import Header from "./components/Header";
import componentsImg from "./assets/components.png"
/*
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
 */

function CoreConcepts(props){
  return <li>
    <img src={props.img} alt="..."/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

function App() {
  return (
    <div>
       <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcepts title="Compnente" 
          description="This is defining props in a component."
          img={componentsImg}/>
          <CoreConcepts />
          <CoreConcepts />
          <CoreConcepts />
        </ul>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
