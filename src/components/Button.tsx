"use client";
import { FC } from "react";
import { IconType } from "react-icons/lib";

interface IButton {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<IButton> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-75 disabled:cursor-not-allowed rounded-lg hover:opacity-80
       transition w-full ${
         outline ? "bg-transparent border-gray-100" : "bg-btn border-btn"
       } ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-base font-semibold border-2"
      }`}
    >
      {Icon ? <Icon className="absolute left-4 top-3" /> : null}
      {label}
    </button>
  );
};

export default Button;
