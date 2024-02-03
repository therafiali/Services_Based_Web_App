
import About from '@/components/view/About'
import Footer from '@/components/view/Footer'
import Hero from '@/components/view/Hero'
import Services from '@/components/view/Services'
import Services_Items from '@/components/view/Services_Items'



export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Services_Items />
      <About />
      <Footer/>

    </main>
  )
}
