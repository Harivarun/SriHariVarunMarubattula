export default function decorate(block) {
  const rows = [...block.children];
  const [eyebrow, title, ...itemRows] = rows;

  if (eyebrow) eyebrow.classList.add('experience-eyebrow');
  if (title) title.classList.add('experience-title');

  if (itemRows.length) {
    const items = document.createElement('div');
    items.className = 'experience-items';

    itemRows.forEach((row) => {
      const cells = [...row.children];
      const [period, role, company, technologies, summary] = cells;

      row.classList.add('experience-item');

      if (period) period.classList.add('experience-period');

      const card = document.createElement('div');
      card.className = 'experience-card';

      if (role) {
        role.classList.add('experience-role');
        card.append(role);
      }

      if (company) {
        company.classList.add('experience-company');
        card.append(company);
      }

      if (technologies) {
        technologies.classList.add('experience-technologies');
        card.append(technologies);
      }

      if (summary) {
        summary.classList.add('experience-summary');
        card.append(summary);
      }

      row.append(card);
      items.append(row);
    });

    block.append(items);
  }
}
