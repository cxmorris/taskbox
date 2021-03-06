import React, {Fragment} from 'react';
import './App.css';

function Colorlist(props)
{
  const openColorPrompt = () =>
  {
    document.getElementById("color-prompt-container").style.display = "block";
  }
  
  /*improveContrast = (hexcolor) =>
  {
    var r = parseInt(hexcolor.substr(1,2),16);
    var g = parseInt(hexcolor.substr(3,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    // Return new color if to dark, else return the original
    return (yiq < 40) ? 'white' : 'black';
  }*/
  
  const colorList = props.colorTagsList.map((color, index) => <div className="color-square" style={{backgroundColor: color.hexcode}} onClick={() => props.changeColor(index)}><div>{color.title}</div></div>);
                                            
  return(
    <div className="color-list">
      <Fragment>
        {colorList}
      </Fragment>
      <div className="tag-settings" onClick={openColorPrompt}>&#9881;
      </div>
    </div>
  )
}

function Actionmenu(props) {
  return (
    <div className="action-menu">
      <div id="shift-backward"><div>&#xab;</div></div>
      <div id="shift-forward" onClick={props.shiftForward}><div>&#187;</div></div>
      <div id="carry-over" onClick={props.carryOver}><div>&#8631;</div></div>
    </div>
  )
}

export default Colorlist; 