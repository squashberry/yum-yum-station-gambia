/* =========================================================
   FAJARA GARDEN APP
========================================================= */


/* =========================================================
   MENU DATA
========================================================= */

const menuData = [

    {
        id: 1,
        name: "Garden Grill",
        description: "Chef's grilled selection served with fresh sides.",
        price: 420,
        category: "Food",
        meals: [
            "lunch",
            "dinner"
        ],
        tags: [
            "grilled",
            "filling",
            "savory"
        ],
        image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 2,
        name: "Garden Special",
        description: "One of our signature house selections.",
        price: 350,
        category: "Food",
        meals: [
            "lunch",
            "dinner"
        ],
        tags: [
            "special",
            "filling",
            "savory",
            "house favorite"
        ],
        image:
            "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 3,
        name: "Fresh Garden Bowl",
        description: "Fresh vegetables, flavourful toppings and dressing.",
        price: 290,
        category: "Food",
        meals: [
            "breakfast",
            "lunch",
            "dinner"
        ],
        tags: [
            "fresh",
            "light",
            "healthy",
            "vegetables"
        ],
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 4,
        name: "Grilled Chicken",
        description: "Tender grilled chicken with a smoky finish.",
        price: 380,
        category: "Food",
        meals: [
            "lunch",
            "dinner"
        ],
        tags: [
            "grilled",
            "chicken",
            "filling",
            "savory"
        ],
        image:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 5,
        name: "Garden Fresh Juice",
        description: "Cold, fresh and made for a hot afternoon.",
        price: 110,
        category: "Drinks",
        meals: [
            "breakfast",
            "lunch",
            "dinner"
        ],
        tags: [
            "fresh",
            "light",
            "juice",
            "cold"
        ],
        image:
            "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 6,
        name: "Garden Mojito",
        description: "Fresh mint, citrus and a refreshing finish.",
        price: 150,
        category: "Drinks",
        meals: [
            "lunch",
            "dinner"
        ],
        tags: [
            "fresh",
            "refreshing",
            "citrus",
            "cold"
        ],
        image:
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 7,
        name: "Iced Coffee",
        description: "Smooth coffee served chilled.",
        price: 125,
        category: "Drinks",
        meals: [
            "breakfast",
            "lunch"
        ],
        tags: [
            "coffee",
            "morning",
            "cold",
            "light"
        ],
        image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 8,
        name: "Garden Dessert",
        description: "A sweet finish for your meal.",
        price: 180,
        category: "Desserts",
        meals: [
            "lunch",
            "dinner"
        ],
        tags: [
            "sweet",
            "dessert",
            "treat"
        ],
        image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 9,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with a soft centre.",
        price: 160,
        category: "Desserts",
        meals: [
            "breakfast",
            "lunch",
            "dinner"
        ],
        tags: [
            "sweet",
            "chocolate",
            "dessert",
            "cake"
        ],
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85"
    },

    {
        id: 10,
        name: "Vanilla Cheesecake",
        description: "Creamy cheesecake with a smooth finish.",
        price: 190,
        category: "Desserts",
        meals: [
            "lunch",
            "dinner"
        ],
        tags: [
            "sweet",
            "cheesecake",
            "dessert",
            "creamy"
        ],
        image:
            "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85"
    }

];


/* =========================================================
   DOM
========================================================= */

const splashScreen =
    document.getElementById("splash-screen");

const app =
    document.getElementById("app");

const pages =
    document.querySelectorAll(".page");

const tabs =
    document.querySelectorAll(".tab-item");

const homeBackButton =
    document.getElementById("home-back-btn");

const homeSearch =
    document.getElementById("home-search");

const menuItemsContainer =
    document.getElementById("menu-items");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toast-message");

const homePage =
    document.getElementById("home-page");

const floatingSearch =
    document.querySelector(
        "#home-page .floating-search"
    );

const tabIndicator =
    document.querySelector(
        ".tab-indicator"
    );

const floatingActions =
    document.getElementById(
        "floating-actions"
    );

const floatingAIButton =
    document.getElementById(
        "floating-ai-button"
    );

const floatingCallButton =
    document.getElementById(
        "floating-call-button"
    );

const homeCallAction =
    document.getElementById(
        "home-call-action"
    );


/* =========================================================
   GARDEN AI DOM
========================================================= */

const gardenAIOverlay =
    document.getElementById(
        "garden-ai-overlay"
    );

const gardenAIIntro =
    document.getElementById(
        "garden-ai-intro"
    );

const gardenAIChat =
    document.getElementById(
        "garden-ai-chat"
    );

const gardenAITitle =
    document.getElementById(
        "garden-ai-title"
    );

const gardenAIDescription =
    document.getElementById(
        "garden-ai-description"
    );

const gardenAIMessages =
    document.getElementById(
        "garden-ai-messages"
    );

const gardenAISuggestions =
    document.getElementById(
        "garden-ai-suggestions"
    );

const gardenAIInput =
    document.getElementById(
        "garden-ai-input"
    );

const gardenAISend =
    document.getElementById(
        "garden-ai-send"
    );

const startGardenAI =
    document.getElementById(
        "start-garden-ai"
    );

const closeGardenAIButton =
    document.getElementById(
        "close-garden-ai"
    );

const closeGardenAIIntro =
    document.getElementById(
        "close-garden-ai-intro"
    );


/* =========================================================
   APP STATE
========================================================= */

let currentPage = "home";

let previousPage = "home";

let currentMenuCategory = "All";

let order = [];

let gardenAIState = {
    meal: "",
    appetite: "",
    drink: "",
    preference: "",
    step: 0,
    selectedItems: []
};

let toastTimer = null;


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderIcons();

        renderMenu();

        renderOrder();

        setupNavigation();

        setupSearch();

        setupMenuTabs();

        setupFavorites();

        setupGardenAI();

        setupReservation();

        setupStickySearch();

        setupFloatingActions();

        setupDemoSaleBanner();

        updateTabIndicator(
            currentPage
        );

        preloadImages();


        /*
         * Splash screen
         */

        setTimeout(
            () => {

                if (splashScreen) {

                    splashScreen.classList.add(
                        "hidden"
                    );

                }

                if (app) {

                    app.classList.remove(
                        "hidden"
                    );

                }

            },
            1900
        );


        /*
         * Auto-open Garden AI once
         */

        setTimeout(
            () => {

                const hasSeenGardenAI =
                    sessionStorage.getItem(
                        "fajara-garden-ai-seen"
                    );


                if (!hasSeenGardenAI) {

                    openGardenAI();

                    sessionStorage.setItem(
                        "fajara-garden-ai-seen",
                        "true"
                    );

                }

            },
            4500
        );

    }
);


/* =========================================================
   ICONS
========================================================= */

function renderIcons() {

    if (
        typeof lucide !==
        "undefined"
    ) {

        lucide.createIcons();

    }

}


/* =========================================================
   IMAGE PRELOADING
========================================================= */

