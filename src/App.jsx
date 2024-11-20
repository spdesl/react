
import './assets/css/main.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import AppFeature from './components/AppFeature'
import Work from './components/Work'
import AppTransfer from './components/AppTransfer'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <div className='wrapper'>
      <Header />
      <main id="main">
        <Hero />
        <Brands />
        </main>
        </div>
      <AppFeature />
      <Work />
      < AppTransfer />
      <Testimonial />
      <Faq />
      <Subscribe />
      <Footer />
    
    </>
  )
}

export default App
