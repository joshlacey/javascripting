var a = 1, b = 2, c = 3;

// var firstFunction = () => {
//   var b = 5, c = 6;
//   var secondFunction = () => {
//     var b = 8;
//     console.log("a: "+a+", b: "+b+", c: "+c);
//     var thirdFunction = () => {
//       var a = 7, c = 9;
//       var fourthFunction = () => {
//         var a = 1, c = 8;
//       };
//     };
//   };
// };
(function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
             console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;


                 })();
             })();
         })();
     })();
