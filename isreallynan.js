//come up with an alternate test because isNan() ain't working

function isReallyNaN(val) {
    return val != val;
  };

function easierAnswerToIsReallyNaN(x){
    Number.isNaN(x)
}