import * as _ from 'lodash'

const template = /*html*/`
    <div class="row">
    <div ng-repeat="utente in utenti" class="col">
      {{ utente }}
    </div>  </div>
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
          // $scope.utenti = ['un cucciolo', 'una cucciola', 'tanti cuccioli']

          $scope.utenti = [
              {id: 1, name: 'Marco', cognome: 'Primo', sesso:'m'},
              {id: 2, name: {  ciao: 'a' }},
              {id: 3, name: {  ciao: 'a' }},
              {id: 4, name: {  ciao: 'a' }},
              {id: 5, name: {  ciao: 'a' }},
          ]

            // let test = [
            //     {id: 1, name: {  ciao: 'a' }},
            //     {id: 'flavia', name: {  ciao: 'a' }},
            //     {id: 'massimo', name: {  ciao: 'a' }},
            //     {id: 4, name: {  ciao: 'a' }},
            //     {id: 5, name: {  ciao: 'a' }},
            // ]
            //
            // let asd = _.keyBy(test, 'id')
            // console.log(asd)
            //
            // let names = _.map(test, 'name.ciao')
            //
            //
            // $scope.cuccioli = ['cucciolo', 'cucciola']
            // if($scope.data) {$scope.cuccioli = $scope.data}
            // // if($scope.aggiunte) { $scope.cuccioli = _.concat($scope.cuccioli, names) }
            // if($scope.aggiunte) { $scope.cuccioli = $scope.aggiunte}

            // $scope.cambia = ()=>{ $scope.name = 'Massimo'  }


        }

    }



}
