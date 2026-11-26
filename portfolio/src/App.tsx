import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechText from './components/TechText';

function App() {
  return (
    <div className='bg-[#0E0D12] w-full min-h-screen px-50'>
      <>
        <Navbar />
        <div className='min-h-screen' style={{ width: '100%', position: 'relative' }}>
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
            accentColor="#34D399"
            reach={200}
            softness={0.7}
            lineStyle="solid"
            strokeWidth={1.25}
            speed={1}
            bounce={0.75}
            selection
            labels
            color="#34D399"
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