// comple nameSpace is diffrent 
var nameSpace_Stud;
(function (nameSpace_Stud) {
    function Fee(num) {
        return num;
    }
    nameSpace_Stud.Fee = Fee;
})(nameSpace_Stud || (nameSpace_Stud = {}));
