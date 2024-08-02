import React from "react";

type CustomButtonProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  children: string | JSX.Element;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: React.FC<CustomButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const defaultClasses =
    `inline-flex text-black font-semibold cursor-pointer items-center justify-center px-3 py-2 text-md font-medium bg-yellow-500 rounded-lg hover:bg-zinc-100 transform hover:-translate-y-1 transition ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:hover:bg-white dark:hover:text-black dark:border-white shadow-lg shadow-orange-900 hover:shadow-lg hover:shadow-gray-500`;

    // previous dark hover style dark:hover:border-white dark:hover:border

  return (
    <button
      className={`${defaultClasses} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
};

export default CustomButton;
