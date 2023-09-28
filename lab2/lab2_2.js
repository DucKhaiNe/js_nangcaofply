function convertVariables() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    const outputDiv = document.getElementById('output');

    lines.forEach(line => {
      const words = line.split('_');
      let camelCase = words[0];
      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        camelCase += word.charAt(0).toUpperCase() + word.slice(1);
      }
      
      const checkmarks = '✅'.repeat(camelCase.length);
      const result = `${camelCase} ${checkmarks}`;
      
      const p = document.createElement('p');
      p.textContent = result;
      outputDiv.appendChild(p);
    });
  }