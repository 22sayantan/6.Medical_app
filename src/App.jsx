import './App.css'
import Indicator from './components/Indicator/Indicator'
import Categories from './components/categories/Categories'
import Footer from './components/footer/Footer'
import About from './components/pages/about/About'
// import NavBar from './components/navBar/NavBar'
import Login from './components/pages/login/Login'



// React router ::......::.......::.......::-----


function App() {

  const IndObj = [
    {
      title:'services',
      nameList: ['chekup','consulting', 'lab test','ambulance']
    },
    {
      title:'check up',
      nameList: ['eye','ear','cardio','body']
    },
    {
      title:'ambulance',
      nameList: ['accident','oldage','pregnant','murder/suicide']
    }
  ];

  const listItems = IndObj.map((item,index) =>
        <Indicator key={index} title={item.title} nameList={item.nameList} 
        />
  )
      // console.log(names[index])

  return (
    <>
      {/* <Categories/> */}
        {/* {listItems} */}
      {/* <Footer/> */}

      <Login/>


    </>
  )
}

export default App
