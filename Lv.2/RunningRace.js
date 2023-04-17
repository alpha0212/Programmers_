function solution(players, callings) {
  let maps = {};
  for (let i = 0; i < players.length; i++) {
    maps[players[i]] = i;
  }
  callings.forEach((v) => {
    let num = maps[v];
    let temp = players[num - 1];
    players[num - 1] = v;
    players[num] = temp;
    console.log(maps[v]--);
    maps[players[num]]++;
  });
  console.log(
    Object.entries(maps)
      .sort((a, b) => a[1] - b[1])
      .map((v) => v[0])
  );
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
