// script.js

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.radio-option');
    const resetButton = document.getElementById('resetButton');
    const radios = document.querySelectorAll('input[type="radio"]');

    function updateRadioState() {
        options.forEach(option => option.classList.remove('disabled'));
    }

    options.forEach(option => {
        option.addEventListener('click', function () {
            updateRadioState();
            options.forEach(opt => {
                if (opt !== option) {
                    opt.classList.add('disabled');
                }
            });
        });
    });

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            updateRadioState();
        });
    });

    resetButton.addEventListener('click', function () {
        radios.forEach(radio => radio.checked = false); // Uncheck all radios
        updateRadioState(); // Get things back to normal
    });
});

//Desktop
function GoogleSearch() {
    var searchText = document.getElementById('searchInputBox').value;
    if (searchText == null) {
        return false;
    } else {
        var link = "http://www.maryland.gov/pages/search.aspx?q=\"" + searchText + "\"&site=ugglyla9k1c&name=Education";
        window.open(link, "_self");
        return false;
    }
}

//Mobile
function GoogleSearchMobile() {
    var searchText = document.getElementById('searchInputBoxMobile').value;
    if (searchText == null) {
        return false;
    } else {
        var link = "http://www.maryland.gov/pages/search.aspx?q=\"" + searchText + "\"&site=ugglyla9k1c&name=Education";

        window.open(link, "_self");
        return false;
    }
}

function onEnter(e) {
    if (e.keyCode == 13) {
        GoogleSearch();
        console.log("key press is invalid");
        return false;
    } else {
        return true;
    }
}