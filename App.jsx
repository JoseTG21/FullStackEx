import { useEffect, useState } from "react";
import { getLinks, createLink, deleteLink } from "./api";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = async () => {
    setLinks(await getLinks());
  };

  const addLink = async (link) => {
    await createLink(link);
    loadLinks();
  };

  const removeLink = async (id) => {
    await deleteLink(id);
    loadLinks();
  };

  return (
    <div>
      <h1>Fave Links</h1>
      <Form onAdd={addLink} />
      <Table links={links} onDelete={removeLink} />
    </div>
  );
}

export default App;
