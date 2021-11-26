(function() {
    window.startTime = (new Date()).getTime();
    window.loadTime = (new Date).getTime() - window.startTime;
    window.addEventListener('load', function(){
        document.getElementById('LoadTime').innerHTML = ((new Date).getTime() - window.startTime) + 'ms'
    });
})();
