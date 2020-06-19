function setTrigo(){
  var pythUnknowns = [
    [3, 4, 5],[5, 12, 13], [7, 24, 25], [8, 15, 17], [9, 40, 41], [11, 60, 61], [12, 35, 37], [20, 21, 29], [28, 45, 53]
  ];
  var range = [["$0^{\\circ}<\\theta<90^{\\circ}$", "$\\theta$\xa0 lies in quadrant I"], ["$90^{\\circ}<\\theta<180^{\\circ}$", "$\\theta$\xa0 lies in quadrant II"], ["$180^{\\circ}<\\theta<270^{\\circ}$", "$\\theta$\xa0 lies in quadrant III"], ["$270^{\\circ}<\\theta<360^{\\circ}$", "$\\theta$\xa0 lies in quadrant IV"]]
  var unknown = getRndInteger(0, 8);
  var quadrant = getRndInteger(1, 4);
  var givenTrigo = getRndInteger(1, 3);
  var sign = "-";
  if(quadrant==1 || (quadrant==2 && givenTrigo == 1) || (quadrant==3 && givenTrigo == 3) || (quadrant==4 && givenTrigo == 2))
    var sign = "";
  var thetaRange = range[quadrant-1][0];

  if (givenTrigo == 1)
    var question = document.createTextNode("Given that " + "sin $\\theta = " + sign + " \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$" + ", where " + thetaRange + ", find the values of cos $\\theta$ and tan $\\theta$.");
    else if (givenTrigo == 2)
      var question = document.createTextNode("Given that " + "cos $\\theta = " + sign + " \\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$" + ", where " + thetaRange + ", find the values of sin $\\theta$ and tan $\\theta$.");
      else
        var question = document.createTextNode("Given that " + "tan $\\theta = " + sign + " \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$" + ", where " + thetaRange + ", find the values of sin $\\theta$ and cos $\\theta$.");


  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("question").appendChild(x);

   var x = document.createElement("div");
   if(givenTrigo==1){
     x.appendChild(document.createTextNode("$\\because$ " + range[quadrant-1][0])); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\therefore$ " + range[quadrant-1][1])); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("Let \xa0$P(x, y)$\xa0 be a point on the terminal side of \xa0$\\theta$\xa0 and \xa0$OP=r$ .")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\because$ sin $\\theta = \\frac{y}{r} = \\frac{" + sign + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\therefore$ Let \xa0$y = " + sign + pythUnknowns[unknown][0] + "$ \xa0and\xa0 $r =  " + pythUnknowns[unknown][2] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{x^2+y^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$" + pythUnknowns[unknown][2] + " = \\sqrt{x^2+(" + sign + pythUnknowns[unknown][0] + ")^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$" + pythUnknowns[unknown][2] + "^2 = x^2+(" + sign + pythUnknowns[unknown][0] + ")^2$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$x^2 = " + (pythUnknowns[unknown][2]*pythUnknowns[unknown][2]-pythUnknowns[unknown][0]*pythUnknowns[unknown][0]) + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
        if (quadrant == 1 || quadrant == 4)
          {x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$x = " + pythUnknowns[unknown][1] + "$ \xa0or\xa0 $x = -" + Math.sqrt(pythUnknowns[unknown][2]*pythUnknowns[unknown][2]-pythUnknowns[unknown][0]*pythUnknowns[unknown][0]) + "$ (rejected)")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
            else if (quadrant == 2 || quadrant == 3)
              {x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$x = " + pythUnknowns[unknown][1] + "$ (rejected) \xa0or\xa0 $x = -" + Math.sqrt(pythUnknowns[unknown][2]*pythUnknowns[unknown][2]-pythUnknowns[unknown][0]*pythUnknowns[unknown][0]) + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                    if (quadrant == 1)
                        {x.appendChild(document.createTextNode("$\\therefore$ cos $\\theta = \\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                          else if (quadrant == 2)
                            {x.appendChild(document.createTextNode("$\\therefore$ cos $\\theta = - \\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = - \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                            else if (quadrant == 3)
                              {x.appendChild(document.createTextNode("$\\therefore$ cos $\\theta = -\\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                              else if (quadrant == 4)
                                {x.appendChild(document.createTextNode("$\\therefore$ cos $\\theta = \\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
   }

   if(givenTrigo==2){
     x.appendChild(document.createTextNode("$\\because$ " + range[quadrant-1][0])); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\therefore$ " + range[quadrant-1][1])); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("Let \xa0$P(x, y)$\xa0 be a point on the terminal side of \xa0$\\theta$\xa0 and \xa0$OP=r$ .")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\because$ cos $\\theta = \\frac{x}{r} = \\frac{" + sign + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\therefore$ Let \xa0$x = " + sign + pythUnknowns[unknown][1] + "$ \xa0and\xa0 $r =  " + pythUnknowns[unknown][2] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{x^2+y^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$" + pythUnknowns[unknown][2] + " = \\sqrt{(" + sign + pythUnknowns[unknown][1] + ")^2 + y^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$" + pythUnknowns[unknown][2] + "^2 = (" + sign + pythUnknowns[unknown][1] + ")^2 + y^2$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$y^2 = " + (pythUnknowns[unknown][2]*pythUnknowns[unknown][2]-pythUnknowns[unknown][1]*pythUnknowns[unknown][1]) + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
        if (quadrant == 1 || quadrant == 2)
          {x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$y = " + pythUnknowns[unknown][0] + "$ \xa0or\xa0 $y = -" + Math.sqrt(pythUnknowns[unknown][2]*pythUnknowns[unknown][2]-pythUnknowns[unknown][1]*pythUnknowns[unknown][1]) + "$ (rejected)")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
            else if (quadrant == 3 || quadrant == 4)
              {x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$y = " + pythUnknowns[unknown][0] + "$ (rejected) \xa0or\xa0 $y = -" + Math.sqrt(pythUnknowns[unknown][2]*pythUnknowns[unknown][2]-pythUnknowns[unknown][1]*pythUnknowns[unknown][1]) + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                    if (quadrant == 1)
                        {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                          else if (quadrant == 2)
                            {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                            else if (quadrant == 3)
                              {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                              else if (quadrant == 4)
                                {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, tan $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
   }

   if(givenTrigo==3){
     x.appendChild(document.createTextNode("$\\because$ " + range[quadrant-1][0])); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("$\\therefore$ " + range[quadrant-1][1])); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     x.appendChild(document.createTextNode("Let \xa0$P(x, y)$\xa0 be a point on the terminal side of \xa0$\\theta$\xa0 and \xa0$OP=r$ .")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
     if(quadrant == 1){
      x.appendChild(document.createTextNode("$\\because$ tan $\\theta = \\frac{y}{x} = \\frac{"  + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==2){
        x.appendChild(document.createTextNode("$\\because$ tan $\\theta = \\frac{y}{x} = \\frac{" + pythUnknowns[unknown][0] + "}{-" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==3){
        x.appendChild(document.createTextNode("$\\because$ tan $\\theta = \\frac{y}{x} = \\frac{-" + pythUnknowns[unknown][0] + "}{-" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==4){
        x.appendChild(document.createTextNode("$\\because$ tan $\\theta = \\frac{y}{x} = \\frac{-" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][1] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }

     if(quadrant == 1){
       x.appendChild(document.createTextNode("$\\therefore$ Let \xa0$x = " + pythUnknowns[unknown][1] + "$ \xa0and\xa0 $y =  " + pythUnknowns[unknown][0] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==2){
        x.appendChild(document.createTextNode("$\\therefore$ Let \xa0$x = -" + pythUnknowns[unknown][1] + "$ \xa0and\xa0 $y =  " + pythUnknowns[unknown][0] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==3){
        x.appendChild(document.createTextNode("$\\therefore$ Let \xa0$x = -" + pythUnknowns[unknown][1] + "$ \xa0and\xa0 $y =  -" + pythUnknowns[unknown][0] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==4){
        x.appendChild(document.createTextNode("$\\therefore$ Let \xa0$x = " + pythUnknowns[unknown][1] + "$ \xa0and\xa0 $y = - " + pythUnknowns[unknown][0] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }

     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{x^2+y^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));

     if(quadrant == 1){
       x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{(" + pythUnknowns[unknown][1] + ")^2+(" + pythUnknowns[unknown][0] + ")^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==2){
        x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{(-" + pythUnknowns[unknown][1] + ")^2+(" + pythUnknowns[unknown][0] + ")^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==3){
        x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{(" + pythUnknowns[unknown][1] + ")^2+(-" + pythUnknowns[unknown][0] + ")^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }
      else if(quadrant ==4){
        x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = \\sqrt{(-" + pythUnknowns[unknown][1] + ")^2+(-" + pythUnknowns[unknown][0] + ")^2}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));
      }

     x.appendChild(document.createTextNode("\xa0\xa0\xa0\xa0$r = " + pythUnknowns[unknown][2] + "$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));

                    if (quadrant == 1)
                        {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, cos $\\theta = \\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                          else if (quadrant == 2)
                            {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = \\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, cos $\\theta = -\\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                            else if (quadrant == 3)
                              {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, cos $\\theta = - \\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
                              else if (quadrant == 4)
                                {x.appendChild(document.createTextNode("$\\therefore$ sin $\\theta = -\\frac{" + pythUnknowns[unknown][0] + "}{" + pythUnknowns[unknown][2] + "}$, cos $\\theta = -\\frac{" + pythUnknowns[unknown][1] + "}{" + pythUnknowns[unknown][2] + "}$")); x.appendChild(document.createElement("br")); x.appendChild(document.createElement("br"));}
   }


   x.setAttribute("style", "margin-top:30px");
   document.getElementById("answers").appendChild(x);
   document.getElementById("answers").style.color = "white";
}

// returns H.C.F. of x and y
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// returns a random integer between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}

function showAnswers(){
  document.getElementById("answers").style.color = "black";
}
