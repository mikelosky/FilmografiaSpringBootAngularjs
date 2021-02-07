'use strict';
 
angular.module('filmografy').controller('CaseController', ['$scope',  '$location', 'CaseService', function($scope, $location, CaseService) {
    var self = this;
    self.user={id_cas_prod:null,nome:'',anno_fondazione:'',sede_principale:'',img:''};
    self.users=[];
    
    self.idkey=$location.search();
    
    self.pass = pass;
    self.findId = findId;
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
 
 
    fetchAllUsers();
    
 
    function fetchAllUsers(){
        CaseService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
 
    function createUser(user){
        CaseService.createUser(user)
            .then(
                fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }
 
    function updateUser(user, id){
        CaseService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }
 
    function deleteUser(id){
        CaseService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }
 
    function submit() {
        if(self.user.id_cas_prod===null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
            updateUser(self.user, self.user.id);
            console.log('User updated with id ', self.user.id);
        }
        reset();
    }

    function findId(id) {
    	console.log('id to be find', id);
        CaseService.findId(id)
            .then(
            function(d) {
                self.user = d;
            },
            function(errResponse){
                console.error('Error while fetching User by id');
            }
        );        
    }
    
    function pass(id){
    	self.idsafe = id;
    	$location.path('/modcasaprod/').search({idkey: id});
    }
 
    function edit(){
    	fetchAllUsers();
    	var id = self.idkey.idkey;
    	findId(id);
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id == id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.user.id === id) {//clean form if the user to be deleted is shown there.
            self.reset();
        }
        deleteUser(id);
    }
 
 
    function reset(){
        self.user={id_cas_prod:null,nome:'',anno_fondazione:'',sede_principale:'',img:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);