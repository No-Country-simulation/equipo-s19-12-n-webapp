import FormProductos from "../../core/components/organismos/FormAgregarProductos/FormProductos";
import {motion} from "framer-motion"

const AgregarProductos = () => {
  return (
    <motion.div initial={{scale: 0.98, opacity: 0.5}} animate={{scale: 1, opacity: 1}} transition={{ease: "easeInOut", duration: 0.4}}>
      <FormProductos />
    </motion.div>
  );
};

export default AgregarProductos;
