import Navbar from './components/headers/Navbar';
import './styles/tailwind.css';
import './styles/globle.css';
import { SectionOne } from './components/sections/section1';
import { SectionTwo } from './components/sections/section2';
import { SectionThree } from './components/sections/section3';
import { SectionFour } from './components/sections/section4';
import { SectionFifth } from './components/sections/section5';
import { SectionSeven } from './components/sections/section7';
import { SectionNine } from './components/sections/section9';
import { SectionTen } from './components/sections/section10';
import { Footer } from './components/footers';
import { SectionSix } from './components/sections/section6';
import { SectionEight } from './components/sections/section8';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFifth />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <Footer />
    </div>
  );
}

export default App;
