import NavDropdown from 'react-bootstrap/NavDropdown';

interface DropdownProps{
    title: string;
    items: IDropdownItem[];
}

export interface IDropdownItem{
    id: string;
    name: string;
    url: string;
}

function Dropdown({ title, items }: DropdownProps) {
  return (

    <NavDropdown
        id="nav-dropdown-dark-example"
        title={title}
        menuVariant="dark"
        style={{ marginLeft: 15 }}
    >
        {
            items.map((item) => (
                <NavDropdown.Item key={item.id} href={item.url}>{ item.name }</NavDropdown.Item>
            ))
        }
    </NavDropdown>
  );
}

export default Dropdown;