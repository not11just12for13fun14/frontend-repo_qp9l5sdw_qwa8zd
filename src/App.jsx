import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Progress from './components/Progress'
import Community from './components/Community'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Progress />
        <Community />
        <CTA />
      </main>
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} QuranLink. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#progress" className="hover:text-gray-900">Progress</a>
            <a href="#community" className="hover:text-gray-900">Community</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
