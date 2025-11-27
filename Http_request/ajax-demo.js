const BASE_URL = "http://localhost:3000/students";

function ajaxRequest(method, url, data = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText ? JSON.parse(xhr.responseText) : {});
            } else {
                reject("Error: " + xhr.status);
            }
        };

        xhr.onerror = () => reject("Network error");
        xhr.send(data ? JSON.stringify(data) : null);
    });
}

function getAllStudents() {
    return ajaxRequest("GET", BASE_URL)
        .then(data => console.log("GET All:", data));
}

function getStudentById(id) {
    return ajaxRequest("GET", `${BASE_URL}/${id}`)
        .then(data => console.log("GET One:", data));
}

function addStudent() {
    return ajaxRequest("POST", BASE_URL, { name: "Aman", score: 78 })
        .then(data => console.log("POST Added:", data));
}

function replaceStudent() {
    return ajaxRequest("PUT", `${BASE_URL}/1`, {
        name: "Ram Updated",
        score: 95
    }).then(data => console.log("PUT Updated:", data));
}

function updateStudentScore() {
    return ajaxRequest("PATCH", `${BASE_URL}/2`, { score: 92 })
        .then(data => console.log("PATCH Updated:", data));
}

function deleteStudent() {
    return ajaxRequest("DELETE", `${BASE_URL}/3`)
        .then(() => console.log("DELETE Done"));
}

async function runAllRequestsAjax() {
    await getAllStudents();
    await getStudentById(1);
    await addStudent();
    await replaceStudent();
    await updateStudentScore();
    await deleteStudent();
}

runAllRequestsAjax();
