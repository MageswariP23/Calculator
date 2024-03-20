function addition()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var Result=a+b;
    document.getElementById("n3").value=Result;
}
function subtraction()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var Result=a-b;
    document.getElementById("n3").value=Result;
}
function multiple()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var Result=a * b;
    document.getElementById("n3").value=Result;
}

function division()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var Result=a/b;
    document.getElementById("n3").value=Result;
}