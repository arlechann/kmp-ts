type Index = number;

export const KMP = (text: string) => {
  const createNext = (pattern: string): Index[] => {
    const next = [...Array(pattern.length + 1)];
    next[0] = 0;
    for (let i = 0, j = 0; i < pattern.length; i++) {
      next[i + 1] = j;
      if (pattern[i + 1] === pattern[j]) {
        j++;
      } else {
        j = 0;
      }
    }
    return next;
  };

  const find = (pattern: string): Index | undefined => {
    const next = createNext(pattern);
    for (let i = 0, j = 0; i < text.length ; ) {
      if (text[i] === pattern[j]) {
        i++;
        j++;
      } else if (j === 0) {
        i++;
      } else {
        j = next[j];
      }

      if(j === pattern.length) {
        return i - j;
      }
    }
    return undefined;
  };

  const findAll = (pattern: string): Index[] => {
    const next = createNext(pattern);
    const ret = []
    for (let i = 0, j = 0; i < text.length ; ) {
      if (text[i] === pattern[j]) {
        i++;
        j++;
      } else if (j === 0) {
        i++;
      } else {
        j = next[j];
      }

      if(j === pattern.length) {
        ret.push(i - j);
        j = next[j]
      }
    }
    return ret;
  };

  return {
    text,
    length: text.length,
    find,
    findAll,
  };
};
