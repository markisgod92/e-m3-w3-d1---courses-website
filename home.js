const cards = {
    recommended: [{
            title: 'HTML full course - Build a Website Tutorial',
            img: 'assets/course-html.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            authos: 'Miston Wilson'
        },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: 'assets/course-javascript.jpg',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            authos: 'Miston Wilson'
        },
        {
            title: 'How to create a complete site in React',
            img: 'assets/course-react.jpg',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            authos: 'Miston Wilson'
        },
    ],
    mostPopular: [{
            title: 'HTML full course - Build a Website Tutorial',
            img: 'assets/course-html.jpg',
            duration: '4h 16 m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            authos: 'Miston Wilson'
        },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: 'assets/course-javascript.jpg',
            duration: '3h 16 m',
            level: 'Advance',
            stars: 4,
            totalVotes: 7500,
            price: '$550',
            authos: 'Miston Wilson'
        },
    ]
}

const recommendedContainer = document.getElementById("recommended");
const popularContainer = document.getElementById("popular");

const createCard = (card) => {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "col-6 col-md-3");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card h-100");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.src = card.img;

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = card.title;

    const cardData = document.createElement("div");
    cardData.setAttribute("class", "d-flex justify-content-start align-items-center gap-3");

    const cardDuration = document.createElement("div");
    cardDuration.setAttribute("class", "d-flex justify-content-start align-items-center gap-1");
    cardDuration.innerHTML = `<i class="bi bi-clock"></i><p class="m-0">${card.duration}</p>`;

    const cardDifficulty = document.createElement("div");
    cardDifficulty.setAttribute("class", "d-flex justify-content-start align-items-center gap-1");
    cardDifficulty.innerHTML = `<i class="bi bi-bar-chart"></i><p class="m-0">${card.level}</p>`;

    const cardVote = document.createElement("div");
    cardVote.setAttribute("class", "d-flex justify-content-start align-items-center gap-2");

    const cardRating = document.createElement("div");
    cardRating.setAttribute("class", "text-warning");
    for (i = 1; i <= card.stars; i++) {
        cardRating.innerHTML += `<i class="bi bi-star-fill"></i>`
    };
    if (card.stars < 5) {
        for (i = 1; i <= 5 - card.stars; i++) {
            cardRating.innerHTML += `<i class="bi bi-star"></i>`
        }
    };

    const cardRatingNumber = document.createElement("p");
    cardRatingNumber.setAttribute("class", "m-0 description text-warning fw-bold");
    cardRatingNumber.innerText = card.stars;

    const cardReviews = document.createElement("p");
    cardReviews.setAttribute("class", "m-0 description");
    cardReviews.innerText = `(${card.totalVotes})`;

    const cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-text fw-bold py-3");
    cardPrice.innerText = card.price;

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer d-flex justify-content-between align-items-center");
    cardFooter.innerHTML = `<p class="m-0 description">${card.authos}</p><i class="bi bi-bookmark"></i>`;

    cardData.append(cardDuration, cardDifficulty);
    cardVote.append(cardRating, cardRatingNumber, cardReviews);
    cardBody.append(cardTitle, cardData, cardVote, cardPrice);
    cardDiv.append(cardImg, cardBody, cardFooter);
    cardContainer.append(cardDiv);

    return cardContainer;
}

cards.recommended.forEach(card => {
    recommendedContainer.appendChild(createCard(card));
})

cards.mostPopular.forEach(card => {
    popularContainer.appendChild(createCard(card));
})