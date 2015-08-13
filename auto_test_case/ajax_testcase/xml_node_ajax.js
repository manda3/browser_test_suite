function loadXMLDoc(dname) {
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            }
            else {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.open("GET", dname, false);
            xhttp.send("");
            return xhttp.responseXML;
        }
function get_firstchild(n)
{
var x=n.firstChild;
while (x.nodeType!=1)
{
x=x.nextSibling;
}
return x;
}

function get_lastchild(n)
{
var x=n.lastChild;
while (x.nodeType!=1)
  {
  x=x.previousSibling;
  }
return x;
}

function get_previoussibling(n)
{
var x=n.previousSibling;
while (x.nodeType!=1)
  {
  x=x.previousSibling;
  }
return x;
}

function get_nextsibling(n)
  {
  var x=n.nextSibling;
  while (x.nodeType!=1)
   {
   x=x.nextSibling;
   }
  return x;
  }