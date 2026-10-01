export default function decorate(block) {
  const rows = [...block.children];
  const [firstRow, secondRow, ...restRows] = rows;

  if (firstRow && firstRow.children.length > 1 && rows.length === 1) {
    const items = document.createElement('div');
    items.className = 'education-items';

    const row = firstRow;
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
    block.append(items);
    return;
  }

  if (firstRow) firstRow.classList.add('education-eyebrow');
  if (secondRow) secondRow.classList.add('education-title');

  const itemRows = restRows.length ? restRows : rows.slice(1);

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
