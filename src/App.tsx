import { GlowingCursor } from "./components/atoms";
import {
  About,
  Education,
  Experience,
  HeroSection,
  LinkSosmed,
  Projects,
  Sidebar,
} from "./components/molecules";

function App() {
  return (
    <div className="bg-slate-800 text-slate-300 min-h-screen px-3">
      <GlowingCursor />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-3 relative">
          <header className="lg:sticky col-span-2 lg:col-span-1 top-0 flex flex-col justify-between lg:max-h-screen pt-12 lg:py-24 lg:h-screen">
            <div>
              <HeroSection />

              <Sidebar />
            </div>

            <LinkSosmed />
          </header>

          <main className="lg:py-24 grid gap-16 mb-10 overflow-hidden col-span-2">
            <About />

            <Experience />

            <Projects />

            <Education />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
