import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/StartScreen_elImage_847608.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    window.open('https://linkedin.com/in/daniel-parsan-514583180', '_blank');
  
  }
  
  
  onClick_elButton2 = (ev) => {
    window.open('https://tiktok.com/@danmcpierson', '_blank');
  
  }
  
  
  onClick_elButton3 = (ev) => {
    window.open('https://github.com/Parsan80', '_blank');
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elImage = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elText = {
        color: 'black',
        textAlign: 'left',
     };
    const style_elButton = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'Tahoma-Bold', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#0074b8',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        fontSize: 14.2,
        fontFamily: "'SFUIText-Bold', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#1c0211',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton3 = {
        display: 'block',
        fontSize: 15.1,
        fontFamily: "'Tahoma-Bold', sans-serif",
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#232c2e',
     };
    const style_elButton3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='baseFont elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.start_text_1005342}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_880955}
            </Button>
          
          </div>
          
          <div className='elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  onClick={this.onClick_elButton2} >
              {this.props.locStrings.start_button2_207523}
            </Button>
          
          </div>
          
          <div className='elButton3' style={style_elButton3_outer}>
            <Button style={style_elButton3}  onClick={this.onClick_elButton3} >
              {this.props.locStrings.start_button3_161780}
            </Button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elGraphic' />
          </div>
        </div>
      </div>
    )
  }
  

}
