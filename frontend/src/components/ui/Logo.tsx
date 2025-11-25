interface LogoProps {
  src?: string;
  alt?: string;
}

export const Logo = ({ src, alt = 'Rentmote Logo' }: LogoProps) => {
  const logoSrc = src || '/logo-rentmote.png';
  
  return (
    <div className="flex justify-center mb-2">
      <div className="w-24 h-24 flex items-center justify-center rounded-xl">
        <img 
          src={logoSrc} 
          alt={alt} 
          className="w-full h-full object-contain rounded-xl" 
        />
      </div>
    </div>
  );
};

