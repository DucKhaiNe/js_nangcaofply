(function () {
    const header = document.querySelector('h1');
    const toggleColor = () => {
        header.style.color = header.style.color === 'red' ? 'blue' : 'red';
    };
    
    document.body.addEventListener('click', toggleColor);
})();
