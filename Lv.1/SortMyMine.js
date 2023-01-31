function solutions(strings, n) {
  return strings.sort((str1, str2) =>
    str1[n] === str2[n]
      ? str1.localCompare(str2)
      : str1[n].localCompare(str2[n])
  );
}
