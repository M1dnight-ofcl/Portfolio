let root = document.documentElement;

if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: light)').matches) {
  var theme = 'light'
  console.log('light mode has been detected')
  root.style.setProperty('--bgClr', '#c5cace');
  root.style.setProperty('--bgClr2', '#fafdff');
  root.style.setProperty('--btnClr', '#728295');
  root.style.setProperty('--txtClr', '#23252a');
  console.log('color variables have been altered to match')
}
if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  var theme = 'dark'
  console.log('dark mode has been detected')
  console.log('no color alteration required')
}
console.log('theme detection has run, theme is set to ' + theme)