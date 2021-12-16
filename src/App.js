import BlogPosts from './components/BlogPosts'
import Contact from './components/Contact'
import EventsCarousel from './components/EventsCarousel'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import ShopAddress from './components/ShopAddress'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <EventsCarousel />
      <QuickInfo />
      <BlogPosts />
      <ShopAddress />
      <Contact />
      <Footer />
    </>
  )
}

export default App
