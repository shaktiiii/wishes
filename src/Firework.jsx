import React from 'react'
import { Fireworks, useFireworks } from 'fireworks-js/dist/react'


export default function Firework() {
    const { enabled, options} = useFireworks({
        initialStart: true,
        initialOptions: {
          hue: {
            min: 0,
            max: 345
          },
          delay: {
            min: 15,
            max: 15
          },
          rocketsPoint: 50,
          speed: 10,
          acceleration: 1.2,
          friction: 0.96,
          gravity: 1,
          particles: 90,
          trace: 3,
          explosion: 6,
          autoresize: true,
          brightness: {
            min: 50,
            max: 80,
            decay: {
              min: 0.015,
              max: 0.03
            }
          },
          boundaries: {
            visible: false
          },
          mouse: {
            click: true,
            move: false,
            max: 1
          }
        }
      })

      const style = {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: 'transparent'
      }
  return (
    <Fireworks style={style} enabled={enabled} options={options}>
    <div
      style={{
        // gap: '6px',
        // padding: '6px',
        // display: 'flex',
        background: '#607d8b'
      }}
    >
    </div>
  </Fireworks>
  )
}
