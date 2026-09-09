export default function decorate(block) {
  const rows = [...block.children];

  const eyebrow = rows[0];
  const title = rows[1];
  const role = rows[2];
  const description = rows[3];
  const actions = rows[4];

  if (eyebrow) {
    eyebrow.classList.add('hero-eyebrow');
  }

  if (title) {
    title.classList.add('hero-title');
  }

  if (role) {
    role.classList.add('hero-role');
  }

  if (description) {
    description.classList.add('hero-description');
  }

  if (actions) {
    actions.classList.add('hero-actions');
  }
}
