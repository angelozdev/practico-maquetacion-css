var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    /* const people = [
        {"id":1,"first_name":"Gary","last_name":"Ortiz","email":"gortiz0@mapy.cz","country":"Indonesia","modified":"2015-05-16","vip":false},
        {"id":2,"first_name":"Albert","last_name":"Williamson","email":"awilliamson1@narod.ru","country":"China","modified":"2015-03-11","vip":true},
        {"id":3,"first_name":"Mildred","last_name":"Fuller","email":"mfuller2@npr.org","country":"Peru","modified":"2015-02-15","vip":true},
        {"id":4,"first_name":"Russell","last_name":"Robinson","email":"rrobinson3@google.pl","country":"Belarus","modified":"2014-10-31","vip":false},
        {"id":5,"first_name":"Laura","last_name":"Harper","email":"lharper4@boston.com","country":"Philippines","modified":"2015-01-14","vip":false},
        {"id":6,"first_name":"Larry","last_name":"Sanders","email":"lsanders5@cornell.edu","country":"China","modified":"2015-01-11","vip":false},
        {"id":7,"first_name":"Michael","last_name":"Rice","email":"mrice6@geocities.jp","country":"Philippines","modified":"2014-12-06","vip":true},
        {"id":8,"first_name":"Sara","last_name":"Harris","email":"sharris7@deliciousdays.com","country":"Indonesia","modified":"2014-11-05","vip":true},
        {"id":9,"first_name":"Phyllis","last_name":"Webb","email":"pwebb8@reddit.com","country":"China","modified":"2015-04-02","vip":true},
        {"id":10,"first_name":"Roger","last_name":"Alvarez","email":"ralvarez9@nsw.gov.au","country":"Finland","modified":"2015-03-21","vip":true},
        {"id":11,"first_name":"Maria","last_name":"Carpenter","email":"mcarpentera@so-net.ne.jp","country":"Sweden","modified":"2015-08-18","vip":true}
    
    ];
    
class Persona{
    name: string;
    surname: string;
    height: number;
    
    constructor(name: string, surname: string, height: number){
        this.name = name;
        this.surname = surname;
        this.height = height;
    };
    
    saludar(res?){
        // console.log(`Hola! mi nombre es ${this.name} ${this.surname}`);
        if(res){
            res(this.name, this.surname, false)
        }
    };
    
    isTall(){
        console.log(this.height > 1.8 ? 'soy alto': 'no soy alto');
        return this.height > 1.8
    }
}

class Musican extends Persona{
    musican: boolean;
    constructor(name: string, surname: string, height: number, musican: boolean){
        super(name, surname, height)
        this.musican = musican;
    }

    saludar(res){
        // console.log(`Hola! mi nombre es ${this.name} ${this.surname}`);
        if(res){
            res(this.name, this.surname, true)
        }
    };
}

function response(nombre: string, apellido: string, isMusican: true){
    // console.log(`¿Cómo estás, ${nombre} ${apellido}?`);
    if(isMusican){
        // console.log('¡Eres músico!');
    }
}
const angelo = new Musican('Angelo', 'Zambrano', 1.68, true);
const lorena = new Persona('lorena', 'asdasda', 1.81);
angelo.saludar(response);
lorena.saludar(); */
    var API_URL = 'https://pokeapi.co/api/v2/';
    var POKEMON = 'pokemon/:id/';
    function obtenerPokemon(id) {
        var url = "" + API_URL + POKEMON.replace(':id', id.toString());
        var showPokemon = function (pokemon) {
            console.log("" + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1), pokemon.id, pokemon);
            return Promise.resolve(pokemon);
        };
        return fetch(url, { method: 'GET' })
            .then(function (data) {
            Promise.resolve(data);
            return data.json();
        })["catch"](function (error) { return Promise.reject(error); });
    }
    ;
    /* let accum = 0;
    const numberRandom = () => {
        accum++;
        return accum
    } */
    /* obtenerPokemon( numberRandom() )
    .then( () => obtenerPokemon( numberRandom() ) )
    .then( () => obtenerPokemon( numberRandom() ) )
    .then( () => obtenerPokemon( numberRandom() ) )
    .then( () => obtenerPokemon( numberRandom() ) )
    .then( () => obtenerPokemon( numberRandom() ) )
    .catch( onError ) ;
    */
    var onError = function (error) {
        console.error(error);
    };
    function obtenerPokemones() {
        return __awaiter(this, void 0, void 0, function () {
            var ids, i, promises, pokemones, id_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = [];
                        for (i = 1; i <= 200; i++) {
                            ids.push(i);
                        }
                        promises = ids.map(function (id) { return obtenerPokemon(id); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        pokemones = _a.sent();
                        console.log(pokemones);
                        return [3 /*break*/, 4];
                    case 3:
                        id_1 = _a.sent();
                        onError(id_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    obtenerPokemones();
}());