function preloadImages() {

    const priorityImages = [
        document.querySelector(
            ".hero-image img"
        ),
        ...document.querySelectorAll(
            ".featured-scroll img"
        )
    ].filter(Boolean);


    priorityImages.forEach(
        (image) => {

            preloadImage(
                image.src
            );

        }
    );


    setTimeout(
        () => {

            menuData.forEach(
                (item) => {

                    preloadImage(
                        item.image
                    );

                }
            );

        },
        1200
    );

}


function preloadImage(
    src
) {

    if (!src) {
        return;
    }


    const image =
        new Image();


    image.decoding =
        "async";


    image.src =
        src;

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    document
        .querySelectorAll(
            "[data-page]"
        )
        .forEach(
            (element) => {

                if (
                    element.dataset
                        .navigationBound ===
                    "true"
                ) {

                    return;

                }


                element.dataset
                    .navigationBound =
                    "true";


                element.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();

                        const page =
                            element.dataset.page;


                        if (!page) {
                            return;
                        }


                        navigateTo(
                            page
                        );

                    }
                );

            }
        );


    if (homeBackButton) {

        homeBackButton.addEventListener(
            "click",
            () => {

                navigateTo(
                    previousPage ||
                    "home"
                );

            }
        );

    }

}


/* =========================================================
   DYNAMIC PAGE BUTTONS
========================================================= */

function setupDynamicPageButtons() {

    document
        .querySelectorAll(
            "[data-page]"
        )
        .forEach(
            (button) => {

                if (
                    button.dataset
                        .navigationBound ===
                    "true"
                ) {

                    return;

                }


                button.dataset
                    .navigationBound =
                    "true";


                button.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();

                        navigateTo(
                            button.dataset
                                .page
                        );

                    }
                );

            }
        );

}


/* =========================================================
   NAVIGATE
========================================================= */

function navigateTo(
    pageName
) {

    if (!pageName) {
        return;
    }


    if (
        pageName ===
        currentPage
    ) {

        return;

    }


    previousPage =
        currentPage;


    currentPage =
        pageName;


    pages.forEach(
        (page) => {

            page.classList.remove(
                "active"
            );

        }
    );


    const targetPage =
        document.getElementById(
            `${pageName}-page`
        );


    if (targetPage) {

        targetPage.classList.add(
            "active"
        );

        targetPage.scrollTop =
            0;

    }


    tabs.forEach(
        (tab) => {

            tab.classList.toggle(
                "active",
                tab.dataset.page ===
                    pageName
            );

        }
    );


    updateTabIndicator(
        pageName
    );


    if (homeBackButton) {

        homeBackButton.classList.toggle(
            "hidden",
            pageName === "home"
        );

    }


    updateFloatingActions();

}


/* =========================================================
   SLIDING TAB INDICATOR
========================================================= */

function updateTabIndicator(
    pageName
) {

    if (!tabIndicator) {
        return;
    }


    const tab =
        document.querySelector(
            `.tab-item[data-page="${pageName}"]`
        );


    if (!tab) {
        return;
    }


    const index =
        Array.from(tabs).indexOf(
            tab
        );


    tabIndicator.style.transform =
        `translateX(${index * 100}%)`;

}


/* =========================================================
   MENU TABS
========================================================= */

