function lengthOfLastWord(s: string): number {
    const parsedS = s.trim();
    const words = parsedS.split(" ");
    const lastWord = words[words.length - 1];
  
    return lastWord.length;
  }
  