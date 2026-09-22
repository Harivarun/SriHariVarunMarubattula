export default function decorate(block) {
  const rows = [...block.children];

  block.innerHTML = '';

  rows.forEach((row) => {
    const cols = [...row.children];
    const item = document.createElement('div');
    item.classList.add('education-item');

    const period = document.createElement('div');
    period.classList.add('education-period');
    period.innerHTML = cols[0]?.innerHTML || '';

    const card = document.createElement('div');
    card.classList.add('education-card');

    const degree = document.createElement('div');
    degree.classList.add('education-degree');
    degree.innerHTML = cols[1]?.innerHTML || '';

    const institution = document.createElement('div');
    institution.classList.add('education-institution');
    institution.innerHTML = cols[2]?.innerHTML || '';

    card.append(degree, institution);
    item.append(period, card);
    block.append(item);
  });
}
