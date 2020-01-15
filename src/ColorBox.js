import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      let newValue = this.props.opacity - 0.1
            <div className="color-box" style={{opacity: 2}}>	    return (this.props.opacity < 0.2? null : (
              {/* your conditional code here! */}	      <div className="color-box" style={{opacity: this.props.opacity}}>
            </div>	        <ColorBox opacity={newValue}/>
           </div>
           )
    )
  }

}
