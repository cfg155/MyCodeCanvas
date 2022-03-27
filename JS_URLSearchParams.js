const getEducationList = (
    limit = 10,
    sortBy = 'asc',
    sortParam = 'createdAt',
    page = 1,
    studentId
  ) => {
    const params = new URLSearchParams({
        limit,
        sortBy,
        sortParam,
        page,
        studentId
    })
    return `facebook.com/data?${params}`
}

console.log(getEducationList(10,'asc','createdAt',1,123456))
