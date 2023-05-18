import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='min-h-[inherit] pb-[130px]'>
      <Hero />
      <AboutUs />
      <Contact />
    </main>
  )
}
