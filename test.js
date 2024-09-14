function findThreeNumbers(t, testCases) {
    for (let i = 0; i < t; i++) {
      const n = testCases[i].n;
      const arr = testCases[i].arr;
  
      // Separate odd and even numbers with their positions
      let odd = [];
      let even = [];
  
      for (let j = 0; j < n; j++) {
        if (arr[j] % 2 === 0) {
          even.push(j + 1); // Storing index (1-based)
        } else {
          odd.push(j + 1);  // Storing index (1-based)
        }
      }
  
      if (odd.length >= 3) {
        console.log("YES");
        console.log(odd[0], odd[1], odd[2]);
      } else if (odd.length >= 1 && even.length >= 2) {
        console.log("YES");
        console.log(odd[0], even[0], even[1]);
      } else {
        console.log("NO");
      }
    }
  }
  
  // Example Usage
  const t = 2;
  const testCases = [
    { n: 4, arr: [1, 2, 3, 4] },
    { n: 3, arr: [1, 1, 1] }
  ];
  
  findThreeNumbers(t, testCases);