/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const btn = document.querySelector('.forecast-btn');
const forecastTemplate = document.querySelector('#forecast-item');

function makeForecast(title, probability) {
    const forecast = forecastTemplate.content.cloneNode(true);

    forecast.querySelector('h3').textContent = title;
    forecast.querySelector('p').textContent = probability;

    return forecast;
}



btn.addEventListener('click', function() {

    function randomProbability() {
        let resultProbability = Math.round(Math.random() * (100 - 1) + 1);
    }
    randomProbability();

    const containerForecast = document.querySelector('.forecasts');
    const forecastOne = makeForecast(`Удача сопровождает тебя весь день', 'Вероятность: ${resultProbability} %`);
    const forecastTwo = makeForecast(`Радостная встреча за кофе с десертом', 'Вероятность: ${resultProbability} %`);
    const forecastThree = makeForecast(`Уборку никто не отменял', 'Вероятность: ${resultProbability} %`);
    const forecastFour = makeForecast(`Неожиданные деньги пополнят твой кошелек', 'Вероятность: ${resultProbability} %`);
    const forecastFive = makeForecast(`Сделай укладку, тебя ждет свидание', 'Вероятность: ${resultProbability} %`);


    function randomForecast() {
        let resultRandom = Math.round(Math.random() * (5 - 1) + 1);
        switch (resultRandom) {
            case 1:
                containerForecast.append(forecastOne);
                break;
            case 2:
                containerForecast.append(forecastTwo);
                break;
            case 3:
                containerForecast.append(forecastThree);
                break;
            case 4:
                containerForecast.append(forecastFour);
                break;
            case 5:
                containerForecast.append(forecastFive);
                break;
            default:
                return 'Предсказание запуталось, попробуй вновь';
                break;

        }
    }
    randomForecast();

})