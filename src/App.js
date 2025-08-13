import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutMe from './components/AboutMe.js';
import TechStack from './components/TechStack.js';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import Alert from './components/Alert';
import {AlertProvider} from './context/alertContext';
import { theme } from './theme.ts';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <header>
          <Header />
        </header>
        <main>
          <LandingSection />
          <AboutMe />
          <TechStack />
          {/* <ProjectsSection /> */}
          <ContactMeSection />
          <Alert />
          <ToastContainer />
        </main>
        <footer>
          <Footer />
        </footer>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
