const items = [
    {
      title: "La Sultane de Saba — молочко увлажняющее для тела",
      description: "Молочко, созданное на основе масла сладкого миндаля и масла Карите, обладает легкой, но насыщенной текстурой. Глубоко питает, оставляя на коже ароматную вуаль и легкое ощущение свежести. Кожа становится нежной и ухоженной. Подходит для всех типов кожи.",
      tags: ["body"],
      price: 210,
      img: "./img/1.jpg",
      rating: 3.4,
    },
    {
      title: "Dr. Ceuracle — многофункциональный тонер Vegan Kombucha Tea Essence",
      description: "Dr.ceuracle Vegan Kombucha Tea Essence — веганская многофункциональная кремовая эссенция с экстрактом комбучи и чёрного чая. Крем-эссенция обладает детоксикационным действием, поскольку в его состав входит множество косметических ингредиентов, предназначенных для устранения загрязнений и повышения уровня гидратации.",
      tags: ["face"],
      price: 110,
      img: "./img/2.jpg",
      rating: 5.0,
    },
    {
      title: "Bueno — гель-сыворотка с вольюфилином и пептидами для плотности и эластичности кожи Hydro Volume Lift Serum",
      description: "Активный уход для тех, кто ещё не решился на уколы красоты или серьезные косметические процедуры, а так хочется заметного результата, свежести и молодости без стресса и похода к косметологу. Серум для возрастной кожи тонизирует и подтягивает овал лица, благодаря инновационными компонентам – MGF, пептидам и вольюфилину, подарит глубокое увлажнение и вернёт коже утраченную упругость и эластичность.",
      tags: ["face"],
      price: 105,
      img: "./img/3.jpg",
      rating: 3.9,
    },
    {
      title: "Babor Enzyme Cleanser — очищающая ферментная пудра",
      description: "Мелкодисперсная очищающая пудра с витамином С и ферментами для кожи любого типа. Легко смывается водой. Интенсивно и в то же время деликатно очищает кожу. Обладает ревитализирующим воздействием благодаря лёгкому эффекту пилинга.",
      tags: ["face"],
      price: 90,
      img: "./img/4.jpg",
      rating: 4.7,
    },
    {
      title: "The Ritual of Ayurveda Body Cream",
      description: "Это мягкий крем для тела, который поможет вам расслабиться и уделить себе немного времени. Активная питательная формула обогащена комплексом масел, среди которых масло миндаля, масло подсолнуха и даже мед. Невероятный и глубокий запах крема успокаивает разум и оказывает ароматерапевтический эффект, прямо как на сеансе релаксации, поэтому отныне, привычные процедуры обретут новые смыслы.",
      tags: ["body"],
      price: 95,
      img: "./img/5.jpg",
      rating: 3.1,
    },
    {
      title: "Bueno — гель-сыворотка с вольюфилином и пептидами для плотности и эластичности кожи Hydro Volume Lift Serum",
      description: "BUENO подарил настоящее счастье девушкам и добавил в привычный ритуал очищения нотку романтики и множество сухих лепестков роз, которые придают умыванию сладкий, притягательный аромат, а также заряд бодрости вам и вашей коже на весь день. Гель при соприкосновении с водой превращается в воздушную пенку и мягко очищает от загрязнений и остатков макияжа, смягчает и оставляет лёгкую бархатистость, благодаря чему кожа выглядит свежей и отдохнувшей.",
      tags: ["face"],
      price: 55,
      img: "./img/6.jpg",
      rating: 4.2,
    },
    {
      title: "Dr. Ceuracle — лёгкий крем-гель на основе чайного комплекса Vegan Kombucha Tea Gel Cream",
      description: "Лёгкий крем-гель на основе чайного комплекса Vegan Tea Complex, богатого пробиотиками и витамином B, укрепляет липидный барьер и поддерживает естественный микробиом кожи, защищая ее от сухости, обезвоживания, аллергической сыпи и развития воспалительных процессов, обеспечивает интенсивное длительное увлажнение и глубоко питает, оставляя нежный, немного бархатный финиш после нанесения, обладает мощным антиоксидантным действием, снижая негативное влияние свободных радикалов на клетки, которые приводят к раннему старению и увяданию, а также стимулирует активность фибробластов, участвующих в синтезе коллагена и эластина, оказывая мощный омолаживающий эффект.",
      tags: ["face"],
      price: 150,
      img: "./img/7.jpg",
      rating: 4.5,
    },
    {
      title: "Bueno — омолаживающий крем для рук Charmante Odeur Hand Cream",
      description: "Омолаживающий крем для рук с приятным ароматом хиноки – пряным и одновременно свежим камфарным шлейфом древнего японского дерева, на основе мочевины и т.д., факторов роста MGF предназначен для сохранения молодости кожи, интенсивного питания и восстановления. Он активно борется с сухими морщинами и защищает кожу рук от растрескивания, повышает ее упругость и ускоряет процессы регенерации, замедляя признаки раннего старения, а также приятно смягчает и успокаивает, снимая ощущение усталости и придавая рукам бархатистость.",
      tags: ["body"],
      price: 60,
      img: "./img/8.jpg",
      rating: 2.4,
    },
    {
      title: "AHC омолаживающий крем AHC Ten Revolution Real Eye Cream",
      description: "Омолаживающий крем для глаз который помогает уменьшить признаки старения вокруг глаз, обеспечивает быстрое впитывание за счет применения ультратонкого метода микроочистки (1/300 размера пор). Коллаген и антиоксиданты помогают защитить кожу. Также рекомендуют использовать крем на линиях смеха, морщинах шеи и лба. Омолаживающий крем для глаз для лица с быстрой впитываемостью и температурно-чувствительной полимерной технологией – отбеливание. Косметика двойного действия против морщин.",
      tags: ["face"],
      price: 48,
      img: "./img/9.jpg",
      rating: 3.8,
    },
    {
      title: "BABOR — SPA Shaping Body Lotion лосьон для тела",
      description: "Легкий, быстро впитывающийся лосьон для тела с натуральными ингредиентами. Элегантный аромат апельсина, мимозы, кедра, амбры и мускуса пробуждают чувства. Быстро впитывается. Укрепляет естественный защитный барьер, обеспечивает здоровый тон и сияние кожи, поддерживает упругость кожи, корректирует проявления целлюлита.",
      tags: ["body"],
      price: 139,
      img: "./img/10.jpg",
      rating: 3.9,
    },
    {
      title: "Dr.Jart+ питательный крем для рук с керамидами Dr.Jart Ceramidin Hand",
      description: "Питательный крем для рук с керамидами содержит керамиды, которые проникнув в глубокие слои кожи, восстанавливают ее, сделав ее эластичной, мягкой, шелковистой.Улучшит хроническую сухость кожи, напитав ее всеми необходимыми витаминами и питательными веществами. Уменьшит аллергические реакции и предупредит раздражения. Предотвратит появление трещин и заусенцы.",
      tags: ["body"],
      price: 48,
      img: "./img/11.jpg",
      rating: 4.5,
    },
    {
      title: "The Ritual of Ayurveda Foaming Shower Gel",
      description: "Эта пенка для душа содержит древние аюрведические ингредиенты, как индийская роза и масло сладкого миндаля, которые придает коже шелковистость и мягкость. Насладитесь поистине гармоничным опытом, комбинируя гель для душа с другими продуктами из той же коллекции.",
      tags: ["body"],
      price: 60,
      img: "./img/12.jpg",
      rating: 4.1,
    },
];

