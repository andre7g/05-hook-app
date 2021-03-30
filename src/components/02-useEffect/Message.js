import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({ x:0, y:0 });
    const { x,y } = coords;


    useEffect(() => {

        const mouseMove = (e) => {
            //console.log(' :D  ');
            const coords = { x:e.x, y:e.y };
            //console.log(coors);
            setcoords(coords);
        }

        window.addEventListener( 'mousemove', mouseMove );
        console.log('Componente montado.')
        return () => {
            window.removeEventListener( 'mousemove', mouseMove );
      
        }
    }, [])

    return (
        <>
            <h3>Eres genial!!</h3>
            <p>
                x:{x} y:{y}
            </p>
        </>
    )
}
