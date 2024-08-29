
import React from 'react'
import Navbar from '../components/Navbar';

const Testimonials = () => {
    
    

  return (
    <div className='bg-[#f0f4fc] min-h-screen'>
        <Navbar />
        <div className='my-0'>
        <div
  className="hero min-h-[50vh]"
  style={{
    backgroundImage: "url(/ella-bg-tint-black.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-5xl text-3xl font-bold">Latino Parent Coalition</h1>
      
    </div>
  </div>
</div>
            
            <div className='flex flex-col justify-evenly flex-wrap my-0'>

        

            
            <div className='flex justify-evenly flex-wrap m-8 my-0'>
            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/presidentes.png"
                    alt="Ms. Navarro" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Presidents</h2>
                    <p>Adriana Partida y Claudia Lopez

                    </p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/vicepresidentes.png"
                    alt="Ms. Nguyen" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Vice Presidents</h2>
                    <p>Elva Rojas y Mayra Muñoz
</p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    className=''
                    src="/tesorores.png"
                    alt="Ms. Mendoza" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Treasurers</h2>
                    <p>Marisol Escarcega y Señor Leal


</p>
                    
                </div>
            </div>


            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/secretarios.png"
                    alt="Mr. Anchondo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Secretaries</h2>
                    <p>Grace Gutierrez y Señor Camacho </p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/representantes.png"
                    alt="Mr. Camacho" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Representatives</h2>
                    <p>Monica Argumedo,
Melvis Lopez,
Rosario Estrada, and
Evangelina Rivera


</p>
                    
                </div>
            </div>

            
        </div>


            
            </div>
        </div>
    </div>
  )
}

export default Testimonials;