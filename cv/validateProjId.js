
const validateProjId = function(projectId) {
    const isProjectIdValid = /^\d{5}-\d{3}$/g.test(projectId)
        
    if (projectId && !(isProjectIdValid) ) {
        return false;
        //setProjectIdError('Follow proper format (e.g. 47181-005)')
    }
    return true;
};

module.exports = validateProjId;