function setupMenuTabs() {

    const menuTabs =
        document.querySelectorAll(
            ".menu-tab"
        );


    menuTabs.forEach(
        (tab) => {

            tab.addEventListener(
                "click",
                () => {

                    menuTabs.forEach(
                        (item) => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    tab.classList.add(
                        "active"
                    );


                    currentMenuCategory =
                        tab.dataset
                            .menuCategory;


                    renderMenu();

                }
            );

        }
    );


    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(
            (category) => {

                category.addEventListener(
                    "click",
                    () => {

                        const categoryName =
                            category.dataset
                                .category;


                        currentMenuCategory =
                            categoryName;


                        navigateTo(
                            "menu"
                        );


                        setTimeout(
                            () => {

                                const menuTab =
                                    document.querySelector(
                                        `[data-menu-category="${categoryName}"]`
                                    );


                                if (menuTab) {

                                    document
                                        .querySelectorAll(
                                            ".menu-tab"
                                        )
                                        .forEach(
                                            (tab) => {

                                                tab.classList.remove(
                                                    "active"
                                                );

                                            }
                                        );


                                    menuTab.classList.add(
                                        "active"
                                    );

                                }


                                renderMenu();

                            },
                            80
                        );

                    }
                );

            }
        );

}


/* =========================================================
   RENDER MENU
========================================================= */

function renderMenu() {

    if (!menuItemsContainer) {
        return;
    }


    let filteredItems =
        [...menuData];


    if (
        currentMenuCategory !==
        "All"
    ) {

        filteredItems =
            filteredItems.filter(
                (item) =>
                    item.category ===
                    currentMenuCategory
            );

    }


    const searchTerm =
        homeSearch
            ? homeSearch.value
                .trim()
                .toLowerCase()
            : "";


    if (searchTerm) {

        filteredItems =
            filteredItems.filter(
                (item) => {

                    const searchableText = `
                        ${item.name}
                        ${item.description}
                        ${item.category}
                        ${item.tags.join(" ")}
                    `.toLowerCase();


                    return searchableText.includes(
                        searchTerm
                    );

                }
            );

    }


    menuItemsContainer.innerHTML =
        "";


    if (
        !filteredItems.length
    ) {

        menuItemsContainer.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">

                    <i data-lucide="search-x"></i>

                </div>

                <h3>
                    No dishes found
                </h3>

                <p>
                    Try another food, drink or dessert.
                </p>

            </div>

        `;


        renderIcons();

        return;

    }


    filteredItems.forEach(
        (item) => {

            const menuItem =
                document.createElement(
                    "article"
                );


            menuItem.className =
                "menu-item";


            menuItem.dataset.menuItemId =
                item.id;


            menuItem.innerHTML = `

                <div class="menu-item-image">

                    <img
                        src="${item.image}"
                        alt="${escapeHtml(item.name)}"
                        loading="lazy"
                        decoding="async"
                    />

                </div>

                <div class="menu-item-content">

                    <div class="menu-item-top">

                        <div>

                            <h3>
                                ${escapeHtml(item.name)}
                            </h3>

                            <p>
                                ${escapeHtml(item.description)}
                            </p>

                        </div>

                        <span class="menu-item-price">
                            D${item.price}
                        </span>

                    </div>

                    <button
                        type="button"
                        class="add-button"
                        data-add-id="${item.id}"
                    >

                        <i data-lucide="plus"></i>

                        Add to order

                    </button>

                </div>

            `;


            menuItemsContainer.appendChild(
                menuItem
            );

        }
    );


    renderIcons();

    setupAddButtons();

}


/* =========================================================
   ADD TO ORDER
========================================================= */

function setupAddButtons() {

    document
        .querySelectorAll(
            "[data-add-id]"
        )
        .forEach(
            (button) => {

                if (
                    button.dataset
                        .orderBound ===
                    "true"
                ) {

                    return;

                }


                button.dataset
                    .orderBound =
                    "true";


                button.addEventListener(
                    "click",
                    () => {

                        const itemId =
                            Number(
                                button.dataset
                                    .addId
                            );


                        const item =
                            menuData.find(
                                (entry) =>
                                    entry.id ===
                                    itemId
                            );


                        if (!item) {
                            return;
                        }


                        addItemToOrder(
                            item
                        );


                        button.innerHTML = `

                            <i data-lucide="check"></i>

                            Added

                        `;


                        renderIcons();


                        setTimeout(
                            () => {

                                button.innerHTML = `

                                    <i data-lucide="plus"></i>

                                    Add to order

                                `;

                                renderIcons();

                            },
                            900
                        );

                    }
                );

            }
        );

}


/* =========================================================
   ADD ONE ITEM TO ORDER
========================================================= */

function addItemToOrder(
    item
) {

    if (!item) {
        return;
    }


    const existingItem =
        order.find(
            (entry) =>
                entry.id ===
                item.id
        );


    if (existingItem) {

        existingItem.quantity +=
            1;

    } else {

        order.push({
            ...item,
            quantity: 1
        });

    }


    updateOrderCount();

    renderOrder();


    showToast(
        `${item.name} added to your order`
    );

}


/* =========================================================
   RENDER ORDER
========================================================= */

function renderOrder() {

    const orderContent =
        document.getElementById(
            "order-content"
        );


    if (!orderContent) {
        return;
    }


    if (
        order.length ===
        0
    ) {

        orderContent.innerHTML = `

            <div class="order-empty">

                <div class="empty-icon">

                    <i data-lucide="shopping-bag"></i>

                </div>

                <h3>
                    Your order is empty
                </h3>

                <p>
                    Add something delicious from the menu.
                </p>

                <button
                    type="button"
                    class="primary-button"
                    data-page="menu"
                >

                    Browse Menu

                    <i data-lucide="arrow-right"></i>

                </button>

            </div>

        `;


        renderIcons();

        setupDynamicPageButtons();

        return;

    }


    let subtotal = 0;


    const itemsHTML =
        order
            .map(
                (item) => {

                    const itemTotal =
                        item.price *
                        item.quantity;


                    subtotal +=
                        itemTotal;


                    return `

                        <article
                            class="order-item"
                            data-order-id="${item.id}"
                        >

                            <div class="order-item-image">

                                <img
                                    src="${item.image}"
                                    alt="${escapeHtml(item.name)}"
                                    loading="lazy"
                                    decoding="async"
                                />

                            </div>

                            <div class="order-item-info">

                                <h3>
                                    ${escapeHtml(item.name)}
                                </h3>

                                <p>
                                    ${escapeHtml(item.description)}
                                </p>

                                <div class="order-item-price">
                                    D${itemTotal}
                                </div>

                                <div class="order-controls">

                                    <button
                                        type="button"
                                        class="quantity-button"
                                        data-action="decrease"
                                        data-id="${item.id}"
                                        aria-label="Decrease quantity"
                                    >

                                        <i data-lucide="minus"></i>

                                    </button>

                                    <span class="quantity-value">
                                        ${item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        class="quantity-button"
                                        data-action="increase"
                                        data-id="${item.id}"
                                        aria-label="Increase quantity"
                                    >

                                        <i data-lucide="plus"></i>

                                    </button>

                                </div>

                            </div>

                            <button
                                type="button"
                                class="order-item-remove"
                                data-action="remove"
                                data-id="${item.id}"
                                aria-label="Remove item"
                            >

                                <i data-lucide="trash-2"></i>

                            </button>

                        </article>

                    `;

                }
            )
            .join("");


    const total =
        subtotal;


    orderContent.innerHTML = `

        <div class="order-wrapper">

            ${itemsHTML}

            <div class="order-summary">

                <div class="order-summary-row">

                    <span>
                        Subtotal
                    </span>

                    <strong>
                        D${subtotal}
                    </strong>

                </div>

                <div class="order-summary-row">

                    <span>
                        Service
                    </span>

                    <strong>
                        Included
                    </strong>

                </div>

                <div class="order-summary-row order-summary-total">

                    <span>
                        Total
                    </span>

                    <strong>
                        D${total}
                    </strong>

                </div>

                <button
                    type="button"
                    class="checkout-button"
                    id="checkout-button"
                >

                    Continue

                    <i data-lucide="arrow-right"></i>

                </button>

            </div>

        </div>

    `;


    renderIcons();

    setupOrderControls();

}


/* =========================================================
   ORDER CONTROLS
========================================================= */

function setupOrderControls() {

    document
        .querySelectorAll(
            "[data-action='increase'], " +
            "[data-action='decrease'], " +
            "[data-action='remove']"
        )
        .forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const action =
                            button.dataset
                                .action;


                        const itemId =
                            Number(
                                button.dataset
                                    .id
                            );


                        const itemIndex =
                            order.findIndex(
                                (item) =>
                                    item.id ===
                                    itemId
                            );


                        if (
                            itemIndex ===
                            -1
                        ) {

                            return;

                        }


                        const item =
                            order[itemIndex];


                        if (
                            action ===
                            "increase"
                        ) {

                            item.quantity +=
                                1;

                        }


                        if (
                            action ===
                            "decrease"
                        ) {

                            item.quantity -=
                                1;


                            if (
                                item.quantity <=
                                0
                            ) {

                                order.splice(
                                    itemIndex,
                                    1
                                );

                            }

                        }


                        if (
                            action ===
                            "remove"
                        ) {

                            order.splice(
                                itemIndex,
                                1
                            );

                        }


                        updateOrderCount();

                        renderOrder();

                    }
                );

            }
        );


    const checkoutButton =
    document.getElementById(
        "checkout-button"
    );

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        () => {

            if (!order.length) {
                showToast(
                    "Your order is empty"
                );
                return;
            }

            const orderLines =
                order
                    .map(
                        (item) =>
                            `${item.quantity} × ${item.name} — D${item.price * item.quantity}`
                    )
                    .join("\n");

            const total =
                order.reduce(
                    (sum, item) =>
                        sum +
                        item.price *
                        item.quantity,
                    0
                );

            const message =
                `Hello Fajara Garden 👋\n\n` +
                `I'd like to place this order:\n\n` +
                `${orderLines}\n\n` +
                `Total: D${total}\n\n` +
                `Please confirm availability and the next steps.`;

            const whatsappURL =
                `https://wa.me/2205453305?text=${encodeURIComponent(message)}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}

}


/* =========================================================
   ORDER COUNT
========================================================= */

function updateOrderCount() {

    const orderTabs =
        document.querySelectorAll(
            '[data-page="orders"]'
        );


    if (!orderTabs.length) {
        return;
    }


    const totalQuantity =
        order.reduce(
            (total, item) =>
                total +
                item.quantity,
            0
        );


    orderTabs.forEach(
        (orderTab) => {

            const label =
                orderTab.querySelector(
                    ".tab-label"
                );


            if (!label) {
                return;
            }


            label.textContent =
                totalQuantity > 0
                    ? `Order ${totalQuantity}`
                    : "Order";

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    if (!homeSearch) {
        return;
    }


    homeSearch.addEventListener(
        "input",
        () => {

            const value =
                homeSearch.value
                    .trim()
                    .toLowerCase();


            if (!value) {

                hideSearchSuggestions();

                return;

            }


            showSearchSuggestions(
                value
            );

        }
    );


    homeSearch.addEventListener(
        "focus",
        () => {

            const value =
                homeSearch.value
                    .trim()
                    .toLowerCase();


            if (value) {

                showSearchSuggestions(
                    value
                );

            }

        }
    );


    homeSearch.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {

                hideSearchSuggestions();

                homeSearch.blur();

            }


            if (
                event.key ===
                "Enter"
            ) {

                const value =
                    homeSearch.value
                        .trim()
                        .toLowerCase();


                if (!value) {
                    return;
                }


                const results =
                    getSearchMatches(
                        value
                    );


                if (
                    results.length >
                    0
                ) {

                    openSearchResult(
                        results[0]
                    );

                }

            }

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            const wrapper =
                document.querySelector(
                    ".floating-search-wrapper"
                );


            if (
                wrapper &&
                !wrapper.contains(
                    event.target
                )
            ) {

                hideSearchSuggestions();

            }

        }
    );

}


/* =========================================================
   SEARCH MATCHING
========================================================= */

function getSearchMatches(
    query
) {

    const cleanQuery =
        query
            .trim()
            .toLowerCase();


    if (!cleanQuery) {
        return [];
    }


    const scored =
        menuData.map(
            (item) => {

                const name =
                    item.name.toLowerCase();

                const description =
                    item.description.toLowerCase();

                const category =
                    item.category.toLowerCase();

                const tags =
                    item.tags
                        .join(" ")
                        .toLowerCase();


                let score = 0;


                if (
                    name ===
                    cleanQuery
                ) {

                    score +=
                        100;

                }


                if (
                    name.startsWith(
                        cleanQuery
                    )
                ) {

                    score +=
                        80;

                }


                if (
                    name.includes(
                        cleanQuery
                    )
                ) {

                    score +=
                        60;

                }


                if (
                    category.includes(
                        cleanQuery
                    )
                ) {

                    score +=
                        45;

                }


                if (
                    description.includes(
                        cleanQuery
                    )
                ) {

                    score +=
                        25;

                }


                if (
                    tags.includes(
                        cleanQuery
                    )
                ) {

                    score +=
                        30;

                }


                const queryWords =
                    cleanQuery.split(
                        /\s+/
                    );


                queryWords.forEach(
                    (word) => {

                        if (
                            name.includes(
                                word
                            )
                        ) {

                            score +=
                                20;

                        }


                        if (
                            description.includes(
                                word
                            )
                        ) {

                            score +=
                                8;

                        }


                        if (
                            tags.includes(
                                word
                            )
                        ) {

                            score +=
                                10;

                        }

                    }
                );


                const distance =
                    levenshteinDistance(
                        cleanQuery,
                        name
                    );


                if (
                    distance <=
                    2
                ) {

                    score +=
                        40;

                } else if (
                    distance <=
                    4
                ) {

                    score +=
                        20;

                }


                return {
                    item,
                    score
                };

            }
        );


    return scored
        .filter(
            (entry) =>
                entry.score >
                0
        )
        .sort(
            (a, b) =>
                b.score -
                a.score
        )
        .slice(
            0,
            5
        )
        .map(
            (entry) =>
                entry.item
        );

}


/* =========================================================
   LEVENSHTEIN
========================================================= */

function levenshteinDistance(
    a,
    b
) {

    const matrix = [];


    for (
        let i = 0;
        i <= b.length;
        i++
    ) {

        matrix[i] = [i];

    }


    for (
        let j = 0;
        j <= a.length;
        j++
    ) {

        matrix[0][j] = j;

    }


    for (
        let i = 1;
        i <= b.length;
        i++
    ) {

        for (
            let j = 1;
            j <= a.length;
            j++
        ) {

            if (
                b.charAt(
                    i - 1
                ) ===
                a.charAt(
                    j - 1
                )
            ) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] =
                    Math.min(
                        matrix[i - 1][j - 1] +
                            1,
                        matrix[i][j - 1] +
                            1,
                        matrix[i - 1][j] +
                            1
                    );

            }

        }

    }


    return matrix[b.length][a.length];

}


/* =========================================================
   SEARCH SUGGESTIONS
========================================================= */

function showSearchSuggestions(
    query
) {

    const suggestions =
        document.getElementById(
            "search-suggestions"
        );


    if (!suggestions) {
        return;
    }


    const results =
        getSearchMatches(
            query
        );


    if (
        results.length ===
        0
    ) {

        suggestions.innerHTML = `

            <div class="search-no-results">

                <div class="search-no-results-icon">

                    <i data-lucide="search-x"></i>

                </div>

                <span>
                    No dishes found for "${escapeHtml(query)}"
                </span>

            </div>

        `;


        suggestions.classList.remove(
            "hidden"
        );


        renderIcons();


        return;

    }


    suggestions.innerHTML =
        results
            .map(
                (item) => `

                    <button
                        type="button"
                        class="search-suggestion"
                        data-search-result-id="${item.id}"
                    >

                        <span class="suggestion-image">

                            <img
                                src="${item.image}"
                                alt="${escapeHtml(item.name)}"
                                loading="lazy"
                                decoding="async"
                            />

                        </span>

                        <span class="suggestion-info">

                            <span class="suggestion-name">

                                ${highlightMatch(
                                    item.name,
                                    query
                                )}

                            </span>

                            <span class="suggestion-meta">

                                <span>
                                    ${item.category}
                                </span>

                                <span>
                                    •
                                </span>

                                <span class="suggestion-price">
                                    D${item.price}
                                </span>

                            </span>

                        </span>

                        <span class="suggestion-arrow">

                            <i data-lucide="arrow-up-right"></i>

                        </span>

                    </button>

                `
            )
            .join("");


    suggestions.classList.remove(
        "hidden"
    );


    renderIcons();


    suggestions
        .querySelectorAll(
            "[data-search-result-id]"
        )
        .forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const itemId =
                            Number(
                                button.dataset
                                    .searchResultId
                            );


                        const item =
                            menuData.find(
                                (entry) =>
                                    entry.id ===
                                    itemId
                            );


                        if (item) {

                            openSearchResult(
                                item
                            );

                        }

                    }
                );

            }
        );

}


/* =========================================================
   OPEN SEARCH RESULT
========================================================= */

function openSearchResult(
    item
) {

    if (!item) {
        return;
    }


    hideSearchSuggestions();


    homeSearch.value =
        item.name;


    currentMenuCategory =
        item.category;


    navigateTo(
        "menu"
    );


    document
        .querySelectorAll(
            ".menu-tab"
        )
        .forEach(
            (tab) => {

                tab.classList.toggle(
                    "active",
                    tab.dataset
                        .menuCategory ===
                        item.category
                );

            }
        );


    renderMenu();


    setTimeout(
        () => {

            const menuItem =
                document.querySelector(
                    `[data-menu-item-id="${item.id}"]`
                );


            if (!menuItem) {
                return;
            }


            menuItem.scrollIntoView({
                behavior:
                    "smooth",
                block:
                    "center"
            });


            menuItem.animate(
                [
                    {
                        transform:
                            "scale(1)"
                    },
                    {
                        transform:
                            "scale(1.025)"
                    },
                    {
                        transform:
                            "scale(1)"
                    }
                ],
                {
                    duration:
                        450,
                    easing:
                        "ease-out"
                }
            );

        },
        100
    );

}


/* =========================================================
   SEARCH HELPERS
========================================================= */

function hideSearchSuggestions() {

    const suggestions =
        document.getElementById(
            "search-suggestions"
        );


    if (!suggestions) {
        return;
    }


    suggestions.classList.add(
        "hidden"
    );

}


function highlightMatch(
    text,
    query
) {

    const escapedText =
        escapeHtml(text);


    const escapedQuery =
        escapeRegExp(
            query.trim()
        );


    if (!escapedQuery) {
        return escapedText;
    }


    const regex =
        new RegExp(
            `(${escapedQuery})`,
            "ig"
        );


    return escapedText.replace(
        regex,
        "<strong>$1</strong>"
    );

}


function escapeHtml(
    value
) {

    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


function escapeRegExp(
    value
) {

    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

}


/* =========================================================
   FAVORITES
========================================================= */

function setupFavorites() {

    document
        .querySelectorAll(
            ".favorite-button"
        )
        .forEach(
            (button) => {

                if (
                    button.dataset
                        .favoriteBound ===
                    "true"
                ) {

                    return;

                }


                button.dataset
                    .favoriteBound =
                    "true";


                button.addEventListener(
                    "click",
                    () => {

                        const icon =
                            button.querySelector(
                                "svg"
                            );


                        const active =
                            button.classList.toggle(
                                "favorite-active"
                            );


                        if (icon) {

                            icon.style.fill =
                                active
                                    ? "currentColor"
                                    : "none";

                        }


                        showToast(
                            active
                                ? "Added to favourites"
                                : "Removed from favourites"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    if (
        !toast ||
        !toastMessage
    ) {

        return;

    }


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "/" &&
            document.activeElement !==
                homeSearch
        ) {

            event.preventDefault();


            if (homeSearch) {

                homeSearch.focus();

            }

        }


        if (
            event.key ===
            "Escape"
        ) {

            if (homeSearch) {

                homeSearch.blur();

            }

        }

    }
);


/* =========================================================
   STICKY SEARCH
========================================================= */

function setupStickySearch() {

    if (
        !homePage ||
        !floatingSearch
    ) {

        return;

    }


    homePage.addEventListener(
        "scroll",
        () => {

            const searchTop =
                floatingSearch
                    .getBoundingClientRect()
                    .top;


            const pageTop =
                homePage
                    .getBoundingClientRect()
                    .top;


            if (
                searchTop <=
                pageTop + 1
            ) {

                floatingSearch.classList.add(
                    "is-stuck"
                );

            } else {

                floatingSearch.classList.remove(
                    "is-stuck"
                );

            }

        }
    );

}


/* =========================================================
   FLOATING ACTIONS
========================================================= */

function setupFloatingActions() {

    if (!homePage) {
        return;
    }


    homePage.addEventListener(
        "scroll",
        updateFloatingActions
    );


    window.addEventListener(
        "resize",
        updateFloatingActions
    );


    if (floatingAIButton) {

        floatingAIButton.addEventListener(
            "click",
            () => {

                openGardenAI();

            }
        );

    }


    if (floatingCallButton) {

        floatingCallButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "tel:+2205453305";

            }
        );

    }


    updateFloatingActions();

}


function updateFloatingActions() {

    if (
        !floatingActions ||
        !homePage
    ) {

        return;

    }


    if (
        currentPage !==
        "home"
    ) {

        floatingActions.classList.remove(
            "home-active"
        );


        if (floatingAIButton) {

            floatingAIButton.classList.remove(
                "visible"
            );

        }


        if (floatingCallButton) {

            floatingCallButton.classList.remove(
                "visible"
            );

        }


        return;

    }


    floatingActions.classList.add(
        "home-active"
    );


    if (floatingAIButton) {

        floatingAIButton.classList.add(
            "visible"
        );

    }


    if (
        homeCallAction &&
        floatingCallButton
    ) {

        const callRect =
            homeCallAction
                .getBoundingClientRect();


        const pageRect =
            homePage
                .getBoundingClientRect();


        if (
            callRect.bottom <
            pageRect.top
        ) {

            floatingCallButton.classList.add(
                "visible"
            );

        } else {

            floatingCallButton.classList.remove(
                "visible"
            );

        }

    }

}


/* =========================================================
   RESERVATION
========================================================= */

function setupReservation() {

    /*
     * Event delegation makes this work even if
     * the button is recreated later.
     */

    document.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    "#home-reserve-action, " +
                    ".reserve-action, " +
                    "[data-action='reserve']"
                );


            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopPropagation();


            const reservationMessage =
                encodeURIComponent(
                    "Hello Fajara Garden 👋 I would like to reserve a table."
                );


            window.open(
                `https://wa.me/2205453305?text=${reservationMessage}`,
                "_blank"
            );

        }
    );

}


