// Sample data array
const sampleData = [
    { metric: "Speed", value: "120 km/h" },
    { metric: "Fuel Usage", value: "5.2 L/100km" },
    { metric: "Lap Time", value: "1:34.56" },
    { metric: "Tire Pressure", value: "32 PSI" }
];

// Function to display sample data in the table
function displaySampleData() {
    const table = document.querySelector("table");
    
    sampleData.forEach(data => {
        const row = document.createElement("tr");
        
        const metricCell = document.createElement("td");
        metricCell.textContent = data.metric;
        row.appendChild(metricCell);
        
        const valueCell = document.createElement("td");
        valueCell.textContent = data.value;
        row.appendChild(valueCell);
        
        table.appendChild(row);
    });
}

// Call function to display data
document.addEventListener("DOMContentLoaded", displaySampleData);
