document.getElementById("checkVoterBtn").addEventListener("click", function () {
  
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");

  if (!name || !age || isNaN(age)) {
    alert("Please enter a valid name and age.");
    return;
  }

  age = parseInt(age);
  let eligibility = (age >= 18) ? "Yes, can vote" : "No, cannot vote";

  let tableHTML = `
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Eligibility</th>
      </tr>
      <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${eligibility}</td>
      </tr>
    </table>
  `;

  document.getElementById("result").innerHTML = tableHTML;
});
