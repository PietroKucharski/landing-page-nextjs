type AvatarTitle = {
  children: React.ReactNode;
};

export const AvatarTitle = ({ children }: AvatarTitle) => {
  return <strong className="text-body-sm text-gray-200">{children}</strong>;
};
