const dropDownMenu = function (...options) {
    const dropDownMenu = document.createElement('nav');

    const button = document.createElement('button');
    button.textContent = 'Click me!';
    dropDownMenu.appendChild(button);

    options.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('drop-down-option');
        li.style.display = 'none';
        dropDownMenu.appendChild(li);
    });

    button.addEventListener('click', () => {
        Array.from(document.getElementsByClassName('drop-down-option')).forEach(
            (li) =>
                (li.style.display =
                    li.style.display === 'none' ? 'list-item' : 'none')
        );
    });

    return dropDownMenu;
};

export default dropDownMenu;
