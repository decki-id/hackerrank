export default function aVeryBigSum() {
  "use strict"

  /*
  * Complete the "aVeryBigSum" function below.
  *
  * The function is expected to return a LONG_INTEGER.
  * The function accepts LONG_INTEGER_ARRAY ar as parameter.
  */

  function aVeryBigSum(ar) {
    // Write your code here
    function sum(total, num) { return total + num }
    return ar.reduce(sum)
  }

  function main(inputString) {
    const ar = inputString.split(" ").map(arTemp => parseInt(arTemp, 10))
    console.log(aVeryBigSum(ar))
  }

  process.stdout.write("Insert 5 long integer numbers separated by a space: ")
  process.stdin.resume()
  process.stdin.setEncoding("utf-8")
  process.stdin.on("data", function (input) {
    main(input.trim())
    process.stdout.write("\nInsert 5 long integer numbers separated by a space: ")
  })
}