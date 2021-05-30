import React from "react";
import "./list.css";
import { list } from "../../data";
import ItemModal from "./ItemModal/ItemModal";
export default function List() {
  return (
    <main className="list py-4">
      {list.map((item) => {
        return (
          <div>
            <ItemModal item={item} />
          </div>
        );
      })}
    </main>
  );
}
