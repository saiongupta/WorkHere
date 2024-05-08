import { Navbar, Hero } from ".";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  var x = false;
  const notify = () => {if (!x) {toast('All 3D components are interactive. Use your mouse or finger to interact with them !!'); x = true;}};
    return (
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' onLoad={notify}>
          <Toaster />
          <Navbar />
          <Hero />
        </div>
    )
}

export default Home;