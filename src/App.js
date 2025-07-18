import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import Alert from './components/Alert';
import {AlertProvider} from './context/alertContext';
import { theme } from './theme.ts';

// const theme = extendTheme({
//   fonts: {
//     heading: `'Montserrat', serif`,
//     body: `'Montserrat', serif`,
//   },
//   fontWeights: {
//     bold: '400'
//   },
// });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <header>
          <Header />
        </header>
        <main>
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Alert />
        </main>
        <footer>
          <Footer />
        </footer>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
