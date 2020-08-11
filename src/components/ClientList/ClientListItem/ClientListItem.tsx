import React, { useEffect } from "react";
import "./styles/ClientListItem.css";
import { Client } from "..";

/*ПРОПСЫ - интерфейс внешнего взаимодействия компонента
Интерфейс описывает тип параметра props, передаваемого в компонент-функцию*/
interface ClientListItemProps {
    client: Client;
    updateClientName: (id: string, name: string) => void; 
}

/*функциональный реакт-компонент, отображающий данные про одного клиента
Сам компонент - реализация метода render()
*/
 const ClientListItem: React.FC<ClientListItemProps> = (props: ClientListItemProps) => {
     /*деструкция (механизм джаваскрипта), 
     короткая запись для const client = props.client ...*/
    const {client, updateClientName} = props;    

    /*реактовый хук, заменяющий методы componentDidMount и componentDidUpdate классовых компонентов*/
    useEffect(() => {
        console.log(`ClientListItem ${client.id}: UPDATED`);
    });

    /*рендер, возвращаемый компонентом*/
     return (
         <div className="ClientListItem">
            <p>{client.name}</p>
            <p>{client.inn}</p>
            <button onClick={() => updateClientName(client.id || "", "New Client Name")}>UPDATE</button>
         </div>
     );
 }

 export default ClientListItem;
