let h1 = React.createElement('h1',null,'This is H1')
let h2 = React.createElement('h2',null,'This is H2')

let div  = React.createElement('div', {id:'h1'}, [h1,h2]);

let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(div)