import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechText from './components/TechText';

function App() {
  return (
    <div className='bg-black w-full min-h-screen px-50'>
      <>
        <Navbar />
        <div style={{ width: '100%', height: '480px', position: 'relative' }}>
          <TechText
            text="Ardhika Raditya"
            fontWeight={400}
            fontSize={150}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={6}
            intro="metrics"
            introDuration={2.8}
            clickKick
            guides
            fontFamily='Georgia, "Times New Roman", serif'
            letterSpacing={-0.03}
            accentColor="#ffffff"
            reach={200}
            softness={0.7}
            lineStyle="solid"
            strokeWidth={1.25}
            speed={1}
            bounce={0.75}
            selection
            labels
            color="#ffffff"
            align="center"
            draggable
            sweep
        />
        </div>
        <Hero />
      </>
    </div>
  )
}

export default App