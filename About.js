import React from 'react'

const About = () => {
  return (
    <>
    <section className="container section_2">
        <h3 className="section_2-title">Sobre Nosotros</h3>
            <div className="us">
                <div className="us-img">
                <img src={require("../img/hombre.png")} alt="" className="img-img" width="100%"></img>
            </div>
            <div className="us-text my-4">
                <div className="us-paragraph">
                    <p className="paragraph-text">
                        Nuestras diferencias nos hacen más fuerte. Creemos que los diferentes 
                        puntos de vista son fundamentales para la innovación. 
                        En nuestra compañia, serás parte de una cultura inclusiva en donde la individualidad importa.
                    </p>
                    <p className="paragraph-text">
                        Nos importa que el mundo sea un lugar mejor. 
                        Estamos comprometidos a cambiar vidas mediante el fomento de la educación, 
                        la protección del planeta y las acciones positivas en nuestras comunidades.
                    </p>
                    <p className="paragraph-text">
                        Nuestros Valores
                        -Lideramos con el ejemplo. Vivimos día a día un espíritu de equipo sólido y rechazamos la zona de confort.
                        -Sobresalimos en todo lo que hacemos. Nuestro aprendizaje, con miras a la excelencia, es siempre continuo.
                    </p>
                </div>
                <div className="us-rs my-4">
                    <h5 className="us-rs-title">Nuestras redes sociales</h5>
                    <div className="rs-icon">
                        <a href="facebook.com" className="rs-link"><img src={require("../img/facebook_109862.png")} alt=""></img></a>
                        <a href="google.com" className="rs-link mx-2"><img src={require("../img/g_109859.png")} alt=""></img></a>
                        <a href="instaram.com" className="rs-link"><img src={require("../img/instagam_109863.png")} alt=""></img></a>
                        <a href="whatsapp.com" className="rs-link mx-2"><img src={require("../img/whatsapp_109861.png")} alt=""></img></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About