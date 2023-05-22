import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({listadoTareas, borrarTarea}) => {
    return (
    <ListGroup>
        {
            listadoTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
        
    </ListGroup>
    );
};

export default ListaTarea;