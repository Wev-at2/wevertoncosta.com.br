export function toggleContent() {
    const moreContent = document.getElementById('more-content');
    const readButton = document.getElementById('read-button');
    if (moreContent.classList.contains('hidden')) {
      moreContent.classList.remove('hidden');
      readButton.textContent = 'Leia menos...';
    } else {
      moreContent.classList.add('hidden');
      readButton.textContent = 'Leia mais...';
    }
  }