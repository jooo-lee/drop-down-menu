const dropDownMenu = function (...options) {
    const dropDownMenu = document.createElement('nav');
    dropDownMenu.classList.add('drop-down-menu');

    const dropDownButton = document.createElement('button');
    dropDownButton.textContent = 'Click me!';
    dropDownButton.classList.add('drop-down-button');
    dropDownMenu.appendChild(dropDownButton);

    options.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('drop-down-option');
        li.style.display = 'none';
        dropDownMenu.appendChild(li);
    });

    dropDownButton.addEventListener('click', () => {
        Array.from(document.getElementsByClassName('drop-down-option')).forEach(
            (li) =>
                (li.style.display =
                    li.style.display === 'none' ? 'list-item' : 'none')
        );
    });

    return dropDownMenu;
};

export default dropDownMenu;
