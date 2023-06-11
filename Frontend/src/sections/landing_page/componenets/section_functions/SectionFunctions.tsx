import './SectionFunctions.css'

function SectionFunctions(): JSX.Element {
  return (
    <>
        <section id='functions' className="functions">
            <div className="functions__img_container">
                <img className="functions__img" src="./imgs/funciones.jpg" alt="" />
            </div>
            <div className="functions__info">
                <h2 className="functions__info__title">Integración con las herramientas y aplicaciones que ya utiliza tu equipo</h2>
                <p className="functions__info__text">Drive se integra con la tecnología actual de tu equipo y la complementa. Colabora en archivos de Microsoft Office sin tener que convertir formatos de archivo, y edita y guarda más de 100 tipos de archivo adicionales, como PDF, CAD e imágenes, entre otros.</p>
            </div>
        </section>
    </>
  )
}

export default SectionFunctions
