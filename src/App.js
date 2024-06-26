import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Home from './screens/Home';
import Bookingscreen from './screens/Bookingscreen';

import Registerscreen from './screens/Registerscreen';

import Loginscreen from './screens/Loginscreen';

function App(){
    
    
    return(
        <div className='App'>
            <Navbar/>
            <BrowserRouter>
            

            
                
            <Route path="/home" exact component ={Homescreen}/>
            <Route path='/book/:roomid/:fromdate/:todate'  exact component ={Bookingscreen} exact/>
            
            <Route path='/login' exact component={Loginscreen}/>
            <Route path='/register' exact component={Registerscreen}/>

            
            
            
            
            
            </BrowserRouter>
        </div>
    );
}

export default App;
