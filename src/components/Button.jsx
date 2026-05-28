import React from 'react';

export function Button({ children, variant = 'solid', className = '', icon: Icon, onClick }) {
    const base =
        'inline-flex h-11 items-center justify-center gap-2 border px-5 text-sm font-black uppercase tracking-wide transition duration-200 focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-coal';
    const styles =
        variant === 'solid'
            ? 'border-rust bg-rust text-white hover:bg-ember'
            : 'border-rust/70 bg-white/5 text-rust hover:border-white hover:text-white';

    return (
        <button className={`${base} ${styles} ${className}`} type="button" onClick={onClick}>
            {children}
            {Icon && <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />}
        </button>
    );
}
