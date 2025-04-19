const contentData = {
    ideas: `
      <h2>Ідеї для розробки</h2>
      <ul>
        <li>🌠 Створи космічну гру з процедурною генерацією.</li>
        <li>🤖 Зроби симулятор ШІ-персонажа.</li>
        <li>🎨 Розроби гру з редактором рівнів для гравців.</li>
      </ul>
    `,
    resources: `
      <h2>Корисні ресурси</h2>
      <ul>
        <li><a href="https://itch.io" target="_blank">Itch.io — платформа для інді-ігор</a></li>
        <li><a href="https://opengameart.org" target="_blank">OpenGameArt — безкоштовна графіка та звуки</a></li>
        <li><a href="https://github.com" target="_blank">GitHub — репозиторії проєктів</a></li>
      </ul>
    `,
    quotes: `
      <h2>Натхнення</h2>
      <blockquote>"Гра — це серйозна справа." — Клод Шеннон</blockquote>
      <blockquote>"Найкращі ігри — ті, які надихають на створення нових."</blockquote>
      <blockquote>"Твори світ, у якому сам хочеш грати."</blockquote>
    `
  };
  
  function reveal(sectionId) {
    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach(section => section.style.display = 'none');
  
    const selected = document.getElementById(sectionId);
    if (selected) {
      selected.style.display = 'block';
    }
  }
  