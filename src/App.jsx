
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import schoolConfig from './data/schoolConfig'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Gallery from './pages/Gallery'
import Notices from './pages/Notices'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const school = schoolConfig

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="notices" element={<Notices />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    {/* <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-200/60 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-slate-200/70">
                <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85')]  bg-cover bg-center w-full p-8 text-center">
                  <div className="text-7xl" aria-hidden="true">
                    🎓
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-800">
                    Every Student Matters
                  </h3>

                  <p className="mt-3 max-w-xs leading-7 text-slate-600">
                    Learning, discovery and opportunity in one place.
                  </p>

                  <span className="mt-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-800">
                    School life
                  </span>
                </div>
              </div>
              
            </div> */}
    </BrowserRouter>
  )
}

export default App
