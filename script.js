document.addEventListener("DOMContentLoaded", function () {
    const middleDiv = document.getElementById('middle');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const clearButton = document.getElementById('clear');
    const errorDiv = document.getElementById('error');
    errorDiv.style.color="red";
    errorDiv.style.margin = "25px";
    let count = 0;

    function updateCounter() {
        middleDiv.textContent = `Your Current Count: ${count}`;
        if (count === 0) {
            decrementButton.disabled = true;
            clearButton.classList.add('hide');
            errorDiv.classList.remove('hide');
        } else {
            decrementButton.disabled = false;
            clearButton.classList.remove('hide');
            errorDiv.classList.add('hide');
        }
    }

    incrementButton.addEventListener('click', function () {
        count++;
        updateCounter();
    });

    decrementButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCounter();
            errorDiv.classList.add('hide');
        } else {
            errorDiv.classList.remove('hide');
        }
    });

    clearButton.addEventListener('click', function () {
        count = 0;
        updateCounter();
    });

    updateCounter();
});