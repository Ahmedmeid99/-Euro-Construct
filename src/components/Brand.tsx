function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`} aria-label="Euro Construct for Contracting">
      <img className="brand-logo" src="/ecc-logo-transparent.png" alt="Euro Construct for Contracting" />
    </div>
  );
}

export default Brand;
