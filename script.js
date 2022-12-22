const collection = document.querySelectorAll('.subscription-form-input[type="password"]');


collection.forEach(element => {
    element.addEventListener('change', function () {
        const passEl = document.querySelector('.subscription_new-user_pass-input');
        const confirmPassEl = document.querySelector('.subscription_new-user_confirm-pass-input');
        if (confirmPassEl.value !== passEl.value) {
            collection.forEach(element => {
                element.classList.add('error')
                element.classList.remove('true-value')

            });
        } else {
            collection.forEach(element => {
                element.classList.remove('error')
                element.classList.add('true-value')
            });
        }

        if (!confirmPassEl.value) {
            collection.forEach(element => {
                element.classList.remove('error')
                element.classList.remove('true-value')
            });
        }
    })

});



const starsCollection = document.querySelectorAll('.rating_star_input');

starsCollection.forEach(star => {
    star.addEventListener('change', function () {
        const checkedStarNumber = document.querySelector('.rating_star_input:checked').value || undefined;

        starsCollection.forEach(star => {
            const previousStar = star.previousElementSibling;
            (star.value <= checkedStarNumber) ? previousStar.firstChild.classList.add('active', 'fa-solid')
                : previousStar.firstChild.classList.remove('active', 'fa-solid')
        });
    }
    )
});
