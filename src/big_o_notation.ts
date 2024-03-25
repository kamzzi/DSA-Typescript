/*
 *    BIG O notation, time and space complexity.
 *
 *    Big O notation, from which you can learn about our alternative algorithm, code in a way that is understandable to every programmer.
 *    You can program us with one symbol and number of operations, a description that concerns the user's time
 *    and location in the memory of our algorithm.
 *
 *    We can always write our solution to a problem in many different ways.
 *    Our solution is not always the fastest and most efficient. Big O will help us show what our code is.
 *
 *    What does the notation look like?
 *
 *    O(Here we mark what our code looks like in terms of time or memory complexity.)
 *    We can define this in several ways, such as "constant","linear","logarithm".
 *
 *    O(1) - constant
 *    O(n) - linear
 *    O(log(n)) - logarithm
 *
 *    We determine what is inside O based on the number of operations that our program must perform.
 *
 *    For some exercises you can go to https://gist.github.com/jhwheeler/995dab35210c550b51b3b4160933a541.
 *
 *    Big O also allows us to describe what memory complexity looks like. This is how much memory our program needs for our solution.
 *    Whether the variables are of simple type or complex type (arrays, objects). Based on this, it calculates the amount of memory.
 * 
 *    It is also important that when counting our operations, if we count e.g. 3 of them, we do not mark it as O(3), it is not correct.
 *    We simply denote O(1). Same with loops, just O(n), not O(10n+50)
   
      EXAMPLE

      const sumToNum=(num:number) => {
        let sum = 0;

        for(let i=0;i<num;i++){
            sum+=i;
        }

        return sum;
      }

      Time complexity - O(n)
      Space complexity - O(1)

*/
