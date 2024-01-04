/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ criando componentes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//arquivo firstcomponent.tsx em 'components'

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ desestruturando props (e num - aplicado a destructuring.tsx)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//arquivo SecondComponent.tsx
//arquivo Destructuring.tsx

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ hook usestate
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//arquivo State.tsx

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ importação de componentes componentes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";
import * as meuContext from "./MeuContext/meucontext";
import Context from "./components/Context";

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ types - declarando
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
type textOrNull = string | null;

function App() {
  
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ variaveis
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
  const meuNome: string = "Alexandre";
  const age: number = 30;
  const isWorking: boolean = true;

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ funcoes
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
  const userGreeting = (name: string): string => {
    return `Chamada de função: Olá ${name}.`;
  };
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ types - usando
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
  const myText: textOrNull = "tem algum texto aqui";
  let mySecondText:textOrNull = null;
  //mySecondText = "2";



  return (
    <meuContext.AppContext.Provider value={meuContext.contextValue}>
      <div className="App">      
        <header className="App-header">
          <h1>Typescript com React</h1>
          <h2>Nome: {meuNome}</h2>
          <h2>Age: {age}</h2>
          {isWorking && (
            <div>
              <p>Está funcionando.</p>
            </div>
          )}

          <h3>
            <p>{userGreeting(meuNome)}</p>
          </h3>
          <FirstComponent />
          <SecondComponent name="Segundo" />
          <Destructuring 
            title="Primeiro Post"
            content="Algum conteudo"
            commentsQty={10}
            tags={["ts", "js"]}
            category={Category.TS}
          />
          <Destructuring 
            title="Segundo Post"
            content="Algum novo conteudo"
            commentsQty={5}
            tags={["AspNet"]}
            category={Category.C}
          />        
        </header>      

        <State />

        {myText && <p>Tem texto na variavel myText</p>}
        {mySecondText && <p>Tem texto na variavel mySecondText</p>}

        <Context />
      </div>
    </meuContext.AppContext.Provider>
  );
}

export default App;
