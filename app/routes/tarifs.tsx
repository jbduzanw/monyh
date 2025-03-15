import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

const Tarifs = () => {
  return (
    <Table aria-label="Example static collection table" className="w-1/2">
      <TableHeader>
        <TableColumn className="font-bold text-xl">Cours</TableColumn>
        <TableColumn className="font-bold text-xl">Tarifs horaire</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="font-medium">Particulier 1h</TableCell>
          <TableCell>30€</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell className="font-medium">Duo 1h</TableCell>
          <TableCell>20€ / personne</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell className="font-medium">Préparation contrôle</TableCell>
          <TableCell>30€</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="font-medium">Aide aux devoirs</TableCell>
          <TableCell>30€</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Tarifs;