const shopItems = document.querySelector('#shop-items');
const itemTemplate = document.querySelector('#item-template');
const nothingFound = document.querySelector('#nothing-found');

function prepareShopItem(shopItem) {
    const { title, description, tags, img, price, rating } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector('h1').textContent = title;
    item.querySelector('p').textContent = description;
    item.querySelector('img').src = img;
    item.querySelector('.price').textContent = `${price}P`;

    const ratingContainer = item.querySelector('.rating');
    for (let i = 0; i < rating; i++) {
        const star = document.createElement('i');
        star.classList.add('fa', 'fa-star');
        ratingContainer.append(star);
    }

    const tagsHolder = item.querySelector('.tags');
    tags.forEach((tag) => {
        const element = document.createElement('span');
        element.textContent = tag;
        element.classList.add('tag');
        tagsHolder.append(element);
    });

    return item;
}

let currentState = [...items];

function renderItems(arr) {
    nothingFound.textContent = '';
    shopItems.innerHTML = '';

    arr.forEach((item) => {
        shopItems.append(prepareShopItem(item));
    });

    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

function sortByAlphabet (a, b) {
    if (a.title > b.title) {
        return 1;
    }

    if (a.title < b.title) {
        return -1;
    }

    return 0;
}

const sortControl = document.querySelector('#sort');

sortControl.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    switch (selectedOption) {
        case "expensive": {
            currentState.sort((a, b) => b.price - a.price);
            break;
        }

        case "cheap": {
            currentState.sort((a, b) => a.price - b.price);
            break;
        }

        case "rating": {
            currentState.sort((a, b) => b.rating - a.rating);
            break;
        }

        case "alphabet": {
            currentState.sort((a, b) => sortByAlphabet(a, b));
            break;
        }
    }

    renderItems(currentState);
});

const searchInput = document.querySelector('#search-input');
const serachButton = document.querySelector('#search-btn');

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();

    currentState = items.filter((el) => 
        el.title.toLowerCase().includes(searchString)
    );

    currentState.sort((a, b) => sortByAlphabet(a, b));
    sortControl.selectedIndex = 0;

    renderItems(currentState);
}

serachButton.addEventListener('click', applySearch);
searchInput.addEventListener('search', applySearch);