/* =========================================================
   GARDEN AI
========================================================= */

function setupGardenAI() {

    if (!gardenAIOverlay) {
        return;
    }


    setupGardenAIIntro();


    if (startGardenAI) {

        startGardenAI.addEventListener(
            "click",
            () => {

                gardenAIIntro.classList.add(
                    "hidden"
                );


                gardenAIChat.classList.remove(
                    "hidden"
                );


                resetGardenAI();

                beginGardenAI();

            }
        );

    }


    if (closeGardenAIButton) {

        closeGardenAIButton.addEventListener(
            "click",
            closeGardenAI
        );

    }


    if (closeGardenAIIntro) {

        closeGardenAIIntro.addEventListener(
            "click",
            closeGardenAI
        );

    }


    gardenAIOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                gardenAIOverlay
            ) {

                closeGardenAI();

            }

        }
    );


    if (gardenAISend) {

        gardenAISend.addEventListener(
            "click",
            sendGardenAIText
        );

    }


    if (gardenAIInput) {

        gardenAIInput.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    sendGardenAIText();

                }

            }
        );

    }

}


/* =========================================================
   GARDEN AI INTRO
========================================================= */

function setupGardenAIIntro() {

    const period =
        getMealPeriod();


    if (gardenAITitle) {

        gardenAITitle.textContent =
            `Let's AI recommend ${period.label} for you.`;

    }


    if (gardenAIDescription) {

        gardenAIDescription.textContent =
            `I'll check what's available for ${period.label} at Fajara Garden, ask you a few quick questions and build a recommendation around what you actually like.`;

    }

}


