import { Viaje } from '../models/Viaje.js'

const paginaInicio = (req, res) => { //--------------> req - lo que enviamos : res - lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    });
    }

    const paginaNosotros = (req, res) => { //--------------> req - lo que enviamos : res - lo que express nos responde
        res.render('nosotros', {
            pagina: 'Nosotros'
        });
        }
    const paginaViajes =  async (req, res) => { //--------------> req - lo que enviamos : res - lo que express nos responde
        // Consultar BD
        const viajes =  await Viaje.findAll();
        
        console.log(viajes);
        res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes
        });
        }
    const paginaTestimoniales = (req, res) => { //--------------> req - lo que enviamos : res - lo que express nos responde
        res.render('testimoniales', {
            pagina: 'Testimoniales'
        });
        }

        // Muestra el detalle
        const paginaDetalleViaje = async (req, res) => {
            const { viaje } = req.params;

            try {
                const resultado = await Viaje.findOne({where : {slug: viaje }});
                res.render('viaje', {
                    pagina: 'Información del Viaje',
                    resultado
                })
            } catch (error) {
                console.log(error)
                
            }
        }

    export {
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje

    }