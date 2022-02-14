const estadoInicial = {
  character: [
  ],
  carrito: [],
};

const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_CARD":
      alert('el producto fue añadido')
      const { idCard, name,image } = accion;
      if (estado.carrito.length === 0)
        return {
          ...estado,
          carrito: [{ id: idCard, name: name, cantidad: 1,image:image }],
        };
      else {
        const nuevoCarrito = [...estado.carrito];
        const yaEstaEnCariito =
          nuevoCarrito.filter((cardDeCarrito) => {
            return cardDeCarrito.id === idCard;
          }).length > 0;
        if (yaEstaEnCariito) {
          nuevoCarrito.forEach((cardDeCarrito, index) => {
            if (cardDeCarrito.id === idCard) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idCard,
                name: name,
                cantidad: cantidad + 1,
                image:image
              };
            }
          });
        } else {
          nuevoCarrito.push({ id: idCard, name: name, cantidad: 1,image:image });
        }
        return { ...estado, carrito: nuevoCarrito };
      }
    default:
      return estado;
  }
};

export { reducer };
