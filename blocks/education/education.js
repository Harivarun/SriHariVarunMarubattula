export default function decorate(block) {
  const rows = [...block.children];
  const [eyebrow, title, ...itemRows] = rows;

  if (eyebrow) eyebrow.classList.add('education-eyebrow');
  if (title) title.classList.add('education-title');

  if (itemRows.length) {
    const items = document.createElement('div');
    items.className = 'education-items';

    itemRows.forEach((row) => {
      const cells = [...row.children];
      const [period, degree, institution] = cells;

      row.classList.add('education-item');
      row.innerHTML = '';

      if (period) {
        period.classList.add('education-period');
        row.append(period);
      }

      const card = document.createElement('div');
      card.className = 'education-card';

      const addCardCell = (cell, className) => {
        if (!cell) return;
        cell.classList.add(className);
        card.append(cell);
      };

      addCardCell(degree, 'education-degree');
      addCardCell(institution, 'education-institution');

      row.append(card);
      items.append(row);
    });

    block.append(items);
  }
}
