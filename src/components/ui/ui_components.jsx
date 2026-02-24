// src/components/ui/card.jsx

export function Card({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

// src/components/ui/button.jsx

export function Button({ children, className, ...props }) {
  return <button className={className} {...props}>{children}</button>;
}