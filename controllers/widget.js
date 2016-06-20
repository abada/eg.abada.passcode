var args = arguments[0] || {};
var animation = require('alloy/animation');
console.log(args)

var code = "";
var codeLength = 0;
var cc = [];

var onSuccess = null;

exports.setOnSuccess = function(cb) {
  onSuccess = cb;
};

function setCode(c) {

  code = c.toString()//c.toString().split('');
  codeLength = c.length;

}

exports.setCode = function(c) {

console.log('setCode '+c)
  setCode(c);
  UI_setCodeLength();
};


function UI_setCodeLength() {


  _.each($.oks.children || [], function($c) {
    $.oks.remove($c);
  });


  for (var i = 0; i < codeLength; i++) {

    $.oks.add(Ti.UI.createLabel({
      text: "-",
      //top: 20,
      width: 20,
      left: (i==0)?0:30,
      color: '#aaacb1',
      font: {
        fontSize: 35,
        fontWeight: 'bold'
      }

    }));
  }
}


function UI_reset() {
  cc = [];
  _.each($.oks.children, function($c) {
    $c.text = "-";

  });


}



$.mask.addEventListener('touchstart', function(e) {
  if (e.source.n == null) return;

  e.source.backgroundColor = '#ccc';

  if (cc.length >= codeLength) return;
  cc.push(parseInt(e.source.n, 10));

  $.oks.children[cc.length - 1].text = e.source.n;




  console.log(cc)

  if (cc.length == codeLength) {
    console.log(cc.join("") + " : " + code)
    if (cc.join("") == code) {

      if (_.isFunction(onSuccess)) onSuccess();
    } else {
      animation.shake($.oks,1000,function(){
        UI_reset();
      })


    }

  }





});

$.mask.addEventListener('touchend', function(e) {

  if (e.source.n == null) return;
  e.source.backgroundColor = '#fff';
});

$.deleteBtn.addEventListener('click', function(e) {

  if (cc.length > 0) {
    $.oks.children[cc.length - 1].text = '-';
    cc.pop();
  }

});





if (args.code != null) {
  exports.setCode(args.code.toString());
}
