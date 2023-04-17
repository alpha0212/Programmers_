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
  //   var test = 0;
  //   var temp = null;
  //   var len = 0;
  //   callings.map((name) => {
  //     len = name.filter((element) => `${name}` === element).length;
  //     test = players.indexOf(name, 0);
  //     temp = players[test - len];
  //     players[test - len] = players[test];
  //     players[test] = temp;
  //   });
  //   console.log(players);
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
