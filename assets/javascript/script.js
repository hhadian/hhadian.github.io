if ('addEventListener' in window) 
	{
		window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
		document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
	}

function Mouseon(obj)
{
	obj.style.opacity = 1;

}
function Mouseout(obj)
{
	obj.style.opacity = 0.5;
}
function Intial()
{
	document.body.style.backgroundImage = "linear-gradient(45deg,"+RandomColor()+" 1%,"+RandomColor()+")";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "300% 300%";
	
}
function RandomColor() {
  var HexArr = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++)
  {
    color += HexArr[Math.floor(Math.random() * 16)];
  }
  return color;
}