/* =========================================================
   MEAL PERIOD
========================================================= */

function getMealPeriod() {

    const hour =
        new Date().getHours();


    if (
        hour >= 5 &&
        hour < 11
    ) {

        return {
            key: "breakfast",
            label: "breakfast"
        };

    }


    if (
        hour >= 11 &&
        hour < 16
    ) {

        return {
            key: "lunch",
            label: "lunch"
        };

    }


    if (
        hour >= 16 &&
        hour < 22
    ) {

        return {
            key: "dinner",
            label: "dinner"
        };

    }


    return {
        key: "late-night",
        label: "something light tonight"
    };

}


/* =========================================================
   AVAILABLE ITEMS FOR MEAL
========================================================= */

function getAvailableForMeal(
    meal
) {

    const actualMeal =
        meal ===
        "late-night"
            ? "dinner"
            : meal;


    return menuData.filter(
        (item) =>
            item.meals.includes(
                actualMeal
            )
    );

}


/* =========================================================
   OPEN / CLOSE AI
========================================================= */

function openGardenAI() {

    if (!gardenAIOverlay) {
        return;
    }


    setupGardenAIIntro();


    gardenAIOverlay.classList.add(
        "open"
    );

}


function closeGardenAI() {

    if (!gardenAIOverlay) {
        return;
    }


    gardenAIOverlay.classList.remove(
        "open"
    );

}


