document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('KgOutput').innerHTML = lbs/2.2046;
    document.getElementById('OzOutput').innerHTML = lbs*16;
});