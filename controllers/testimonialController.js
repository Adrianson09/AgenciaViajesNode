import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) =>{
// Validar...

    const {nombre, email, mensaje} = req.body

    const errores = [];


    if (nombre.trim() === '') {
        errores.push({mensaje:'El nombre esá vacio'});
    }
    if (email.trim() === '') {
        errores.push({mensaje:'El email esá vacio'});

    }
    if (mensaje.trim() === '') {
        errores.push({mensaje:'El mensaje esá vacio'});

    }
    if(errores.length > 0){

        // Consultar BD de testimoniales
        const testimoniales = await Testimonial.findAll(); 

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    }else {
        // Almacenar los datos
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
    
}

export {
    guardarTestimonial
}