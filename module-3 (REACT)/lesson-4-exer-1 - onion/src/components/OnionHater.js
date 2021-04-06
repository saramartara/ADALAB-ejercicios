import React from 'react';

class OnionHater extends React.Component {
  render() {
    const keyUpTextArea = (ev) => {
      if (ev.target.value.includes('cebolla')) {
        alert('ODIO LA CEBOLLA.');
      }
    };

    const alertTextArea = <textarea onKeyUp={keyUpTextArea}></textarea>;
    return { alertTextArea };
  }
}

export default OnionHater;

//

// keyUpTextArea (ev) {
//   if ((ev.target.value).includes('cebolla')) {
//     alert('ODIO LA CEBOLLA.');
//   };
// }
