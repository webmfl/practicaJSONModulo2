
let html = document.querySelector('html');

let panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

var JSONObj = { "nombrelibro":"El hacedor", "precio":500 };

let msg = document.createElement('p');
msg.textContent = JSONObj.nombrelibro + " | " + JSONObj.precio;
panel.appendChild(msg);

let closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
  panel.parentNode.removeChild(panel);
}