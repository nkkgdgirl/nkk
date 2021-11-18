import React from 'react';
import Navbar from './Navbar';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import Pic from './Pic';
import Tap from './Tap';
import Tap2 from './Tap2';
import Tap3 from './Tap3';

function App() {
   return (
    <div className = "App" style = {{display:"flex" , marginleft : "auto" , marginright : "auto"}} >  
        <Navbar/>
        <Switch>
            <Route path="/" exact>       
             </Route>
             <Route path="/covidd/csv/sample_submission.csv"> 
                <div>
                    <h2 style = {{ paddingLeft : '20px' , paddingTop : '20px' }}>sample_submission.csv(89.09 kB)</h2>
                    <Tap/>
                </div>         
            </Route>

            <Route path="/covidd/csv/train_image_level.csv">  
            <div>
                <h2 style = {{ paddingLeft : '20px' , paddingTop : '20px'}}>train_image_level.csv(1.27 MB)</h2>
                <Tap2/>
            </div>          
            </Route>

            <Route path="/covidd/csv/train_study_level.csv" > 
                <div>
                    <h2 style = {{ paddingLeft : '20px' , paddingTop : '20px'}} > train_study_level.csv(163.55 kB)</h2>
                    <Tap3/>       
                </div>       

            </Route>
                     
            <Route path="/covidd/*">  
            <div>
                <Pic/>
            </div>          
            </Route>
        </Switch>
    </div>
  );
}

export default App;