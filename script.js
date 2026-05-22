function calculate() {
    const inputType = document.getElementById("inputType").value;
    const value = parseFloat(document.getElementById("value").value);
    const distance = parseFloat(document.getElementById("distance").value);
    const mode = document.getElementById("mode").value;
    const target = parseFloat(document.getElementById("target").value);
  
    let result = "";
  
    if (inputType === "lw") {
      const Lw = value;
  
      if (mode === "level") {
        const r = distance;
        const Lp = Lw - 20 * Math.log10(r) - 11;
        result = `Niveau à ${r} m = ${Lp.toFixed(1)} dB`;
      }
  
      if (mode === "distance") {
        const Lp = target;
        const r = Math.pow(10, (Lw - Lp - 11) / 20);
        result = `Distance = ${r.toFixed(1)} m`;
      }
    }
  
    if (inputType === "lp") {
      const Lp_ref = value;
      const r_ref = distance;
  
      const Lw = Lp_ref + 20 * Math.log10(r_ref) + 11;
  
      if (mode === "level") {
        const r = distance;
        const Lp = Lw - 20 * Math.log10(r) - 11;
        result = `Niveau = ${Lp.toFixed(1)} dB`;
      }
  
      if (mode === "distance") {
        const Lp_target = target;
        const r = Math.pow(10, (Lw - Lp_target - 11) / 20);
        result = `Distance = ${r.toFixed(1)} m`;
      }
    }
  
    document.getElementById("result").innerText = result;
  }