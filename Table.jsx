function Table({ links, onDelete }) {
  return (
    <table>
      <tbody>
        {links.map(link => (
          <tr key={link.id}>
            <td>{link.name}</td>
            <td>
              <a href={link.url} target="_blank">{link.url}</a>
            </td>
            <td>
              <button onClick={() => onDelete(link.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
