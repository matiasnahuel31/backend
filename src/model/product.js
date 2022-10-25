const Product = (props) =>
  props.nombre &&
  props.descripcion &&
  props.codigo &&
  props.foto &&
  props.precio &&
  props.stock;

module.exports = Product;
