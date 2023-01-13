export const stopPropagation = (e: React.MouseEvent) => {
  e.stopPropagation();
  e.nativeEvent.preventDefault();
};
