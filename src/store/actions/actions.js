export const loading = () => {
    return {
      type: "LOADING"
    };
  };
export const countUPAsnc = (val) =>
{return {type: "COUNT-UP",value:val};};
export const countUP = val =>
{return dispach =>{ dispach(loading());
    setTimeout(() => {
        dispach(countUPAsnc(val));
      }, 100);
    };
  };
export const countDOWN = (val) =>
{return {type: "COUNT-DOWN",value:val};};