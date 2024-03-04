import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Analiz from './container/Analiz/Analiz';
import Explore from './container/Explore/Explore';
import Footer from './components/Footer/Footer';
import decore from './assets/Decore.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
function App() {
/*   const userId = localStorage.getItem('userId');

  const [user, setUser] = React.useState(null);

  if (userId) { //run useEffect 2 times on console because of React.StrictMode
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
          console.log("Response: ", response.data);
          setUser(response.data);          
        } catch (error) {
          console.log('Error while getting user: ', error);
        }
      };

    fetchData();
    }, [userId]);
  } else {
    console.log("userId from Local storage  is null");
  } */


   const userToken = localStorage.getItem('token');
   var userName = ''
   var userId = '';
   if(userToken) {
    const user = jwtDecode(userToken);
    console.log(user);
    userName = user.sub;
    userId = user.id;
    const userEmail = user.email;
   }


  return (
    <div>
      <img src={decore} className='decore' />
       <Navbar username={userName}/> 
      <Header />
      <About />
      <Analiz userId={userId}/>
      <Explore />
      <Footer />
    </div>
  )
}

export default App
