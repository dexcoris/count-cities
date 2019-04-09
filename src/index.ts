const testData = [
  { id: 1, name: "Vilnius" },
  { id: 27, name: "Kaunas" },
  { id: 27, name: "Kaunas" },
  { id: 3, name: "Klaipeda" },
  { id: 41, name: "Barcelona" },
  { id: 41, name: "Barcelona" },
  { id: 41, name: "Barcelona" }
];

const testResultData = testData
  .reduce((data, item) => {
    const index = item.id;
    if (index in data) {
      data[index]["count"]++;
    } else {
      data[index] = { count: 1 };
    }
    data[index] = { ...data[index], ...item };
    return data;
  }, [])
  .filter(item => item !== undefined);

console.log(testResultData);

const html = testResultData.map(
  item =>
    `<p>(${item.id}) <strong>${item.name}</strong> is ranking ${item.count}</p>`
);

document.getElementById("app").innerHTML = html.join("");
