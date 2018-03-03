import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Showrestaurants from './Components/Showrestaurants';
import Showmenus from './Components/Showmenus';

import Welcome from './Components/Welcome'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
const THEME = createMuiTheme({
   overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
	
      },
    },
  },
  typography: {
    // Use the system font.
    fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
		'&::selection':{
			"color":"#f5861f",
			"background":"#f5f5f5",
		},
	
	},
});
ReactDOM.render(
	<MuiThemeProvider theme={THEME}>
	    <BrowserRouter>
	        <div>
	            <Switch>
	            	<Route path="/show" component={Showrestaurants} />
	            	<Route path="/restaurants" component={Showmenus} />
	            	
	            	<Route path="/" component={()=> <Welcome Name={'Siva'}/> } />
	            	
	            </Switch>
	        </div>
	    </BrowserRouter>
    </MuiThemeProvider>
    , document.querySelector('#root'));
registerServiceWorker();
