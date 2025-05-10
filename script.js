// Function to find case-insensitive index of the first occurrence of subStr in str
function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Find the index of the first occurrence of subStr in str
  return lowerStr.indexOf(lowerSubStr);
}

// Add event listener to the "Find Index" button
document.getElementById('findIndexBtn').addEventListener('click', function() {
  const str = document.getElementById('strInput').value;
  const subStr = document.getElementById('subStrInput').value;
  
  // Call the function to find the index
  const result = indexOfIgnoreCase(str, subStr);
  
  // Display the result
  if (result === -1) {
    document.getElementById('result').textContent = "Index: Not Found";
  } else {
    document.getElementById('result').textContent = `Index: ${result}`;
  }
});
