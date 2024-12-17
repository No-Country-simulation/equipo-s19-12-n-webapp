import { Box, Grid } from '@mui/material';
import ofertas from '../../../data/ofertas'
import Oferta from '../../atomos/Card/Oferta';
import { motion } from 'framer-motion';
import './style.css'

const Ofertas = () => {

    return (
        <motion.div className='contenedorOfertasHome' initial={{scale: 0.98, opacity: 0.5}} animate={{scale: 1, opacity: 1}} transition={{ease: "easeInOut", duration: 0.4}}>
            <div className='contenedorTituloOfertas'>¿Qué oferta elegís hoy?</div>
            <div className='contenedorCarrucelOfertas'>
                {ofertas.map((imagen, index) => (
                    <Oferta tipo={"img" } alt={"oferta"+imagen.id} src={imagen.imagen} titulo={imagen.titulo} key={index}></Oferta>
                ))}
            </div>
        </motion.div>
    );
}

export default Ofertas