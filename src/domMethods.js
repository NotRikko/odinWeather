function displayWeatherInfo(data) {
    for(const category in data ) {
        const categoryDiv = document.createElement("div");
        categoryDiv.setAttribute("class", "categoryDiv");

        if(typeof data[category] === 'object') {
            for(const categoryData in data[category]) {
                const categoryDataDiv = document.createElement("div");
                categoryDataDiv.textContent = `${category}.${categoryData}: ${data[category][categoryData]}`;
                categoryDiv.appendChild(categoryDataDiv);
            }
        } else {
            const categoryDataDiv = document.createElement("div");
            categoryDataDiv.textContent = `${category}: ${data[category]}`;
            categoryDiv.appendChild(categoryDataDiv);
        }
    document.body.appendChild(categoryDiv);
    }

}

export {displayWeatherInfo}