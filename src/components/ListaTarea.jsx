import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({listadoTareas}) => {
    return (
    <ListGroup>
        {
            listadoTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea}></ItemTarea>)
        }
        
    </ListGroup>
    );
};

export default ListaTarea;