// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// generate OTP
function generateOtp() {
  const x = '0123456789';
  const otp = [];
  for (let i = 0; i < 5; i++) {
    let randomNub = Math.floor(Math.random() * x.length);
    otp.push(x[randomNub]);
  }
  console.log(otp.join(''));
  return otp.join('');
}

generateOtp();
generateOtp();
generateOtp();
