


function validateCostInput(costInput){
    if(isNaN(costInput)){
      return console.log('Error must enter a valid number.');
    } else if(costInput <= 0 || costInput > 5000){
          return console.log('Error must enter a in range 1-5000.');

      } else {
         costInput = Math.round(costInput * 100) / 100;
         return costInput;
      }
    }

module.exports = {validateCostInput};
