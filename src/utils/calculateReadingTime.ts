export const calculateReadingTime = (content: string, wordsPerMinute = 200) => {
  const words = content.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime;
};
