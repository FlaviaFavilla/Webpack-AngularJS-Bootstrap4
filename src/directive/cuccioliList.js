import * as _ from 'lodash'

const template = /*html*/`
    <p ng-click="cambia()"  ng-repeat="cucciol in cuccioli track by $index">{{ cucciol }}</p>
`

export default function(){
    return {
        template : template,
        scope : { 
            data : '=',
            aggiunte: '=',
            
            // name : '='
        }, 
        controller : function($scope){

            let test = [
                {id: 1, name: {  ciao: 'a' }},
                {id: 'flavia', name: {  ciao: 'a' }},
                {id: 'massimo', name: {  ciao: 'a' }},
                {id: 4, name: {  ciao: 'a' }},
                {id: 5, name: {  ciao: 'a' }},
            ]

            let asd = _.keyBy(test, 'id')
            console.log(asd)
            
            let names = _.map(test, 'name.ciao')


            $scope.cuccioli = ['cucciolo', 'cucciola']
            if($scope.data) {$scope.cuccioli = $scope.data}
            if($scope.aggiunte) { $scope.cuccioli = _.concat($scope.cuccioli, names) }

            // $scope.cambia = ()=>{ $scope.name = 'Massimo'  }


        }

    }



}