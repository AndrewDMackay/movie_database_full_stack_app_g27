const baseURL = 'http://localhost:5000/api/users/'

export const getUserReview = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postUserReview = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(res => res.json())
}

export const deleteUserReview = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateUserReview = (payload, id) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(res => res.json())
}