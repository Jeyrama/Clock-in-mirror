/*
Peter is sitting in his office and can see a clock in the mirror.
He knows that when the clock shows 12:22, the time is 11:38

in the same manner:
  05:25 --> 06:35
  01:50 --> 10:10
  11:58 --> 12:02
  12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), 
where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.
Consider hours to be between 1 <= hour < 13.
So there is no 00:20, instead it is 12:20.
There is no 13:20, instead it is 01:20.
*/


// Solution

let whatIsTheTime = t => {
  let [h, m] = t.split(':');
  h = (+m ? 11 : 12) - h % 12 || 12;
  m = (60 - m) % 60;
  return [h, m].map(e => e > 9 ? e : '0' + e).join(':');
}