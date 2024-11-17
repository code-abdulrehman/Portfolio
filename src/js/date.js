document.addEventListener('DOMContentLoaded', function() {
    const outputElement = document.querySelector('.startAt');

    try {
        // Parse the input date
        const inputDate = new Date("April 20, 2024");
        if (isNaN(inputDate)) throw new Error("Invalid date format");

        // Get the current date
        const currentDate = new Date();

        // Calculate year, month, and day differences
        let years = currentDate.getFullYear() - inputDate.getFullYear();
        let months = currentDate.getMonth() - inputDate.getMonth();
        let days = currentDate.getDate() - inputDate.getDate();

        // Adjust months and years if necessary
        if (days < 0) {
            months -= 1;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Get days of the previous month
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Format the output
        let output = '';
        if (years > 0) output += `${years} year${years > 1 ? 's' : ''} `;
        if (months > 0) output += `${months} month${months > 1 ? 's' : ''} `;
        if (days > 0) output += `${days} day${days > 1 ? 's' : ''}`;
        if (!output) output = '0 days';

        // Display the result
        outputElement.textContent = `Difference: ${output}`;
    } catch (error) {
        outputElement.textContent = error.message;
    }
});
