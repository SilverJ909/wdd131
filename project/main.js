const kana = [
    {
        character: "一",
        pic_alt: "One",
        on:["ichi(イチ)", "i'(イッ)"],
        kun:["hito(ひと)", "hito-tsu(ひとつ)"],
        image: "images/ichi.png",
        english: "one"
    },
    {
        character:"二",
        pic_alt: "Two",
        on:["ni(ニ)"],
        kun:["futa(ふた)", "futa-tsu(ふたつ)"],
        image: "images/ni.png",
        english: "two"
    },
    {
        character:"三",
        pic_alt: "Three",
        on:["san(サン)"],
        kun:["mi(み)", "mi(t)-tsu(み（っ）つ)"],
        image: "images/san.png",
        english: "three"
    },
    {
        character:"四",
        pic_alt: "Four",
        on:["shi(シ)"],
        kun:["yo(よ)", "yo(t)-tsu(よ（っ）つ)", "yon(よん)"],
        image: "images/shi.png",
        english: "four"
    },
    {
        character:"五",
        pic_alt: "Five",
        on:["go(ゴ)"],
        kun:["itsu(いつ)", "itsu-tsu(いつつ)"],
        image: "images/go.png",
        english: "five"
    },
    {
        character:"人",
        pic_alt: "Person",
        on:["jin(ジン)","nin(ニン)"],
        kun:["hito(ひと)"],
        image: "images/hito.png",
        english: "person"
    },
    {
        character:"今",
        pic_alt: "Now",
        on:["kon(コン)","kin(キン)"],
        kun:["ima(いま)"],
        image: "images/ima.png",
        english: "now"
    },
    {
        character:"日",
        pic_alt: "Sun or Day",
        on:["nichi(ニチ)", "jitsu(ジツ)"],
        kun:["hi(ひ)", "ka(か)"],
        image: "images/jitsu.png",
        english: "sun/day"
    },
    {
        character:"水",
        pic_alt: "Water",
        on:["sui(スイ)"],
        kun:["mizu(みず)"],
        image: "images/mizu.png",
        english: "water"
    }
] 

let characterContainer = document.querySelector('main');
let button = document.querySelector('.search-button');

button.addEventListener('click', search);

function search() {
    let characterQuery = document.querySelector('.search-input').value;

    let filterKana = kana.filter(function(kanjiKana){
        return ( 
            kanjiKana.english.toLowerCase().includes(characterQuery.toLowerCase())
            );
    });

        console.log(filterKana);

        let sortedKana = filterKana.sort(compareKana);

        function compareKana(a,b) {
            const strEnglishA = a.english.toLowerCase();
            const strEnglishB = b.english.toLowerCase();
            const search = characterQuery.toLowerCase();

            if (strEnglishA === search)
            {
                return -1;
            }
            if (strEnglishB === search)
            {
                return 1;
            }

            const aEngIncludes = strEnglishA.includes(search);
            const bEngIncludes = strEnglishB.includes(search);

            if (aEngIncludes && !bEngIncludes) 
            {
                return -1;
            }
            if (!aEngIncludes && bEngIncludes)
            {
                return 1;
            }
        }

        characterContainer.innerHTML = '';
        sortedKana.forEach(function(character) {
            renderCharacter(character);
        })
    }

let randomNum = Math.floor(Math.random() * kana.length);

function readingTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
}


function characterTemplate(character) {
    return `<div class="character">
            <img src="${character.image}" alt="Character for ${character.pic_alt}">
            <p>Kanji: ${character.character}</p>            
            <p>On'yomi: ${readingTemplate(character.on)}</p>      
            <p>Kun'yomi: ${readingTemplate(character.kun)}</p>   
            <p>English: ${character.english}</p>       
        </div>`
}

function renderCharacter(character) {
    let html = characterTemplate(character);
    characterContainer.innerHTML += html;
}