/* =========================================================
   RESET AI
========================================================= */

function resetGardenAI() {

    const period =
        getMealPeriod();


    gardenAIState = {

        meal:
            period.key,

        appetite:
            "",

        drink:
            "",

        preference:
            "",

        step:
            0,

        selectedItems:
            []

    };


    if (gardenAIMessages) {

        gardenAIMessages.innerHTML =
            "";

    }


    if (gardenAISuggestions) {

        gardenAISuggestions.innerHTML =
            "";

    }


    if (gardenAIInput) {

        gardenAIInput.value =
            "";

        gardenAIInput.placeholder =
            "Type your answer...";

    }

}


/* =========================================================
   BEGIN AI
========================================================= */

function beginGardenAI() {

    const period =
        getMealPeriod();


    const availableItems =
        getAvailableForMeal(
            period.key
        );


    addAIMessage(
        `Hey 👋 I'm Garden AI. It's a good time for ${period.label}. I checked the menu and found ${availableItems.length} item${availableItems.length === 1 ? "" : "s"} available for this meal period.`
    );


    setTimeout(
        () => {

            askGardenAIQuestion();

        },
        450
    );

}


/* =========================================================
   AI MESSAGE
========================================================= */

function addAIMessage(
    message,
    type = "ai"
) {

    if (!gardenAIMessages) {
        return;
    }


    const bubble =
        document.createElement(
            "div"
        );


    bubble.className =
        `ai-message ${type}`;


    bubble.innerHTML =
        message;


    gardenAIMessages.appendChild(
        bubble
    );


    gardenAIMessages.scrollTo({
        top:
            gardenAIMessages
                .scrollHeight,
        behavior:
            "smooth"
    });

}


/* =========================================================
   USER MESSAGE
========================================================= */

function addUserMessage(
    message
) {

    addAIMessage(
        escapeHtml(
            message
        ),
        "user"
    );

}


/* =========================================================
   AI CHOICES
========================================================= */

