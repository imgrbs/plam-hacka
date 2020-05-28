import React from 'react';
import logo from './plam.jpg';
import './App.css';

class App extends React.Component {

  state = {
    timeLeft: 'สวัสดี',
  }

  componentDidMount = () => {
    const component = this;
    let countDownDate = new Date("May 29, 2020 14:00:00").getTime();
    let countDown = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      component.setState({
        timeLeft: `เหลือ ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`
      })
      if (distance < 0) {
        clearInterval(countDown);
        component.setState({
          timeLeft: "RELESE THE KRAKEN !"
        })
      }
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ปล่อยปามสู่ป่า</h1>
          <h1>
            {this.state.timeLeft}
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
