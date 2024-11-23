import React from "react";

function EditTask({ tasks }) {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-lg gap-3">
      <h1 className="text-2xl text-slate-800 font-anton font-bold tracking-widest">
        EditTask
      </h1>
      <form
        action=""
        className="flex flex-col border-2 border-solid border-gray-600 p-4 rounded-lg text-slate-800 font-medium gap-2"
      >
        <label htmlFor="">Task name</label>
        <input
          type="text"
          className=" bg-gray-100 rounded-md h-9 border-solid border border-black cursor-pointer hover:bg-slate-500"
        />
        <label htmlFor="">Status</label>
        <select
          name=""
          id=""
          className="mb-4 bg-gray-100 rounded-md h-9 border-solid border border-black"
        >
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button
          type="submit"
          className="bg-slate-800 rounded-lg p-2 text-white cursor-pointer hover:bg-slate-500"
        >
          Save
        </button>
        <button className="border border-solid border-slate-800 rounded-lg p-2 cursor-pointer hover:bg-slate-200">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTask;
