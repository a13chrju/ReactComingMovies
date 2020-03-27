import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from "./modal.module.css";
import moment from 'moment'


class Modalpopup extends React.Component  {
    constructor(props) {
      super(props)
    
      this.state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
      }
      this.closeMovie = this.closeMovie.bind(this);
    }
    
    closeMovie(){
      this.props.dispatch({ type: "CLOSE_MODAL" });
    }

    componentDidMount(){
     
  this.interval = setInterval(() => {
        var timeTillDate = this.props.item.release;


        


        const then = moment(timeTillDate  , "YYYY/MM/DD");
        const now = moment(new Date(), "YYYY/MM/DD");

        
        var delta = Math.abs(then - now) / 1000;

  
        // calculate (and subtract) whole days
        var dayss = Math.floor(delta / 86400);
        delta -= dayss * 86400;

        // calculate (and subtract) whole hours
        var hourss = Math.floor(delta / 3600) % 24;
        delta -= hourss * 3600;

        // calculate (and subtract) whole minutes
        var minutess = Math.floor(delta / 60) % 60;
        delta -= minutess * 60;

        // what's left is seconds
        var secondss = Math.floor(delta % 60);  
      
        const days = dayss;
        const hours = hourss;
        const minutes = minutess;
        const seconds = secondss;
        this.setState({ days, hours, minutes, seconds });
      }, 1000);
    }
  
    componentWillUnmount() {
      if (this.interval) {
          clearInterval(this.interval);
      }
    }

    render() {
     
        const isdisplayable = this.props.testa ? "block" : "none";
        const { days, hours, minutes, seconds } = this.state;
        return (
          <div>
            <div className={styles.root} style={{display: isdisplayable}}>
              <div className={styles.menubar}>
                  <div>
                    <h2 className={styles.title}>{this.props.item.title}</h2>
                  </div>
                  <button className={styles.exit} onClick={this.closeMovie}>&#10060;</button>
              </div>
              <div className={styles.content}>
                  <span className={styles.undertext}>Days until release: {this.props.item.release}</span>
                  <div className='countdown-wrapper'>
                    {days && (
                      <div className='countdown-item'>
                      
                        <span className={styles.countdownItemNumber}>{days} </span>
                        <span>days</span>
                      </div>
                    )}
                    {hours && (
                      <div className='countdown-item'>							
                      
                      <span className={styles.countdownItemNumber}>{hours} </span>
                        <span>hours</span>
                      </div>
                    )}
                    {minutes && (
                      <div className='countdown-item'>
                      
                      <span className={styles.countdownItemNumber}>{minutes} </span>
                        <span>minutes</span>
                      </div>
                    )}
                    {seconds && (
                      <div className='countdown-item'>
                      
                      <span className={styles.countdownItemNumber}>{seconds} </span>
                        <span>seconds</span>
                      </div>
                    )}
                  </div>
              </div>
            </div>
            <div className={styles.blackbg} style={{display: isdisplayable}}></div>
          </div>
        );
      }
}


  function mapStateToProps(state) {
    return {
      testa: state.visibles,
      item: state.modalitem
    };
  }

export default connect(mapStateToProps)(Modalpopup)
