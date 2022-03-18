
import React from "react";


function Button({label, href, ...props}) {

  return (
    <a href={href} style={{
      display: 'inline-block',
      padding: '1.2rem',
      fontSize: '1rem',
      borderRadius: 4,
      backgroundColor: 'var(--ifm-color-primary)',
      fontWeight: 600,
      border: `solid 2px rgba(255,255,255, .2)`,
      textTransform: 'uppercase',
      boxShadow: `2px 2px 4px 0px rgba(0,0,0,0.45)`,
      cursor: 'pointer',
      margin: '10px 0',
      color: '#ffffff',
      textDecoration: 'none',
    }}>
      {label}
    </a>
  );
}



export default Button
