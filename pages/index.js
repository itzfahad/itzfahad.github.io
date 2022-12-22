import Contact from '@components/sections/Contact';
import Header from '@components/sections/Header';
import Home from '@components/sections/Home';
import Projects from '@components/sections/Projects';
import Qualification from '@components/sections/Qualification';

const Portfolio = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        {/* <About /> */}
        <Qualification/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
};

export default Portfolio;
