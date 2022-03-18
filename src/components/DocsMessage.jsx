
import React from "react";

import variables from '../../variables'


const Highlight = ({children}) => (
  <div
    style={{
      backgroundColor: 'rgba(255,255,255, .1)',
      borderRadius: 4,
      color: '#fff',
      padding: '1.2rem',
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
    }}>
      {children}
  </div>
);

function DocsMessage() {

  return (
    <Highlight>
      <img src="/img/icon_heart.svg"
        style={{
          width: 30,
          height: 30,
          marginRight: 20,
        }}
      />
      Tell us
      &nbsp;
      <a target="_blank" rel="noopener noreferrer" href={`${variables.repo.issues}/new`}>how to improve</a>
      &nbsp;
      MetaEditor
    </Highlight>
  );
}



export default DocsMessage
