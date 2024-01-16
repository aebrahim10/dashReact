
//import { ColorModeContext, useMode} from "./theme";
import { CssBaseline,createTheme, ThemeProvider,colors } from "@mui/material";
import { useMemo,useState} from 'react'

import Btn from "./componentsTest/Btn";
import ToolBar from "./componentsTest/ToolBar";
import MyApp from "./progTest/context/MyAppc";
import Appm from "./progTest/memo/Appm";
const theme = createTheme({
  palette:{
      secondary: {
        main:colors.red[900] 
      }
  }
})
function AppTest() {
  const [countOne, setCountOne]= useState(0)
  const [countTwo, setCountTwo]= useState(0)

  const incrementOne= ()=>{ setCountOne(countOne+1)}
  const incrementTwo= ()=>{ setCountTwo(countTwo+1)}
    const incrementTwoByFive= ()=>{ 
      for (let i=0; i<5;i++){
        setCountTwo(p=>p+1)
      }
      
    }
  const decrementTwo= ()=>{ setCountTwo(countTwo-1)}
  const resetTwo= ()=>{ setCountTwo(0)}
  const isEven = useMemo(()=>{
    for(let i=0;i<=2000000000;i++){ }
    return countOne % 2 ===0
  },[countOne])
  const [name, setName] = useState('Nassima');
  function handleClick() {
    (name==='Nassima') ? setName('Warda') :setName('Nassima');
  }
  return(
    <>
    <ThemeProvider theme={theme}>
      <ToolBar />
    </ThemeProvider>
    <div className='buttonCont'>
    <button onClick={handleClick} >{name}</button>
    <button onClick={incrementOne} >CountOne {countOne}</button>
    <span>{isEven? 'Even' : 'Odd'}</span>
    <button onClick={incrementTwo} >+ 1 </button>
    <button onClick={decrementTwo} >- 1</button>
    <button onClick={resetTwo} >0  </button>
    <button onClick={incrementTwoByFive} >+ 5 </button>

    <button style={{border:"2px blue solid",width:'100px', background:'cyan'}}>{countTwo}</button>

    
    </div>
    <MyApp />
    {/* <Appm /> */}

    </>
  )

}



export default AppTest;
