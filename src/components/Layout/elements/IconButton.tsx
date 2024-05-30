interface IconButtonProps {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}

export default function IconButton({ icon, onClickIcon = () => {} }: IconButtonProps) {
  return (
    <div
      onClick={onClickIcon}
      className="w-[36px] h-[36px] cursor-pointer hover:bg-[rgba(144,144,144,144)] flex justify-center items-center rounded-full"
    >
      {icon}
    </div>
  );
}