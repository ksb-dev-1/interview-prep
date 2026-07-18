export function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const words = str.split(" ");

  let capitalizedWords = "";

  for (let i = 0; i < words.length; i++) {
    capitalizedWords +=
      words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  const hashTag = "#" + capitalizedWords;

  return hashTag.length > 140 ? false : hashTag;
}
