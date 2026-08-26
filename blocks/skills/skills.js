export default function decorate(block) {
  const rows = [...block.children];
  const [eyebrow, title, ...cardRows] = rows;

  if (eyebrow) eyebrow.classList.add('skills-eyebrow');
  if (title) title.classList.add('skills-title');

  if (cardRows.length) {
    const cards = document.createElement('div');
    cards.className = 'skills-cards';
    cardRows.forEach((row) => {
      row.classList.add('skills-card');
      cards.append(row);
    });
    block.append(cards);
  }
}
