interface NavbarItemProps {
  href: string;
  label: string;
}

export function NavbarItem({ href, label }: NavbarItemProps) {
  return (
    <li>
      <a
        href={href}
        class="transition-colors duration-200 hover:text-(--accent-primary) focus:text-(--accent-primary) focus:outline-none"
      >
        {label}
      </a>
    </li>
  );
}
