
import './assets/css/master.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import Work from './components/Work'
import Transfer from './components/Transfer'
import Comment from './components/Comment'
import Faq from './components/Faq'
import Email from './components/Email'
import End from './components/End'

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
      <Features />
      <Work />
      <Transfer />
      <Comment />
      <Faq />
      <Email />
      <End />
    
    </>
  )
}

export default App
