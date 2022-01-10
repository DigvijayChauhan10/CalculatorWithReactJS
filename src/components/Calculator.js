import React, {useState} from "react";

export default function Calculator() {
  
    const [value, setvalue] = useState('');

    const handleDisplay=(e)=>{
        setvalue(value+e.target.value);
    }
    const handleClear=(e)=>{
        setvalue('');
    }
    const handleDelete=(e)=>{
        setvalue(value.substr(0,value.length -1 ));
    }
    const handleEqual=(e)=>{
        setvalue(eval(value));
    }
    return (
    <>
      <form className="fo" action="">
        <input type="text" value={value}  className="item1" id="output" placeholder="0" readOnly/>

        <button type="button" onClick={handleClear} value="C" className="item st">
          C
        </button>
        <button type="button" onClick={handleDelete} value="DEL" className="item st">
          DEL
        </button>
        <button type="button" onClick={handleDisplay} value="/" className="item st">
          /
        </button>
        <button type="button" onClick={handleDisplay} value="*" className="item st">
          X
        </button>

        <button type="button" onClick={handleDisplay} value="7" className="item">
          7
        </button>
        <button type="button" onClick={handleDisplay} value="8" className="item">
          8
        </button>
        <button type="button" onClick={handleDisplay} value="9" className="item">
          9
        </button>
        <button type="button" onClick={handleDisplay} value="-" className="item st">
          -
        </button>

        <button type="button" onClick={handleDisplay} value="4" className="item">
          4
        </button>
        <button type="button" onClick={handleDisplay} value="5" className="item">
          5
        </button>
        <button type="button" onClick={handleDisplay} value="6" className="item">
          6
        </button>
        <button type="button" onClick={handleDisplay} value="+" className="item st">
          +
        </button>

        <button type="button" onClick={handleDisplay} value="1" className="item">
          1
        </button>
        <button type="button" onClick={handleDisplay} value="2" className="item">
          2
        </button>
        <button type="button" onClick={handleDisplay} value="3" className="item">
          3
        </button>
        <button type="button" onClick={handleEqual} className="equal" value="=">
          =
        </button>
        <button type="button" onClick={handleDisplay} className="zero" value="0" >
          0
        </button>

        <button type="button" onClick={handleDisplay} value="." className="item">
          .
        </button>
      </form>
    </>
  );
}
