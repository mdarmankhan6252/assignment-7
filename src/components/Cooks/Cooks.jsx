import Cook from "../Cook/Cook";

const Cooks = ({ addCook }) => {
    console.log(addCook)
    return (
        <div className="lg:w-1/3 bg-[#ffefff] rounded-xl border shadow">
            <h3 className="text-center font-semibold text-xl border-b-2 w-40 mx-auto border-green-500">Want to Cook: {addCook.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        addCook.map((cook, i) => <Cook key={i}
                        addCook={addCook}
                        cook={cook}></Cook>)
                    }
                </table>
            </div>


        </div>
    );
};

export default Cooks;