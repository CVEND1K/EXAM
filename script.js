const tools = [
  {
    name: "Unity",
    desc: "Рушій для 2D/3D ігор з підтримкою C#.",
    full: "Unity — рушій, який підтримує понад 25 платформ. Має великий набір інструментів для AR/VR, мобільних та інді-ігор.",
    images: ["img/unity.png"]
  },
  {
    name: "Unreal Engine",
    desc: "Потужний рушій із неймовірною графікою.",
    full: "Unreal Engine створено Epic Games. Використовується в AAA-іграх, фільмах та симуляціях. Підтримує C++, Blueprints та Nanite-технологію.",
    images: ["img/ue.png"]
  },
  {
    name: "Godot",
    desc: "Open-source рушій для 2D/3D ігор.",
    full: "Godot — гнучкий рушій із власною мовою GDScript. Має вбудований редактор, простий інтерфейс і підтримку C#.",
    images: ["img/Godot.png"]
  },
  {
    name: "GameMaker Studio",
    desc: "Ідеальний для 2D-ігор і новачків.",
    full: "GameMaker дозволяє створювати 2D ігри з мінімальним кодуванням. Має простий Drag&Drop редактор і підтримує GML.",
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
    full: "Blender — безкоштовна програма для створення 3D-моделей, анімацій і візуальних ефектів. Інтегрується з Unity/Unreal.",
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
}

function closeModal() {
  document.getElementById("tool-modal").classList.add("hidden");
}

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact-text").textContent = "🎮 " + facts[random];
}

window.onload = () => {
  loadTools();
};
