import { Link } from '@tanstack/react-router';

interface BrandProps {
  light?: boolean;
  onClick?: () => void;
}

function Brand({ light = false, onClick }: BrandProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`brand-link group ${light ? 'brand-light' : ''}`}
      aria-label="Euro Construct for Contracting"
    >
      <img
        className="brand-logo"
        src="/ecc-logo-transparent.png"
        alt="Euro Construct for Contracting"
        width={414}
        height={98}
      />
    </Link>
  );
}

export default Brand;
