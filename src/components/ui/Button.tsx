"use client";

import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-(--color-primary) text-(--color-primary-foreground) hover:opacity-90 focus:ring-2 focus:ring-(--color-primary)/50',
    secondary: 'bg-(--color-secondary) text-(--color-secondary-foreground) hover:opacity-90 focus:ring-2 focus:ring-(--color-secondary)/50',
    outline: 'border border-(--color-border) bg-transparent text-(--color-foreground) hover:bg-(--color-muted) focus:ring-2 focus:ring-(--color-border)'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <HeadlessButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;