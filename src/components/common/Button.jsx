import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component with smooth gradient hover transition.
 * 
 * Variants:
 * - 'primary': Deep Naman Indigo with smooth Indigo-to-Red gradient morph on hover
 * - 'accent': Vibrant Red with warm Gold-to-Red gradient morph
 * - 'outline': Clean border with subtle gradient overlay reveal
 * - 'ghost': Transparent with subtle hover wash
 * 
 * Supports both button actions and internal/external routing links.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const sizeClasses = {
    sm: 'pl-4 pr-5 py-2 text-xs',
    md: 'pl-6 pr-7 py-3 text-sm tracking-wide',
    lg: 'pl-7 pr-8 py-3.5 text-base tracking-wider',
  }[size] || 'pl-6 pr-7 py-3 text-sm';

  const variantClasses = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'bg-transparent text-[var(--color-espresso)] hover:bg-[rgba(45,43,96,0.06)] hover:text-[var(--color-naman-indigo)]',
  }[variant] || 'btn-primary';

  const combinedClasses = `btn-magnetic ${variantClasses} ${sizeClasses} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  }`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
