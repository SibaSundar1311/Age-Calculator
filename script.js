function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob) {
        const dobDate = new Date(dob);
        const now = new Date();
        let ageYears = now.getFullYear() - dobDate.getFullYear();
        let ageMonths = now.getMonth() - dobDate.getMonth();
        let ageDays = now.getDate() - dobDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.getElementById('result').innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    } else {
        document.getElementById('result').innerText = 'Please enter your date of birth.';
    }
}
function resetCalculator() {
    document.getElementById('dob').value = '';
    const resultElement = document.getElementById('result');
    resultElement.innerText = '';
    resultElement.classList.remove('visible');
}
