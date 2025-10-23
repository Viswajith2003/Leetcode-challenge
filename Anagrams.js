function areAnagrams(s1, s2) {
    let newS1 = s1.split("").sort().join("");
    let newS2 = s2.split("").sort().join("");

    if(newS1 === newS2){
      return true;
    }
}

console.log(areAnagrams("tan", "ant"));
