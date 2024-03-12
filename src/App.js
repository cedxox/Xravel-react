import './App.css';
import { About } from './Components/About';
import { Content } from './Components/Content';
import { Exceptions } from './Components/Exceptions';
import { Motor } from './Components/Motor';
import { Review } from './Components/Review';
import "../src/Components/Header.css"
import { Policy } from './Components/Policy';
function App() {
  function scrollastold(sectionid) {
    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'})
    }
  }
  return (
    <div className="App">
      <section>
        <div className='header'>
          <div className='header2'>
            <div className='image_container'>
              <img src="f29017ea-c6cd-42b5-97d2-06338fb3a746.jpeg" alt="drop" className='traveling_image' />
              {/* <p className='P'><span>X</span>r<span>A</span>vel</p> */}
            </div>
            <nav>
              <ul className='roni'>
                <li className='home' >HOME</li>
                <li className='about' onClick={() => scrollastold('about')}>ABOUT</li>
                <li className='policy' onClick={() => scrollastold('policy')}>PRIVACY POLICY</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <Motor />
      </section>
      <section>
        <Content />
      </section>
      <section>
        <Review />
      </section>
      <section>
        <Exceptions />
      </section>
      <section>
        <div className='policy' id='policy'>
          <Policy />
        </div>
      </section>

      <section>
        <div className='About' id="about">
          <About />
        </div>
      </section>


    </div>

  );
}

export default App;
// import "../src/Components/Header.css"
// import './App.css';
// import { About } from './Components/About';
// import { Content } from './Components/Content';
// import { Exceptions } from './Components/Exceptions';
// import { Motor } from './Components/Motor';
// import { Review } from './Components/Review';
// import { Policy } from './Components/Policy';
// import { Link } from 'react-router-dom';

// import { Routes, Route } from 'react-router-dom';

// function App() {
//   // function scrollastold(sectionid) {
//   //   const section = document.getElementById(sectionid);
//   //   if (section) {
//   //     section.scrollIntoView({ behavior: 'smooth' })
//   //     // block: 'end', inline: "nearest" 
//   //   }
//   // }
//   return (
//     <div className="App">
//       <section>
//         <div className='header'>
//           <div className='header2'>
//             <div className='image_container'>
//               <img src="f29017ea-c6cd-42b5-97d2-06338fb3a746.jpeg" alt="drop" className='traveling_image' />
//             </div>
//             <nav>
//             <ul className='roni'>
//               <li className='home'>HOME</li>
//               <li className='about'><Link to="/about">ABOUT</Link></li>
//               <li className='policy'><Link to="/policy">POLICY</Link></li>
//             </ul>
//           </nav>
//           </div>
//         </div>
//       </section>
//       <Motor />
//       <Content />
//       <Review />
//       <Exceptions />

//       {/* Render Motor on root path */}
//       {/* Render Content at /content path */}
//       {/* Render Review at /review path */}
//       {/* Render Exceptions at /exceptions path */}
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/policy" element={<Policy />} />
//       </Routes>
//     </div>

//   );
// }

// export default App;
