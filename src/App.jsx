import { useState } from 'react';
import './App.css';



const App = () => {
  // Example provided in video lesson: React Stata Management/The useState() HOOK
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  console.log(isDarkMode)
  
  const handleDarkMode = () => {
    console.log("before setIsDarkMode is called: ", isDarkMode)
    console.log('Dark Mode!');
    setIsDarkMode(true)
    console.log("after setIsDarkMode is called: ", isDarkMode)  
  }

  const handleLightMode = () => {
    console.log('Light Mode!')
    setIsDarkMode(false)
  }

  return (
    <>
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Hello world!</h1>
    </div>
    <div>
      <button onClick={handleDarkMode}>Dark Mode</button>
      <button onClick={handleLightMode}>Light Mode</button>
      </div>
    </>
  );
};

export default App;





// YOU DO, Lesson: React Stata Management/The useState() HOOK
// const [isAboutme, setIsAboutMe] = useState({
  //   firstName: "Abdullah",
  //   lastName: "Durrani",
  //   hasPets: true,
  //   age: 37,
  // })
  
  // <p>Hello, my name is {isAboutme.firstName}, I am {isAboutme.age} years old, 
  //   and I {isAboutme.hasPets ? 'have' : 'don\t have'} pets.</p>
  
  // console.log(isAboutme)