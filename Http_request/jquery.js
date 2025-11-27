// BASE URL
const BASE_URL = "http://localhost:3000/students";

// Helper Function using jQuery AJAX
function ajaxRequest(method, url, data = null) {
    return $.ajax({
        url: url,
        method: method,
        contentType: "application/json",
        data: data ? JSON.stringify(data) : null
    });
}

// 1. GET All Students
function getAllStudents() {
    return ajaxRequest("GET", BASE_URL)
        .then(data => console.log("GET All:", data));
}

// 2. GET Student by ID
function getStudentById(id) {
    return ajaxRequest("GET", `${BASE_URL}/${id}`)
        .then(data => console.log("GET One:", data));
}

// 3. POST - Add Student
function addStudent() {
    return ajaxRequest("POST", BASE_URL, { name: "Aman", score: 78 })
        .then(data => console.log("POST Added:", data));
}

// 4. PUT - Replace Entire Student
function replaceStudent() {
    return ajaxRequest("PUT", `${BASE_URL}/1`, {
        name: "Ram Updated",
        score: 95
    })
    .then(data => console.log("PUT Updated:", data));
}

// 5. PATCH - Update Only Score
function updateStudentScore() {
    return ajaxRequest("PATCH", `${BASE_URL}/2`, { score: 92 })
        .then(data => console.log("PATCH Updated:", data));
}

// 6. DELETE - Remove Student
function deleteStudent() {
    return ajaxRequest("DELETE", `${BASE_URL}/3`)
        .then(() => console.log("DELETE Done"));
}

// Run All API Calls Step-by-Step
async function runAllRequests() {
    await getAllStudents();
    await getStudentById(1);
    await addStudent();
    await replaceStudent();
    await updateStudentScore();
    await deleteStudent();
}

runAllRequests();
