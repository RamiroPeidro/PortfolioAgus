import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({
  strings,
  startDelay = 0, // Tiempo antes de comenzar a escribirse (en milisegundos)
  typeSpeed = 50, // Velocidad de escritura
  backSpeed = 50, // Velocidad al borrar
  loop = true, // Si el texto debe repetirse
  showCursor = true, // Mostrar u ocultar el cursor
  cursorChar = '|', // Carácter para el cursor
  backDelay = 500, // Tiempo antes de empezar a borrar
}) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      showCursor,
      cursorChar,
      startDelay,
      backDelay,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  // Asegúrate de incluir todas las props en la lista de dependencias
  }, [strings, startDelay, typeSpeed, backSpeed, loop, showCursor, cursorChar, backDelay]);

  return <span ref={el} />;
};

export default TypedText;
