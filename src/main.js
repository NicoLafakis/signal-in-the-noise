import './style.css';

// Expandable accordion
document.querySelectorAll('.expandable-header').forEach((header) => {
  header.addEventListener('click', () => {
    const el = header.closest('.expandable');
    el.classList.toggle('open');
  });
});

// Reveal on scroll + animate metric bars
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.metric-bar-fill').forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((r) => revealObserver.observe(r));

// Trigger bars when the bar section enters view
const barSection = document.getElementById('bar-section');
if (barSection) {
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          document.querySelectorAll('.metric-bar-fill').forEach((bar) => {
            bar.style.width = bar.dataset.width + '%';
          });
        }
      });
    },
    { threshold: 0.2 }
  );
  barObserver.observe(barSection);
}
