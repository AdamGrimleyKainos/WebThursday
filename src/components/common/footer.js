import React from 'react';

class Footer extends React.Component {
   render() {
       return (
           <footer>
               <div className="container">
                   <div className='row'>
                     <div className='col-md-5'>
                       <br />
                       <p>Powered by <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MySQL</strong> and <strong>React</strong></p>
                       <p>2016 Adam Grimley, Chloe Mullan, Richard Taylor</p>
                     </div>
                 </div>
               </div>
           </footer>
       );
     }
}

export default Footer
