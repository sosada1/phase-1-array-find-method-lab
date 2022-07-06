const record = [ 
  {year: '2015', result: 'W'},
  {year: '2014', result: 'N/A'}, 
  {year: '2013', result: 'L'}
]

function superbowlWin(record){
  let superbowlWin = record.find(record => record.result === 'W');
  if (superbowlWin){
    return superbowlWin.year
  }
 
}



    
