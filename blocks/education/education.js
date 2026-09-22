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

      if (period) period.classList.add('education-period');

      const card = document.createElement('div');
      card.className = 'education-card';

      if (degree) {
        degree.classList.add('education-degree');
        card.append(degree);
      }

      if (institution) {
        institution.classList.add('education-institution');
        card.append(institution);
      }

      row.append(card);
      items.append(row);
    });

    block.append(items);
  }
}