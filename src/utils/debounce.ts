type DebounceFunction = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number,
) => (...args: T) => void;

export const debounce: DebounceFunction = (callback, delay) => {
  let timer: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};
