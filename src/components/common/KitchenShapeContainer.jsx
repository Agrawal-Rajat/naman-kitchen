import React from 'react';

/**
 * KitchenShapeContainer
 * A visual container wrapper applying modular-kitchen-inspired architectural shapes:
 * - 'chimney': Tapered overhead chimney hood silhouette with top accent trim
 * - 'l-counter': Asymmetric L-shaped countertop corner radius with dual-material bottom bar
 * - 'drawer-face': Cabinet drawer face with horizontal brass pull accent
 * - 'cabinet': Double-framed Shaker-style cabinet door panel
 * - 'backsplash': Ceramic tile grid texture background
 */
export default function KitchenShapeContainer({
  shape = 'cabinet',
  children,
  className = '',
  bgClassName = 'bg-white',
  ...props
}) {
  const getShapeClass = () => {
    switch (shape) {
      case 'chimney':
        return 'shape-chimney';
      case 'l-counter':
        return 'shape-l-counter';
      case 'drawer-face':
        return 'shape-drawer-face';
      case 'cabinet':
        return 'shape-cabinet';
      case 'backsplash':
        return 'shape-backsplash';
      default:
        return 'rounded-3xl border border-black/10 shadow-subtle';
    }
  };

  if (shape === 'cabinet') {
    return (
      <div className={`shape-cabinet ${className}`} {...props}>
        <div className={`shape-cabinet-inner ${bgClassName}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${getShapeClass()} ${bgClassName} ${className}`} {...props}>
      {children}
    </div>
  );
}
