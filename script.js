const recipes = [
    {
        title: "Куриные крылышки",
        desc: "Хрустящая корочка и сочное мясо за 25 минут.",
        link: "kurica.html"
    },
    {
        title: "Куриная грудка с сыром",
        desc: "Сочная грудка с золотистой сырной корочкой.",
        link: "grudka.html"
    },
    {
        title: "Картофель по-деревенски",
        desc: "Секрет идеальной корочки без масла.",
        link: "kartofel.html"
    },
    {
        title: "Запеченные овощи с брынзой",
        desc: "Легкий и полезный гарнир.",
        link: "ovoshhi.html"
    },
    {
        title: "Шарлотка с яблоками",
        desc: "Пышный пирог, который не подгорает.",
        link: "sharlotka.html"
    }
];

// Функция, которая рисует карточки на главной странице
function renderRecipes() {
    const container = document.getElementById('recipe-container');
    if (!container) return;

    container.innerHTML = ''; // Очищаем контейнер

    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-item';
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.desc}</p>
            <a href="${recipe.link}">Смотреть рецепт →</a>
        `;
        container.appendChild(card);
    });
}

// Запускаем отрисовку, когда страница загрузится
document.addEventListener('DOMContentLoaded', renderRecipes);
