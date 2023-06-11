import './SectionPrices.css'

function SectionPrices(): JSX.Element {
    return (
        <>
            <section id='prices' className="prices">
                <h2 className="prices__title">Precios</h2>
                <div className='prices__grid'>
                    <div className="prices__container">
                        <div className="prices__card">
                            <div className="prices__card__header">
                                <h3 className="prices__card__title">Default</h3>
                                <p className="prices__card__storage">15 GB</p>

                                <button className="prices__card__button prices__card__button--current-plan">Plan actual</button>
                            </div>
                            <div className="prices__card__specifications">
                                <p className="prices__card__specifications__title">Incluye</p>
                                <div className="prices__card__specifications__item">
                                    <img src="./imgs/check-icon.svg" alt="" />
                                    <p className="prices__card__specifications__item__text">15 GB de almacenamiento</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prices__container">
                        <div className="prices__card prices__card__recomended">
                            <div className="prices__card__header">
                                <h3 className="prices__card__title">Default</h3>
                                <p className="prices__card__storage">100 GB</p>
                                <p className='prices__card__price'>1,99 €/mes</p>

                                <button className="prices__card__button">Empezar</button>
                            </div>
                            <div className="prices__card__specifications">
                                <p className="prices__card__specifications__title">Incluye</p>
                                <div className="prices__card__specifications__item">
                                    <img src="./imgs/check-icon.svg" alt="" />
                                    <p className="prices__card__specifications__item__text">100 GB de almacenamiento</p>
                                </div>
                                <div className="prices__card__specifications__item">
                                    <img src="./imgs/check-icon.svg" alt="" />
                                    <p className="prices__card__specifications__item__text">Ayuda de expertos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionPrices