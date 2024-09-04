import { MenuIcon, XIcon } from 'lucide-react';

interface MenuActionProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function MenuAction({ isOpen, handleOpen, handleClose }: MenuActionProps) {
  return !isOpen ? (
    <MenuIcon onClick={handleOpen} className="size-8 text-accent" />
  ) : (
    <XIcon onClick={handleClose} className="relative z-50 size-8 text-accent" />
  );
}