const cards = {
    recommended: [
        {
            title: 'GraphQL: introduction to graphQL for beginners',
            img: "assets/course-graphql.jpg",
            duration: '2h 40m',
            level: 'Advance',
            stars: 2,
            totalVotes: 1500,
            price: '$550',
            oldPrice: "$600",
            authorPic: "assets/avatar-5.jpg",
            author: 'Brooklyn Simmons'
        },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: 'assets/course-javascript.jpg',
            duration: '4h 10m',
            level: 'Advance',
            stars: 3,
            totalVotes: 7500,
            price: '$700',
            oldPrice: "$850",
            authorPic: "assets/avatar-1.jpg",
            author: 'Jenny Wilson'
        },
        {
            title: 'Beginner Node.js, Express & MongoDB Development',
            img: 'assets/course-node.jpg',
            duration: '2h 00m',
            level: 'Intermediate',
            stars: 4,
            totalVotes: 15700,
            price: '$800',
            oldPrice: "$950",
            authorPic: "assets/avatar-3.jpg",
            author: 'Sina Ray'
        },
        {
            title: 'Laravel: The Ultimate Beginner\'s Guide to Learn',
            img: 'assets/course-laravel.jpg',
            duration: '1h 00m',
            level: 'Beginner',
            stars: 5,
            totalVotes: 2500,
            price: '$170',
            oldPrice: "$220",
            authorPic: "assets/avatar-7.jpg",
            author: 'Sobo Rikhan'
        }
    ],
    mostPopular: [
        {
            title: 'HTML Full Course - Build a Website Tutorial',
            img: 'assets/course-html.jpg',
            duration: '3h 16m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            oldPrice: "$700",
            authorPic: "assets/avatar-6.jpg",
            author: 'Miston Wilson'
        },
        {
            title: 'A complete beginner\'s guide to JavaScript',
            img: 'assets/course-javascript.jpg',
            duration: '4h 10m',
            level: 'Advance',
            stars: 3,
            totalVotes: 7500,
            price: '$700',
            oldPrice: "$850",
            authorPic: "assets/avatar-1.jpg",
            author: 'Jenny Wilson'
        },
        {
            title: 'Beginner Node.js, Express & MongoDB Development',
            img: 'assets/course-node.jpg',
            duration: '2h 00m',
            level: 'Intermediate',
            stars: 4,
            totalVotes: 15700,
            price: '$800',
            oldPrice: "$950",
            authorPic: "assets/avatar-3.jpg",
            author: 'Sina Ray'
        },
        {
            title: 'How to easily create a website with React',
            img: 'assets/course-react.jpg',
            duration: '3h 55m',
            level: 'Advance',
            stars: 4,
            totalVotes: 1500,
            price: '$600',
            oldPrice: "$750",
            authorPic: "assets/avatar-2.jpg",
            author: 'April Noms'
        }
    ],
    trending: [
        {
            title: 'Revolutionize how you build the web',
            img: 'assets/course-gatsby.jpg',
            duration: '1h 46m',
            level: 'Intermediate',
            stars: 2,
            totalVotes: 16500,
            price: '$800',
            oldPrice: "$850",
            authorPic: "assets/avatar-3.jpg",
            author: 'Jenny Wilson'
        },
        {
            title: 'HTML Full Course - Build a Website Tutorial',
            img: 'assets/course-html.jpg',
            duration: '3h 16m',
            level: 'Beginner',
            stars: 3,
            totalVotes: 1600,
            price: '$550',
            oldPrice: "$700",
            authorPic: "assets/avatar-6.jpg",
            author: 'Miston Wilson'
        },
        {
            title: 'Beginner Node.js, Express & MongoDB Development',
            img: 'assets/course-node.jpg',
            duration: '2h 00m',
            level: 'Intermediate',
            stars: 4,
            totalVotes: 15700,
            price: '$800',
            oldPrice: "$950",
            authorPic: "assets/avatar-3.jpg",
            author: 'Sina Ray'
        },
        {
            title: 'Laravel: The Ultimate Beginner\'s Guide to Learn',
            img: 'assets/course-laravel.jpg',
            duration: '1h 00m',
            level: 'Beginner',
            stars: 5,
            totalVotes: 2500,
            price: '$170',
            oldPrice: "$220",
            authorPic: "assets/avatar-7.jpg",
            author: 'Sobo Rikhan'
        }
    ]
}

