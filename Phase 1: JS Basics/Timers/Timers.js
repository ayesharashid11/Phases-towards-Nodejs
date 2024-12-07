// after 4 seconds
const delay = delay => {
    console.log('Hello after ' + delay + ' seconds');
  };
  setTimeout(delay, 4 * 1000, 4);
  // after Every 3 seconds repeating execution
  // setInterval(
  //     () => console.log('Hello every 3 seconds'),
  //     3000
  //   );
    // A call to setTimeout returns a timer “ID” and you can use that timer ID with a clearTimeout call to cancel that timer. Here’s an example:
  
  const timerId = setTimeout(
    () => console.log('You will not see this one!'),
    2
  );
  clearTimeout(timerId);
  
  function de_lay (){
    for(i=0; i<=5 ; i++){
      setTimeout(() => console.log(i), 1000);
      setInterval()
    }
    console.log('done');
  }
  delay();
  