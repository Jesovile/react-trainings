import React from "react";
import "./styles/ClientList.css";
import { Client } from ".";
import ClientListItem from "./ClientListItem/ClientListItem";

// описания типа объекта state
interface ClientListState {
    clients: Client[];
    name?: string;
    surname?: string;
}

/* Классовый компонент Реакта
Загружает из внешнего источника массив клиентов и рендерит их с список подкомпонентов
Имеет доступ к методам жизненного цикла и стейту, в который кладутся загруженный массив клиентов
*/
export default class ClientList extends React.Component<{}, ClientListState> {
    constructor(props) {
        super(props);
        // init state
        this.state = {clients: []};
    }

    /*LIFECYCLE*/
    componentDidMount() {
        console.log("ClientList MOUNT");
        // имитация асинхронного запроса к бэку
        setTimeout(() => this.setState({clients: clientList(5)}), 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ClientList UPDATE");
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return !(this.state.clients.length > 0);
    // }

    /*HANDLERS*/
    /* функция, которая находит в массиве клиентов итем с айдишником, равным itemId 
    потом обновляет ему имя,
    и массив с новым (обновленным) итемом записывает в стейт через стандартный метод реактовских компонентов setState()
    */
    private readonly updateClient = (itemId: string, newName: string) => {
        const newClients: Client[] = Object.assign([], this.state.clients); // глубокое копирование текущего стейта в новый массив (state должен быть иммутабельным)
        let client = newClients.find((item) => item.id === itemId); // поиск элемента по айдишнику (метод find типа Array из джаваскрипта)
        if (client) {
            client.name = newName;
            this.setState({clients: newClients}); // проставление нового стейта
        } else {
            console.error(`There are no client with id=${itemId} in client list`);
        }
    }

    /*RENDERS*/
    render(){
        console.log("ClientList RENDER");
        return(
            <div className="ClientList">
                {
                    // маппинг массива клиентов из стейта на список объектов подкомпонента ClientListItem (метод map типа Array из джаваскрипта)
                    this.state.clients.map((item) => {
                        return (
                            <ClientListItem
                                key={item.id}
                                client={item}
                                updateClientName={this.updateClient}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

// СТАБЫ
// стабовая функция, возвращающая сгенерированный массив клиентов в количестве, равном параметру count
const clientList = function(count: number) {
    let result: Client[] = [];
    for(let i=0; i<count; i++) {
        result.push({id: i.toString(), name: `Client ${i}`, inn: `${12340 + i}`});
    }
    return result;
}