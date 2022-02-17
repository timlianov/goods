console.log('GOODS.JS')
document.addEventListener('wpcf7mailsent', function (event) {

  // EMPTYING CART
  function httpGet(theUrl)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

  httpGet("https://angellab.pro/cart?empty-cart");

  ga('send', 'event', 'Contact Form', 'submit');
  console.log('FORM_SUBMIT', event)
  var FACT_INPUTS = event.detail.inputs;
  var answer_index = [
    {
      id: 0,
      question: "Состояние пор",
      cat: "pory",
      answers: [
        "Расширенные",
        "Локально расширенные",
        "Нормальные или узкие"
      ]
    },
    {
      id: 1,
      question: "Ваша кожа по выделению кожного сала - секреции себума",
      cat: "sebum",
      answers: [
        "Очень жирная, жирная. Такая кожа выделяет много кожного сала. Жирный блеск.",
        "Нормальная. Кожа с нормальным выделением кожного сала. Т-зона может немного больше чем остальные зоны выделять себум.",
        "\"Комбинированная: в Т-зоне склонна к жирности, щеки — нормальные или склонны к сухости. Т-зона блестит.\"",
        "Сухая, очень сухая. Кожа выделяет мало себума.",
      ]
    },
    // TODO
    {
      id: 2,
      question: "Склонность",
      cat: "sklon",
      answers: [
        "К жирности",
        "К сухости",
        "Нормальная (жирность или сухость не беспокоит)"
      ]
    },
    {
      id: 3,
      question: "Нужна ли работа с&nbsp;пигментацией? ",
      cat: "pigment",
      answers: [
        "Да, нужна (есть нежелательная пигментация, пигментированные постакне, следы от воспалений).",
        "Работа с пигментацией не требуется.",
      ]
    },
    {
      id: 4,
      question: "Есть ли прыщи и/или&nbsp;комедоны (открытые и/или&nbsp;закрытые)?",
      cat: "komedon",
      answers: [
        "Да, интенсивно.",
        "Не интенсивно, но постоянно.",
        "Бывает время от времени.",
        "Такого нет.",
        "Другое:"

      ]
    },
    {
      id: 5,
      question: "Для оценки барьерных свойств кожи, отметьте, бывает&nbsp;ли&nbsp;у&nbsp;Вас что-либо из&nbsp;перечисленного: стягивание кожи после умывания, шелушение, раздражение, зуд?",
      cat: "barier",
      answers: [
        "Да, бывает часто или постоянно. Барьерные свойства кожи нуждаются в восстановлении.",
        "Бывает редко.",
        "Таких реакций нет.",
      ]
    },
    {
      id: 6,
      question: "Состояние кожи вокруг глаз?",
      cat: "aroundeyes",
      answers: [
        "В целом хорошее состояние кожи вокруг глаз. Требуется качественное питание и увлажнение.",
        "Кожа вокруг глаз нуждается в интенсивном уходе. Заметны морщинки и/или тёмные круги, пигментация.",
      ]
    },
    {
      id: 7,
      question: "Отметьте, с чем нужно поработать в&nbsp;первую очередь",
      cat: "firstwork",
      answers: [
        "Полноценный уход",
        "Уход за кожей рук и/или тела",
        "Здоровый вид кожи, легкое сглаживание тона, &laquo;фокус-эффект&raquo; (рассеивание света с помощью минералов из дневного ухода)",
        "Питание кожи",
        "Увлажнение",
        "Уход после солнца",
        "Покраснения кожи",
        "Шелушение",
        "Очищение пор",
        "Снизить выделения себума",
        "Акне, воспаленные прыщи",
        "Пигментированные постакне",
        "Нежелательная пигментация (пигментные пятна)",
        "Профилактика возрастных изменений: антиоксидантная защита"
      ]
    },
    // {
    //   id: 8,
    //   question: "Есть ли&nbsp;аллергия или&nbsp;нежелательная реакция на&nbsp;компоненты косметики или&nbsp;непереносимость запахов?",
    //   cat: "allerg",
    //   answers: [
    //     "Аллергии нет, ароматы натуральной косметики переносятся хорошо.",
    //     "Да, есть реакция/аллергия или непереносимость запахов, известно на какие компоненты. Укажите, пожалуйста, компоненты в пункте &laquo;Другое&raquo;.",
    //     "цитрусовые",
    //     "лаванда",
    //     "ваниль",
    //     "клубника",
    //     "облепиха",
    //     "куркума",
    //     "имбирь",
    //     "шиповник",
    //     "герань",
    //     "Есть реакция/аллергия или непереносимость запахов, неизвестно на какие компоненты."
    //   ]
    // }
  ]

  var goods = [
    {
      id: "18980",
      name: "Флюид \"Ежедневный уход и очищение\"",
      cat: "wash",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0], // sebum
        [1, 0, 1], // sklon
        [1, 1], // pigment
        [2, 2, 1, 1], // komedon
        [0, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0], // firstwork
        [1, , 1, 0, 1, 1, 1, 1, 1, 1, 1] // allerg
      ]
    },
    {
      id: "19097",
      cat: "wash",
      name: "Флюид \"Ежедневный уход и очищение нежное\"",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 1],// sebum
        [0, 1, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 0], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 0], // firstwork
        [1, , 1, 0, 1, 1, 1, 1, 1, 1, 1] // allerg
      ]
    },
    {
      id: "19099",
      cat: "wash",
      name: "Флюид \"Апельсин\"",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [1, 1], // pigment
        [2, 2, 1, 1], // komedon
        [0, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 1], // firstwork
        [1, , 0, 1, 1, 1, 0, 1, 1, 1, 1] // allerg
      ]
    },

    {
      id: "19102",
      name: "Флюид \"Апельсин нежный\"",
      cat: "wash",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 1],// sebum
        [0, 1, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 0], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], // firstwork
        [1, , 0, 1, 1, 1, 0, 1, 1, 1, 1] // allerg
      ]
    },

    {
      id: "33978",
      name: "Флюид \"С ферментами\"",
      cat: "wash",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [2, 1], // pigment
        [1, 1, 1, 1], // komedon
        [0, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 1, 2, 2, 1], // firstwork
        [1, , 0, 1, 1, 1, 0, 1, 1, 1, 1] // allerg
      ]
    },

    {
      id: "34794",
      name: "Флюид \"С ферментами нежный\"",
      cat: "wash",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 2],// sebum
        [0, 1, 1], // sklon,
        [2, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 0], // barier
        [1, 1], // aroundeyes
        [1, 1, 1, 1, 1, 0, 1, 1, 2, 0, 0, 2, 2, 1], // firstwork
        [1, , 0, 1, 1, 1, 0, 1, 1, 1, 1] // allerg
      ]
    },

    {
      id: "18982",
      cat: "daily-care",
      name: "Флюид \"Дневной\"",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], // firstwork
        [1, , 1, 1, 0, 0, 0, 1, 1, 1, 1] // allerg
      ]
    },

    {
      id: "19088",
      name: "Флюид \"Ночной с СОД\"",
      cat: "serum",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [2, 0], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 0, 1, 2, 1, 1, 1, 2, 2, 2], // firstwork
        [1, , 1, 1, 0, 0, 1, 1, 1, 1, 1] // allerg
      ]
    },

    {
      id: "19026",
      name: "Флюид \"После умывания с пребиотиками и пробиотиками\"",
      cat: "serum",
      compliance: [
        [1, 1, 1], // pory
        [2, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [0, 1], // pigment
        [1, 1, 1, 0], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 0, 1, 0, 1, 0, 2, 2, 2, 0, 0, 0], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "18986",
      name: "Флюид \"с СОД\"",
      cat: "serum",
      compliance: [
        [1, 1, 1], // pory
        [2, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [1, 0], // pigment
        [1, 1, 1, 0], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "26739",
      cat: "serum",
      name: "Флюид \"Регенерация\"",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 2],// sebum
        [1, 1, 1], // sklon,
        [2, 0], // pigment
        [0, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "28934",
      name: "Флюид \"Со стабильным витамином С\"",
      cat: "serum",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [3, 0], // pigment
        [0, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19022",
      name: "Флюид \"Ночной с шиповником\"",
      cat: "serum",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [1, 0], // pigment
        [1, 0, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 0, 1, 0, 1, 0, 1, 2, 1, 1, 1, 0],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19091",
      name: "Флюид \"Ночной с пребиотиками и пробиотиками\"",
      cat: "serum",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [0, 1], // pigment
        [1, 1, 1, 0], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 0, 1, 0, 1, 0, 1, 2, 2, 0, 0, 0],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19110",
      name: "Флюид \"Дневной питательный\"",
      cat: "daily-care",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 2, 0],// sebum
        [0, 1, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19114",
      name: "Флюид \"Дневной экстрапитательный\" (прежнее название \"Дневной для нормальной и сухой кожи\")",
      cat: "daily-care",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 2],// sebum
        [0, 1, 1], // sklon,
        [1, 1], // pigment
        [0, 0, 0, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "18990",
      name: "Флюид \"Ночной деликатный\"",
      cat: "nightly-care",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [0, 2], // pigment
        [0, 0, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 1],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19078",
      name: "Флюид \"Ночной с экстрактом пальмы сабаль\"",
      cat: "nightly-care",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [2, 1], // pigment
        [1, 1, 1, 0], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19082",
      name: "Флюид \"Ночной восстанавливающий\"",
      cat: "nightly-care",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 0],// sebum
        [1, 1, 1], // sklon,
        [1, 1], // pigment
        [0, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19085",
      name: "Флюид \"Ночной Ровный тон\"",
      cat: "nightly-care",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 1],// sebum
        [0, 1, 1], // sklon,
        [2, 1], // pigment
        [0, 0, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "25823",
      name: "Флюид \"Балансирующий\"",
      cat: "around-care",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [0, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "30397",
      name: "Флюид \"Деликатный\"",
      cat: "around-care",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 0],// sebum
        [1, 0, 1], // sklon,
        [0, 1], // pigment
        [0, 0, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19120",
      name: "Флюид \"Для дня и ночи\" (усиленный фитосфингозином)",
      cat: "around-care",
      compliance: [
        [1, 1, 1], // pory
        [0, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [0, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19119",
      name: "Флюид \"Экстрапитательный\" (прежнее название \"День/ночь питательный\")",
      cat: "around-care",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [0, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "26757",
      name: "Флюид \"Вокруг глаз усиленный\"",
      cat: "eyes",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [0, 1], // aroundeyes
        [1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2],
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "26754",
      name: "Флюид \"Вокруг глаз деликатный\"",
      cat: "eyes",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 0], // aroundeyes
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19025",
      name: "Флюид \"Физиологичный\"",
      cat: "pmask",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [0, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },

    {
      id: "19023",
      name: "Флюид \"Очищение и уход\"",
      cat: "cmask",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [1, 0], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 0, 1, 1] // allerg TODO
      ]
    },

    {
      id: "25512",
      name: "Флюид \"Для рук и тела\"",
      cat: "hands",
      compliance: [
        [1, 1, 1], // pory
        [1, 1, 1, 1],// sebum
        [1, 1, 1], // sklon,
        [1, 1], // pigment
        [1, 1, 1, 1], // komedon
        [1, 1, 1], // barier
        [1, 1], // aroundeyes
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // firstwork TODO
        [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1] // allerg TODO
      ]
    },


  ]

  var inputs = [
    {"name": "email-anketa", "value": "lianovt@gmail.com"},
    {
      "name": "age",
      "value": "32"
    },


    //////////////////////////
    {"name": "checkbox-pory[]", "value": "Расширенные"}
    ,

    {
      "name": "checkbox-sebum[]",
      "value": "Нормальная. Кожа с нормальным выделением кожного сала. Т-зона может немного больше чем остальные зоны выделять себум."
    },

    {"name": "checkbox-sklon[]", "value": "К сухости"},

    {
      "name": "checkbox-pigments[]",
      "value": "Да, нужна (есть нежелательная пигментация, пигментированные постакне, следы от воспалений)."
    },


    {"name": "checkbox-kamedons[]", "value": "Бывает время от времени."}, {
      "name": "checkbox-bariers[]",
      "value": "Таких реакций нет."
    },
    {
      "name": "checkbox-aroundeyes[]",
      "value": "В целом хорошее состояние кожи вокруг глаз. Требуется качественное питание и увлажнение."
    },
    {"name": "checkbox-firstwork[]", "value": "Питание кожи"}, {
      "name": "checkbox-firstwork[]",
      "value": "Шелушение"
    },
    {"name": "checkbox-firstwork[]", "value": "Очищение пор"},
    //  {
    //  "name": "checkbox-allerg[]",
    //  "value": "Аллергии нет, ароматы натуральной косметики переносятся хорошо."
    // },


    /////////////////////////

    {"name": "textarea-osobennosti", "value": ""}, {"name": "radio-933", "value": "123"}, {
      "name": "checkbox-fsizes[]",
      "value": "Полноразмерные"
    }, {"name": "checkbox-fsizes[]", "value": "Пробники"}, {"name": "text-gift", "value": ""}, {
      "name": "text-howknow",
      "value": "47387487843"
    }, {"name": "name-1", "value": "43fdfd"}, {
      "name": "name-3",
      "value": "Ваше отчество, можнfdfdо одну букву"
    }, {"name": "name-2", "value": "fd"}, {"name": "text-city", "value": "dfdf"}, {
      "name": "tel-phonecontact",
      "value": "43434"
    }, {"name": "text-messenger", "value": "fsfsfs"}, {"name": "acceptance-anketa", "value": "1"}]


  var inputs2 = [{"name": "email-anketa", "value": "lianovt@gmail.com"}, {
    "name": "age",
    "value": "32"
  }, {"name": "checkbox-pory[]", "value": "Расширенные"}, {
    "name": "checkbox-sebum[]",
    "value": "Нормальная. Кожа с нормальным выделением кожного сала. Т-зона может немного больше чем остальные зоны выделять себум."
  }, {"name": "checkbox-sklon[]", "value": "К жирности"}, {
    "name": "checkbox-pigments[]",
    "value": "Работа с пигментацией не требуется."
  }, {"name": "checkbox-kamedons[]", "value": "Бывает время от времени."}, {
    "name": "checkbox-bariers[]",
    "value": "Бывает редко."
  }, {
    "name": "checkbox-aroundeyes[]",
    "value": "В целом хорошее состояние кожи вокруг глаз. Требуется качественное питание и увлажнение."
  }, {
    "name": "checkbox-firstwork[]",
    "value": "Здоровый вид кожи, легкое сглаживание тона, «фокус-эффект» (рассеивание света с помощью минералов из дневного ухода)"
  }, {"name": "checkbox-firstwork[]", "value": "Уход после солнца"}, {
    "name": "checkbox-firstwork[]",
    "value": "Очищение пор"
  }, {"name": "checkbox-firstwork[]", "value": "Пигментированные постакне"}, {
    "name": "checkbox-allerg[]",
    "value": "Аллергии нет, ароматы натуральной косметики переносятся хорошо."
  }, {"name": "textarea-osobennosti", "value": ""}, {"name": "radio-933", "value": "123"}, {
    "name": "checkbox-fsizes[]",
    "value": "Полноразмерные"
  }, {"name": "checkbox-fsizes[]", "value": "Пробники"}, {"name": "text-gift", "value": ""}, {
    "name": "text-howknow",
    "value": "47387487843"
  }, {"name": "name-1", "value": "43fdfd"}, {
    "name": "name-3",
    "value": "Ваше отчество, можнfdfdо одну букву"
  }, {"name": "name-2", "value": "fd"}, {"name": "text-city", "value": "dfdf"}, {
    "name": "tel-phonecontact",
    "value": "43434"
  }, {"name": "text-messenger", "value": "fsfsfs"}, {"name": "acceptance-anketa", "value": "1"}]


  //                                               1й прогон


  var CATS =[
    "wash",
    "serum",
    "daily-care",
    "nightly-care",
    "around-care",
    "pmask",
    "cmask",
    "eyes"
  ]
  var EMPTY_ANSWERS = [
    [0, 0, 0], // pory
    [0, 0, 0, 0],// sebum
    [0, 0, 0], // sklon,
    [0, 0], // pigment
    [0, 0, 0, 0], // komedon
    [0, 0, 0], // barier
    [0, 0], // aroundeyes
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // firstwork
    [0, , 0, 0, 0, 0, 0, 0, 0, 0, 0] // allerg
  ]


  // вопросы 1го уровня
  var handleInputs = function (is, ai) {
    var RES = EMPTY_ANSWERS
    ai.forEach(function (q) {
      var iIndex = q.id + 2
      var rIndex = null
      q.answers.forEach(function (v, aIndex) {
        var factValue = is[iIndex]['value']
        if (v == factValue) {
          rIndex = aIndex
          RES[q.id][rIndex] = 1
        }
        ai["rIndex"] = rIndex
      })
    })
    return RES
  }


  // вопросы 2го уровня
  var handleFirstWorkInputs = function (is, ai) {
    filteredInputs = []

    var ALL_RES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    is.forEach(function (inp) {
      if (inp['name'] === "checkbox-firstwork[]") filteredInputs.push(inp);
    })

    ai[7].answers.forEach(function (q, qIndex) {
      filteredInputs.forEach(function (fi, aIndex) {
        if (q === fi['value']) {
          ALL_RES[qIndex] = 1
          // ALL_RES.push({res: RES, id: qIndex}) TODO remove
        }
      })
    })

    console.debug('FW_RES', ALL_RES)
    console.debug('FW_FI', filteredInputs)
    console.debug('FW_ANSWERS', ai[7].answers)
    return ALL_RES
  }

  // функция первого прогона для вопросов 1го и 2го уровней - выбрасывает товары из-за несоответствия ("нули")
  var autoCompilation = function (r, gs) {
    gs.forEach(function (t) {
      t.compliance.forEach(function (cat, catId) {
        cat.forEach(function (cri, criId) {

          // часть функции отбора для вопросов 1го уровня
          if (cat !== "firstwork") { // проверяем для всех категорий кроме "Над чем в первую очередь поработать" - для нее отдельная логика ниже
            // console.debug('NOT_FW_CRI', cri)
            // console.debug('NOT_FW_RESULT', r)
            if (cri === 0 && r[catId][criId] === 1) {
              t['complianceResult'] = false
              t['incomplianceCriteria'] = t['incomplianceCriteria'] || []
              t['incomplianceCriteriaHumanReadable'] = t['incomplianceCriteriaHumanReadable'] || []
              t['incomplianceCriteria'].push([catId, criId])
              t['incomplianceCriteriaHumanReadable'].push({
                'question': answer_index[catId]['question'],
                'answer': answer_index[catId]['answers'][criId]
              })
            }
          }


          // часть функции отбора для вопросов 2го уровня
/////////////////////////////// FIRSTWORK  /////////////////////////////////////////////////
          if (cat === "firstwork") {
            console.debug('FW_CRI', cri)
            console.debug('FW_RESULT', r)
            if (cri === 0 && r[catId][criId] > 0) {
              console.debug('FW ZER NOTZERO', cri, r)
              t['complianceResult'] = false
              t['incomplianceCriteria'] = t['incomplianceCriteria'] || []
              t['incomplianceCriteriaHumanReadable'] = t['incomplianceCriteriaHumanReadable'] || []
              t['incomplianceCriteria'].push([catId, criId])
              t['incomplianceCriteriaHumanReadable'].push({
                'question': answer_index[catId]['question'],
                'answer': answer_index[catId]['answers'][criId]
              })
            }
          }

/////////////////////////////// FIRSTWORK END  /////////////////////////////////////////////////


        })
      })
      console.debug(t)
    })
    return gs;
  }




  // отбор вопросов 1го уровня
  var result = handleInputs(FACT_INPUTS, answer_index)

  // отбор вопросов 2го уровня
  var firstworkResult = handleFirstWorkInputs(FACT_INPUTS, answer_index)
  var compiled = autoCompilation(result, goods)

  var yesGoods = []
  var yesGoodsFull = []
  var yesGoodsFullFinal = []
  var yesGoodsFinal = []

  compiled.forEach(function (c) {
    var app = 'NO '
    if (!c['incomplianceCriteria']) {
      yesGoods.push(c['id'])
      yesGoodsFull.push(c)
      app = 'YES '
    }
    console.debug(app + c['id'])
    console.debug(c['name'])
    console.debug(c['incomplianceCriteriaHumanReadable'])
    console.debug('')
  })

  //                                                2й прогон

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }



  var MATCH_BUFFERS = {}

  var exceptCommonDuplicates = function (c) {
    var matchBuffers = {
      "wash": [],
      "serum": [],
      "daily-care": [],
      "nightly-care": [],
      "around-care": [],
      "pmask": [],
      "cmask": [],
      "eyes": []
    }

    var res = result

    c.forEach(function (t) {
      Object.keys(matchBuffers).forEach(function (cat) {
        if (t.cat === cat)
          matchBuffers[cat].push(t)
      })
    })

    // Fill buffers  fix max values
    Object.keys(matchBuffers).forEach(function (cat) {
      matchBuffers[cat + "_max"] = 0
      matchBuffers[cat]["favs"] = []

      matchBuffers[cat].forEach(function (t) {

        res.forEach(function (v, i) {
          t.compliance.forEach(function (j) {
            if (j[i] !== 0) {
              if (matchBuffers[cat + "_max"] < j[i]) {
                matchBuffers[cat + "_max"] = j[i]
              }
            }
          })

          console.debug('T', t)

        })

      })
    })

    // отбор вопросов 1го уровня
    yesGoodsFinal = []
    yesGoodsFullFinal = []
    console.debug('-----------------START FILTER MAX RATE FOR COMMONS--------------------')
    Object.keys(matchBuffers).forEach(function (cat) {
      if (!cat.includes('max')) console.debug('CATEGORY: ' + cat);
      var max = matchBuffers[cat + "_max"]
      if (Array.isArray(matchBuffers[cat])) {

        matchBuffers[cat].forEach(function (t) {
          t.compliance.forEach(function (j) {
            var lMax = getMaxOfArray(j)
            if (lMax === max) {
              console.debug('COMMON_MAX_T', t)
              yesGoodsFinal.push(t.id)
              yesGoodsFullFinal.push(t)
              var newFavs = matchBuffers[cat]['favs']
              newFavs.push(t)
              matchBuffers[cat]['favs'] = newFavs
            }
          })
        })
      }
    })

    MATCH_BUFFERS = matchBuffers
    console.debug(matchBuffers)
    console.debug(yesGoodsFullFinal)
    console.debug(yesGoodsFinal)

    console.debug('-----------------END FILTER MAX RATE FOR COMMONS--------------------')

  }


  var exceptFirstworkDuplicates = function (c) {
    var matchBuffers = MATCH_BUFFERS
    console.debug('MATCH_BUFFERS', MATCH_BUFFERS)
    var res = firstworkResult
    c.forEach(function (t) {
      Object.keys(matchBuffers).forEach(function (cat) {
        if (t.cat === cat) {
          matchBuffers[cat].push(t)
        }
      })
    })


    // Fill buffers  fix max values
    CATS.forEach(function (cat) {
      matchBuffers[cat + "_max"] = 0

      // Replace cats' content with favs from previous step
      matchBuffers[cat] = matchBuffers[cat]["favs"]

      console.debug('CATCAT', cat,  matchBuffers[cat])
      matchBuffers[cat].forEach(function (t) {

        res.forEach(function (v, i) {

          if (t.compliance[7][i] !== 0) {
            if (matchBuffers[cat + "_max"] < t.compliance[7][i]) {
              matchBuffers[cat + "_max"] = t.compliance[7][i]
            }
          }

        })

      })
    })

    console.debug('-----------------START FILTER MAX RATE FOR FIRSTWORK--------------------')

    yesGoodsFinal = []
    yesGoodsFullFinal = []

    Object.keys(matchBuffers).forEach(function (cat) {
      if (!cat.includes('max')) console.debug('CATEGORY: ' + cat);
      var max = matchBuffers[cat + "_max"]
      if (Array.isArray(matchBuffers[cat])) {
        matchBuffers[cat].forEach(function (t) {
          var lMax = getMaxOfArray(t.compliance[7])
          if (lMax === max) {
            console.debug(t)
            // yesGoodsFinal.push(t.id)
            // yesGoodsFullFinal.push(t)
            var newFavs = []
            newFavs.push(t)
            matchBuffers[cat]['favs_final'] = newFavs
          }
        })
      }
    })
    console.debug('-----------------END FILTER MAX RATE FOR FIRSTWORK--------------------')


    console.debug('-----------------START FILTER DUPLICATES FOR FW-------------------')
    Object.keys(matchBuffers).forEach(function (cat) {
      if (!cat.includes('max')) console.debug('CATEGORY: ' + cat);
      var max = matchBuffers[cat + "_max"]
      if (Array.isArray(matchBuffers[cat])) {
        matchBuffers[cat].forEach(function (t) {
          var ft = matchBuffers[cat]['favs_final'][0]
          yesGoodsFinal.push(ft.id)
          yesGoodsFullFinal.push(ft)
        })
      }
    })
    console.debug('MB FINAL!!!', matchBuffers, yesGoodsFullFinal)
    console.debug('-----------------STOP FILTER DUPLICATES FOR FW-------------------')




    //////////////////////// TODO FILTER ZEROS ///////////////////////////////

    console.debug('-----------------START FILTER ZEROS --------------------')
    Object.keys(matchBuffers).forEach(function (cat) {
      if (!cat.includes('max')) console.debug('CATEGORY: ' + cat);
      var max = matchBuffers[cat + "_max"]
      if (Array.isArray(matchBuffers[cat])) {
        matchBuffers[cat].forEach(function (t) {
          t.compliance[7].forEach(function (tc) {
            if (tc === 0) {
              console.debug("ZERO TC", t, tc)
            }
          })
        })
      }
    })
    console.debug('-----------------END FILTER ZEROS--------------------')


  }

  console.debug('YES_GOODS', yesGoodsFull)

  // отбор вопросов 1го уровня
  exceptCommonDuplicates(yesGoodsFull)
  // отбор вопросов 2го уровня
  exceptFirstworkDuplicates(yesGoodsFull)

  var FINAL = Array.from(new Set(yesGoodsFinal))

  var app = ''
  if (yesGoods.length > 0) {
    app = FINAL.join(',')
  }
  var URL = 'https://angellab.pro/cart?fill_cart=' + app
  console.debug('URL', URL)
  window.open(URL)
}, false);
