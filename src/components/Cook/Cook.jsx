const Cook = ({ cook, addCook }) => {
    const {recipe_name,recipe_id,preparing_time,calories} = cook;

    return (
        <tbody>
            <tr>
                <th>{addCook.length}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <button 
                className="bg-green-500 font-semibold py-1 px-3 text-white rounded-full">Preparing</button>
            </tr>
        </tbody >
    );
};

export default Cook;