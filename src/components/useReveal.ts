import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => reveal.observe(element));
    return () => reveal.disconnect();
  }, []);
}

export default useReveal;
