export const capitalize = (section: string) => {
  const words = section.split(' ');

  return words
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

export const formatName = (name: string) => {
  const newName = name.replace(/-/g, ' ').replace(/.md/, '');
  return capitalize(newName);
};
