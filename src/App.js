import React, { Component } from 'react';  
class App extends Component {  
   render(){ 
      // eslint-disable-next-line no-undef
      const environment = process.env.NODE_ENV;
      return(  
         <div className="center">  
            <h1>This is {environment} environment</h1>  
         </div>  
      );  
   }  
}
export default App;  