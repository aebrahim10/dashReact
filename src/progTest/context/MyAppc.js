import { createContext, useContext,useState } from 'react';
const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme,setTheme] = useState('dark')
  
  const handleTheme = (e)=>{
    theme==='dark'?setTheme('light'):setTheme('dark')
    console.log(e)
    return theme
  }
  return (
    <>
    <ThemeContext.Provider value={theme}>
      <Form />
      <button onClick={handleTheme}>
        Change theme
      </button>
      </ThemeContext.Provider>
      <ThemeContext.Provider value='dark'>
      <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </Button>
      </ThemeContext.Provider>
      </>

  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}