function showAIChoices(
    choices
) {

    if (!gardenAISuggestions) {
        return;
    }


    gardenAISuggestions.innerHTML =
        "";


    choices.forEach(
        (choice) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "ai-choice-button";


            button.textContent =
                choice;


            button.addEventListener(
                "click",
                () => {

                    submitAIAnswer(
                        choice
                    );

                }
            );


            gardenAISuggestions.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   AI QUESTIONS
========================================================= */

function askGardenAIQuestion() {

    if (gardenAISuggestions) {

        gardenAISuggestions.innerHTML =
            "";

    }


    const step =
        gardenAIState.step;


    if (
        step ===
        0
    ) {

        addAIMessage(
            "First — are you looking for something light or filling?"
        );


        showAIChoices([
            "Light",
            "Filling",
            "Just a drink",
            "Surprise me"
        ]);


        return;

    }


    if (
        step ===
        1
    ) {

        const availableDrinks =
            getAvailableForMeal(
                gardenAIState.meal
            ).filter(
                (item) =>
                    item.category ===
                    "Drinks"
            );


        if (
            availableDrinks.length ===
            0
        ) {

            gardenAIState.drink =
                "no drink";


            gardenAIState.step =
                2;


            askGardenAIQuestion();


            return;

        }


        addAIMessage(
            `I've got ${availableDrinks.length} drink option${availableDrinks.length === 1 ? "" : "s"} for this time. What sounds good?`
        );


        showAIChoices([
            "Something fresh",
            "Coffee",
            "No drink",
            "Surprise me"
        ]);


        return;

    }


    if (
        step ===
        2
    ) {

        addAIMessage(
            "One more thing — what sounds best right now?"
        );


        showAIChoices([
            "Grilled",
            "Fresh",
            "Sweet",
            "Anything good"
        ]);


        return;

    }


    if (
        step ===
        3
    ) {

        generateGardenAIRecommendation();

    }

}


/* =========================================================
   SUBMIT AI ANSWER
========================================================= */

function submitAIAnswer(
    answer
) {

    const cleanAnswer =
        answer.trim();


    if (!cleanAnswer) {
        return;
    }


    addUserMessage(
        cleanAnswer
    );


    if (gardenAISuggestions) {

        gardenAISuggestions.innerHTML =
            "";

    }


    if (
        gardenAIState.step ===
        0
    ) {

        gardenAIState.appetite =
            cleanAnswer.toLowerCase();

    }


    if (
        gardenAIState.step ===
        1
    ) {

        gardenAIState.drink =
            cleanAnswer.toLowerCase();

    }


    if (
        gardenAIState.step ===
        2
    ) {

        gardenAIState.preference =
            cleanAnswer.toLowerCase();

    }


    gardenAIState.step +=
        1;


    setTimeout(
        () => {

            askGardenAIQuestion();

        },
        350
    );

}


/* =========================================================
   TEXT INPUT
========================================================= */

function sendGardenAIText() {

    if (!gardenAIInput) {
        return;
    }


    const value =
        gardenAIInput.value.trim();


    if (!value) {
        return;
    }


    gardenAIInput.value =
        "";


    submitAIAnswer(
        value
    );

}


/* =========================================================
   GENERATE RECOMMENDATION
========================================================= */

function generateGardenAIRecommendation() {

    addAIMessage(
        "Okay, give me a second… I'm checking what's available for this meal period and putting the best combination together."
    );


    setTimeout(
        () => {

            const recommendations =
                buildGardenAIRecommendation();


            gardenAIState.selectedItems =
                recommendations;


            if (
                !recommendations.length
            ) {

                renderAIOrderCard(
                    []
                );

                return;

            }


            const itemNames =
                recommendations
                    .map(
                        (item) =>
                            item.name
                    )
                    .join(
                        " + "
                    );


            addAIMessage(
                `I think I've got it 😌 Based on what you told me, I'd go with <strong>${escapeHtml(itemNames)}</strong>.`
            );


            setTimeout(
                () => {

                    renderAIOrderCard(
                        recommendations
                    );

                },
                350
            );

        },
        900
    );

}


/* =========================================================
   BUILD RECOMMENDATION
========================================================= */

function buildGardenAIRecommendation() {

    const availableItems =
        getAvailableForMeal(
            gardenAIState.meal
        );


    const food =
        availableItems.filter(
            (item) =>
                item.category ===
                "Food"
        );


    const drinks =
        availableItems.filter(
            (item) =>
                item.category ===
                "Drinks"
        );


    const desserts =
        availableItems.filter(
            (item) =>
                item.category ===
                "Desserts"
        );


    const appetite =
        gardenAIState.appetite;


    const drinkPreference =
        gardenAIState.drink;


    const preference =
        gardenAIState.preference;


    let selectedFood =
        null;


    let selectedDrink =
        null;


    const scoredFood =
        food.map(
            (item) => {

                let score = 0;


                const searchable =
                    `
                        ${item.name}
                        ${item.description}
                        ${item.tags.join(" ")}
                    `.toLowerCase();


                if (
                    appetite.includes(
                        "light"
                    )
                ) {

                    if (
                        item.tags.includes(
                            "light"
                        )
                    ) {

                        score +=
                            40;

                    }


                    if (
                        item.tags.includes(
                            "fresh"
                        )
                    ) {

                        score +=
                            25;

                    }

                }


                if (
                    appetite.includes(
                        "filling"
                    )
                ) {

                    if (
                        item.tags.includes(
                            "filling"
                        )
                    ) {

                        score +=
                            40;

                    }


                    if (
                        item.tags.includes(
                            "grilled"
                        )
                    ) {

                        score +=
                            20;

                    }

                }


                if (
                    appetite.includes(
                        "just a drink"
                    )
                ) {

                    score -=
                        100;

                }


                if (
                    preference.includes(
                        "grilled"
                    )
                ) {

                    if (
                        item.tags.includes(
                            "grilled"
                        )
                    ) {

                        score +=
                            45;

                    }


                    if (
                        searchable.includes(
                            "chicken"
                        )
                    ) {

                        score +=
                            20;

                    }

                }


                if (
                    preference.includes(
                        "fresh"
                    )
                ) {

                    if (
                        item.tags.includes(
                            "fresh"
                        )
                    ) {

                        score +=
                            45;

                    }


                    if (
                        item.tags.includes(
                            "light"
                        )
                    ) {

                        score +=
                            20;

                    }

                }


                if (
                    preference.includes(
                        "sweet"
                    )
                ) {

                    score -=
                        20;

                }


                if (
                    preference.includes(
                        "anything"
                    ) ||
                    appetite.includes(
                        "surprise"
                    )
                ) {

                    score +=
                        15;

                }


                return {
                    item,
                    score
                };

            }
        );


    scoredFood.sort(
        (a, b) =>
            b.score -
            a.score
    );


    if (
        !appetite.includes(
            "just a drink"
        )
    ) {

        selectedFood =
            scoredFood[0]?.item ||
            food[0] ||
            null;

    }


    const scoredDrinks =
        drinks.map(
            (item) => {

                let score = 0;


                const searchable =
                    `
                        ${item.name}
                        ${item.description}
                        ${item.tags.join(" ")}
                    `.toLowerCase();


                if (
                    drinkPreference.includes(
                        "fresh"
                    )
                ) {

                    if (
                        item.tags.includes(
                            "fresh"
                        )
                    ) {

                        score +=
                            50;

                    }


                    if (
                        item.tags.includes(
                            "juice"
                        )
                    ) {

                        score +=
                            30;

                    }

                }


                if (
                    drinkPreference.includes(
                        "coffee"
                    )
                ) {

                    if (
                        item.tags.includes(
                            "coffee"
                        )
                    ) {

                        score +=
                            60;

                    }


                    if (
                        searchable.includes(
                            "coffee"
                        )
                    ) {

                        score +=
                            30;

                    }

                }


                if (
                    drinkPreference.includes(
                        "surprise"
                    )
                ) {

                    score +=
                        15;

                }


                return {
                    item,
                    score
                };

            }
        );


    scoredDrinks.sort(
        (a, b) =>
            b.score -
            a.score
    );


    if (
        !drinkPreference.includes(
            "no drink"
        )
    ) {

        selectedDrink =
            scoredDrinks[0]?.item ||
            drinks[0] ||
            null;

    }


    const result = [];


    if (selectedFood) {

        result.push(
            selectedFood
        );

    }


    if (selectedDrink) {

        result.push(
            selectedDrink
        );

    }


    if (
        appetite.includes(
            "just a drink"
        )
    ) {

        result.length =
            0;


        if (selectedDrink) {

            result.push(
                selectedDrink
            );

        }

    }


    if (
        preference.includes(
            "sweet"
        ) &&
        desserts.length
    ) {

        const dessert =
            desserts.find(
                (item) =>
                    item.tags.includes(
                        "sweet"
                    )
            ) ||
            desserts[0];


        if (
            !result.some(
                (item) =>
                    item.id ===
                    dessert.id
            )
        ) {

            result.push(
                dessert
            );

        }

    }


    return result;

}


/* =========================================================
   AI ORDER CARD
========================================================= */

function renderAIOrderCard(
    items
) {

    if (
        !items.length
    ) {

        addAIMessage(
            "I couldn't find a strong match from the available menu for this meal period. Let's try a different preference."
        );


        showAIChoices([
            "Something light",
            "Something filling",
            "Fresh",
            "Surprise me"
        ]);


        gardenAIState.step =
            0;


        return;

    }


    const total =
        items.reduce(
            (sum, item) =>
                sum + item.price,
            0
        );


    const itemsHTML =
        items
            .map(
                (item) => `

                    <div class="ai-order-item">

                        <div class="ai-order-item-image">

                            <img
                                src="${item.image}"
                                alt="${escapeHtml(item.name)}"
                                loading="lazy"
                                decoding="async"
                            />

                        </div>

                        <div class="ai-order-item-info">

                            <strong>
                                ${escapeHtml(item.name)}
                            </strong>

                            <span>
                                ${escapeHtml(item.category)}
                            </span>

                        </div>

                        <span class="ai-order-item-price">
                            D${item.price}
                        </span>

                    </div>

                `
            )
            .join("");


    const card =
        document.createElement(
            "div"
        );


    card.className =
        "ai-message ai ai-order-card";


    card.innerHTML = `

        <div class="ai-order-header">

            <div>

                <span class="section-kicker">
                    GARDEN AI
                </span>

                <strong>
                    Your recommendation
                </strong>

            </div>

            <span class="ai-order-count">
                ${items.length}
                ${items.length === 1 ? "item" : "items"}
            </span>

        </div>


        <div class="ai-order-items">

            ${itemsHTML}

        </div>


        <div class="ai-order-total">

            <span>
                Total
            </span>

            <strong>
                D${total}
            </strong>

        </div>


        <button
            type="button"
            class="ai-add-all garden-ai-add-all"
        >

            <span class="ai-add-all-icon">

                <i data-lucide="shopping-bag"></i>

            </span>

            <span class="ai-add-all-copy">

                <strong>
                    Add all to order
                </strong>

                <small>
                    Add these ${items.length} recommendation${items.length === 1 ? "" : "s"}
                </small>

            </span>

            <i
                class="ai-add-all-arrow"
                data-lucide="arrow-right"
            ></i>

        </button>

    `;


    gardenAIMessages.appendChild(
        card
    );


    renderIcons();


    gardenAIMessages.scrollTo({
        top:
            gardenAIMessages.scrollHeight,
        behavior:
            "smooth"
    });


    const addAllButton =
        card.querySelector(
            ".ai-add-all"
        );


    if (!addAllButton) {
        return;
    }


    addAllButton.addEventListener(
        "click",
        () => {

            addAIItemsToOrder(
                items
            );


            addAllButton.classList.add(
                "added"
            );


            addAllButton.innerHTML = `

                <span class="ai-add-all-icon">

                    <i data-lucide="check"></i>

                </span>

                <span class="ai-add-all-copy">

                    <strong>
                        Added to your order
                    </strong>

                    <small>
                        Your cart is ready
                    </small>

                </span>

                <i
                    class="ai-add-all-arrow"
                    data-lucide="arrow-right"
                ></i>

            `;


            renderIcons();

        }
    );

}


/* =========================================================
   ADD AI ITEMS TO ORDER
========================================================= */

function addAIItemsToOrder(
    items
) {

    if (
        !Array.isArray(items) ||
        !items.length
    ) {

        return;

    }


    items.forEach(
        (item) => {

            const existing =
                order.find(
                    (entry) =>
                        entry.id ===
                        item.id
                );


            if (existing) {

                existing.quantity +=
                    1;

            } else {

                order.push({
                    ...item,
                    quantity:
                        1
                });

            }

        }
    );


    updateOrderCount();

    renderOrder();


    showToast(
        "AI recommendations added to your order"
    );


    addAIMessage(
        "Done 😌 I've added everything to your order."
    );


    setTimeout(
        () => {

            addAIMessage(
                "Your cart is ready. Tap Order whenever you're ready to review it."
            );

        },
        350
    );

}


/* =========================================================
   DEMO PURCHASE BANNER
========================================================= */

/* =========================================================
   SQUASHBERRY DEMO PURCHASE BANNER
========================================================= */

function setupDemoSaleBanner() {

    /*
     * Prevent duplicate creation
     */

    if (
        document.getElementById(
            "demo-sale-overlay"
        )
    ) {

        return;

    }


    /*
     * Create the complete banner from JavaScript.
     */

    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "demo-sale-overlay";


    overlay.className =
        "demo-sale-overlay";


    overlay.setAttribute(
        "aria-hidden",
        "true"
    );


    overlay.innerHTML = `

        <div
            id="demo-sale-banner"
            class="demo-sale-banner"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-sale-title"
        >

            <button
                type="button"
                id="demo-sale-close"
                class="demo-sale-close"
                aria-label="Continue viewing demo"
            >

                <i data-lucide="x"></i>

            </button>


            <div class="demo-sale-glow"></div>


            <div class="demo-sale-icon">

                <i data-lucide="sparkles"></i>

            </div>


            <span class="section-kicker">
                WEBSITE DEMO
            </span>


            <h2 id="demo-sale-title">
                You're viewing a demo website.
            </h2>


            <p>

                This Fajara Garden website was
                designed by Israel from
                <strong>Squashberry Co.</strong>
                and is available for purchase.

            </p>


            <div class="demo-sale-note">

                <i data-lucide="badge-check"></i>

                <span>
                    Custom branding, menu,
                    ordering, reservations and
                    AI features can all be
                    tailored to your business.
                </span>

            </div>


            <div class="demo-sale-actions">

                <a
                    href="https://wa.me/2204140303?text=I'm%20ready%20to%20purchase%20the%20Fajara%20Garden%20website%20demo%20I%20just%20viewed."                    target="_blank"
                    rel="noopener noreferrer"
                    class="demo-sale-buy"
                >

                    <span>
                        I'm ready to purchase
                    </span>

                    <i data-lucide="arrow-up-right"></i>

                </a>


                <button
                    type="button"
                    id="demo-sale-continue"
                    class="demo-sale-continue"
                >

                    Continue viewing demo

                </button>

            </div>


            <small class="demo-sale-footer">

                Squashberry Co. • Website design &
                development

            </small>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    renderIcons();


    const banner =
        document.getElementById(
            "demo-sale-banner"
        );


    const closeButton =
        document.getElementById(
            "demo-sale-close"
        );


    const continueButton =
        document.getElementById(
            "demo-sale-continue"
        );


    /*
     * For testing:
     * remove the old session value.
     *
     * Once you are satisfied with it,
     * this still prevents it appearing
     * repeatedly after dismissal.
     */

    sessionStorage.removeItem(
        "fajara-demo-sale-dismissed"
    );


    /*
     * Show after exactly 90 seconds.
     */

    const saleTimer =
        setTimeout(
            () => {

                openDemoSale();

            },
            30 * 1000
        );


    let jiggleTimer =
        null;


    function openDemoSale() {

        overlay.classList.add(
            "open"
        );


        overlay.setAttribute(
            "aria-hidden",
            "false"
        );


        renderIcons();


        /*
         * Jiggle every 5 seconds
         */

        jiggleTimer =
            setInterval(
                () => {

                    if (
                        !overlay.classList.contains(
                            "open"
                        )
                    ) {

                        return;

                    }


                    banner.classList.remove(
                        "jiggle-shake"
                    );


                    /*
                     * Force animation restart
                     */

                    void banner.offsetWidth;


                    banner.classList.add(
                        "jiggle-shake"
                    );

                },
                5000
            );

    }


    function closeDemoSale() {

        overlay.classList.remove(
            "open"
        );


        overlay.setAttribute(
            "aria-hidden",
            "true"
        );


        sessionStorage.setItem(
            "fajara-demo-sale-dismissed",
            "true"
        );


        clearInterval(
            jiggleTimer
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeDemoSale
        );

    }


    if (continueButton) {

        continueButton.addEventListener(
            "click",
            closeDemoSale
        );

    }


    overlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                overlay
            ) {

                closeDemoSale();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {

                if (
                    overlay.classList.contains(
                        "open"
                    )
                ) {

                    closeDemoSale();

                }

            }

        }
    );

}


/* =========================================================
   ESCAPE AI
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "Escape"
        ) {

            if (
                gardenAIOverlay &&
                gardenAIOverlay.classList.contains(
                    "open"
                )
            ) {

                closeGardenAI();

            }

        }

    }
);


/* =========================================================
   TOUCH FEEDBACK
========================================================= */

document.addEventListener(
    "touchstart",
    (event) => {

        const target =
            event.target.closest(
                "button"
            );


        if (!target) {
            return;
        }


        target.style.transform =
            "scale(0.97)";

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    (event) => {

        const target =
            event.target.closest(
                "button"
            );


        if (!target) {
            return;
        }


        setTimeout(
            () => {

                target.style.transform =
                    "";

            },
            100
        );

    },
    {
        passive: true
    }
);