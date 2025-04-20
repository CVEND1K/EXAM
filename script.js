const tools = [
  {
    name: "Unity",
    desc: "Рушій для 2D/3D ігор з підтримкою C#.",
    full: "Unity — багатоплатформовий інструмент для розроблення відеоігор і застосунків, і рушій, на якому вони працюють. Створені за допомогою Unity програми працюють на настільних комп'ютерних системах, мобільних пристроях та гральних консолях у дво- та тривимірній графіці, та на пристроях віртуальної чи доповненої реальності. Застосунки, створені за допомогою Unity, підтримують DirectX та OpenGL.",
    images: ["img/unity.png"]
  },
  {
    name: "Unreal Engine",
    desc: "Потужний рушій із неймовірною графікою.",
    full: "Unreal Engine створено Epic Games. Використовується в AAA-іграх, фільмах та симуляціях. Підтримує C++, Blueprints та Nanite-технологію.Написаний мовою програмування C++, рушій дає змогу створювати ігри для більшості операційних систем і платформ таких як Microsoft Windows, Linux, Mac OS і Mac OS X, і консолей: Xbox, Xbox 360, PlayStation 2, PlayStation Portable, PlayStation 3, Wii, Dreamcast і Nintendo GameCube. У грудні 2009 Марк Рейн продемонстрував як працює рушій Unreal Engine 3 на iPod Touch і iPhone 3GS[5]. А у березні 2010 робота рушія була продемонстрована на комунікаторі Palm Pre, що базується на мобільній платформі webOS[6].",
    images: ["img/ue.png"]
  },
  {
    name: "Godot",
    desc: "Open-source рушій для 2D/3D ігор.",
    full: "Godot — гнучкий рушій із власною мовою GDScript. Має вбудований редактор, простий інтерфейс і підтримку C#.Відкритий багатоплатформовий 2D та 3D гральний рушій під ліцензією MIT, що розробляється співавторством Godot Engine Community. До публічного релізу у вигляді відкритого ПЗ рушій використовувався всередині деяких компаній Латинської Америки.[2] Середовище розробки працює на Windows, Linux, OS X, BSD і Haiku та може експортувати ігрові проєкти на ПК, консолі, мобільні та веб платформи.",
    images: ["img/Godot.png"]
  },
  {
    name: "GameMaker Studio",
    desc: "Ідеальний для 2D-ігор і новачків.",
    full: "GameMaker дозволяє створювати 2D ігри з мінімальним кодуванням. Має простий Drag&Drop редактор і підтримує GML.GameMaker: Studio дозволяє писати розширення під безліч платформ на відповідних їм мовами. Підтримуються наступні типи файлів розширень: gml всюди, dll-бібліотеки на Windows, Windows Phone, Xbox One, js-скрипти для HTML5, so-бібліотеки на Linux і Tizen, dylib-бібліотеки на Mac, prx на PS4, suprs на PSVita, а також спеціальні placeholder для iOS і Android . Є можливість створити проксі-розширення для проектів на багатьох платформах, що дозволяє використовувати однакові назви функцій в коді, але звертатися до бібліотек відповідної платформи.",
    images: ["img/gamemaker.png"]
  },
  {
    name: "Construct",
    desc: "Візуальний рушій для 2D ігор без коду.",
    full: "Construct — ідеальний вибір для тих, хто не програмує. Має логічний інтерфейс, підтримку HTML5 та експорту на Android/iOS.",
    images: ["img/Construct.png"]
  },
  {
    name: "Blender",
    desc: "3D-моделювання для ігор та анімації.",
    full: "Blender — безкоштовна програма для створення 3D-моделей, анімацій і візуальних ефектів. Інтегрується з Unity/Unreal.Особливостями пакету є малий розмір, висока швидкість рендерингу, наявність версій для багатьох операційних систем — FreeBSD, GNU/Linux, Mac OS X, SGI Irix 6.5, Sun Solaris 2.8 (sparc), Microsoft Windows, SkyOS, MorphOS та Pocket PC. Пакет має такі функції, як симуляція динаміки твердих тіл (Rigid Body), рідин (Liquid simulation) та м'яких тіл (Soft body), редагування матеріалів і геометрії за принципом вузлів (Nodes), велику кількість легко доступних розширень, написаних мовою Python.",
    images: ["img/Blender.png"]
  }
];

const facts = [
  "Першою відеогрою вважається «Tennis for Two» (1958 рік).",
  "Minecraft — одна з найуспішніших інді-ігор усіх часів.",
  "Геймери — це не лише діти: середній вік гравця — 34 роки.",
  "Unreal Engine використовують навіть у кіноіндустрії для створення віртуальних сцен.",
  "Unity підтримує розробку для доповненої реальності (AR) і віртуальної реальності (VR)."
];

function loadTools() {
  const container = document.getElementById("tool-container");
  tools.forEach((tool, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${tool.name}</h3><p>${tool.desc}</p>`;
    card.addEventListener("click", () => showModal(index));
    container.appendChild(card);
  });
}

function showModal(index) {
  const modal = document.getElementById("tool-modal");
  const content = document.getElementById("modal-content");
  const tool = tools[index];

  let logo = `<img src="${tool.images[0]}" alt="${tool.name} logo" style="max-width: 150px; margin: 20px 0;">`;

  content.innerHTML = `
    <h2>${tool.name}</h2>
    ${logo}
    <p>${tool.full}</p>
    <button onclick="closeModal()">Закрити</button>`;

  modal.classList.remove("hidden");
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("tool-modal");
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300); // Після анімації сховати
}

function showFact() {
  const factText = document.getElementById("fact-text");
  const random = Math.floor(Math.random() * facts.length);
  factText.textContent = "🎮 " + facts[random];

  factText.style.opacity = 0;
  setTimeout(() => {
    factText.style.opacity = 1;
  }, 100);
}

window.onload = () => {
  loadTools();
  const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
};
// Закриття модального вікна свайпом або тачем
let touchStartY = 0;
let touchEndY = 0;

function handleTouchStart(e) {
  touchStartY = e.changedTouches[0].screenY;
}

function handleTouchEnd(e) {
  touchEndY = e.changedTouches[0].screenY;
  handleGesture();
}

function handleGesture() {
  const swipeDistance = touchEndY - touchStartY;
  if (swipeDistance > 80) {
    closeModal();
  }
}

// Підключення до модального вікна
const modal = document.getElementById("tool-modal");
modal.addEventListener("touchstart", handleTouchStart, false);
modal.addEventListener("touchend", handleTouchEnd, false);