const recommendedContainer = document.getElementById("recommended");
const popularContainer = document.getElementById("popular");
const trendingContainer = document.getElementById("trending");

const createCard = (card, container) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "col-6 col-md-3");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card h-100");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.src = card.img;

    cardDiv.appendChild(cardImg);

    createCardBody(card, cardDiv);

    createCardFooter(card, cardDiv);

    cardWrapper.append(cardDiv);
    container.appendChild(cardWrapper);
}

const createCardBody = (card, container) => {
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = card.title;

    const cardData = document.createElement("div");
    cardData.setAttribute("class", "d-flex justify-content-start align-items-center gap-3");

    createCardData(card, cardData);

    const cardVote = document.createElement("div");
    cardVote.setAttribute("class", "d-flex justify-content-start align-items-center gap-2");

    createCardReviews(card, cardVote);

    const cardPriceContainer = document.createElement("div");
    cardPriceContainer.setAttribute("class", "mt-3 d-flex align-items-center gap-3");

    createCardPrice(card, cardPriceContainer);

    cardBody.append(cardTitle, cardData, cardVote, cardPriceContainer);
    container.appendChild(cardBody);
}

const createCardData = (card, container) => {
    const cardDuration = document.createElement("div");
    cardDuration.setAttribute("class", "d-flex justify-content-start align-items-center gap-1");
    cardDuration.innerHTML = `<i class="bi bi-clock"></i><p class="m-0">${card.duration}</p>`;

    const cardDifficulty = document.createElement("div");
    cardDifficulty.setAttribute("class", "d-flex justify-content-start align-items-center gap-1");
    cardDifficulty.innerHTML = `<i class="bi bi-bar-chart"></i><p class="m-0">${card.level}</p>`;

    container.append(cardDuration, cardDifficulty);
}

const createCardReviews = (card, container) => {
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

    container.append(cardRating, cardRatingNumber, cardReviews);
}

const createCardPrice = (card, container) => {
    const cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-text fw-bold mb-0");
    cardPrice.innerText = card.price;

    const cardOldPrice = document.createElement("p");
    cardOldPrice.setAttribute("class", "card-text description text-decoration-line-through");
    cardOldPrice.innerText = card.oldPrice;

    container.append(cardPrice, cardOldPrice);
}

const createCardFooter = (card, container) => {
    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer d-flex justify-content-between align-items-center");

    const cardAuthorContainer = document.createElement("div");
    cardAuthorContainer.setAttribute("class", "d-flex align-items-center gap-2");

    const cardAuthorPic = document.createElement("img");
    cardAuthorPic.setAttribute("class", "avatar");
    cardAuthorPic.src = card.authorPic;

    const cardAuthor = document.createElement("div");
    cardAuthor.setAttribute("class", "description");
    cardAuthor.innerText = card.author;

    const cardBookmark = document.createElement("div");
    cardBookmark.setAttribute("class", "bookmark position-relative");
    cardBookmark.innerHTML = `<i class="bi bi-bookmark"></i><i class="bi bi-bookmark-fill"></i>`

    cardAuthorContainer.append(cardAuthorPic, cardAuthor);
    cardFooter.append(cardAuthorContainer, cardBookmark);
    container.appendChild(cardFooter);
}

cards.recommended.forEach(card => {
    createCard(card, recommendedContainer);
});

cards.mostPopular.forEach(card => {
    createCard(card, popularContainer);
})

cards.trending.forEach(card => {
    createCard(card, trendingContainer);
})