import { Canvas } from "@react-three/fiber"
import { Boy3D } from "../3D/Boy3D"
import { OrbitControls } from "@react-three/drei"
import { Girl3D } from "../3D/Gril3D"
import { useState } from "react"
import { config, useSpring } from "@react-spring/three"
import { Link } from 'react-scroll'

function Welcome() {
  // * animation on theme change
  const [scaleB, setScaleB] = useState(2);
  const [scaleG, setScaleG] = useState(1);

  const { scaleBS } = useSpring({
    scaleBS: scaleB,
    config: config.wobbly
  }) as any

  const { scaleGS } = useSpring({
    scaleGS: scaleG,
    config: config.wobbly
  }) as any

  window.addEventListener("themeChanged", () => {
    if (localStorage.getItem("theme") === "light") {
      setScaleB(2.5)
      setScaleG(1)
    }
    if (localStorage.getItem("theme") === "valentine") {
      setScaleB(2)
      setScaleG(1.5)
    }
  })
  return (
    <div className='h-[75vh]'>
      <div className="lg:px-[5%] grid md:grid-cols-2 ">
        <div className="flex flex-col md:justify-between gap-8 py-8 px-5 md:px-0 2xl:py-0 2xl:px-0">
          <div>
            <h1 className="fortnite text-5xl md:text-7xl text-center lg:text-left 2xl:text-9xl font-bold">
              Tongasoa eto amin'ny <label className="text-primary">TIA ZAZA</label>
            </h1>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <p className="text-sm md:text-xl text-center lg:text-left 2xl:text-3xl w-full lg:w-2/3 first-letter:text-lg lg:first-letter:text-5xl">Tonga ity ny fialan-tsasatra koa indro ary ny tranokala iray izay manolotra ireo ankizy karzana kilalao telo mba hialan'izy ireo voly.</p>
          </div>
          <div className=" flex justify-center lg:justify-start">
            <h1 className="font-bold lg:text-xl 2xl:text-3xl">Koa Andeha isika <span className="text-secondary lg:text-3xl 2xl:text-4xl">hilalao</span> rankizy !</h1>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link to="div_game_one" smooth={true} duration={500} offset={-175} className="flex cursor-pointer items-center text-sm md:text-2xl bg-primary hover:translate- hover:transition hover:duration-300 text-base-100 p-2 md:p-4 rounded-full font-bold">
              <span className="mx-4">Ireo kilalaontsika</span>
              <svg className="w-8 h-8 stroke-base-100 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L12 20M12 20L18 14M12 20L6 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center order-first lg:order-last">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Boy3D scale={scaleBS} position={[-2, -2, 0]} />
            <Girl3D scale={scaleGS} position={[2, -2, 0]} />
            <OrbitControls enableZoom={false} enableRotate={true}
              maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Welcome