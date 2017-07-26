let run = function(mat1) {
  "use strict";

  let getMatrixIndex = function(i, j) {
    return row * i + j
  };

  let getMatrixML = function(name, mat)
  {
    let ml = '';
    ml += name + ' = \\left(\n'
    ml += '\\begin{array}{';
    for(let i = 0; i < col; i++) {
      ml += 'c';
    }
    ml += '}\n';
    for(let i = 0; i < row; i++) {
      ml += mat.slice(i * row, i * row + col).map(function(x){ return x.toFixed(3); }).join(' & ');
      if(i === row - 1) {
        ml += ' \n'
      } else {
        ml += ' \\\\\n'
      }
    }
    ml += '\\end{array}\n';
    ml += '\\right)\n';
    return ml;
  };

  let createMessageElement = function(tag, message)
  {
    let el = document.createElement(tag);
    el.textContent = message;
    return el;
  }

  let createMathElement = function()
  {
    let ml = '\\[\n' + getMatrixML('mat1', mat1) + ',' + getMatrixML('mat2', mat2) + '\\]\n'; 
    let el = document.createElement('div');
    el.classList.add('math-block');
    el.textContent = ml;

    return el;
  }

  let createIdentity = function() {
    let mat = [];
    for(let i = 0; i < row; i++) {
      for(let ii = 0; ii < col; ii++) {
        mat.push(i === ii ? 1 : 0);
      }
    }

    return mat;
  };

  let n = Math.floor(Math.sqrt(mat1.length));
  let row = n;
  let col = n;
  let mat2 = createIdentity();

  let parent = document.querySelector('#result');
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  parent.appendChild(createMessageElement('h3', "初期状態"));
  parent.appendChild(createMathElement());

  // 前進消去
  parent.appendChild(createMessageElement('h3', "前進消去"));
  for(let i = 0; i < row; i++) {
    // ピボット選択
    let pivot = i;

    for(let ii = i + 1; ii < row; ii++) {
      if (Math.abs(mat1[getMatrixIndex(ii, i)]) > Math.abs(mat1[getMatrixIndex(pivot, i)])) {
        pivot = ii;
      }
    }

    if(pivot !== i) {
      for(let ii = 0; ii < col; ii++) {
        let i1 = getMatrixIndex(i, ii);
        let i2 = getMatrixIndex(pivot, ii);

        let tmp1 = mat1[i1];
        mat1[i1] = mat1[i2];
        mat1[i2] = tmp1;

        let tmp2 = mat2[i1];
        mat2[i1] = mat2[i2];
        mat2[i2] = tmp2;
      }

      parent.appendChild(createMessageElement('h4', (i + 1) + '行目と' + (pivot + 1) + '行目を入れ替える'));
      parent.appendChild(createMathElement());
    }

    let s1 = mat1[getMatrixIndex(i, i)];

    if(!s1) {
      MathJax.Hub.Typeset();
      parent.appendChild(createMessageElement('h4', '対角成分の選択中にエラーが発生しました'));
      return;
    }

    for(let ii = i + 1; ii < row; ii++) {
      let s2 = mat1[getMatrixIndex(ii, i)];
      let s = s2 / s1;
      for(let iii = 0; iii < col; iii++) {
        let a = getMatrixIndex(ii, iii);
        let b = getMatrixIndex(i, iii);
        mat1[a] -= mat1[b] * s;
        mat2[a] -= mat2[b] * s;
      }

      parent.appendChild(createMessageElement('h4', (ii + 1) + '行目から' + (i + 1) + '行目を' + s.toFixed(3) + '倍したものを引く'));
      parent.appendChild(createMathElement());
    }
  }

  // 後退代入
  parent.appendChild(createMessageElement('h3', "後退代入"));
  for(let i = row - 1; i >= 0; i--) {
    let s1 = 1.0 / mat1[getMatrixIndex(i, i)];
    for(let ii = i - 1; ii >= 0; ii--) {
      let s2 = mat1[getMatrixIndex(ii, i)];
      let s = s1 * s2;

      for(let iii = 0; iii < col; iii++) {
        let a = getMatrixIndex(ii, iii);
        let b = getMatrixIndex(i, iii);
        mat1[a] -= mat1[b] * s;
        mat2[a] -= mat2[b] * s;
      }

      parent.appendChild(createMessageElement('h4', (ii + 1) + '行目から' + (i + 1) + '行目を' + s.toFixed(3) + '倍したものを引く'));
      parent.appendChild(createMathElement());
    }

    let s = mat1[getMatrixIndex(i, i)]

    for(let ii = 0; ii < col; ii++) {
      let a = getMatrixIndex(i, ii);
      mat1[a] /= s;
      mat2[a] /= s;
    }

    parent.appendChild(createMessageElement('h4', (i + 1) + '行目を' + s.toFixed(3) + 'で割る'));
    parent.appendChild(createMathElement());
  }

  MathJax.Hub.Typeset();
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#mat1').value = window.location.hash.slice(1);
  document.querySelector('#run').addEventListener('click', function() {
    let mat1 = document.querySelector('#mat1').value.trim().split(/[,\s]+/).map(function(x){return parseFloat(x);});
    window.location.hash = mat1.join(',');
    run(mat1);
  });
  
  window.addEventListener('hashchange', function() {
    document.querySelector('#mat1').value = window.location.hash.slice(1);
  });
});
