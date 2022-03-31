import {
  Button,
  Center,
  Group,
  Modal,
  Paper,
  Space,
  Text,
} from "@mantine/core";

type DeleteStudentModalProps = {
  studentFullName: string | undefined;
  opened: boolean;
  onSubmit: () => void;
  onClose: () => void;
};

export const DeleteStudentModal: React.FC<DeleteStudentModalProps> = ({
  studentFullName,
  opened,
  onSubmit,
  onClose,
}): JSX.Element => {
  return (
    <Modal size="sm" opened={opened} onClose={onClose} title={`Delete ${studentFullName}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Paper>
          <Text align="center">Are you sure?</Text>
          <Space h={20} />
          <Center>
            <Group>
              <Button color="red" size="md" type="submit">
                Yes
              </Button>
              <Button color="green" size="md" onClick={onClose}>
                No
              </Button>
            </Group>
          </Center>
        </Paper>
      </form>
    </Modal>
  );
};