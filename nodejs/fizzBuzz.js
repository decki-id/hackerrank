export default function fizzBuzz() {
  process.stdout.write("Insert a number: ")
  process.stdin.resume()
  process.stdin.setEncoding("utf-8")
  process.stdin.on("data", function (input) {
    for (let i = 1; i <= parseInt(input); i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
      } else if (i % 3 === 0) {
        console.log("Fizz")
      } else if (i % 5 === 0) {
        console.log("Buzz")
      } else { console.log(i) }
    }
    process.stdout.write("\nInsert a number: ")
  })
}